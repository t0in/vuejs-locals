<template>
  <form @submit.prevent="handleSubmit" class="p-mt-lg-auto">
    <Card>
      <template #title>Login</template>
      <template #content>
        <div class="p-fluid">
          <div class="p-field">
            <label for="email">Email</label>
            <InputText id="email" type="email" />
          </div>
          <div class="p-field">
            <label for="password">Password</label>
            <InputText id="password" type="password" />
          </div>
        </div>
      </template>
      <template #footer>
        <Button icon="pi pi-sign-in" label="Login" @click="handleSubmit" />

        <router-link to="/register" v-slot="{ navigate }" custom>
          <Button
            icon="pi pi-user-plus"
            label="Create Account"
            class="p-button-secondary"
            style="margin-left: 0.5em"
            @click="navigate"
          />
        </router-link>
      </template>
    </Card>
  </form>
</template>

<script>
import router from "@/router";
import store from "@/store";
import { authService } from "@/services";

export default {
  name: "Login",

  data() {
    return {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
  },

  methods: {
    handleSubmit() {
      authService.login(this.email, this.password);
    },
  },

  mounted() {
    // redirect to home if already logged in
    if (store.getters.getToken) {
      router.push("/");
    }
  },
};
</script>

<style scoped>
form {
  width: 50%;
  min-width: 400px;
  margin: 0 auto;
  text-align: left;
}
</style>
