import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  enteredSearchValue: string = '';

  changeSearchValue(eventData: Event){
      // console.log((<HTMLInputElement>eventData.target).value);
      this.enteredSearchValue = (<HTMLInputElement>eventData.target).value;
  } 
}
