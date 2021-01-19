BFC GFC IFC FFC
BOX-level box 
普通流、浮动流、定位流
FC formatting context 格式化上下文
页面中的一块渲染区域，有一套渲染规则，
决定了其子元素如何布局以及和其他元素之间的关系和作用

会生成BFC
html
float != none 
overflow != visible
display: inline-block table-cell table-caption
position absolute fixed


自适应两栏布局
可以阻止元素被浮动元素覆盖
可以包含浮动元素--清除内部浮动
分属于不同的BFC时可以阻止margin重叠