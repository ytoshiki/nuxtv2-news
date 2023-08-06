<template>
  <div>
    <h1>Hello</h1>
    <!-- {{ data }} -->
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <h2>
          {{ item.title }}
        </h2>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NewsWithId } from "~/store/types";

export default defineComponent({
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {
    newsList(): NewsWithId[] {
      return this.$store.getters["searchNews"];
    },
  },
  async asyncData({ app, store, route }) {
    const apiKey = app.$config.NEWSDATA_API_KEY;
    const res = await app.$axios.get(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${route.query.input}&language=en`
    );
    const data = res.data;

    store.dispatch("searchNewsByKeyword", data);
  },
  watch: {},
  mounted() {},
  methods: {},
  middleware: "newsRedirect",
});
</script>

<style lang="" scoped></style>
