import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//设置
import { Step1Component }  from './step1/step1.component';
import { Step2Component }  from './step2/step2.component';
import { Step3Component }  from './step3/step3.component';
import { Step4Component }  from './step4/step4.component';
import { Step5Component }  from './step5/step5.component';


const routes: Routes = [
  { path: '', redirectTo: '/step1', pathMatch: 'full' },
  { path: 'step1',  component: Step1Component},
  { path: 'step2',  component: Step2Component},
  { path: 'step3',  component: Step3Component},
  { path: 'step4',  component: Step4Component},
  { path: 'step5',  component: Step5Component}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
