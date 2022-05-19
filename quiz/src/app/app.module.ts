import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ContainerComponent } from "./components/container.component";
import { TabHeaderComponent } from "./components/tab-header.component";
import { TabContentComponent } from "./components/tab-content.component";

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TabHeaderComponent,
    TabContentComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
