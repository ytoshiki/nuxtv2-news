<template>
  <div class="c-news-list l-container">
    <ul>
      <LatestNewsItem
        v-for="item in newsList"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :pubDate="item.pubDate"
        :image_url="item.image_url"
        :country="item.country"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LatestNewsItem from "./LatestNewsItem.vue";

export default defineComponent({
  name: "LatestNewsList",
  components: { LatestNewsItem },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    newsList() {
      return this.$store.getters["latestNews"];
    },
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.c-news-list {
  h2 {
    font-size: 2rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
