  <q-page>
    <div class="row justify-center text-center">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 q-gutter-md">
        <h4 class="q-mt-xl">Új hirdetés elküldése</h4>
        <q-select
          clearable
          dense
          label="Ingatlan kategóriája"
          outlined
        />
        <q-input
          dense
          label="A hírdetés dátuma"
          outlined
          type="date"
        />
        <q-input dense label="Ingatlan leírása" outlined type="textarea" />
        <q-checkbox dense label="Tehermentes ingatlan" />
        <q-input dense label="Fénykép az ingatlanról" outlined type="url" />
        <q-btn dense class="q-mr-md" color="green" label="Mentés" no-caps />
        <q-banner class="text-white bg-red" inline-actions rounded>
          <span></span>
          <template #action>
            <q-btn flat icon="close" round />
          </template>
        </q-banner>
      </div>
    </div>
  </q-page>
