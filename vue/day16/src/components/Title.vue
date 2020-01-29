<template>
<!-- 單一個檔加入樣式 -->
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: "TitleComponent",//命名要使用component
  // data() {
  //   return {
  //     title: "Thomas!Hello World"
  //   };
  // },//從內部傳資料:方法1
  props:{
    title:{
      type:String,
      required:true
    }
  }//從app.vue(外部)傳資料這裡接收需使用props:方法2
};
</script>

<style scoped>
h1.title {
  color: orange;
}
</style>
