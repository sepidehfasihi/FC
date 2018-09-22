import {GroupDto} from "./groupDto";

export class TeamDto{
  public Id: number;
  public Name: string;
  public Description: string;
  public Group: GroupDto;
  public GroupId: number;
  public PlayNo: number;
  public Win: number;
  public Lost: number;
  public Equal: number;
  public Khorde: number;
  public Zade: number;
  public difference: number;
  public Score: number;
}
