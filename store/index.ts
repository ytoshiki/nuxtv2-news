import Vuex, { createLogger } from "vuex";
import { searchNews } from "./search";
import { latestNews } from "./latest";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      searchNews,
      latestNews,
    },
    plugins: [createLogger()],
    actions: {
      nuxtServerInit(vuexContext, context) {
        const apiKey = context.app.$config.NEWSDATA_API_KEY;
        return context.app.$axios
          .$get(`https://newsdata.io/api/1/news?apikey=${apiKey}&language=en`)
          .then((data: any) => {
            vuexContext.commit("addLatestNews", data.results);
          })
          .catch((e: any) => context.error(e));
      },
    },
  });
};

export default createStore;
