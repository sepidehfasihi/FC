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
import {AgesService} from "../../services/base/agesService";
import {GroupService} from "../../services/group/groupService";
import {TeamDto} from "../../models/group/TeamDto";
import {AgesDto} from "../../models/base/agesDto";
import {TeamService} from "../../services/group/teamService";

@Component({
  selector: 'newTeam',
  templateUrl: './newTeam.html',
  providers: [TeamService]

})

export class NewTeam extends BaseComponent implements OnInit {


//#region variables

  currentEntryTeam: TeamDto;
  @Output() savedTeam = new EventEmitter();
  @Input() editObj: any;
  @Output() goBack = new EventEmitter();
  @Input() idOfGroup: number;
//#endregion

  constructor(private teamApi: TeamService) {
    super();
    this.currentEntryTeam = new TeamDto();
    // currentEntryPlayer: PlayerDto;
  }



  ngOnInit() {

    if(this.editObj){
      this.currentEntryTeam = this.editObj;
    }
  }
  emptyDto() {
  }

  savedTeamp(){

    this.currentEntryTeam.GroupId = this.idOfGroup;

    this.teamApi.Create(this.currentEntryTeam).subscribe(res =>{
      this.savedTeam.emit(res);
    });

  }

  Back(){
    this.goBack.emit();
  }





}
