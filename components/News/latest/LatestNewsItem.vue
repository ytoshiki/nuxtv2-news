<template>
  <li class="c-news-item">
    <nuxt-link to="/news/latest/id">
      <div class="image-wrapper">
        <nuxt-img v-if="image_url" :src="image_url" class="inline-block" />
        <nuxt-img
          v-if="!image_url"
          src="img-default.jpg"
          class="inline-block"
        />
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="meta">
        <span class="country">
          {{ displayCountry }}
        </span>
        <span class="date">
          {{ displayDate }}
        </span>
      </div>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LatestNewsItem",
  components: {},
  mixins: [],
  props: {
    id: String,
    title: String,
    description: String,
    content: String,
    pubDate: String,
    image_url: String,
    country: Array,
  },
  data() {
    return {};
  },
  computed: {
    displayCountry() {
      return this.country ? this.country[0] : "";
    },
    displayDate() {
      if (this.pubDate) {
        return (this.pubDate as any).match(/^\d{4}-\d{2}-\d{2}/)[0];
      }

      return "";
    },
  },
  watch: {},
  mounted() {},
  methods: {},
});
</script>

<style lang="scss" scoped>
.c-news-item {
  width: calc((100% / 3) - (16px * 2 / 3));
  list-style: none;
  margin-bottom: 4rem;

  &:not(:nth-child(3n + 1)) {
    margin-left: 16px;
  }

  .image-wrapper {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1rem;

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

  h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    font-size: 1.5rem;
    letter-spacing: 0;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
    font-size: 1.3rem;
    letter-spacing: 0;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  .meta {
    display: flex;
    justify-content: space-between;
  }

  .country {
    position: relative;
    font-size: 1.2rem;
    padding-left: 6px;
    border-left: 2px solid red;
  }

  .date {
    font-size: 1.1rem;
  }
}
</style>
