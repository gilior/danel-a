

import { DialogModule } from '@progress/kendo-angular-dialog';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TreeModule } from 'angular-tree-component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyDirective } from './copy.directive';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { LockedMdlsComponent } from './locked-mdls/locked-mdls.component';
import { LastUpdateComponent } from './last-update/last-update.component';
import { UploadModule } from '@progress/kendo-angular-upload';
import {NgReduxModule} from "@angular-redux/store";




@NgModule({
  imports: [

    CommonModule,
    TreeModule,
    HttpModule,
    HttpClientModule,
    GridModule,
    ComboBoxModule,
    PDFModule,
    InputsModule,
    ButtonsModule,
    UploadModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    DialogModule,
    ReCaptchaModule,
NgReduxModule

  ],
  exports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    GridModule,
    ComboBoxModule,
    PDFModule,
    InputsModule,
    ButtonsModule,
    UploadModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    DialogModule,
    TreeModule,
    ReCaptchaModule,
    CopyDirective,
    LockedMdlsComponent,
    LastUpdateComponent],
  declarations: [CopyDirective, LockedMdlsComponent, LastUpdateComponent]

})
export class SharedModule { }
