import { Component, OnInit } from '@angular/core';
import { APP_AUTHOR_NOTE } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public author: string = APP_AUTHOR_NOTE;

  constructor() { }

  ngOnInit() {
  }

}
