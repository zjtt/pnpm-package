<template>
  <div class="category">
    <slot :games="games" test="测试" msg="加油,你是最棒的">我是默认的内容</slot>
  </div>
</template>

<script>
// 作用域插槽就是父组件在调用子组件的时候给子组件传了一个插槽，这个插槽为作用域插槽，
// 该插槽必须放在template标签里面，同时声明从子组件接收的数据放在一个自定义属性内，
// 并定义该数据的渲染方式，实现从子组件到父组件的数据传递。
export default {
  name: "DiyCategory",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>
