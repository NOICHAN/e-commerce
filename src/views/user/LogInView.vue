<template>
  <div class="container">
    <v-form class="row justify-content-center"
    @submit="signIn" v-slot="{ errors }">
      <div class="col-10 col-md-6 bg-white d-flex flex-column align-items-center">
        <h3 class="my-5 h1 text-primary fw-bold">會員登入</h3>
        <ToggleLogInSignUp></ToggleLogInSignUp>
        <div class="form-floating mb-4 w-75">
          <v-field type="email" class="form-control"
          id="floatingInput" placeholder="name@example.com"
          v-model="user.username" name="email"  rules="email|required"
          :class="{ 'is-invalid': errors['email'] }"></v-field>
          <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
          <label for="floatingInput">Email 帳號</label>
          <error-message class="invalid-feedback" name="email">
          </error-message>
        </div>
        <div class="form-floating w-75">
          <v-field type="password" name="密碼" class="form-control"
          id="floatingPassword" placeholder="Password" :class="{ 'is-invalid': errors['密碼'] }"
          v-model="user.password" rules="min:8|required"
          ></v-field>
         <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
          <label for="floatingPassword">密碼</label>
          <error-message class="invalid-feedback" name="密碼">
          </error-message>
        </div>
        <div class="my-5">
          <button type="submit" class="btn btn-outline-info btn-lg">登入</button>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import ToggleLogInSignUp from '@/components/ToggleLogInSignUp.vue';
import errorHandler from '@/utils/errorHandler.js';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async signIn() {
      try {
        const SignInUel = `${process.env.VUE_APP_API}admin/signin`;
        const res = await this.$http.post(SignInUel, this.user);
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `petToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/dashboard/products');
        } else {
          this.$alert('帳號或密碼錯誤。');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      }
    },
  },
  components: {
    ToggleLogInSignUp,
  },
};
</script>
