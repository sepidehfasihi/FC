import {PlayerDto} from "./playerDto";

export class PlayerPaymentDto{
  public  Id  : number;
public  Date  :any;
public  PaymentType  :string;
public  Amount  : number;
public  IsPayed  : boolean;
public  Player  : PlayerDto;
public  PlayerId  :number;
}
