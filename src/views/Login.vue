<template>
  <div>
    <div class="logo col col-sm-6 col-lg-3 mt-3">
      <img src="../../public/img/logo.jpg" alt="" class="logo__img" />
    </div>

    <div class="container container-fluid mt-5">
      <div class="row justify-content-center">
        <div class="card mw-100 text-center">
          <div class="card-body">
            <h3>Login Usuarios</h3>
            <form>
              <div class="form-group">
                <label>Usuario</label>
                <input type="text" v-model="user" class="form-control" />
              </div>
              <div class="form-group">
                <label>Contraseña</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <h6 class="alert"> Ingrese sus credenciales de usuario.</h6>
              <button type="button" class="btn btn-primary w-100" @click="goToHome()">Ingresar</button>
            </form>
          </div>
        </div>
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
    ...mapState(['login'])
  },
  methods: {
    goToHome: function () {
      if (this.user === this.login.username && this.password === this.login.id) {
        this.$router.replace({ name: 'Home' })
      } else {
        alert('Datos erroneos, verifique')
      }
    }
  }
}

</script>

<style>
.logo__img {
  width: 100px;
  height: 50px;
  border: 2px solid rgb(10, 10, 10);
  border-radius: 10px;
}

.form__label {
  font-size: 0.9em;
}

.alert{
    font-size: .8em;
}
@media screen and (min-width: 1024px) {
  .logo__img {
    display: flex;
  }
}
</style>
