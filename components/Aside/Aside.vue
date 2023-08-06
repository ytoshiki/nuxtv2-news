<template>
  <aside class="c-aside">
    <nav>
      <ul>
        <li>
          <nuxt-link to="/" class="is-active">
            <nuxt-img src="icon-home.svg" />
            <span>ホーム</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <nuxt-img src="icon-star-border.svg" />
            <span>お気に入り</span>
          </nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link to="/">
            <nuxt-img src="icon-setting.svg" />
            <span>設定</span>
          </nuxt-link>
        </li> -->
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Aside",
  data() {
    return {
      text: "",
    };
  },
  computed: {},
  mounted() {},
  methods: {},
});
</script>

<style lang="scss" scoped>
.c-aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 22rem;
  height: 100%;
  background: #efefef;

  ul {
    padding: 13.5rem 0 0;
  }

  li {
    padding: 0.4rem 1rem;
  }

  a {
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    border-radius: 10px;

    &.is-active,
    &:hover {
      background: rgba($color: #fff, $alpha: 0.7);
    }

    img {
      flex-shrink: 0;
      margin-right: 1.6rem;
    }

    span {
      font-size: 1.5rem;
    }
  }
}
</style>
