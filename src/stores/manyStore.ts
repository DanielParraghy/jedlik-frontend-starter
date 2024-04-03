import { defineStore } from "pinia";
import { Notify, Loading } from "quasar";
import { api } from "src/boot/axios";

//import { useAppStore } from "./appStore";
//const appStore = useAppStore();

// === INTERFACES ===
// Convert JSON document to TS Interface quickly: https://transform.tools/json-to-typescript

// Don't forget the question marks (?) after field names!
export interface IMany {
  id?: number;
  kategoriaId?: number;
  kategoriaNev?: string;
  leiras?: string;
  hirdetesDatuma?: string;
  tehermentes?: boolean;
  kepUrl?: string;
}

interface IState {
  document: IMany; // use for create, update, delete and store one document
  documentOld: IMany; // use for only edit (diff and restore)
  documents: IMany[]; // use for store API responses
}

export const useManyStore = defineStore({
  id: "manyStore",
  state: (): IState => ({
    document: {},
    documentOld: {},
    documents: [],
  }),
  getters: {},
  actions: {
    async GetAll(): Promise<void> {
      Loading.show();
      this.documents = [];
      api
        .get("/api/ingatlan")
        .then((res) => {
          Loading.hide();
          if (res?.data) {
            this.documents = res.data;
          }
        })
        .catch((error) => {
          ShowErrorWithNotify(error);
        });
    },

    async Create(): Promise<void> {
      if (this.document) {
        Loading.show();
        api
          .post("/api/ujingatlan", this.document)
          .then((res) => {
            Loading.hide();
            if (res?.data) {
              this.GetAll(); // refresh dataN with read all data again from backend
              Notify.create({
                message: `New document with id=${res.data.id} has been saved successfully!`,
                color: "positive",
              });
              // router.push("/page_path");
            }
          })
          .catch((error) => {
            ShowErrorWithNotify(error);
          });
      }
    },
  },
  // all "state" data is stored in browser session store:
  persist: {
    enabled: true,
  },
});

Notify.setDefaults({
  position: "top",
  textColor: "yellow",
  timeout: 3000,
  actions: [{ icon: "close", color: "white" }],
});

function ShowErrorWithNotify(error: any): void {
  Loading.hide();
  let msg = "Hiba!";

  // The optional chaining (?.) operator accesses an object's property or calls a function.
  // If the object accessed or function called is undefined or null,
  // it returns undefined instead of throwing an error.
  if (error?.response?.data?.status) {
    msg += ` (${error.response.data.status}):`;
  } else if (error?.response?.status) {
    msg += ` (${error.response.status}):`;
  } else {
    msg += ":";
  }

  if (error?.response?.data?.message) {
    msg += ` ${error.response.data.message}`;
  } else if (error?.response?.message) {
    msg += ` ${error.response.message}`;
  } else if (error?.request && error?.message) {
    msg += ` No response(${error.message})`; // if no response
  } else if (error?.message) {
    msg += ` Message(${error.message})`;
  } else {
    msg += " Unknow error message";
  }
  Notify.create({ message: msg, color: "negative" });
}
