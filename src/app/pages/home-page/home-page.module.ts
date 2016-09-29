import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';


import { HomePageComponent }  from './home-page.component';

import { homePageRouting as HomePageRouting }  from './home-page.routing';



@NgModule({
  imports: [
            CommonModule,
            SharedModule,
            HomePageRouting,
            TranslateModule
  ],
  declarations: [
                  HomePageComponent
  ],
  exports: [
            HomePageComponent,
            CommonModule,
            FormsModule
  ]
})
export class HomePageModule { }
