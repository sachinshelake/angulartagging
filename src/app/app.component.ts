import { Component } from '@angular/core';
import { TagModel } from './model/tagmodel';
import {of, Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tag App Demo';
  items: string[] = [];
  selectedTag = '';
  tagForAutoComplete: string[] = ['sky', 'blue', 'earth', 'blue'];

  onSelect($event) {
    this.selectedTag = $event;
  }

  onAdd(tagString) {
    // here code to check whether tag is already present in db if not add it. Its for Auto Complete
    if (this.tagForAutoComplete.indexOf(tagString.value) === -1) {
      this.tagForAutoComplete.push(tagString.value);
    }
}

}
