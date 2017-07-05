import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { FormPage } from '../form/form';
import { CardsPage } from '../cards/cards';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CardsPage;
  tab2Root = ListPage;
  tab3Root = FormPage;

  constructor() {

  }
}
