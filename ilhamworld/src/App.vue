<template>
  <div id="app">
    <div id="nav">
     
<navigasi/>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: { navigasi },
  setup() {
    
  },
})
</script>
<script>

import navigasi from './components/navigasi.vue'
export default {
  components: {
    navigasi,
    
  },
}
</script>
