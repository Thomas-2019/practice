<script>
export default {
  name:"SubInput",
  props:{
    subinput:{
      type:String,
      required:true
    }
  },
  computed:{
    inputsub:{
      get(){
        return this.subinput
      },
      set(val){
        // eslint-disable-next-line no-console
        // console.log(val)
        this.$emit('update:subinput',val)
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style scoped src="./style.css"></style>