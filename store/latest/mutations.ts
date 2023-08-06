import { MutationTree } from "vuex";
import { NewsWithId, LatestNewsState } from "@/store/types";

const mutations: MutationTree<LatestNewsState> = {
  addLatestNews: (state, news: NewsWithId[]) => {
    state.latestNews = news;
  },

  // remove: (state, id: string) => {
  //   state.todos = state.todos.filter((e: Todo) => e.id !== id);
  // },
};

export default mutations;
