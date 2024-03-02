import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotBaseComponent } from './chatbot-base/chatbot-base.component';
import {  RouterModule, Routes } from '@angular/router';
import { ChatbotContainerComponent } from './chatbot-container/chatbot-container.component';
import { ngMaterialModule } from '../ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

const router:Routes=[
  {
   path:'',
   component: ChatbotBaseComponent
  }
]


@NgModule({
  declarations: [
    ChatbotBaseComponent,
    ChatbotContainerComponent
  ],
  imports: [
    ngMaterialModule,
    CommonModule,
    RouterModule.forChild(router),
  ]
})
export class ChatModule { }
