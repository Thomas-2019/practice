<template>
  <div id="app">
    <SubInput :subinput.sync="Subtitle" />
    <Sub :SubTitle="Subtitle" />
    <InputComponent
      :text="title"
      @textchange="changHandler"
    /><!--加入components中的InputComponent-index tag 用v-bind綁定 @textchange在methods裡綁函式(方法1)-->
    <!--<InputComponent :text.sync="title" />加入.sync,vue內建方法(方法2) -->
    <TitleComponent
      :title="title"
    /><!-- 加入components中的Title tag 用v-bind綁定 -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TitleComponent from "./components/Title.vue"; //import Title標籤路徑
// eslint-disable-next-line no-unused-vars
import InputComponent from "./components/InputComponent/index.vue"; //import index標籤路徑
// eslint-disable-next-line no-unused-vars
import Sub from "./components/Sub.vue";
// eslint-disable-next-line no-unused-vars
import SubInput from "./components/SubInput/index.vue";

export default {
  name: "app",
  data() {
    return {
      title: "Welcome to Your Vue.js App", //綁定資料 v-bind
      Subtitle:'Thomas~HelloWord'
    };
  },
  components: {
    HelloWorld,
    TitleComponent, //components加入TitleComponent
    InputComponent, //components加入InputComponent
    // eslint-disable-next-line vue/no-unused-components
    Sub,
    SubInput
  },
  methods: {
    changHandler(val) {
      this.title = val;
    }, //綁定子層(index.vue)與父層(app.vue)函式,將val值帶入this.title(方法1)
    // subHandler(val) {
    //   this.Subtitle = val;
    // }
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
