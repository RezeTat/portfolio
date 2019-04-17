<template lang="pug">
  .wrapper
    .wrapper-container
      header.header
        app-header
      section.menu
        tabs
      main.content-container
        router-view(:pageTitle="$route.meta.title")
    .tooltips-container(:class="{'showed' : showed}")
        tooltip(type="error")
            
</template>                          

 <script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    appHeader: () => import("./components/header"),
    tabs: () => import("./components/tabs")
  }
};
</script>

<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

@import "../styles/admin/header.pcss";
@import "../styles/admin/menu.pcss";
@import "../styles/admin/about.pcss";
@import "../styles/admin/work.pcss";
@import "../styles/admin/reviews.pcss";

.tooltips-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 110%);
  visibility: hidden;
  transition: 0.3s;

  &.showed {
    transform: translate(-50%, 0%);
    visibility: visible;
  }
}
</style>







