version: 1.0

这是此项目的第一个版本

先简单认识一下Angular


## 一.Angular 简介
由谷歌维护的一个开源javascript框架

主要分为 Angular1.5 MVC 和 Angular4.0 两个版本

两个版本是完全重写的

#### AngularJS 的优点
模板功能强大丰富

比较完善的前端MVC框架

引入了Java的一些概念

#### AngularJS 的一些问题
性能 路由 作用域 表单验证 Javascript语言 学习成本

#### Angular 新特性
全新的命令行工具 AngularCLI

服务器端渲染

移动和桌面兼容

#### 与React 对比
速度

FLUX架构

服务器渲染

#### 与vue对比
个人主导

只关注web

服务器渲染

#### 下载Angular 
```
npm i -g @angular/cli
```

## 二.Angular 程序架构 构建块

**组件**: 是Angular 应用的基本构建块，你可以把一个组建理解为带有业务逻辑和数据的Html

**服务**: 用来封装可以重用的业务逻辑

**指令**: 允许你向Html 元素添加自定义行为

**模块**: 用来将应用中不同的部分组织成一个Angular 框架可以理解的单元

## 三.AngularCLI 启动过程
启动时加载了哪个页面

启东市加载了哪些脚本

这些脚本做了什么事

**启动项目:** `ng serve`

## 四.开发准备
#### 下载第三方依赖
```
npm install jquery --save
npm install bootstrap --save

# jquery 的typescript类型描述文件
npm install @types/jquery --save-dev

# bootstrap 的typescript类型描述文件
npm install @types/bootstrap --save--dev
```

#### 引入第三方依赖
在.angular-cli.json 中
```
"styles": [
  "styles.css",
  "../node_modules/bootstrap/dist/css/bootstrap.css"
],
"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "../node_modules/bootstrap/dist/js/bootstrap.js"
]
```

#### 自动生成组件
```
ng g component navbar
ng g component footer
ng g component search 
# 轮播图组件
ng g component carousel
# 产品信息组件
ng g component product
# 星级评价组件
ng g component stars
```
注意: 自动生成组件后，组件的component.ts 文件中会调用ViewEncapsulation 方法，但是不会默认引入，需要手动引入
