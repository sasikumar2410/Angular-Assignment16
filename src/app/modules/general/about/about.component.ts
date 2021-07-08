import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  filteredString:string=''
  sortby=1
  products:any;
  //  constructor(private productServices:ProductsService)
  // {
  //   this.products=productServices.getallproducts();
  //  }
   errMsg:any;
  constructor(proService:ProductService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
}
}