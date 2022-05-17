<template>
<div class="container">
    <v-form class="row justify-content-center" @submit="signUp" v-slot="{ errors }">
        <div class="col-10 col-md-6 bg-white px-5 d-flex flex-column align-items-center">
            <h3 class="my-5 h1 text-primary fw-bold text-center">會員註冊</h3>
            <ToggleLogInSignUp></ToggleLogInSignUp>
            <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
            <v-field type="email" class="form-control mb-4"
            placeholder="請輸入E-mail" name="email" rules="email|required"
            :class="{ 'is-invalid': errors['email'] }"
            v-model="signUpData.signUpEmail"></v-field>
            <error-message class="invalid-feedback" name="email">
            </error-message>
            <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
            <v-field type="password" class="form-control my-4"
            placeholder="請輸入密碼(英文大小寫有別)" name="密碼"
            rules="min:8|required" :class="{ 'is-invalid': errors['密碼'] }"></v-field>
            <error-message class="invalid-feedback" name="密碼">
            </error-message>
            <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
            <v-field type="password" class="form-control my-4"
            placeholder="請再輸入一次密碼" name="確認密碼" rules="confirmed:@密碼|required"
            :class="{ 'is-invalid': errors['確認密碼'] }"
            v-model="signUpData.signUpPassword"></v-field>
            <error-message class="invalid-feedback" name="確認密碼">
            </error-message>
            <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
            <v-field type="text" class="form-control my-4"
            placeholder="請輸入中文姓名" name="姓名"
            rules="required" :class="{ 'is-invalid': errors['姓名'] }"
            v-model="signUpData.signUpName"></v-field>
            <error-message class="invalid-feedback" name="姓名">
            </error-message>
            <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
            <v-field type="tel" class="form-control mt-4"
            placeholder="請輸入手機號碼" name="手機號碼"
            rules="digits:10|required" :class="{ 'is-invalid': errors['手機號碼'] }"
            v-model="signUpData.signUpTel"></v-field>
            <error-message class="invalid-feedback" name="手機號碼">
            </error-message>
            <div class="my-5">
            <button type="submit" class="btn btn-outline-warning btn-lg">註冊</button>
            </div>
        </div>
    </v-form>
</div>
</template>

<script>
import ToggleLogInSignUp from '@/components/ToggleLogInSignUp.vue';

export default {
  data() {
    return {
      signUpData: {
        signUpEmail: '',
        signUpPassword: '',
        signUpName: '',
        signUpTel: '',
      },
    };
  },
  methods: {
    signUp() {
      this.$alert('註冊成功，請再次重新登入，將於5秒後自動回首頁。');
      setTimeout(() => {
        this.$router.push('/');
      }, 5000);
    },
  },
  components: {
    ToggleLogInSignUp,
  },
};

</script>
