<template>
  <div>
    <Aside />
    <div class="l-main">
      <nuxt />
    </div>
  </div>
</template>

<script>
// import TheHeader from '@/components/Navigation/TheHeader'
// import TheSidenav from '@/components/Navigation/TheSidenav'

import Aside from "~/components/Aside/Aside.vue";

export default {
  components: {
    Aside,
  },
};
</script>

<style lang="scss" scoped></style>
