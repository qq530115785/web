// function Fn(){
//     this.user = "追梦子";
// }
// var a = new Fn();
// console.log(a.user); //追梦子
// //这里之所以对象a可以点出函数Fn里面的user是因为new关键字可以
// // 改变this的指向，将这个this指向对象a，为什么我说a是对象，因为用了
// // new关键字就是创建一个对象实例，我们这里用变量a创建了一个Fn的实例
// // （相当于复制了一份Fn到对象a里面），此时仅仅只是创建，并没有执行
// // ，而调用这个函数Fn的是对象a，那么this指向的自然是对象a，那么为什么对象a中会有user，因
// // 为你已经复制了一份Fn函数到对象a中，用了new关键字就等同于复制了一份。
wow = new WOW({
    animateClass: 'animated',
});
wow.init();