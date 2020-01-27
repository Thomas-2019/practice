<template>
  <div id="app">
    <TitleComponent :title="title" /><!-- 加入component tag 用v-bind綁定 -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TitleComponent from "./components/Title.vue"; //tag標籤 import 進來和入徑

export default {
  name: "app",
  data() {
    return {
      title: "Welcome to Your Vue.js App"//綁定資料 v-bind
    };
  },
  components: {
    HelloWorld,
    TitleComponent //加入TitleComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
