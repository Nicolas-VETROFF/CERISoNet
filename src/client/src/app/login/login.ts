import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-login",
  templateUrl: "./login.html",
})
export class LoginComponent {
  async onSubmit(username: string, password: string) {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      if (!res.ok) throw new Error(await res.json())
    } catch (error: any) {
      console.error('Login failed:', error.message)
    }
  }
}
