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
import {ResultDto} from "../../models/group/resultDto";

@Component({
  selector: 'newResult',
  templateUrl: './newResult.html',
  providers: [TeamService]

})

export class NewResultComponent extends BaseComponent implements OnInit {


//#region variables

  results: ResultDto[];
  @Input() editObj: any;
  @Output() goBack = new EventEmitter();
  @Input() idOfGroup: number;
  @Output() savedEvent = new EventEmitter();
  showNewResult;
  cars: SelectItem[];
  teamsList: SelectItem[];

  selectedCar1: string;

  selectedCar2: string = 'BMW';


  @Input() teams: TeamDto[];
  teamList: SelectItem[];
  selectedTeam1: TeamDto;
  selectedTeam2: TeamDto;
  currentResultEntry: ResultDto;
  isResult: boolean = false;
//#endregion

  constructor(private teamApi: TeamService) {
    super();
    this.currentResultEntry = new ResultDto();
    this.results = new Array<ResultDto>();
    this.teamList = new Array<SelectItem>();
    this.teamsList = [];
    this.cars = [ ];
  }



  ngOnInit() {


  }
  emptyDto() {
  }

  savedResults(){

    this.teamApi.CreateResults(this.results).subscribe(res =>{
      this.savedEvent.emit(res);
    });

  }

  openResult(){
    this.teams.forEach(element =>{
      this.cars.push({ label: element.Name , value: element });
      this.teamList.push({ label: element.Name , value: element });

    });
    this.showNewResult = true;
  }

  saveResult(){

    if(this.selectedTeam1.Id == this.selectedTeam2.Id){
      this.showExceptionTekrari();
    }else{
      var result = new ResultDto();
      

      if(this.selectedTeam1 && this.selectedTeam2){
        result.Team1 = this.selectedTeam1;
        result.Team1Id = this.selectedTeam1.Id;
        result.Team2Id = this.selectedTeam2.Id;
        result.Team2 = this.selectedTeam2;
        result.Team1Result = this.currentResultEntry.Team1Result;
        result.Team2Result = this.currentResultEntry.Team2Result;

        this.results = [...this.results , result];


        if( this.results != []){
          this.isResult = true;
        }

      }

      this.showNewResult = false;
    }


  }

  Back(){
    this.goBack.emit();
  }


  removeResult(i){
      if (i > -1 ) {
        this.results = [ ...this.results.slice(0, i), ...this.results.slice(i + 1, this.results.length ) ];
      }


  }

}
