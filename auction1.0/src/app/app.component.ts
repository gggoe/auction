import { Component } from '@angular/core';

@Component({ // @Component 装饰器
  // 原数据
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// AppComponent TypeScript类
export class AppComponent { // 定义控制器
  title = 'Angular 入门测试';
}
