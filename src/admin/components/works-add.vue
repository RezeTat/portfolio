<template lang="pug">
    button(
        type="button"
        v-on="$listeners"
    ).work__all-add 
        .work__all-add__title {{title}}
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default: "Добавить работу"
    }
  }
};
</script>
