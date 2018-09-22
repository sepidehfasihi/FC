import {PlayerDto} from "./playerDto";
import {PlayerSportCategoryDto} from "./playerSportCategoryDto";
import {SicknessHistoryDto} from "./sicknessHistoryDto";
import {PlayerContactInformtionDto} from "../contact/playerContactInformtionDto";
import {PlayerPhoneDto} from "../contact/playerPhoneDto";

export class PlayerInformationDto {

  PlayerInfo: PlayerDto;
  PlayerSportCategory: PlayerSportCategoryDto;
  SicknessHistory: SicknessHistoryDto;
  PlayerContactInformation: PlayerContactInformtionDto;
  PlayerPhone: PlayerPhoneDto[];

}
