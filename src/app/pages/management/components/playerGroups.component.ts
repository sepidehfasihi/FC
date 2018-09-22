import {AfterViewInit, Component, OnInit} from "@angular/core";
import {ConfirmationService} from "primeng/api";
import {BaseComponent} from "../../generic/components/baseComponent";
import {GroupDto} from "../models/group/groupDto";
import {GroupService} from "../services/group/groupService";

@Component({
  selector: 'PlayGroups',
  templateUrl: '../templates/playerGroups.html',
  providers: [ConfirmationService, GroupService],

})

export class PlayerGroupsComponent extends BaseComponent implements OnInit {


//#region variables
  newGroup;
  originalPlayerGroupPage;
  groupList: GroupDto[];
  selectedGroups: GroupDto;
  edit;
  editGroupss: GroupDto;
  currentGroupId: number;
  newTeamm;
//#endregion

  constructor( private ConfirmationService: ConfirmationService,
               private GroupServiceApi: GroupService) {
    super();
    this.originalPlayerGroupPage = true;
    this.groupList = new Array<GroupDto>();
  }


  ngOnInit() {

    this.GroupServiceApi.Get(null).subscribe(res => {
      this.groupList = res.Groups as GroupDto[];
    });
  }

  showNewGroup(e){

    this.edit = false;
    this.originalPlayerGroupPage = false;
    this.newGroup = true;

  }

  showTeamssPage(){
    this.currentGroupId = this.selectedGroups.Id;

    this.originalPlayerGroupPage = false;
    this.newTeamm = true;

  }

  editGroups(row, i){

    const groupObj = new GroupDto();
    groupObj.Id = row.Id;
    groupObj.Name = row.Name;
    groupObj.Description = row.Description;
    groupObj.Ages = row.Ages;
    groupObj.AgesId = row.AgesId;
    this.editGroupss = groupObj;
    this.edit = true;
    this.originalPlayerGroupPage = false;
    this.newGroup = true;
  }

  saveGroups(e){

    if(!this.edit){
      this.groupList.push(e);
      this.groupList = this.groupList.splice(0, this.groupList.length);
    }else{
      const editedObject = this.groupList.find(x => x.Id === e.Id );
      editedObject.Id = e.Id;
      editedObject.Name = e.Name;
      editedObject.Description = e.Description;
      editedObject.Ages = e.Ages;
      editedObject.AgesId = e.AgesId;
    }

    this.newGroup = false;
    this.originalPlayerGroupPage = true;
    this.showSuccess();
  }

  backToOrg(){
    this.newGroup = false;
    this.newTeamm = false;
    this.originalPlayerGroupPage = true;
  }

}
