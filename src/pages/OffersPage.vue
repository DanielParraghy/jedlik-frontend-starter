<script setup lang="ts">
import { useManyStore } from "../stores/manyStore";
//import { useAppStore } from "../stores/appStore";
import { onMounted } from "vue";
import { QTableColumn } from "quasar";

const manyStore = useManyStore();
//const appStore = useAppStore();

onMounted(() => {
  manyStore.GetAll();
});

const columns: QTableColumn[] = [
  { name: "kategoriaNev", label: "Kategória", field: "kategoriaNev" },
  { name: "leiras", label: "Leírás", field: "leiras", align: "left" },
  { name: "hirdetesDatuma", label: "Hirdetés dátuma", field: "hirdetesDatuma", align: "left" },
  { name: "tehermentes", label: "Tehermentes", field: "tehermentes", align: "left" },
  { name: "kepUrl", label: "Fénykép", field: "kepUrl", align: "center" },
];
</script>

<template>
  <q-page>
    <q-table :columns="columns" dense :rows="manyStore.documents" title="Ajánlataink" wrap-cells>
      <!-- slot1: -->
      <template #body-cell-tehermentes="props">
        <q-td :props="props">
          <q-badge v-if="props.value" color="green" label="Igen" outline />
          <q-badge v-else color="red" label="Nem" outline />
        </q-td>
      </template>
      <!-- slot2: -->
      <template #body-cell-kepUrl="props">
        <q-td :props="props">
          <q-img class="myImg" :src="props.value" />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<style lang="scss" scoped>
.myImg {
  border-radius: 10px;
  border: 1px solid black;
}
</style>
