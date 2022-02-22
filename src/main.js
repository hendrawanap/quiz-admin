import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'
// import { initializeApp } from "firebase/app";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

Vue.config.productionTip = false
Vue.prototype.$apiAddress = process.env.VUE_APP_API_ADDRESS;

// const firebaseConfig = {
//   apiKey: "AIzaSyBcf4NzbrlO60L2zl6IY7O0toFQAfMrO5U",
//   authDomain: "quiz-app-99856.firebaseapp.com",
//   projectId: "quiz-app-99856",
//   storageBucket: "quiz-app-99856.appspot.com",
//   messagingSenderId: "713518761293",
//   appId: "1:713518761293:web:8dc290ed97ff7df663e304",
//   measurementId: "G-840XFJT30B"
// };

// const app = initializeApp(firebaseConfig);
// Vue.prototype.$getDownloadURL = (url) => getDownloadURL(ref(getStorage(app), url));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
