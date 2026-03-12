import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: "app-login",
  templateUrl: "./login.html",
})
export class LoginComponent {
  toastr = inject(ToastrService);
  router = inject(Router);
  auth = inject(AuthService);

  async onSubmit(username: string, password: string) {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      // If the response is not ok, show an error message with the reason from the server
      if (!res.ok) this.toastr.error("Erreur lors de la connexion: " + (await res.json()).message)
      // else show a success message with the last login date and save the session in localStorage
      else {
        const response = await res.json();
        localStorage.setItem("isConnected", response.success);
        localStorage.setItem("username", response.session.username);
        localStorage.setItem("lastLogin", response.session.lastLogin);
        localStorage.setItem("email", response.session.email);
        localStorage.setItem("avatar", response.session.avatar || 'default.jpg');

        this.auth.login({ username: response.session.username, avatar: response.session.avatar });

        this.toastr.success("Connexion réussie! Dernière connexion: " + localStorage.getItem("lastLogin"));
        this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.toastr.error("La connexion a échoué. Veuillez réessayer plus tard.");
    }
  }
}
