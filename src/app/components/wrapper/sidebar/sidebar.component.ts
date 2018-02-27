import { Component} from '@angular/core';
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
export class SidebarComponent {}
