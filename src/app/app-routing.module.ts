import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductGroupComponent } from './products/product-group/product-group.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddUserRoleComponent } from './users/add-user-role/add-user-role.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"products",children:[
    {path:"add-product",component:AddProductComponent},
    {path:"product-group",component:ProductGroupComponent}
  ]},
  {path:"users",children:[
    {path:"add-user",component:AddUserComponent},
    {path:"add-user-role",component:AddUserRoleComponent}
  ]},
  {path:"settings",component:SettingsComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
