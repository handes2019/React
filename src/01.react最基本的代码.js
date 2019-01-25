//console.log('ok')

//1、这两个导入时候，接收的成员名称必须这么写
import React from 'react'//创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟DOM放在页面上展示的

//2、创建虚拟DOM元素
//参数1：创建的元素的类型，字符串，表示元素的名称
//参数2：是一个对象或null，表示当前这个DOM元素的属性
//参数3：子节点（包括其他虚拟DOM获取文本子节点 ）
//参数n:其他子节点
//<h1 id="myh1" title="this is a h1">这是一个大大的H1</h1>
// const myh1=React.createElement('h1',null,'这是一个大大的H1')
const myh1=React.createElement('h1',{ id:'myh1',title:'this is a h1'},'这是一个大大的H1')
//Target container is not a DOM element ,经分析，猜测：第二个参数接收的应该是一个DOM元素而不是选择器

const mydiv=React.createElement('div',null,'这是一个div元素',myh1)

//渲染页面上的DOM结构，最好的方式，就是写HTML代码
// const mytest=<div>aaa</div>


// 3.使用ReactDOM把虚拟DOM渲染到页面上
//参数1：要渲染的那个虚拟DOM元素
//参数2：指定页面上的DOM元素，当作容器
ReactDOM.render(mytest,document.getElementById('app'))


/* 
const vm=new VTTCue({
    data:{},
    el:'#app',
    methods:{}
}) */