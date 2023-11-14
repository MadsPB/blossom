import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  nav$:Subject<string> = new Subject<string>();
  constructor() { }
}
