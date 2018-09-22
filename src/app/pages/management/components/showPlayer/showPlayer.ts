import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
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
  selector: 'showPlayer',
  templateUrl: './showPlayer.html',
  providers: []

})

export class ShowPlayer extends BaseComponent implements OnInit {


//#region variables
  currentEntryPlayer: PlayerDto;
  currentEntrySicknessHistory: SicknessHistoryDto;
  currentEntryPlayerContactInformation: PlayerContactInformtionDto;
  currentEntryPlayerPayment: PlayerPaymentDto;
  @Input() showObj: any;
  startDate: any;
//#endregion

  constructor() {
    super();
 }

  ngOnInit() {


    this.currentEntryPlayer = this.showObj;
    // this.startDate = moment('1989/01/24', 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');


  }

}
