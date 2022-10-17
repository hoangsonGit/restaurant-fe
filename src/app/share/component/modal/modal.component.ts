import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  @Input() message = "";
  constructor(protected activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onClose() {
    this.activeModal.dismiss();
  }

}
