<template>
    <div>
        <Navbar />
        <div class="home__bread mt-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                       <a @click="goToHome()" href="#">Home</a>>>Monitor de Órdenes
                    </li>
                </ol>
            </nav>
        </div>
        <h5>Monitor de Órdenes</h5>
        <div class="row border border-info justify-content-around ml-0 p-4 w-100">
            <div class="col-sm-12 col-lg-2">
                <label>Oficina</label>
                <select class="form-control">
                    <option selected>Seleccione...</option>
                    <option v-for="(items, index) in oficinas.oficinas" :key="index">
                        {{ items.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-12 col-lg-2">
                <label for="inputState">Estado</label>
                <select id="inputState" class="form-control">
                    <option selected>Seleccione...</option>
                    <option v-for="(items, index) in estados.estados" :key="index">
                        {{ items.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-12 col-lg-2">
                <label for="inputState">Fecha de entrega</label>
                <input type="date" class="form-control" name="" id="">
            </div>
            <div class="col-sm-12 col-lg-2">
                <label for="inputState" class="text-white">Vacio</label>
                <input type="date" class="form-control"  id="">
            </div>
            <div class="col-sm-12 col-lg-2 pt-4">
                <button class="form-control text-white btn btn-primary">Buscar</button>
            </div>
        </div>
        <div class="row justify-content-around m-0 mt-3 p-4 w-100">
          <table class="table table-sm ml-3">
          <thead>
            <tr>
              <th scope="col">N° Orden</th>
              <th scope="col">Cliente</th>
              <th scope="col">Monto Orden</th>
              <th scope="col">Cant. Productos</th>
              <th scope="col">Fecha Entrega</th>
              <th scope="col">Avance Preparacion</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(items, index) in ordenes.ordenes" :key="index">
              <td data-titulo="N° orden">{{ items.num_orden }}</td>
              <td data-titulo="Cliente">{{ items.cliente }}</td>
              <td data-titulo="Monto">{{ items.monto }}</td>
              <td data-titulo="Cantidad">{{ items.cant_productos }}</td>
              <td data-titulo="F.Entrega">{{ items.fecha_entrega }}</td>
              <td >
                <div class="progress">
                  <div data-titulo="Avance" class="progress-bar" role="progressbar" :style="{width:items.avance_preparacion*100 +'%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{{items.avance_preparacion*100}}%</div>
                </div>
              </td>
              <td data-titulo="Estado">{{ items.estado }}</td>
              <td data-titulo ="Marcador" v-if="items.estado==='Entregado'"><div class="ball__green text-white">✔</div> </td>
              <td data-titulo="Marcador" v-else><div class="ball__blue text-white">?</div></td>
              <td data-titulo="Accion">
                <button type="button" class="btn btn-info" @click="detailOrder(items.num_orden)">Ver Detalle</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Navbar
  },

  computed: {
    ...mapState(['oficinas', 'estados', 'ordenes'])
  },

  methods: {
    goToHome: function () {
      this.$router.replace({ name: 'Home' })
    },
    detailOrder: function () {
      this.$router.push({
        name: 'DetailOrder',
        params: {
          order: '123456'
        }
      })
    }
  }

}
</script>

<style scoped>

  .ball__green{
    background: green;
    border-radius: 30px;
    width: 20px;
    height: 20px;
  }

  .ball__blue{
    background: blue;
    border-radius: 30px;
    width: 20px;
    height: 20px;
  }

/*** Media Query para ajuste de tabla en Mobile ***/
@media (max-width: 30em){
        table{

            font-size: .90em;
        }
        table tr{
            display:flex;
            flex-direction: column;
            margin-bottom: 1em;
        }
        table td[data-titulo]{
            display: flex;
        }
        table td[data-titulo]::before{
            content: attr(data-titulo);
            width: 150px;
            color:silver;
            font-weight: bold;

        }
        table thead{
            display:none
        }
 }
</style>
