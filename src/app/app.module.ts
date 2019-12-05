import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddUserRoleComponent } from './users/add-user-role/add-user-role.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductGroupComponent } from './products/product-group/product-group.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MphasisPipe } from './mphasis.pipe';
import { UserComponent } from './user/user.component';
import { UserserviceService } from './userservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    UsersComponent,
    AddUserComponent,
    AddUserRoleComponent,
    ProductsComponent,
    AddProductComponent,
    ProductGroupComponent,
    PageNotFoundComponent,
    MphasisPipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
