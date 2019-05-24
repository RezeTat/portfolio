import Vue from "vue"
import Flickity from 'vue-flickity';
import axios from 'axios';

axios.defaults.baseURL = 'https://webdev-api.loftschool.com';

new Vue({
    el:'#reviews-component',
    template: "#reviews-container",
  components: {
    Flickity
  },
  
  data() {
    return {
      reviews: [],
      render: false,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        groupCells: true,
        wrapAround: true,
        resize: true
      }
    }
  },

  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },
    makeArrWithRequiredPathImages(data) {
      const baseUrl = axios.defaults.baseURL;
      return data.map(item => {
          const requiredPic = `${baseUrl}/${item.photo}`;
          item.photo = requiredPic;

          return item;
      });
    },
    async fetchReviews() {
        try {
            const response = await axios.get('/reviews/132');
            this.reviews = response.data;
            return response;
        } catch (error) {
            throw new Error(
                error.response.data.error || error.response.data.message
            )

        }
    },
  },
  async created() {
    try {
        await this.fetchReviews();
    } catch (error) {
        console.log('error on load works');
    }
    this.reviews = this.makeArrWithRequiredPathImages(this.reviews);
    this.render = true;
}
});


