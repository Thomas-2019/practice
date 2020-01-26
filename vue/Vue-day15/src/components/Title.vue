<template>
<h1 class="title">{{title}}</h1>
</template>

<script>
export default {
  name:'TitleComponent',
  // data(){
  //   return{
  //     title:'Hello~Thomas'
  //   }
  // }
  props:{
    title:{
      type:String,
      required:true
    }
  }
}
</script>

<style scoped>
  h1.title{
    color: blue
  }
</style>