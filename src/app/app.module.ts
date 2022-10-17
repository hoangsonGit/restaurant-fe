import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ShareModule } from './share/share-module/share-module.module';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location/location.component';
import { MapViewComponent } from './location/map-view/map-view.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './share/component/modal/modal.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';

@NgModule({
  declarations: [	
    AppComponent,
    ContainerComponent,
    MenuComponent,
    LocationComponent,
    MapViewComponent,
    ModalComponent,
    MenuListComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ShareModule.forRoot(),
    FlexLayoutModule,
    NgbModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
