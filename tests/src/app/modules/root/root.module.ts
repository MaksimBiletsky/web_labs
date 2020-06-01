import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {FormsModule} from '@angular/forms';
import {CartComponent} from './components/cart/cart.component';
import {FavoriteComponent} from './components/favorite/favorite.component';

@NgModule({
  declarations: [
    RootComponent,
    FooterComponent,
    HeaderComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    CartComponent,
    FavoriteComponent,
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    FormsModule,

  ]
})
export class RootModule { }
