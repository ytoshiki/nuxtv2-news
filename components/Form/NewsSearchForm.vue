<template>
  <div class="c-search-form">
    <form>
      <div class="field">
        <button class="btn-search" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            ></path>
          </svg>
        </button>
        <input v-model="input" />
        <button class="btn-submit" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            ></path>
          </svg>
        </button>
        <!-- <button @click="searchNews">search</button> -->
      </div>
    </form>
    <div class="suggestion-wrap">
      <span>travel</span>
      <span>football</span>
      <span>shopping</span>
      <span>business</span>
      <span>book</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsSearchForm",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      input: "",
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    searchNews() {
      console.log("clicked");

      this.$router.push(`/news?input=${this.input}`);

      // this.$store.dispatch("searchNewsByKeyword", this.input).then((status) => {
      //   if (status === true) {
      //     this.$router.push("/news");
      //   }
      // });
    },
  },
});
</script>

<style lang="scss" scoped>
.c-search-form {
  padding: 2rem 0 3rem;
  width: 100%;
  max-width: 50rem;
  margin: auto;
  // display: flex;
  // align-items: center;
  // justify-content: center;

  .field {
    position: relative;
    margin-bottom: 1.2rem;
    border-radius: 34px;
    overflow: hidden;
    border: 1px solid #666;
  }

  input {
    height: 40px;
    width: 500px;
    background: 0 0;
    border: 0;
    background: #fff;
    display: block;
    padding: 10px 32px 10px 60px;
    font-size: 18px;
    color: #222;

    outline: none;
  }

  .btn-search {
    width: 70px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: 0;
    height: 100%;
    background: 0 0;
    border: 0;
    padding: 0;
    cursor: pointer;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;

    svg {
      fill: #a9a9a9;
      width: 30px;
      height: 30px;
      transition: all 0.2s ease-out, color 0.2s ease-out;
    }

    &:hover {
      svg {
        fill: #666;
      }
    }
  }

  .btn-submit {
    background: #666;
    width: 70px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    right: 0;
    height: 100%;
    border: 0;
    top: 0;
    padding: 0;
    cursor: pointer;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;

    svg {
      fill: #fff;
      width: 30px;
      height: 30px;
      transition: all 0.2s ease-out, color 0.2s ease-out;
    }
  }

  .suggestion-wrap {
    display: block;
    span {
      font-size: 1.2rem;
      font-family: helvetica, sans-serif;
      display: inline-block;
      background: rgba(0, 0, 0, 0.6);
      padding: 0 14px;
      line-height: 27px;
      color: #fff;
      border-radius: 16px;
      margin-right: 8px;
      margin-bottom: 10px;
    }
  }
}
</style>
