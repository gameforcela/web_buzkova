<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }

})


</script>

<template>
  <div>
    <h3 class="col-1">{{ title }}</h3>
    <h6 class="col-1">{{date}}</h6>
      <span>
          <img  :src = "image" class="rounded mx-auto d-block img-fluid col-2 float-start  ">
      </span>
      <span class="fw-light">
        <div class="ps-5 col-9 float-end">
          {{ text }}
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
