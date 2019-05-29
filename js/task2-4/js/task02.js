function a() {
    document.getElementById("two").value = document.getElementById("two").value - 1;//减号按钮
    one(document.getElementById("two").value);
}
function b() {
    document.getElementById("two").value =parseFloat( document.getElementById("two").value)+ 1;//加号按钮
    one(document.getElementById("two").value);
}
var oPlayerNum = document.getElementById("c");//玩家总人数
var osliderBlock = document.getElementById("two");//滑块的值
function on_change() {
    if (oPlayerNum.value >= 4 && oPlayerNum.value <= 18) {//设置方框里面玩家人数范围
        osliderBlock.value=oPlayerNum.value ;//将玩家总人数赋值给滑块的值，实现动态变化
    }
    else {
        alert("请输入正确的人数6~18");
        oPlayerNum.value=4;
        fenpei();
        ddd();
    }
}
function one() {// 滑块的值改变，运行这个函数
    oPlayerNum.value=osliderBlock.value;
    //滑块的值改变的话，滑块的值赋值给方框，实现动态变化
}
// var inputA = document.getElementById("d");
// var inputB=document.getElementById("e");
function getA(){
    // if(inputA.value!=""&&inputB.value!=""){
        window.location.href = "../html/task03.html";
    // }else{
    //     alert("请输入词组");
    // }
}
fenpei();
 function fenpei() {
     // if (oPlayerNum.value>=4&&oPlayerNum.value<=18) {
     // if (oPlayerNum.value<4){
     //     oPlayerNum.value=4;
     // }
     console.log(oPlayerNum.value);
         var killnum = oPlayerNum.value / 5;
         console.log(killnum);
         qwe = Math.ceil(killnum);
         console.log(qwe);
         document.getElementById("killer").innerHTML = qwe;//杀手人数
         var civilnum = oPlayerNum.value - qwe;
         document.getElementById("civiler").innerHTML = civilnum;//平民人数
         return qwe;
     // }
 }
function ddd() {
    console.log(qwe);
    var aaa = new Array(parseInt(oPlayerNum.value)).fill("平民");
    console.log(aaa);
    for (i = 0; i < qwe; i++) {
        aaa[i] = "杀手"
    }
    console.log(aaa);
        var shuffle = aaa.slice(0), t = aaa.length, temp,index;
        for (t>=0;t--;) {//洗牌算法，打乱数组
            index = Math.floor((t + 1) * Math.random());
            temp = shuffle[index];
            shuffle[index] = shuffle[t];
            shuffle[t] = temp;
        }
        console.log(shuffle);
    sessionStorage.setItem("xxx",JSON.stringify(shuffle));
}
abc();
 function abc() {
     document.getElementById("c").value=4;
     fenpei();
     ddd();
 }
