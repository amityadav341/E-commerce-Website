import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { CartServices } from '../mycart.service';
import { Cart } from '../mycart.model';
import { ProductNew } from '../productNew.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number;

  products : any;
  
  @ViewChild('ingre_qty') ingre_qty : ElementRef;

  constructor( private route: ActivatedRoute,
    private  router: Router,private http:HttpClient,private cartServi:CartServices) { }

    ngOnInit() {

      let id2 = this.route.snapshot.paramMap.get('id'); // get product id from URL

      

      this.http.get("http://localhost:3006/api/product/"+id2).subscribe(posts =>{
        console.log("array"+posts);
  
       this.products =  posts;

      })
   
    ;
     
    }

    addTocart()
    {
      console.log(this.products._id);
      cart :Cart;
      const qty = this.ingre_qty.nativeElement.value; // to get value from qty dropdown

      // let id = this.products._id;
      let product_name = this.products.name; // sunglasses
      let product_count = qty;  //  4
      let product_image = this.products.productImagePath;  // uploades/sunglases.jpg
      let product_price = this.products.price; // 700
      let product_total = qty * product_price;  // 3200

      console.log(this.products.name);
      console.log(qty);
     
      const cartItems = new Cart(this.products._id,product_name,product_count,product_image,product_price,product_total);

      console.log(cartItems);
      
      this.cartServi.addCart(cartItems);
      this.router.navigateByUrl('/mycart');
    }

}
