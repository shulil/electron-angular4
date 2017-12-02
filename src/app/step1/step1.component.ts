import { Component, OnInit} from '@angular/core';
import { AppService } from '../app.service';
import { IpcRendererService } from '../ipc-renderer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.less']
})
export class Step1Component {
  constructor(public appService: AppService,private router: Router,private ipcRendererService: IpcRendererService) {
  }
  setting = this.appService.getData();
  waring:string;
  showwaring:boolean = false;
  ngOnInit(): void {
    
    
  }
  next() {
    this.router.navigate(['/step2']);
  }
  OnCancel() {

    //向主进程通信
    this.ipcRendererService.send("close");
  }
}