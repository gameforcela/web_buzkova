<script>
import { RouterLink, RouterView } from 'vue-router';
import ArticleDef from "@/components/ArticleDef.vue";

export default {
  components: {ArticleDef},
  data() {
    return {
      articles: [ ]
    }
  },
  async created(){
    const res = await fetch('http://localhost:3000/articles', {method: 'GET'});
    console.log(res);
    this.articles = await res.json();
  }
}
</script>

<template>
  <main class="p-3 mb-2 bg-dark text-white bg-opacity-80 d-grid gap-5">

    <div class="position-relative offset-1 row-cols-7 p-3 mb-2 bg-success" v-for="article in articles">
      <ArticleDef :title="article.title" :date="article.date" :text="article.text" :image="article.image"></ArticleDef>
      <RouterLink class="position-absolute top-100 start-50 translate-middle mt-4 btn btn-success" :to="`/article/${article.id}`">Číst dále</RouterLink>
    </div>
   </main>
</template>
