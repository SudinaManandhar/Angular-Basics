import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FilterComponent, SearchComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    products = [
      {
          id: 1,
          name: "T-Shirt",
          color: "White",
          status: "Available",
          price: 19.99,
          image: "/assets/tshirt.webp"
      },
      {
          id: 2,
          name: "Jeans",
          color: "Blue",
          status: "Unavailable",
          price: 39.99,
          image: "/assets/jeans.webp"
      },
      {
          id: 3,
          name: "Sneakers",
          color: "Gray",
          status: "Available",
          price: 59.99,
          image: "/assets/sneakers.jpg"
      },
      // Add more products as needed
  ];

  getTotalProducts(){
    return this.products.length;
  }

  getTotalAvailableProducts(){
    return this.products.filter(product => product.status === 'Available').length;
  }

  getTotalUnavailableProducts(){
    return this.products.filter(product => product.status === 'Unavailable').length;
  }

  courseCountRadioButton: string = 'All';

  //calls the custom event in the child component is raised 
  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data; //data stores the value that is selected by the user in child component 
    // console.log(this.courseCountRadioButton);
  }
}
