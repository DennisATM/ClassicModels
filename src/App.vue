<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import api from '@/Api'

export default {
  name: 'App',
  async created () {
    //  CONSUMO API
    const login = await api.login()
    this.$store.state.login = login

    const dashboard = await api.dashboard()
    this.$store.state.dashboard = dashboard

    const oficinas = await api.oficinas()
    this.$store.state.oficinas = oficinas

    const estados = await api.estados()
    this.$store.state.estados = estados

    const ordenes = await api.ordenes()
    this.$store.state.ordenes = ordenes

    const detalleOrden = await api.detalle_orden()
    this.$store.state.detalle_orden = detalleOrden
  }
}
</script>

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
