import {SportGroupDto} from "../sportGroup/sportGroupDto";
import {PlayerContactInformtionDto} from "../contact/playerContactInformtionDto";
import {SportsCategoryDto} from "../info/SportsCategoryDto";
import {PlayerPhoneDto} from "../contact/playerPhoneDto";
import {SicknessHistoryDto} from "./sicknessHistoryDto";

export class PlayerDto {
  public  Id  : number;
public  Name  :string;
public  Family  :string;
public  FatherName  :string;
public  Age  : number;
public   Code  : number;
public   CodeStr  : string;
public  StartingDateOfCredit  : Date;
public   EndDateOfCredit  : Date;
public  Description  :string;
public   TuitionFee  : number;
public  SportGroup  :SportGroupDto;
public SportGroupId  :number;
  public  SportCategory  :SportsCategoryDto;
  public SportCategoryId  :number;
public PlayerContactInformation: PlayerContactInformtionDto;
public PlayerPhone: PlayerPhoneDto[];
public SicknessHistory: SicknessHistoryDto;
}
