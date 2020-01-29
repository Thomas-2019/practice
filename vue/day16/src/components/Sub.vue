<template>
  <h2>{{SubTitle}}</h2>
</template>

<script>
export default {
  name: "subcomponent",
  // data() {
  //   return {
  //     SubTitle: "HelloWorld~Thomas"
  //   };
  // }
  props:{
    SubTitle:{
      type:String,
      required:true
    }
  }
};
</script>

<style>
h2 {
  color: blueviolet;
}
</style>
