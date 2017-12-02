
import { Component } from '@angular/core';
import {IpcRendererService} from './shared/service/ipcRenderer'

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.less'],
 providers: [IpcRendererService]
})
export class AppComponent {
   
}