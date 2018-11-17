import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { HeaderComponent } from './header/header.component';
import { Bottom_navComponent } from './bottom_nav/bottom_nav.component';
import { BodyComponent } from './body/body.component';
import { FdivComponent } from './fdiv/fdiv.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      Bottom_navComponent,
      BodyComponent,
      FdivComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
