<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  title1: {
    type: String,
    required: true
  },
  picture_in: {
    type: String,
    required: true
  }

})


</script>

<template>
  <div>
    <h3 class="col-1">{{ title1 }}</h3>
      <span>
          <img  :src = "picture_in" class="rounded mx-auto d-block img-fluid col-2 float-start  ">
      </span>
      <span class="fw-light">
        <div class="ps-5 col-9 float-end">
          {{ msg }}
        </div>
      </span>
  </div>
</template>

<script>
export default {
  name: "ArticleDef"
}
</script>

<style>


</style>
