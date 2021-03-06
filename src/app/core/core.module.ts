import './../rxjs-extensions';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from '../shared/shared.module';

import { GlobalLinkService } from './database/global-link.service';
import { ContactInfoService } from './database/contact-info.service';
import { BlogService } from './database/blog.service';
import { BlogCategoryService } from './database/blog-category.service';
import { ConstService } from './utility/const.service';

import { RandomService } from './utility/random.service';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  declarations: [

  ],
  exports:  [
  ],
  imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      SharedModule
  ],
  providers: [
      GlobalLinkService,
      ContactInfoService,
      BlogService,
      BlogCategoryService,
      RandomService,
      ConstService,
      AuthGuardService,
      AuthService
  ]
})
export class CoreModule { }
