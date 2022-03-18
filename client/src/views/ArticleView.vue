<script>
import ArticleDef from "@/components/ArticleDef.vue";
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    ArticleDef
  }
}
</script>
<template >
  <div  class="p-3 mb-2 bg-dark text-white bg-opacity-80 position-relative row">

      <ArticleDef text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat.
            Integer pellentesque quam vel velit. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            Praesent dapibus. Phasellus et lorem id felis nonummy placerat. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nam quis nulla. Phasellus faucibus
            molestie nisl. Pellentesque pretium lectus id turpis. In rutrum. Aenean id metus id velit ullamcorper pulvinar.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Aliquam id dolor.
            Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer pellentesque quam vel velit.afgdfsvsvsedv" title="ČLÁNEK 1" image="https://wallpaperaccess.com/full/2909568.jpg"> </ArticleDef>
      <RouterLink class="position-absolute top-100 start-50 translate-middle mt-4 btn btn-success" to="/">Zpět</RouterLink>

  </div>
</template>

