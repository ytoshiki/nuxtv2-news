import { ActionTree } from "vuex";
import { SearchNewsState, RootState, News } from "@/store/types";
import { v4 as uuidv4 } from "uuid";

const actions: ActionTree<SearchNewsState, RootState> = {
  searchNewsByKeyword: async function ({ commit }, data) {
    try {
      if (data.status === "success" && data.results.length > 0) {
        const newsWithId = data.results.map((news: News) => ({
          ...news,
          id: uuidv4(),
        }));
        commit("addNews", newsWithId);
      }

      return true;
    } catch (error) {}
  },
};

export default actions;
