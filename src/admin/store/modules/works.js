const works = {
    namespased: true,
    state:{
        works:[],
        editedWork: {},
    },
    mutations:{
        ADD_WORK: (state, newWork) =>{
            state.works.push(newWork);
        },
        SET_CURRENT_WORK:(state, works)=>{
            state.works=works
        },
        REMOVE_WORK: (state, deletedWorkId) =>{
            state.works = state.works.filter(work =>work.id !== deletedWorkId);
          },
        EDIT_WORK: (state, editedWork) =>{
            state.works = state.works.map(work => work.id === editedWork.id ? editedWork : work);
          }
    },
    actions:{
        async addNewWork({commit}, work){
            formData.append('title', work.title);
            formData.append('link', work.link);
            formData.append('desc', work.description);
            formData.append('techs', work.techs);
            formData.append('photo', work.photo);
            try{
                const response = await this.$axios.post('/works', formData)
                commit('ADD_WORK', response.data);
                return response
            } catch(error){
                throw new Error(
                    error.response.data.error || error.response.data.message
                );
            }
        },
        async fetchWorks({commit}, work){
            try{
                const response = await this.$axios.get('/works/132', work)
                commit('SET_CURRENT_WORK', response.data)
                return response
            } catch(error){
                alert('error')
            }
        },
        async removeWork({ commit }, workId) {
            try {
              const response = await this.$axios.delete(`/works/${workId}`);
              commit("REMOVE_WORK", workId);
              return response;
            } catch (error) {
              generateStdError(error);
            }
        },
        async editWork({ commit }, work) {
            formData.append('title', work.title);
            formData.append('link', work.link);
            formData.append('desc', work.description);
            formData.append('techs', work.techs);
            formData.append('photo', work.photo);
            try {
              const response = await this.$axios.post(`/works/${work.id}`, formData);
              commit('EDIT_WORK', response.data.work);
              return response;
            } catch (error) {
              throw new Error(
                error.response.data.error || error.response.data.message
              );
            }
          },
    }
};
export default works;