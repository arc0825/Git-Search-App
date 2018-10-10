import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GitService } from './service/gitservice.service';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from './global-error-handler-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [GitService,{provide:ErrorHandler, useClass:GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
