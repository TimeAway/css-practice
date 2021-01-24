# CSS 块格式上下文（Block Formatting Context）

BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也是如此。包括浮动，和外边距合并等等，因此，有了这个特性，我们布局的时候就不会出现意外情况了。

## BFC 生成条件

- 根元素（`<html>`）

- 浮动元素，元素的 float 属性值不是 `none`

- 绝对定位元素，元素的 position 属性值为 `absolute` 或 `fixed`

- 行内块元素，元素的 display 属性值为 `table-cell`，表格单元格默认此值

- 表格标题，元素的 display 为 `table-caption`，表格标题默认此值

- 匿名表格单元格元素，元素的 display 为 `table` `table-row` `table-row-group` `table-header-group` `table-footer-group`，分别是 table row tbody thead tfoot 的默认属性，或 `inline-table`

- overflow 不为 `visible` 的块元素

- display 值为 `flow-root` 的元素

- contain 值为 `layout` `content` `paint` 的元素

- 弹性元素，display 值为 `flex` `inline-flex` 元素的直接子元素

- 网格元素，display 值为 `grid` `inline-grid` 元素的直接子元素

- 多列容器，元素的 column-count 或 column-width 不为 `auto`，包括 `column-count` 为 1

- `column-span` 为 `all` 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中

## BFC 容器的作用

### 1. 清除元素内部浮动

在一个容器中，如果包裹的是一个浮动元素，那么该容器的高度为 0，因为浮动元素脱离了正常的文档流，无法撑起父元素。

解决方法：

- 使用 `overflow: auto`

设置 `overflow: auto` 会创建一个新的 BFC 来包含这个浮动。`overflow: auto` 告诉浏览器如何处理溢出的内容，容器就会把任何子元素包含进去。

但是该属性可能会出现一些不想要的问题，比如滚动条或者一些剪切的阴影。

- 使用 `display: flow-root`

这是一个新的 `display` 属性值，它可以创建无副作用的 BFC。给父级块设置 `display: flow-root`，其内的所有元素都会参与 BFC，浮动的内容就不会从底部溢出。

### 2. 解决外边距合并

通过创建新的 BFC 避免两个相邻 `<div>` 之间的 外边距合并问题

```html
<div class="blue"></div>
<div class="red-outer">
  <div class="red-inner">red inner</div>
</div>
```

```css
.blue,
.red-inner {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red-outer {
  overflow: hidden;
  background: red;
}
```

### 3. 自适应布局

```html
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box">
    <p><code>display:flow-root</code></p>
    <p></p>
  </div>
</section>
```

```css
section {
  height: 150px;
}

.box {
  display: flow-root;
  background-color: aliceblue;
  border: 5px solid steelblue;
}

.float {
  float: left;
  width: 200px;
  height: 100px;
  margin-right: 25px;
  padding: 10px;
  overflow: hidden; /* required by resize:both */
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid black;
  resize: both;
}
```
