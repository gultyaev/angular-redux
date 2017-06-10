import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class Actions {
  static INCREMENT = 'INCREMENT';
  increment(): Action {
    return { type: Actions.INCREMENT }
  }
}
