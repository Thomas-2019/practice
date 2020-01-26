// (function(Vue) {
//   new Vue({
//     el: "#app",
//     data: {
//       loading: false,
//       contacts: [],
//       editIndex: null,
//       input: {
//         name: "",
//         email: ""
//       }
//     },
//     methods: {
//       submitHandler() {
//         let { name, email } = this.input;
//         if (!name || !email) return;
//         this.loading = true;

//         if (this.editIndex === null) {
//           axios
//             .post("http://localhost:8888/contact", this.input)
//             .then(res => {
//               this.contacts.push(res.data);
//               this.cancelHandler();
//               this.loading = false;
//             })
//             .catch(err => {
//               console.log(err);
//             });
//         } else {
//           let {id}=this.contacts[this.editIndex]
//           axios
//             .put("http://localhost:8888/contact/" + id, this.input)
//             .then((res) => {
//               this.contacts[this.editIndex] = res.data;
//               this.deleteHandler();
//               this.loading = false;
//             });
//         }
//       },
//       cancelHandler() {
//         this.input.name = "";
//         this.input.email = "";
//         this.editIndex = null;
//         // this.input={
//         //   name:'',
//         //   email:''
//         // }
//       },
//       deleteHandler(index) {
//         let target = this.contacts[index];
//         if (confirm(`是否刪除 ${target.name}?`)) {
//           this.loading = true;
//           axios
//             .delete("http://localhost:8888/contact/" + target.id)
//             .then(res => {
//               this.contacts.splice(index, 1);
//               this.loading = false;
//               this.cancelHandler();
//             })
//             .catch(err => {
//               console.log(err);
//             });
//         }
//       },
//       editHandler(index) {
//         let { name, email } = this.contacts[index];
//         this.editIndex = index;
//         // this.input.name=name
//         // this.input.email=email
//         this.input = {
//           name,
//           email
//         };
//       }
//     },
//     mounted() {
//       this.loading = true;
//       axios
//         .get("http://localhost:8888/contact")
//         .then(res => {
//           console.log(res);
//           this.contacts = res.data;
//           this.loading = false;
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   });
// })(Vue);

(function(Vue) {
  new Vue({
    el: "#app",
    data: {
      loading: false,
      editIndex: null, //判斷修改哪個index
      contacts: [],
      input: {
        name: "",
        email: ""
      }
    },
    methods: {
      cancelHandler() {
        this.editIndex = null; //取消時index初始化
        // this.input.name="",
        // this.input.email=""
        this.input = {
          name: "",
          email: ""
        }; //重構解構
      },
      submitHandler() {
        let { name, email } = this.input; //重構解構
        if (!name || !email) return; //無輸入資料離開程式
        this.loading = true;
        if (this.editIndex === null) {
          axios
            .post("http://localhost:8888/contact", { name, email }) //將{name,email}資料寫入//重構解構後
            .then(res => {
              this.contacts.push(res.data); //將資料存入
              this.cancelHandler(); //清除表格資料
              this.loading = false;
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          let id = this.contacts[this.editIndex].id;
          // let {id}=this.contacts[this.editIndex]//重構解構
          axios
            .put("http://localhost:8888/contact/" + id, this.input) //將this.input資料寫入
            .then(res => {
              this.contacts[this.editIndex] = res.data;
              this.cancelHandler();
              this.loading = false;
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      deleteHandler(index) {
        let target = this.contacts[index];
        this.loading = true;
        if (confirm(`是否刪除${target.name}?`)) {
          axios
            .delete("http://localhost:8888/contact/" + target.id)
            .then(res => {
              this.contacts.splice(index, 1); //刪除一筆資料
              this.loading = false;
            }) //使用axios-delete刪除資料
            .catch(err => {
              console.log(err);
            });
        }
      },
      editHandeler(index) {
        let { name, email } = this.contacts[index]; //重構解構
        // this.input.name = name;
        // this.input.email = email;
        this.editIndex = index; //新增修改index
        this.input = {
          name,
          email
        }; //重構解構
      }
    },
    mounted() {
      this.loading = true;
      axios
        .get("http://localhost:8888/contact")
        .then(res => {
          this.contacts = res.data; //將資料載入
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
})(Vue);
