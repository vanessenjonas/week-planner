import {Component, OnInit, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output()
  onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancel() { this.onClose.emit(null); }

}
