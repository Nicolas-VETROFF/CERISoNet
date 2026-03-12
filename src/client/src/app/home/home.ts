import { Component } from "@angular/core";


@Component({
  standalone: true,
  selector: "app-home",
  templateUrl: "./home.html",
})
export class HomeComponent {
  username: string = localStorage.getItem("username") || '';
}
