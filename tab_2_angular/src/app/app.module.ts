import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/Box/box.component';
import { ButtonComponent } from './components/Button/button.component';
import { FormComponent } from './components/Form/form.component';
import { InputComponent } from './components/Input/input.component';
import { TabContentComponent } from './components/Tabs/tab-content.component';
import { TabHeaderComponent } from './components/Tabs/tab-header.component';
import { TabsComponent } from './components/Tabs/tabs.component';
import { TextAreaComponent } from './components/TextArea/text-area.component';
import { reducer as AppReducer } from './store/ngrx';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ButtonComponent,
    FormComponent,
    InputComponent,
    TabsComponent,
    TabContentComponent,
    TabHeaderComponent,
    TextAreaComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({ AppReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
