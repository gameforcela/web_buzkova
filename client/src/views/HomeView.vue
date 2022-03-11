<script>
import TheWelcome from '@/components/TheWelcome.vue';
import { RouterLink, RouterView } from 'vue-router';
import ArticleDef from "@/components/ArticleDef.vue";

export default {
  components: {
    ArticleDef
  },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    onClick() {
      this.count++;
    }
  }
}
</script>

<template>
  <main class="p-3 mb-2 bg-dark text-white bg-opacity-80 d-grid gap-5">
    <button type="button" @click="onClick" class="btn btn-success">Count: {{ count }}</button>
    <div class="position-relative">
    <ArticleDef msg="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat.
          Integer pellentesque quam vel velit. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Praesent dapibus. Phasellus et lorem id felis nonummy placerat. Sed ut perspiciatis unde omnis iste
          natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nam quis nulla. Phasellus faucibus
          molestie nisl. Pellentesque pretium lectus id turpis. In rutrum. Aenean id metus id velit ullamcorper pulvinar.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Aliquam id dolor.
          Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer pellentesque quam vel velit." title1="ČLÁNEK PRVNÍ" picture_in='https://cdn.megapixel.cz/gallery/w1380h900/1/197071.jpg?v=1452278254'> </ArticleDef>
    <RouterLink class="position-absolute top-100 start-50 translate-middle pt-4" to="/article">Číst dále</RouterLink>
    </div>

    <div class="position-relative">
    <ArticleDef msg = "tesque quam vel velit. Temporibus autem quibusdam et aut officiis debitis aut
      rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
      Praesent dapibus. Phasellus et lorem id felis nonummy placerat. Sed ut perspiciatis unde omnis iste
      natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nam quis nulla. Phasellus faucibus
      molestie nisl. Pellentesque pretium lectus id turpis. In rutrum. Aenean id metus id velit ullamcorper pulvinar.
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu" title1="ČLÁNEK DRUHÝ" picture_in = 'https://blog.inpage.cz/obrazek/3/kitten-jpg/'> </ArticleDef>
    <RouterLink class="position-absolute top-100 start-50 translate-middle pt-4" to="/article">Číst dále</RouterLink>

    </div>

    <div class="position-relative">
    <ArticleDef msg = "tesque quam vel velit. Temporibus autem quibusdam et aut officiis debitis aut
      rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
      Praesent dapibus. Phasellus et lorem id felis nonummy placerat. Sed ut perspiciatis unde omnis iste
      natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nam quis nulla. Phasellus faucibus
      molestie nisl. Pellentesque pretium lectus id turpis. In rutrum. Aenean id metus id velit ullamcorper pulvinar.
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu" title1="ČLÁNEK TŘETÍ" picture_in = 'https://blog.inpage.cz/obrazek/3/kitten-jpg/'> </ArticleDef>
    <RouterLink class="position-absolute top-100 start-50 translate-middle pt-4" to="/article">Číst dále</RouterLink>
    </div>
  </main>
</template>
