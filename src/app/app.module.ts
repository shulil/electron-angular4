import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';


import { AppComponent } from './app.component';

//设置
import { Step1Component }  from './step1/step1.component';
import { Step2Component }  from './step2/step2.component';
import { Step3Component }  from './step3/step3.component';
import { Step4Component }  from './step4/step4.component';
import { Step5Component }  from './step5/step5.component';

import { AppRoutingModule }     from './app-routing.module';


import { AppService } from './app.service';
import { IpcRendererService } from './ipc-renderer.service';




@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule
    
  ],
  providers: [AppService,IpcRendererService],
  bootstrap: [AppComponent]
})
export class AppModule { }
