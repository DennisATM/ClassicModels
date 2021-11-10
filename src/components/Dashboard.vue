<template>
  <div class="row justify-content-center w-100">
    <div class="col col-sm-12 col-lg-6">
      <div class="row justify-content-center border border-info mt-3 ml-3">
        <div class="col-4 mt-2">
          <div class="row justify-content-center container__circle">
            <div class="circle">
                <h6 class="circle__text">75%</h6>
            </div>
          </div>
          <div>
            <a href="#"><h6 class="circle__subtitle">Ver Detalle</h6></a>
          </div>
        </div>
        <div class="col-8">
          <div class="row justify-content-center dash__title">
            {{ dashboard.kpis[0].nombre }}
          </div>
          <div class="row justify-content-center">
            <div class="col">
              <h4>
                {{ dashboard.kpis[0].entregadas }} <br />
                <span class="dash__subtitle">Órdenes Entregadas</span>
              </h4>
            </div>
            <div class="col">
              <h4>
                {{ dashboard.kpis[0].pendientes }} <br />
                <span class="dash__subtitle">Órdenes Pendientes</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center m-3 w-100">
        <h5>Ultimas Ordenes</h5>
        <table class="table table-sm ml-3">
          <thead>
            <tr>
              <th scope="col">N° Órden</th>
              <th scope="col">Cliente</th>
              <th scope="col">Fecha Entrega</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(items, index) in dashboard.utimas_ordenes" :key="index">
              <td>{{ items.num_orden }}</td>
              <td>{{ items.cliente }}</td>
              <td>{{ items.fecha_entrega }}</td>
              <td>{{ items.estado }}</td>
              <td>
                <button type="button" class="btn btn-info">Ver Detalle</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col col-sm-12 col-lg-6">
      <div class="row justify-content-center border border-info mt-3 ml-3">
        <div class="col-4 mt-2">
          <div class="row justify-content-center container__circle">
            <div class="circle2">
                <h6 class="circle__text">2%</h6>
            </div>
          </div>
          <div>
            <a href="#"><h6 class="circle__subtitle">Ver Detalle</h6></a>
          </div>
        </div>
        <div class="col-8">
          <div class="row justify-content-center dash__title">
            {{ dashboard.kpis[1].nombre }}
          </div>
          <div class="row justify-content-center">
            <div class="col">
              <h4>
                {{ dashboard.kpis[1].totales }} <br />
                <span class="dash__subtitle">Órdenes Totales</span>
              </h4>
            </div>
            <div class="col">
              <h4>
                {{ dashboard.kpis[1].atrasadas }} <br />
                <span class="dash__subtitle">Órdenes Atrasadas</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center m-3 w-100">
        <h5>Ultimas Devoluciones</h5>
        <table class="table table-sm ml-3">
          <thead>
            <tr>
              <th scope="col">N° Órden</th>
              <th scope="col">Cliente</th>
              <th scope="col">Fecha Devolución</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(items, index) in dashboard.ultimas_devoluciones" :key="index">
              <td>{{ items.num_orden }}</td>
              <td>{{ items.cliente }}</td>
              <td>{{ items.fecha_entrega }}</td>
              <td>
                <button type="button" class="btn btn-info">Ver Detalle</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['dashboard'])
  }
}
</script>

<style scoped>
.dash__title{
    font-size: .8em;
}

.dash__subtitle {
  font-size: 0.4em;
}

.table {
  font-size: .6em;
}
.btn {
  font-size: 0.8em;
  padding: 1px 2px;
  color: blue;
}

.container__circle{
    margin-top: 10px;
}

.circle {
  width: 4em;
  height: 4em;
  border-top: 0.5em solid #026818;
  border-right: 0.5em solid transparent;
  border-bottom: 0.5em solid #026818;
  border-left: 0.5em solid #026818;
  border-radius: 50%;
}

.circle2 {
  width: 4em;
  height: 4em;
  border-top: 0.5em solid transparent;
  border-right: 0.5em solid #026818;
  border-bottom: 0.5em solid transparent;
  border-left: 0.5em solid transparent;
  border-radius: 50%;
}

.circle__text {
  margin-top: 15px;
  left: 40px;
}

.circle__subtitle {
  font-size: 0.6em;
}

@media(min-width: 1023px) {
    .dash__title{
        font-size: 1.25em;
    }
    .dash__subtitle{
        font-size: .8rem;
    }
    .table{
        font-size: 1em;
    }

    .container__circle{
        margin-top: -15px;
    }
    .circle{
        margin-top: 20px;
    }

    .circle2{
        margin-top: 20px;
    }

    .btn {
        font-size: .9em;
        padding: 2px 3px;
    }
}
</style>
