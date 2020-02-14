import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.css']
})
export class TaglistComponent implements OnInit, OnChanges {

  @Input() tagString: any;
  resultData: string[] = [];
  constructor() { }
  ngOnChanges(): void {
    console.log(this.tagString);
    if (this.tagString) {
      // here get list of all items associated with tag
      this.resultData = ['first' + this.tagString.display, 'second' + this.tagString.display];
    }
  }
  ngOnInit(): void {
  }

}
