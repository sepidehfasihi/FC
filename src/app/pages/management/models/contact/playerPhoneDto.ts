import {RelationDto} from "../info/RelationDto";
import {PlayerContactInformtionDto} from "./playerContactInformtionDto";

export class PlayerPhoneDto{
  public  Id  :number;
public  Phone  :string;
public Relation  : RelationDto;
public  RelationId  : number;
public PlayerContactInformation  : PlayerContactInformtionDto;
public PlayerContactInformationId  : number;
}
