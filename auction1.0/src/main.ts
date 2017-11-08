import { enableProdMode } from '@angular/core'; // 关闭开发者模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // 使用哪个模块启动整个应用
import { AppModule } from './app/app.module'; // 导入主模块
import { environment } from './environments/environment'; // 导入环境配置

if (environment.production) { // 如果当前是一个生产环境
  enableProdMode(); // 就关闭开发者环境
}
// 使用bootstrapModule 方法传入AppModule 作为启动模块来启动应用
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
