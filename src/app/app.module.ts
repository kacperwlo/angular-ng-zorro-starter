// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StoreModule } from '@ngrx/store';
import { sidebarReducer } from './store/sidebar.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// components
import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { AreaComponent } from './components/wrapper/area/area.component';
import { FooterComponent } from './components/wrapper/footer/footer.component';
import { SidebarComponent } from './components/wrapper/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    AreaComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule,
    StoreModule.forRoot({collapse: sidebarReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
