import {PlayerDto} from "./playerDto";
import {RelationDto} from "../info/RelationDto";

export class RegistrationInfoDto{
  public  Id  : number;
public  Name  :string;
public  Family  :string;
public  Phone  :string;
public  Address  :string;
public  Description  :string;
public  RegistrationType  :string;
public  Player  :PlayerDto;
public  PlayerId  : number;
public  Relation :RelationDto;
public  RelationId  : number;
}
