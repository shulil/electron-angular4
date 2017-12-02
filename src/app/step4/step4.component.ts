import { Component} from '@angular/core';
import { AppService } from '../app.service';
import { IpcRendererService } from '../ipc-renderer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.less']
})
export class Step4Component {
  constructor(public appService: AppService,private router: Router, private ipcRendererService: IpcRendererService) {
  }
  
  setting = this.appService.getData();
  OnCancel() {

    //向主进程通信
    this.ipcRendererService.send("close");
  }
  next() {
    this.router.navigate(['/step5']);
  }
}