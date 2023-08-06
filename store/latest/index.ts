import { Module } from "vuex";
import { RootState, LatestNewsState } from "@/store/types";
import getters from "./getters";
import mutations from "./mutations";

const state: any = {
  latestNews: [],
};

export const latestNews: Module<LatestNewsState, RootState> = {
  state,
  getters,
  actions: {},
  mutations,
};
