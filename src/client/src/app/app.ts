import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
})
export class App {
  toastr = inject(ToastrService);
  router = inject(Router);
  auth = inject(AuthService);

  get isConnected() { return this.auth.isConnected; }
  get username() { return this.auth.username; }
  get avatar() { return this.auth.avatar; }

  logout() {
    this.auth.logout();
    this.toastr.success("Déconnexion réussie!");
    this.router.navigate(['/']);
  }
}
