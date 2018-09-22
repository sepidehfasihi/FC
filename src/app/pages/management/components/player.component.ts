import {AfterViewInit, Component, OnInit} from "@angular/core";
import {BaseComponent} from "../../generic/components/baseComponent";
import {PlayerDto} from "../models/player/playerDto";
import {PlayerService} from "../services/player/playerService";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'player',
  templateUrl: '../templates/player.html',
  providers: [PlayerService, ConfirmationService],

})

export class PlayerComponent extends BaseComponent implements OnInit {


//#region variables
  players: PlayerDto[];
  originalPage: boolean = true;
  newPlayer: boolean = false;
  selectedPlayer: PlayerDto;
  showPlayerDetail;
  currentObj: PlayerDto;
//#endregion

  constructor(private playerApi: PlayerService,
              private ConfirmationService: ConfirmationService) {
    super();
    this.players = new Array<PlayerDto>();
  }


  ngOnInit() {

    this.playerApi.Get(null).subscribe(res => {
      this.players = res.Player as PlayerDto[];
      console.log(res)
    });
  }

  showNewPlayer() {
    this.originalPage = false;
    this.newPlayer = true;
  }
  saveNewPlayer(e){

    this.originalPage = true;
    this.newPlayer = false;

      // this.teamsList.push(projectObject);
      // this.teamsList = this.teamsList.splice(0, this.teamsList.length);
      this.players = [...this.players, e];

    this.showSuccess();
  }
  showDescription(e){
this.showPlayerDetail = true;
this.currentObj = this.selectedPlayer;
  }

}
