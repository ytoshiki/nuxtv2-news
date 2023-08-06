<template>
  <div class="c-news-list"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LatestNewsList",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },

  watch: {},
  mounted() {
    console.log(this.$store.getters["latestNews"]);
  },
  methods: {},
});
</script>

<style lang="scss" scoped></style>
