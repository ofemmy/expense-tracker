export default class AppUser {
  name: string;
  email: string;
  password?: string;
  _id?: string;
  constructor(name, email, password) {
    this.email = email;
    this.name = name;
    this.password = password;
  }
}
