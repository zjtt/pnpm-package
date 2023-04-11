<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Diycategory>
      <template scope="test">
        {{ JSON.stringify(test) }}
        <div>使用template标签+scope接收</div>
      </template>
    </Diycategory>
    <img
      @click="cpText(url)"
      width="20"
      src="https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/copy.png"
    />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import cpText from "@zh-achieve/copy"
import Diycategory from "./components/category.vue"
export default {
  name: "App",
  data() {
    return {
      url: "66666666"
    }
  },
  methods: {
    cpText
  },
  components: {
    // HelloWorld,
    Diycategory
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
