import {SportGroupDto} from "../sportGroup/sportGroupDto";
import {CoachDto} from "./coachDto";

export class CoachSportGroupDto {
  public  Id  : number;
public SportGroup  : SportGroupDto;
public  SportGroupId  : number;
public  Coach  :CoachDto;
public CoachId  :number;
}
