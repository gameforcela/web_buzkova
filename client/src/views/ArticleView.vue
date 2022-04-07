<script>
import ArticleDef from "@/components/ArticleDef.vue";
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    ArticleDef
  },
  data() {
    return {
      article: {
        id: null,
        title: null,
        date: null,
        text: null,
        image: null
      }
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.article = await this.getData(id);
  },
  methods: {
    async getData(id){
      const res = await fetch(`http://localhost:3000/articles/${id}`,{method: 'GET'});
      return res.json();
    }
  }
}
</script>
<template >
  <div  class="p-3 mb-2 bg-dark text-white bg-opacity-80 position-relative row">

      <ArticleDef :text = "article.text" :title = "article.title" :image="article.image"> </ArticleDef>
      <RouterLink class="position-absolute top-100 start-50 translate-middle mt-4 btn btn-success" to="/">Zpět</RouterLink>

  </div>
</template>

