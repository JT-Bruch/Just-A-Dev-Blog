webpackJsonp([5,12],{935:function(t,e,o){"use strict";var n=o(0),r=o(20),i=o(34),c=o(74),a=o(269),f=o(944),u=o(953);o.d(e,"BlogPostPageModule",function(){return l});var p=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t=p([o.i(n.NgModule)({imports:[r.CommonModule,a.a,u.a,c.a],declarations:[f.a],exports:[f.a,r.CommonModule,i.FormsModule]}),s("design:paramtypes",[])],t)}()},944:function(t,e,o){"use strict";var n=o(0),r=o(115),i=o(487);o.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,o){this.blogService=t,this.route=e,this.router=o}return t.prototype.ngOnInit=function(){this.loadBlog(),this.scrollToTop()},t.prototype.ngAfterViewInit=function(){this.addView()},t.prototype.addView=function(){var t=this;this.route.params.forEach(function(e){var o=e.id;t.blogService.addViewForBlog(o)})},t.prototype.loadBlog=function(){var t=this;this.route.params.forEach(function(e){var o=e.id;t.post$=t.blogService.getBlog(o)})},t.prototype.scrollToTop=function(){this.router.events.filter(function(t){return t instanceof r.NavigationEnd}).subscribe(function(t){window.scroll(0,0)})},t=c([o.i(n.Component)({selector:"app-blog-post-page",template:o(971),styles:[o(962)]}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object,"function"==typeof(f="undefined"!=typeof r.ActivatedRoute&&r.ActivatedRoute)&&f||Object,"function"==typeof(u="undefined"!=typeof r.Router&&r.Router)&&u||Object])],t);var e,f,u}()},953:function(t,e,o){"use strict";var n=o(115),r=o(944);o.d(e,"a",function(){return c});var i=[{path:":id",component:r.a}],c=n.RouterModule.forChild(i)},962:function(t,e){t.exports=""},971:function(t,e){t.exports='<app-blog-post [blog]="post$ | async"></app-blog-post>\r\n'}});
//# sourceMappingURL=5.0c3d7b462c6eb4c7ea81.bundle.map