<template>
  <!-- <div>
    <h1>{{ title }}</h1>
    <div v-if="!!imageUrl">
      <nuxt-img :src="imageUrl" />
    </div>
    <p>{{ content }}</p>
  </div> -->
  <div class="c-news-detail">
    <h1>{{ news.title }}</h1>
    <div class="image-wrapper">
      <img v-if="news.image_url" :src="news.image_url" class="inline-block" />
      <img v-if="!news.image_url" src="/img-default.jpg" class="inline-block" />
    </div>
    <p>{{ news.content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { News } from "~/store/types";

export default defineComponent({
  components: {},
  mixins: [],
  props: {},
  computed: {
    news(): News {
      return this.$store.getters["latestNewsById"](this.$route.params.id);
    },
  },
  watch: {},
  created() {},
  mounted() {
    console.log(this.news.image_url);
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.c-news-detail {
  padding: 3rem 0;
  width: 60%;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  .image-wrapper {
    position: relative;
    overflow: hidden;
    margin-bottom: 4rem;

    &::before {
      content: "";
      display: block;
      padding-top: 50%;
    }
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
