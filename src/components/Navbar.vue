<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top text bg-dark">
      <a class="nav-link text-white" @click="goToHome()" href="#">ClassicModels</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <a class="nav-link" href="#" @click="goToHome()"
              >Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click="goToOrder()"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Ordenes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    routerPush (path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
    goToHome: function () {
      this.$router.replace({ name: 'Home' })
    },
    goToOrder: function () {
      this.$router.replace({ name: 'Ordenes' })
    }
  }
}
</script>
<style scoped>
body {
  padding: 0;
  margin: 0;
}
a:hover {
  background: rgb(68, 70, 68);
  border-radius: 10px;
  transition: .6s;
}

@media screen and (min-width: 1024px){
    a{
        margin-right: 100px;
    }
}
</style>
