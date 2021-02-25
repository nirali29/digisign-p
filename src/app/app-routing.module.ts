import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import { Test2Component } from './test2/test2.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'speech-to-text', component: SpeechToTextComponent },
  { path: 'test', component: Test2Component },
  { path: 'new-user', component: NewUserComponent },
  { path: 'first-page', component: FirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
