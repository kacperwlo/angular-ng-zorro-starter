import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { APP_NAME, SIDEBAR_VISIBLE } from '../../../../environments/environment';

interface Collapse {
  collapse: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  collapse$: Observable<boolean>;
  public appName: string = APP_NAME;
  public sidebarVisible: boolean = SIDEBAR_VISIBLE;

  constructor(private store: Store<Collapse>) {
   }

  ngOnInit() {
    this.collapse$ = this.store.select(('collapse'));
  }
}
