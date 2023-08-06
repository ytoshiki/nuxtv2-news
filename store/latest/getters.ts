import { GetterTree } from "vuex";
import { LatestNewsState, RootState } from "@/store/types";

const getters: GetterTree<LatestNewsState, RootState> = {
  latestNews: (state: LatestNewsState) => {
    return state.latestNews;
  },
};

export default getters;
