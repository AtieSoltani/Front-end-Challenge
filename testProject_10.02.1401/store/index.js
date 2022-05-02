//import axios from "axios";

export const state = () => ({
  categories: {},
  posts: {},
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  getCategories(context) {
    return this.$axios
      .get("https://tarkhineh.yasna.live/api/modular/v1/tagging-labels?slug=blog-category&including[]=image&including[]=title&including[]=slug")
      .then(function (response) {
        const categories = response.data;
        console.log(categories.results)
        context.commit('setCategories', categories)
      })
      .catch(function (error) {
        // handle error
        
        console.log(error);
      });
  },
  getPosts(context) {
    return this.$axios
      .get("https://tarkhineh.yasna.live/api/modular/v1/content-post-lists?type=blog&including[]=id&including[]=title&including[]=image&including[]=synopsis&including[]=published_at&including[]=tagging_labels:tags&including[]=url_encode&including[]=slug&limit=4&locale=fa")
      .then(function (response) {
        const posts = response.data;
        console.log(posts.results)
        context.commit('setPosts', posts)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
}

export const getters = {
  getCategories(state) {
    return state.categories
  },
  getPosts(state) {
    return state.posts
  }
}
