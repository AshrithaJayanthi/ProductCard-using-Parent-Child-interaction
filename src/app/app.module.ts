import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component'; import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { GlassesComponent } from './glasses/glasses.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { TestusersComponent } from './testusers/testusers.component';
import { TestuserstwoComponent } from './testuserstwo/testuserstwo.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserprofiledetailsComponent } from './userprofiledetails/userprofiledetails.component';
import { ViewfragranceComponent } from './viewfragrance/viewfragrance.component';
import { AddnewfragranceComponent } from './addnewfragrance/addnewfragrance.component';

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
    PagenotfoundComponent,
    TestComponent,
    TestusersComponent,
    TestuserstwoComponent,
    UserdetailsComponent,
    UserprofileComponent,
    UserprofiledetailsComponent,
    ViewfragranceComponent,
    AddnewfragranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
