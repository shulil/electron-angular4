import { Component} from '@angular/core';
import { AppService } from '../app.service';
import { IpcRendererService } from '../ipc-renderer.service';

@Component({
  selector: 'step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.less']
})
export class Step5Component {
  constructor(public appService: AppService,private ipcRendererService: IpcRendererService) {
  }
  
  setting = this.appService.getData();
  Ondone() {
    console.log(this.setting);
    this.ipcRendererService.send("done",JSON.stringify(this.setting));
  }
  OnCancel() {

    //向主进程通信
    this.ipcRendererService.send("close");
  }
}