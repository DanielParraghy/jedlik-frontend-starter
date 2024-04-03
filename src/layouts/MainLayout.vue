<!-- Material Design Icons: https://materialdesignicons.com/ -->

<script setup lang="ts">
// import { onMounted } from "vue";

// import { useAppStore } from "../stores/appStore";
// const appStore = useAppStore();

// onMounted(() => {
// ...
// });
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="hHh LpR fFf">
      <!-- Main container (DON'T DELETE!) -->
      <q-page-container id="container">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
.active {
  background-color: #44a5f1;
  color: yellow;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.my-title {
  font-size: 10px;
  @media (min-width: 400px) {
    font-size: calc(10px + 0.5vw);
  }
  @media (min-width: 800px) {
    font-size: calc(14px + 0.5vw);
  }
  @media (min-width: 1200px) {
    font-size: calc(18px + 0.5vw);
  }
}
</style>
