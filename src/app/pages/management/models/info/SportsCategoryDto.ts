import {List} from "lodash";

export class SportsCategoryDto {
  public  Id  :number;
public  Name  :string;
public  Description:string;
public Parent: SportsCategoryDto;
public  ParentId  :number;
public Childrens  : List<SportsCategoryDto>;
}
