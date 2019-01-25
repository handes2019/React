//1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

let a=10
let str='Holle World'
let boo=true
let title='999'
const h1=<h1>XXXXXXYYYYYYY</h1>
const arr=[
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]

const arrStr=['AA','BB','CC','DD']

//定义一个空数组,将来用于存放 名称 标签[方案1]
const nameArr=[]
arrStr.forEach(item=>{
    const temp=<h5>{item}</h5>
    nameArr.push(temp)
})

/*
//数组的map方法,map中必须写return
const result=arrStr.map(item=>{
    return item+'~~ '
})

console.log(result)
*/

//3.调用render函数渲染 jsx XML比HTML严格多
//什么情况下需要使用｛｝呢？当我们需要在JSX控制的区域内，写JS表达式了，则需要把JS代码写到｛｝中
ReactDOM.render(<div>
    {a+2}
    <hr/>
    {str}
    <hr/>
    {boo?'条件为真':'条件为假'}
    <hr/>

    <p title={title}>这是p标签</p>
    {h1}
    <hr/>
    {arr}
    <hr/>
    {nameArr}
    <hr/>
    {arrStr.map(item=>
        <h3>{item}</h3>
    )}
    </div>,document.getElementById('app'))