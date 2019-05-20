import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ListcategoryComponent } from './listcategory/listcategory.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CategoryService } from '../../category.service';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AddcategoryComponent,
    DeletecategoryComponent,
    EditcategoryComponent,
    ListcategoryComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'add-category', component: AddcategoryComponent },
      { path: 'delete-category', component: DeletecategoryComponent },
      { path: 'edit-category', component: EditcategoryComponent },
      { path: 'list-catergory', component: ListcategoryComponent },

    ])
  ],
  providers: [CategoryService],
  bootstrap: [ListcategoryComponent]
})
export class AppModule { }
