/* eslint-disable no-console */
<script>
export default {
  name: "Input-Compoenet",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    inputText:{
      get(){
        return this.text
      },
      set(val){
        // eslint-disable-next-line no-console
        // console.log(val)
        this.$emit('update:text',val)
      }
    }
  }
};
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>
