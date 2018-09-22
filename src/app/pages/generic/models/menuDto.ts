export class MenuDto {
  public acl:string[];
  public token: string;
  public displayName: string;
  constructor(){
    this.acl = [];
  }
}
