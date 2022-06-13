import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any[] = [];
  grandTotal: number = 0;
  subsink = new SubSink();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subsink.sink = this.cartService.getProducts().subscribe((res: any) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  $RemoveItem(item: any) {
    this.cartService.removeCartitem(item);
  }
  $EmptyCart() {
    this.cartService.removeAllCart();
  }

  $ChangeGrandTotal() {
    this.grandTotal = this.cartService.getTotalPrice();
  }
  ngOnDestroy() {
    this.subsink.unsubscribe();
  }
}
