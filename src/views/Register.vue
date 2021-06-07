<template>
  <form @submit.prevent="handleSubmit" class="p-mt-lg-auto">
    <Card>
      <template #title>Create your account</template>
      <template #content>
        <div class="p-fluid">
          <div class="p-field">
            <label for="email">Email</label>
            <InputText id="email" type="email" v-model="email" />
          </div>
          <div class="p-field">
            <label for="password">Password</label>
            <InputText id="password" type="password" v-model="password" />
          </div>
        </div>
      </template>
      <template #footer>
        <Button
          icon="pi pi-user-plus"
          label="Create and login"
          @click="handleSubmit"
        />
        <router-link to="/login" v-slot="{ navigate }" custom>
          <Button
            icon="pi pi-times"
            label="Cancel"
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
  name: "Register",

  data() {
    return {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
  },

  methods: {
    handleSubmit() {
      authService.register(this.email, this.password);
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
  min-width: 200px;
  margin: 0 auto;
  text-align: left;
}
</style>
