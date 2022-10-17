import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: LocationComponent },
  { path: 'dia-chi', component: LocationComponent, data :{ id:'1', name:"Địa chỉ"} },
  { path: 'thuc-don', component: MenuComponent, data :{ id:'2', name:"Thực đơn"} },
  { path: 'thuc-don/danh-sach-mon-an', component:  MenuListComponent, data :{ id:'2', name:"Thực đơn"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
