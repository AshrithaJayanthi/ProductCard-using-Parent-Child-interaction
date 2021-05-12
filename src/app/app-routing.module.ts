import { FunctionCall } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { GlassesComponent } from './glasses/glasses.component';
import { HomeComponent } from './home/home.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductsComponent,children:
[{path:"fragrance",component:FragranceComponent},
{path:"glasses",component:GlassesComponent},
{path:"jewellery",component:JewelleryComponent},
// {path:'',redirectTo:'/products/fragrance',pathMatch:"full"}


]},
  {path:'contactus',component:ContactusComponent},
  {path:'**',component:PagenotfoundComponent},
  //setting default page as HOME PAGE
  { path:'', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
