
import {Cart} from './mycart.model';
import { Component, EventEmitter} from '@angular/core';


//@Injectable()
export class CartServices
{
    CartChanged = new EventEmitter<Cart[]>(); //
    cart : Cart[] =[];


    getcart()
    {
        return this.cart.slice();
    }

   
    addCart(cartitems:Cart)
      {
          this.cart.push(cartitems);
          this.CartChanged.emit(this.cart.slice());
      }

      deleteCart(index:number)
      {
       
         
        this.cart.splice(index, 1);     
        }
      


}