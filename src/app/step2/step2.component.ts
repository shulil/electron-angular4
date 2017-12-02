import { Component} from '@angular/core';
import {Http,Headers} from '@angular/http';
import { AppService } from '../app.service';
import { IpcRendererService } from '../ipc-renderer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.less']
})
export class Step2Component {

  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(public appService: AppService,private router: Router, private ipcRendererService: IpcRendererService,private http: Http) {
  }

  setting = this.appService.getData();
  OnCancel() {

    //向主进程通信
    this.ipcRendererService.send("close");
  }
  next() {
    this.router.navigate(['/step3']);
  }
  OnTest() {
    return this.http
        .post(this.setting['firstHost']['hostName']+':'+this.setting['firstHost']['port'], JSON.stringify({userName: this.setting['firstHost']['userName'],password:this.setting['firstHost']['password']}))
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }
    private handleError(error: any): Promise<any>{
        console.log('An error occurred :', error);
        return Promise.reject(error.message);
    }
}