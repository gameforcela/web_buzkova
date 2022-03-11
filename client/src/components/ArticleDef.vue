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

<template class="container">
  <div class="col-12 d-grid gap-5">
    <h3 class="text-center">{{ title1 }}</h3>
      <span>
          <img  src = "{{picture_in}}" class="rounded mx-auto d-block img-fluid">
      </span>
      <span class="fw-light">
        <div class="ps-5">
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
