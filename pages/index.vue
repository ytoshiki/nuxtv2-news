<template>
  <div>
    <NewsSearchForm />
    <LatestNewsList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NewsSearchForm from "~/components/Form/NewsSearchForm.vue";
import LatestNewsList from "~/components/News/latest/LatestNewsList.vue";
import SearchNewsList from "~/components/News/search/SearchNewsList.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    NewsSearchForm,
    SearchNewsList,
    LatestNewsList,
  },
  async asyncData({ $axios }) {
    try {
      const data: any = await $axios.$get("api");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
});
</script>
