<template>
    <div>
        <Navbar />
        <div class="home__bread mt-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                        <a @click="goToHome()" href="#">Home</a>>>
                        <a href="#" @click="goToOrders()">Monitor de Órdenes</a>>>Detalle Orden
                    </li>
                </ol>
            </nav>
        </div>
        <div>
            <h3 class="order__title mr-2 font-weight-bold">Orden #{{ $route.params.order }}</h3>
        </div>

        <div>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active nav__title" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">General</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link nav__title" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Datos Cliente</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link nav__title" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Productos</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="row tab__content w-100">
                        <div class="col-5 col-lg-2 align-left tab__content-title font-weight-bold">
                            N° Orden <br>
                            Monto Orden <br>
                            Cant. Productos <br>
                            Fecha Entrega <br>
                            Vendedor <br>
                            Estado <br>
                            Avance Preparacion
                        </div>
                        <div class="col-6 col-lg-3">
                            {{detalle_orden.orden.num_orden}} <br>
                            {{detalle_orden.orden.monto}} <br>
                            {{detalle_orden.orden.cant_productos}} <br>
                            {{detalle_orden.orden.fecha_entrega}}<br>
                            {{detalle_orden.orden.vendedor}}<br>
                            {{detalle_orden.orden.estado}}<br>
                            <div class="progress">
                                <div data-titulo="Avance" class="progress-bar" role="progressbar" :style="{width: detalle_orden.orden.avance_preparacion*100 +'%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{{detalle_orden.orden.avance_preparacion*100}}%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="row tab__content w-100">
                        <div class="col-5 col-lg-2 align-left tab__content-title font-weight-bold">
                            Nombre <br>
                            RUT <br>
                            Direccion de Entrega <br>
                            Contacto <br>
                            Fono <br>
                            Email
                        </div>
                        <div class="col-6 col-lg-3">
                            {{detalle_orden.cliente.nombre}} <br>
                            {{detalle_orden.cliente.rut_n}}-{{detalle_orden.cliente.rut_dv}} <br>
                            {{detalle_orden.cliente.direccion_entrega}} <br>
                            {{detalle_orden.cliente.contacto}}<br>
                            {{detalle_orden.cliente.fono}}<br>
                            {{detalle_orden.cliente.email}}<br>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row justify-content-around m-0 mt-3 p-4 w-100">
                        <table class="table table-sm ml-3">
                            <thead>
                                <tr>
                                    <th scope="col">Cod. Producto</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Precio Unit.</th>
                                    <th scope="col">Cant. Pedido</th>
                                    <th scope="col">Cant. Pickeado</th>
                                    <th scope="col">Cumplimiento</th>
                                    <th class="text-white" scope="col">Vacio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(items, index) in detalle_orden.productos" :key="index">
                                    <td data-titulo="Cod Prod.">{{ items.cod_prod}}</td>
                                    <td data-titulo="Descripcion">{{ items.descripcion }}</td>
                                    <td data-titulo="Precio Unit">{{ items.precio_unit}}</td>
                                    <td data-titulo="Cant. Pedido">{{ items.cant_pedido }}</td>
                                    <td data-titulo="Cant. Pickeado">{{ items.cant_pickeado }}</td>
                                    <td >
                                        <div class="progress">
                                        <div data-titulo="Avance" class="progress-bar" role="progressbar" :style="{width:(items.cant_pickeado/items.cant_pedido)*100 +'%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td data-titulo ="Marcador" v-if="items.cant_pedido==items.cant_pickeado" ><div class="ball__green text-white">✔</div> </td>
                                    <td data-titulo="Marcador" v-else><div class="ball__blue text-white">?</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
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
    ...mapState(['detalle_orden'])
  },

  methods: {
    goToHome: function () {
      this.$router.replace({ name: 'Home' })
    },
    goToOrders: function () {
      this.$router.replace({ name: 'Ordenes' })
    }
  }
}
</script>

<style scoped>
.home__bread{
    font-size: .8em;
}
.order__title {
  display: flex;
  margin-left: 10px;
  font-size: .9em;
}
.nav__title{
    font-size: .8em;
}
.tab__content{
    font-size: .6em;
}
.tab__content-title{

    text-align: left;
    margin-left: 15px;
}

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

/*** Media Query para ajuste de tabla en mobile ***/
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

@media(min-width:1024px){
    .home__bread{
        font-size: 1em;
    }
    .order__title{
        font-size: 1em;
    }
    .nav__title{
        font-size: 1em;
    }
    .tab__content{
        font-size: 1em;
    }
}
</style>
