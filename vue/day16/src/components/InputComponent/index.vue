<script>
export default {
  name:"Input-Component",
  props:{
    text:{
      type:String,
      required:true
    }
  },
  computed:{
    InputText:{
      get(){
        return this.text
      },
      set(val){
        // eslint-disable-next-line no-console
        // console.log(val)
        this.$emit('textchange',val)//將val值放入v-on:textchange函式中(方法1)
        this.$emit('update:text',val)//(方法2)
      }
    }//取得InputComponent的input取得輸入值,需另綁一層computed在template中v-model
  }
}
</script>

<template src="./template.html"></template>
<style scoped src="./style.css"></style>
