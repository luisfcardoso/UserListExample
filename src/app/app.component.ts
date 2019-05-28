import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "User's List Example";
  users = ["Luis", "Carlos"];

  getUsers() {
    return this.users.sort();
  }

  addUser(user, inputField) {
    this.users.push(user);
    inputField.value = "";
    inputField.focus();
  }
}
