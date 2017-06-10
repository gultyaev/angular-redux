import {Component, Injectable} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; // We add
import { IAppState } from './store'; // this three
import { Actions } from './app.actions'; // things for dispatching
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() readonly count$: Observable<number>; // <- New
  subscription;
  constructor(
    private actions: Actions,
    private ngRedux: NgRedux<IAppState>) {}
  increment() {
    this.ngRedux.dispatch(this.actions.increment()); // <- New
  }
}
