import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalCartItem: number = 0;
  searchTerm: string = '';
  totalAmount: any;
  // count:number=0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      this.totalCartItem = res.length;
    });

    // let existingData : any = localStorage.getItem('addedItems');
    // this.totalCartItem = JSON.parse(existingData) == null?0:JSON.parse(existingData).length;
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
