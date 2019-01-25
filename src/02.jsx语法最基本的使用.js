//1.导入包
import React from 'react'
import ReactDOM from 'react-dom'


//2.创建虚拟DOM元素
//回顾：什么是虚拟DOM 用JS对象的形式来表示DOM和DOM之间的嵌套关系
// const mydiv=React.createElement('div',{id:'mydiv',title:'div aaa'},'这是一个div元素')


//HTML是最优秀的标记语言
//注意： 在JS文件中，默认不能写这种类似于HTML的标记；否则打包会失败
//可以使用babel来转换这些JS中的标签;
//这种在JS中，混合写入类似于HTML的语法，叫做JSX语法；符合XML规范的JS；
//注意 JSX语法的本质还是在运行的时候，被转换成了React.createElement形式来
const mydiv=<div id="mydiv" title="div aaa">
这是一个div元素
<h1>这是一个大大的H1</h1>
</div>

//3.调用render函数渲染
ReactDOM.render(mydiv,document.getElementById('app'))