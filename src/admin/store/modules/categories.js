export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    ADD_CATEGORIES: (state, newCategory) => {
      state.categories.push(newCategory);
    },
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    REMOVE_CATEGORIES: (state, deletedCategoryId) => {
      state.categories = state.categories.filter(category => category.id !== deletedCategoryId);
    },
    EDIT_CATEGORIES: (state, editedCategory) => {
      state.categories = state.categories.map(category =>
        category.id === editedCategory.id ? editedCategory : category
      );
    }
  },
  actions: {
    async addNewSkillGroup({ commit }, groupTitle) {
      try {
        const response = await this.$axios.post("/categories", {
          title: groupTitle
        });
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get("/categories");
        commit("SET_CATEGORIES", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeCategories({commit}, categoryId){
      try {
        const response = await this.$axios.delete(`/categorys/${categoryId}`);
        commit("REMOVE_CATEGORIES", categoryId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async editCategories({ commit }, category) {
      try {
        const response = await this.$axios.post(`/categoris/${category.id}`, category);
        commit('EDIT_CATEGORIES', response.data.category);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

  }
};
