import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ConfirmationService} from "primeng/api";
import {BaseComponent} from "../../generic/components/baseComponent";
import {TeamDto} from "../models/group/TeamDto";
import {GroupService} from "../services/group/groupService";
import {TeamService} from "../services/group/teamService";
import {EventHandlerVars} from "../../../../../node_modules/@angular/compiler/src/compiler_util/expression_converter";
import {ResultDto} from "../models/group/resultDto";

@Component({
  selector: 'PlayTeam',
  templateUrl: '../templates/playerTeam.html',
  providers: [ConfirmationService, TeamService],

})

export class PlayerTeamComponent extends BaseComponent implements OnInit {


//#region variables
  newTeam;
  originalPlayerTeamPage;
  teamList: TeamDto[];
  selectedTeam: TeamDto;
  edit;
  editTeamss: TeamDto;
  @Input() GroupId: number;
  @Output() goBack = new EventEmitter();
  newResult;
  teamPlayList: ResultDto[];
  showTeamPlayList;
//#endregion

  constructor( private ConfirmationService: ConfirmationService,
               private teamServiceApi: TeamService) {
    super();
    this.originalPlayerTeamPage = true;
    this.teamList = new Array<TeamDto>();
    this.teamPlayList = new Array<ResultDto>()
  }


  ngOnInit() {

    this.teamServiceApi.FindByGroupId(this.GroupId).subscribe(res => {
      this.teamList = res.Teams as TeamDto[];
    });
  }

  showNewTeam(e){

    this.editTeamss = null;
    this.edit = false;
    this.originalPlayerTeamPage = false;
    this.newTeam = true;

  }

  showTeamss(){

  }

  editGroups(row, i){

    const groupObj = new TeamDto();
    groupObj.Id = row.Id;
    groupObj.Name = row.Name;
    groupObj.Description = row.Description;
    groupObj.difference = row.difference;
    groupObj.Equal = row.Equal;
    groupObj.Khorde = row.Khorde;
    groupObj.Group = row.Group;
    groupObj.GroupId = row.GroupId;
    groupObj.Lost = row.Lost;
    groupObj.PlayNo = row.PlayNo;
    groupObj.Score = row.Score;
    groupObj.Win = row.Win;
    groupObj.Zade = row.Zade;
    this.editTeamss = groupObj;
    this.edit = true;
    this.originalPlayerTeamPage = false;
    this.newTeam = true;
  }

  saveTeams(e){

    if(!this.edit){
      this.teamList.push(e);
      this.teamList = this.teamList.splice(0, this.teamList.length);
    }else{
      const editedObject = this.teamList.find(x => x.Id === e.Id );
      editedObject.Id = e.Id;
      editedObject.Name = e.Name;
      editedObject.Description = e.Description;
      editedObject.difference = e.difference;
      editedObject.Equal = e.Equal;
      editedObject.Khorde = e.Khorde;
      editedObject.Group = e.Group;
      editedObject.GroupId = e.GroupId;
      editedObject.Lost = e.Lost;
      editedObject.PlayNo = e.PlayNo;
      editedObject.Score = e.Score;
      editedObject.Win = e.Win;
      editedObject.Zade = e.Zade;
    }

    this.newTeam = false;
    this.originalPlayerTeamPage = true;
    this.showSuccess();
  }

  Backk(){
  this.goBack.emit();
  }

  showNewResults(){
    this.originalPlayerTeamPage = false;
    this.newResult = true;
  }

  backToOrgg(){
    this.newTeam = false;
    this.originalPlayerTeamPage = true;
    this.newResult = false;

  }

  saveResults(e){
this.teamList = [];
this.teamList = e.Teams as TeamDto[];
    this.originalPlayerTeamPage = true;
    this.newResult = false;
    this.showSuccess();
  }

  showTeamsResultPage(){
    console.log(this.selectedTeam.Id)

    this.teamServiceApi.FindByTeamId(this.selectedTeam.Id).subscribe(res =>{
      console.log(res)
      this.teamPlayList = res.Results as ResultDto[];
    });
    this.showTeamPlayList = true;

  }
}
