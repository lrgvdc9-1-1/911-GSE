import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  
  @Input() dataTable:any;
  @Output() closeUpdate = new EventEmitter<any>();
  @Output() zoomTo = new EventEmitter<any>();
  private searchTable:string;
  constructor() { }

  ngOnInit() {
  }

  closeTable(){
    this.closeUpdate.emit({close: true});
  }

  zoomToMap(calls){
    this.zoomTo.emit(calls);
  }

}
