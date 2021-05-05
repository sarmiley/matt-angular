import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';




import { TodoListModule } from './todo-list/todo-list.module';
import { DrinkComponent } from './drink/drink.component';
import { DrinkCardComponent } from './drink/drink-card/drink-card.component';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    HomeComponent,
    DrinkComponent,
    DrinkCardComponent,
    PopupModalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
