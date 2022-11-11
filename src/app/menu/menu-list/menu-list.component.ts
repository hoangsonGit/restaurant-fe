import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CONFIG_SYSTEM } from 'src/app/share/model/share.model';
import { DataService } from 'src/app/share/service/shared.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less']
})
export class MenuListComponent implements OnInit,OnDestroy {
  unSub!: Subscription;
  activeButton = 0;
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
    this.unSub = this.sharedService.categoryActived.subscribe(data => {
      this.activeButton = data;
    })
   }
  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }

  ngOnInit() {
    if(this.activeButton > 0){
      this.showMenu(this.activeButton)
    } else {
      this.activeButton = 1;
      this.menuList = this.categories[0].menu;
    }
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
