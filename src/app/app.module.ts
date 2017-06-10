import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'; // <- This is an import for store

import { AppComponent } from './app.component';

import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { Actions } from './app.actions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule // <- Add this one
  ],
  providers: [
    Actions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() ?
      [ devTools.enhancer() ] :
      [];
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers);
  }
}
