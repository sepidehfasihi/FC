import { MenuItem, Message , TreeNode } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../services/permissionService';

//import {TreeNode} from 'primeng/api';

@Component({
  selector: 'permission' ,
  templateUrl: '../templates/permission.component.html',
  providers: [PermissionService],
})


export class PermissionComponent implements OnInit {
  files: TreeNode[];
  selectedFiles: TreeNode[];
  constructor(private nodeService: PermissionService) {}
  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);
  }
}
