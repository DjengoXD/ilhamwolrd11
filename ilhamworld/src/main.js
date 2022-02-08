import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://cylbhdlqsmhxgbeghict.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTk4NDU0LCJleHAiOjE5NTg1NzQ0NTR9.UiI0Rz1mq2EYLQTUqGEfIGG2LfCrpbOpL4qUbREyzSY",
  supabaseOptions: {},
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
