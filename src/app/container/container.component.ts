import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { NotificationComponent } from '../notification/notification.component';
import { SearchComponent } from '../search/search.component';
import { ProductsComponent } from '../products/products.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NavComponent, HeaderComponent, SearchComponent, NotificationComponent, ProductsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
