import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { SIDEBAR_VISIBLE } from '../../../../environments/environment';

interface Collapse {
  collapse: Array<any>;
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  private collapse: boolean;
  public sidebarVisible: boolean = SIDEBAR_VISIBLE;

  constructor(private store: Store<Collapse[]>) {
  }

  ngOnInit() {
    this.store.pipe(select('collapse'))
      .subscribe(value => this.collapse = value);
  }

  collapseSidebar() {
    this.store.dispatch({ type: 'CHANGE_SIDEBAR_STATE', payload: this.collapse});
  }
}
