<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>


<template class="container">
  <header class="row navbar navbar-expand-lg navbar-light bg-light fixed-top" >
    <img alt="Vue logo" class="col-lg-2 " src="@/assets/logo.svg" width="125" height="125" />


    <h1 class="col-lg-2">Lesní blog</h1>

    <nav class="col-6">
      <div class="container-fluid">
        <div class="row">
        <RouterLink class="col-3 container-fluid nav-item btn btn-success p-3 m-3" to="/">Home</RouterLink>
        <RouterLink class="col-3 container-fluid nav-item btn btn-success p-3 m-3" to="/about">About</RouterLink>
        <RouterLink class="col-3 container-fluid nav-item btn btn-success p-3 m-3" to="/new-article">New Article</RouterLink>
        </div>
      </div>
    </nav>

  </header>

  <div class="row pt-5"></div>
  <div class="row cs_header"></div>


  <RouterView/>
</template>

<style>
  .cs_header {
    background-image: url("https://images.fineartamerica.com/images-medium-large-5/deep-forest-steve-gadomski.jpg");
    background-position:  top center ;
    height: 40vh;
  }
</style>


