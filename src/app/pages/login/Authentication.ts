
export class Authentication {
  constructor(){
    this.roles = [];
    this.acl = [];
  }
  public id: number;
  public userId: number;
  public access_token: string;
  public acl: string[];
  public roles: string[];


}
