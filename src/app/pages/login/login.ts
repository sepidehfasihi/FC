export class LoginEntity {
  username : string;
  password : string;
  grand_type:string;
  constructor(UserName : string , Password : string) {
    this.username = UserName;
    this.password =Password;
    this.grand_type="password";
  }
}
