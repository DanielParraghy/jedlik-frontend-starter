<script setup lang="ts">
// import { useRouter } from "vue-router";

// const router = useRouter();
</script>

<template>
  <q-page>
    <div class="absolute-top transparent text-center q-mt-md">
      <h2 style="color: black; font-size: 4vw">Á.L.B. Ingatlanügynökség</h2>
    </div>
    <div class="row absolute-bottom transparent justify-around q-mb-lg">
      <q-btn color="blue" label="Nézze meg kínálatunkat!" no-caps to="/offers" />
      <q-btn color="blue" label="Hirdessen nálunk!" no-caps />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 3vw;
}

.q-page {
  background-image: url("../assets//real-estate-agent.png");
  background-size: cover;
}
</style>
