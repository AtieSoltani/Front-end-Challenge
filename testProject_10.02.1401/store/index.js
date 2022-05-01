//import axios from "axios";

export const state = () => ({
  posts: {},
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  getPosts(context) {
    return this.$axios
      .get("https://tarkhineh.yasna.live/api/modular/v1/tagging-labels?slug=blog-category&including[]=image&including[]=title&including[]=slug")
      .then(function (response) {
        const posts = response.data;
        context.commit('setPosts', posts)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
}

export const getters = {
  getPosts(state) {
    return state.posts
  }
}
