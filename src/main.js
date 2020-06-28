let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/*你好，我是一名前端新人，
*接下来我要演示一下我的前端功底，
*首先我要准备一个div
*/
#div1{
  border: 1px solid red;
  width:200px;
  height:200px;
}
/*接下来我要把div变成一个八卦图
*首先把div画成一个圆
*/
#div1{
  border-radius: 50%;
  box-shoadow:0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/*然后画八卦里的阴阳图
*一黑一白谓之阴阳
*/
#div1{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%,   rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1)     100%);
}
/*再添加上下两个勾玉*/
 #div1::before{
  width: 100px;
  height: 100px;
  left:50%;
  top:0;
  background:#000;
  border-radius: 50%; 
  transform:translateX(-50%);
  background: rgb(0,0,0);
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
 #div1::after{
  width: 100px;
  height: 100px;
  left:50%;
  bottom:0;
  background:#fff;
  border-radius: 50%;
  transform:translateX(-50%);
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`;

let string2 = '';
let n = 0;


html.innerHTML = string.substring(0, n);

let step = () => {
    setTimeout(() => {
        n = n + 1;
        //如果是回车就不照搬
        //如果是回车就照搬
        if (string[n] === "\n") {
            string2 += '<br>'
        } else if (string[n] === " ") {
            string2 += '&nbsp'
        } else {
            string2 += string[n]
        };
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        if (n < string.length - 1) {
            step();
        }
    }, 10);
};

step();