import { Component, OnInit } from '@angular/core';
import { CONFIG_SYSTEM } from '../share/model/share.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../share/component/modal/modal.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DataService } from '../share/service/shared.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})

export class ContainerComponent implements OnInit {

  faCoffee = faCoffee;
  activeButton = 1;
  menu = CONFIG_SYSTEM.NAVIGATION;
  constructor(
    private ngbModal: NgbModal,
    private route: ActivatedRoute,
    private sharedService: DataService
  ) {
    this.sharedService.pageActived.subscribe(data => {
      this.activeButton = data;
    })
  }

  ngOnInit() {
  }

  addClassActive(action: number) {
    this.activeButton = action;
  }

  callNow() {
    const modalRef = this.ngbModal.open(ModalComponent);
    modalRef.componentInstance.message = '';
  }

}
