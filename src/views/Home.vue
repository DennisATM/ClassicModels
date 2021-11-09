<template>
  <div class="home">
    <Navbar />
    <div class="home__bread ">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>
    </div>
    <Vitrina />
    <dashboard />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Vitrina from '@/components/Vitrina.vue'
import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Vitrina,
    Dashboard
  }

}
</script>
<style scoped>
  .home__bread{

    margin-top: 50px;
  }
</style>
