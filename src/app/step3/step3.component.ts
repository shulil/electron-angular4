import { Component} from '@angular/core';
import { AppService } from '../app.service';
import { IpcRendererService } from '../ipc-renderer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.less']
})
export class Step3Component {
  constructor(public appService: AppService,private router: Router,private ipcRendererService: IpcRendererService) {
  }
  
  setting = this.appService.getData();
  file = 'xxx';
  OnCancel() {

    //向主进程通信
    this.ipcRendererService.send("close");
  }
  next() {
    this.router.navigate(['/step4']);
  }
  onChange(file) {
    console.log(file);
    this.setting['firstStorageDes']['location'] =file['target']['files'][0]['path'];
    this.file = file['target']['files'][0]['path'];
  }
}