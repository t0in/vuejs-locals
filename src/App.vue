<template>
  <div class="p-d-flex p-flex-column">
    <div class="p-mb-4" v-if="isLogged()">
      <Toolbar>
        <template #left>
          <h1 class="p-m-0">Vue Locals</h1>
        </template>

        <template #right>
          <SplitButton
            label="Profile"
            icon="pi pi-user"
            :model="items"
            class="p-button-info"
          ></SplitButton>
          <i class="pi pi-bars p-toolbar-separator p-mr-2" />
          <Button
            label="Logout"
            icon="pi pi-sign-out"
            class="p-button-danger"
            @click="handleLogout"
          />
        </template>
      </Toolbar>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
// import router from '@/router';
import { authService } from "@/services";
import store from "@/store";

export default {
  data() {
    return {
      items: [
        {
          label: "View",
          icon: "pi pi-user",
          command: () => {
            //
          },
        },
        {
          label: "Edit",
          icon: "pi pi-user-edit",
          command: () => {
            //
          },
        },
      ],
    };
  },

  methods: {
    handleLogout() {
      authService.logout();
    },
    isLogged() {
      return !!store.getters.getToken;
    },
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
