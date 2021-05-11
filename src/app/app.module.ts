import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component'; import { ProductDetailsComponent } from './product-details/product-details.component';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { GlassesComponent } from './glasses/glasses.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    FragranceComponent,
    GlassesComponent,
    JewelleryComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
