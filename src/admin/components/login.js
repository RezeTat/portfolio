// import { Validator } from "simple-vue-validator";
// import axios from "axios";

// export default {
//   mixins: [require("simple-vue-validator").mixin],
//   validators: {
//     "user.name": value => {
//       return Validator.value(value).required("Введите имя пользователя");
//     },
//     "user.password": value => {
//       return Validator.value(value).required("Введите пароль");
//     }
//   },
//   data() {
//     return {
//       disableSubmit: false,
//       user: {
//         name: "",
//         password: ""
//       }
//     };
//   },
//   components: {
//     appInput: () => import("./components/input")
//   },
//   methods: {
//     async login() {
//       if ((await this.$validate()) === false) return;
//       this.disableSubmit = true;

//       try {
//         axios
//           .post("//jsonplaceholder.typicode.com/posts", {
//             name: this.user.name,
//             password: this.user.password
//           })
//           .then(response => {
//             const report = JSON.stringify(response, null, 2);
//             console.log(report);
//           });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
// };