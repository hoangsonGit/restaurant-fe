import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG_SYSTEM } from 'src/app/share/model/share.model';
import { DataService } from 'src/app/share/service/shared.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less']
})
export class MenuListComponent implements OnInit {
  activeButton = 1;
  categories = CONFIG_SYSTEM.CATEGORIES;
  isCollapsed = false;
  menuList: {
    title: string,
    price: string,
    img: string
  } []= [];
  constructor(
    private activeRoute: ActivatedRoute,
    private sharedService: DataService,
    private router: Router
  ) {
    this.sharedService.pageActived.next(activeRoute.snapshot.data['id']);
    this.router.getCurrentNavigation()?.extras.state;
    const state = this.router.getCurrentNavigation()?.extras.state; 
   }

  ngOnInit() {
    this.menuList = this.categories[0].menu;
  }

  showMenu(idCategory: number) {
    const categorySelected = this.categories.find(category => category.id === idCategory);
    this.menuList = categorySelected?.menu!;
    this.addClassActive(idCategory);
  }

  addClassActive(action: number) {
    this.activeButton = action;
  }

}
