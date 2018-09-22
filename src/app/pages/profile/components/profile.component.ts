import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'profile',
  templateUrl: '../templates/profile.html',

})
  export class ProfileComponent{
    save()
    {
    }
    clear()
    {

    }
  }
