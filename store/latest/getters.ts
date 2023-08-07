import { GetterTree } from "vuex";
import { LatestNewsState, RootState } from "@/store/types";

const getters: GetterTree<LatestNewsState, RootState> = {
  latestNews: (state: LatestNewsState) => {
    return state.latestNews;
  },
  latestNewsById: (state: LatestNewsState) => (id: string) => {
    const theNews = state.latestNews.find((news) => news.id === id);
    return theNews || null;
  },
};

export default getters;
