import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories:any;

  constructor(cs: CategoryService, private productService:ProductService) {
      cs.getCategories().subscribe(obj=>{
        this.categories = obj;
      });
      
  }

  save(product:Object){
    console.log(product);
    this.productService.create(product).then(op=>console.log(op));
  }

}
