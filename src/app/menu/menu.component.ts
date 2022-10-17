import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../share/component/modal/modal.component';
import { CONFIG_SYSTEM } from '../share/model/share.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  menu = CONFIG_SYSTEM.CATEGORIES;
  constructor(
    private ngbModal: NgbModal,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onCallNow() {
    const modalRef = this.ngbModal.open(ModalComponent);
    modalRef.componentInstance.message = '';
  }

  goToMenu() {
    this.router.navigate(['danh-sach-mon-an'], { relativeTo: this.activeRoute })
  }
}
