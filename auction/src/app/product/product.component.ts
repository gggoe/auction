import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;

  constructor() { }

  ngOnInit() { // 组件实例化以后会被调用一次 初始化数据
    this.products =[
      new Product(1,"第一个商品",1.99,1,"这是第一个商品，是第一个创建的",["电子商品","硬件设备"]),
      new Product(2,"第一个商品",2.99,2,"这是第一个商品，是第一个创建的",["电子商品","硬件设备"]),
      new Product(3,"第一个商品",3.99,3,"这是第一个商品，是第一个创建的",["电子商品","硬件设备"]),
      new Product(4,"第一个商品",4.99,4,"这是第一个商品，是第一个创建的",["电子商品","硬件设备"]),
      new Product(5,"第一个商品",5.99,5,"这是第一个商品，是第一个创建的",["电子商品","硬件设备"]),
      new Product(6,"第一个商品",6.99,4.5,"这是第一个商品，是第一个创建的",["电子商品","硬件设备"])
    ]
  }

}
export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}
