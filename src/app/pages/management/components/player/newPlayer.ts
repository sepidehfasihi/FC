import {AfterViewInit, Component, EventEmitter, OnInit, Output} from "@angular/core";
import {BaseComponent} from "../../../generic/components/baseComponent";

import {SportsCategoryDto} from "../../models/info/SportsCategoryDto";
import {SportCategoryService} from "../../services/sportCategory/sportCategoryService";
import {SelectItem} from "primeng/api";
import {PlayerDto} from "../../models/player/playerDto";
import {SicknessHistoryDto} from "../../models/player/sicknessHistoryDto";
import {PlayerContactInformtionDto} from "../../models/contact/playerContactInformtionDto";
import {PlayerPaymentDto} from "../../models/player/playerPaymentDto";
import {PlayerInformationDto} from "../../models/player/playerInformationDto";
import {PlayerService} from "../../services/player/playerService";
import {PlayerSportCategoryDto} from "../../models/player/playerSportCategoryDto";
import {PlayerPhoneDto} from "../../models/contact/playerPhoneDto";

@Component({
  selector: 'newPlayer',
  templateUrl: './newPlayer.html',
  providers: [SportCategoryService, PlayerService]

})

export class NewPlayerComponent extends BaseComponent implements OnInit {


//#region variables
  dateObject = '';
  sportCategories : SelectItem[];
  selectedCategories: SportsCategoryDto;
  currentEntryPlayer: PlayerDto;
  currentEntrySicknessHistory: SicknessHistoryDto;
  currentEntryPlayerContactInformation: PlayerContactInformtionDto;
  currentEntryPlayerPayment: PlayerPaymentDto;
  playerPhone: PlayerPhoneDto[];
  playerInformation: PlayerInformationDto;
  startDate: any;
  endDate: any;
  @Output() savedPlayer = new EventEmitter();
//#endregion

  constructor(private sportCategoryApi: SportCategoryService, private playerApi: PlayerService) {
    super();
    this.sportCategories = new Array<SelectItem>();
    this.playerPhone = new Array<PlayerPhoneDto>();
    // currentEntryPlayer: PlayerDto;
    // currentEntrySicknessHistory: SicknessHistoryDto;
    // currentEntryPlayerContactInformation: PlayerContactInformtionDto;

    this.currentEntryPlayer = new PlayerDto();
    this.currentEntrySicknessHistory = new SicknessHistoryDto();
    this.currentEntryPlayerContactInformation = new PlayerContactInformtionDto();
  }



  ngOnInit() {
    var phone = new PlayerPhoneDto();
    phone.Phone = null;
    this.playerPhone = [...this.playerPhone, phone];
    this.sportCategoryApi.Get(null).subscribe(res =>{
      res.SportCategorys.forEach(element => {
        this.sportCategories = [...this.sportCategories , { label: element.Name , value: element }]
      });

      this.selectedCategories = res.SportCategorys[0];
    });
    this.playerApi.SuggestionCode(null).subscribe(res => {
      this.currentEntryPlayer.CodeStr = res;
    });
  }
  emptyDto() {
  }

  addNewPhone(i , operator){

    if(operator == '+'){

      var len = this.playerPhone.length;
      console.log(this.playerPhone[len-1])
      if( this.playerPhone[len-1].Phone !== null || this.playerPhone[len -  1].Phone !==  null){
      var player = new PlayerPhoneDto();
      player.Phone = null;
      this.playerPhone = [...this.playerPhone, player];
      }

    }else  if(operator == '-'){

      if (i > -1) {
        this.playerPhone.splice(i, 1);
      }



    }

  }
  savePlayer(){

    this.currentEntryPlayer.StartingDateOfCredit = this.convertToDate(this.startDate);
    this.currentEntryPlayer.EndDateOfCredit = this.convertToDate(this.endDate);

    this.currentEntryPlayer.Code = +this.currentEntryPlayer.CodeStr;
    this.currentEntryPlayer.SportCategoryId = this.selectedCategories.Id;

    this.playerInformation = new PlayerInformationDto();
    this.playerInformation.PlayerInfo = this.currentEntryPlayer;
    this.playerInformation.PlayerContactInformation = this.currentEntryPlayerContactInformation;
    this.playerInformation.SicknessHistory = this.currentEntrySicknessHistory;

    this.playerInformation.PlayerPhone = this.playerPhone;

    var playerCategory = new PlayerSportCategoryDto();
    playerCategory.SportsCategoryId = this.selectedCategories.Id;

    this.playerInformation.PlayerSportCategory = playerCategory;

    this.playerApi.Create(this.playerInformation).subscribe(res =>{
      this.savedPlayer.emit(res);
    });
  }



}
