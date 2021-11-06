import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import firebase from "firebase";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBLCgK0O88qw8_EVBgDRmnduTURGE3AT_g",
  authDomain: "rss-reader-2207.firebaseapp.com",
  projectId: "rss-reader-2207",
  storageBucket: "rss-reader-2207.appspot.com",
  messagingSenderId: "602631679356",
  appId: "1:602631679356:web:f1bc80b12f7f22205888f9",
  measurementId: "G-XY489WD6PC"
};
// Initialize Firebase
export var app = initializeApp(firebaseConfig);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
