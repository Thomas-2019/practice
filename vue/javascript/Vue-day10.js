let data = {
  obj: { num: 0 },
  number: 0,
  objList: [{ num: 0 }, { num: 0 }, { num: 0 }],
  numberList: [0, 0, 0]
};

let vm = new Vue({
  el: "#app",
  data: data,
  methods: {
    objListHandler(index) {
      this.objList[index].num += 1;
    },
    numberListHandler(index) {
      this.numberList[index] += 1;
    }
  },
  watch: {
    number(val, oldVal) {
      console.log("number:", val, oldVal);
    },
    // ["obj.num"](val, oldVal) {
    //   console.log("obj:", val, oldVal);
    // },
    obj: {
      handler(val, oldVal) {
        console.log("obj:", val, oldVal);
      },
      deep: true
    }
  }
});
