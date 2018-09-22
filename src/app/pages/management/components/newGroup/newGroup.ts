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
import {GroupDto} from "../../models/group/groupDto";
import {AgesDto} from "../../models/base/agesDto";

@Component({
  selector: 'newGroup',
  templateUrl: './newGroup.html',
  providers: [AgesService, GroupService]

})

export class NewGroup extends BaseComponent implements OnInit {


//#region variables

  currentEntryGroup: GroupDto;
  agesList: SelectItem[];
  selectedAge: AgesDto;
  @Output() savedGroup = new EventEmitter();
  @Input() editObj: any;
  @Output() goBack = new EventEmitter();
//#endregion

  constructor(private groupApi: GroupService, private agesApi: AgesService) {
    super();
    this.currentEntryGroup = new GroupDto();
     this.agesList = new Array<SelectItem>();
    // currentEntryPlayer: PlayerDto;
  }



  ngOnInit() {
    this.agesApi.Get(null).subscribe(res => {
      res.Ages.forEach(element => { this.agesList.push({ label: element.Name , value: element }); })
      if(this.editObj){
        this.selectedAge = this.currentEntryGroup.Ages;
      }

    });
    if(this.editObj){
      this.currentEntryGroup = this.editObj;
    }
  }
  emptyDto() {
  }

  savedGroupp(){
    if(this.selectedAge){
      this.currentEntryGroup.AgesId = this.selectedAge.Id;
    }
    this.currentEntryGroup.Ages = null;
    this.groupApi.Create(this.currentEntryGroup).subscribe(res =>{
      this.savedGroup.emit(res);
    });

  }

  Back(){
    this.goBack.emit();
  }



}
