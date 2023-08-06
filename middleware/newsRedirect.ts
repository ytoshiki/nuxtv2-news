import { Middleware } from "@nuxt/types";

const newsRedirect: Middleware = ({ store, redirect, route }) => {
  if (!route.query.input) {
    return redirect("/");
  }

  // if (!store.state.searchNews.searchNews.length) {
  //   return redirect("/");
  // }
};

export default newsRedirect;
