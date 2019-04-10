<template lang="pug">
    .login
        .login__content
          button(type="button").login__form-close
          form.login__form(@submit.prevent="login")
            h1.login__form-title Авторизация
            .login__row
              app-input(
                title="Логин"
                icon="user"
                v-model="user.name"
                :errorText="validation.firstError('user.name')"
              )
            .login__row
              app-input(
                title="Пароль"
                icon="key"
                type="password"
                v-model="user.password"
                :errorText="validation.firstError('user.password')"
              )
            .login__btn
              button(
                type="submit"
                :disabled="disableSubmit"
              ).login__send-data Отправить

</template>                          

 <script>
import { Validator } from "simple-vue-validator";
import $axios from "@/requests";
let uniqId = 0;
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": value => {
      return Validator.value(value).required("Введите пароль");
    },
    "todo.title":(value) =>{
      return Validator.value(value).required("Поле не может быть пустым");
    },
    "todo.text":(value) =>{
      return Validator.value(value).required("Поле не может быть пустым");
    },
    "todo.percent":(value) =>{
      return Validator.value(value).required("Поле не может быть пустым");
    },
  },
  data() {
    return {
      disableSubmit: false,
      user: {
        name: "",
        password: ""
      },
      todo: {
        title: "",
        text:"",
        percent:""
      },
    };
  },
  components: {
    appInput: () => import("components/input"),
    adminInput:() => import("components/admin-input")
  },
  methods: {
    async login() {
      if ((await this.$validate()) === false) return;
      this.disableSubmit = true;

      try {
        axios
          .post("//jsonplaceholder.typicode.com/posts", {
            name: this.user.name,
            password: this.user.password,
          })
          .then(response => {
            const report = JSON.stringify(response, null, 2);
            console.log(report);
          });
      } catch (error) {
        console.log(error);
      };
    },
    async admin() {
      if ((await this.$validate()) === false) return;
      this.disableSubmit = true;

      try {
        axios
          .post("//jsonplaceholder.typicode.com/posts", {
            title: this.todo.title,
            text:this.todo.text,
            percent:this.todo.percent
          })
          .then(response => {
            const report = JSON.stringify(response, null, 2);
            console.log(report);
          });
      } catch (error) {
        console.log(error);
      };
    }
  }
};

</script>
