<template lang="pug">
  .skill-container
    input(type="text" v-model="skillTitle" placeholder="Название новой группы").skill-input
    button.skills__card-title__btn.is-tick(type="button" @click="addSkillGroup")
    hr
    br 
    br
    hr
    .add-skill-wrapper.blocked
      input(type="text" placeholder="Добавить скилл")
      button.skills__new-add(type="button")
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      skillTitle: ""
    };
  },
  methods: {
    ...mapActions("categories", ["addNewSkillGroup"]),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";
      } catch (error) {
        alert(error.message)
      }
    }
  }
};
</script>


<style lang="postcss" scoped>
.add-skill-wrapper.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>