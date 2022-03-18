<script>
import TheWelcome from '@/components/TheWelcome.vue';
import { RouterLink, RouterView } from 'vue-router';
import ArticleDef from "@/components/ArticleDef.vue";

export default {
  components: {ArticleDef},
  data() {
    return {
      articles: [
        {
          image: 'https://picsum.photos/seed/picsum/500',
          title: "Title",
          date: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
        {
          image: 'https://picsum.photos/seed/picsum/500',
          title: "Title",
          date: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
        {
          image: 'https://picsum.photos/seed/picsum/500',
          title: "Title",
          date: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
      ]
    }
  }
}
</script>

<template>
  <main class="p-3 mb-2 bg-dark text-white bg-opacity-80 d-grid gap-5">

    <div class="position-relative offset-1 row-cols-7 p-3 mb-2 bg-success" v-for="article in articles">
      <ArticleDef :title="article.title" :date="article.date" :text="article.text" :image="article.image"></ArticleDef>
      <RouterLink class="position-absolute top-100 start-50 translate-middle mt-4 btn btn-success" to="/article">Číst dále</RouterLink>
    </div>
   </main>
</template>
