<template>
  <div id="app">
    <TitleComponent :title="title" />
    <InputCompoenet :text.sync="title" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TitleComponent from "./components/Title.vue";
import InputCompoenet from "./components/InputCompoenet/index.vue"

export default {
  name: "app",
  data() {
    return{
      title: "thomas!"
    }
  },
  components: {
    HelloWorld,
    TitleComponent,
    InputCompoenet
  },
  // methods:{
  //   textHandler(val){
  //     this.title=val
  //   }
  // }
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
