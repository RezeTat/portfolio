const reviews = {
    namespaced: true,
    state:{
      reviews: [],
      editedReview: {}
    },
    mutations:{
      ADD_REVIEW: (state, newReview) =>{
        state.reviews.push(newReview);
      },
      SET_CURRENT_REVIEW: (state, reviews) =>{
        state.reviews = reviews;
      },
      REMOVE_REVIEW: (state, deletedReviewId) =>{
        state.reviews = state.reviews.filter(review => review.id !== deletedReviewId);
      },
      EDIT_REVIEW: (state, editedReview) =>{
        state.reviews = state.reviews.map(review => review.id === editedReview.id ? editedReview : review);
      },
    },
    actions:{
      async addReview({commit}, review){
        const formData = new FormData();
        formData.append('author', review.author);
        formData.append('photo', review.photo);
        formData.append('occ', review.occ);
        formData.append('text', review.text);
        try {
          const response = await this.$axios.post('/reviews', formData);
          commit('ADD_REVIEW', response.data);
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );        
        }
      },
      async fetchReviews({commit}, review){
        try {
          const response = await this.$axios.get('/reviews/132', review);
          commit('SET_CURRENT_REVIEW', response.data.reverse());
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );        
        }
      },
      async removeReview({commit}, reviewID){
        try {
          const response = await this.$axios.delete(`/reviews/${reviewID}`);
          commit('REMOVE_REVIEW', reviewID);
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );        
        }
      },
      async editReview({commit}, review){
        const formData = new FormData();
        formData.append('author', review.author);
        formData.append('photo', review.photo);
        formData.append('occ', review.occ);
        formData.append('text', review.text);
        try {
          const response = await this.$axios.post(`/reviews/${review.id}`, formData);
          commit('EDIT_REVIEW', response.data.review);
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );        
        }
      } 
    }
  }
  
  export default reviews;