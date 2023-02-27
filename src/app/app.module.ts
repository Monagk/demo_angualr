import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BuilderComponent } from './builder/builder.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MappingComponent } from './mapping/mapping.component';
import { PipesPipe } from './pipes.pipe';
import { DirectiveComponent } from './directive/directive.component';
import { ElementDirective } from './element.directive';
import { NopageComponent } from './nopage/nopage.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'builder', component: BuilderComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'mapping', component: MappingComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'todo-list', component: TodoListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    BuilderComponent,
    HomeComponent,
    MapsComponent,
    MappingComponent,
    PipesPipe,
    DirectiveComponent,
    ElementDirective,
    NopageComponent,
    TodoListComponent
  ],

  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],

  providers: [],
  bootstrap: [AppComponent],

  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
    ],

})
export class AppModule { }
