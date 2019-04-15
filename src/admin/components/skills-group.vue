<template lang="pug">
  .skill-container
    .skills__card-title__text
      h2 {{category.category}}
      .skills__card-title__buttons
        button.skills__card-title__btn.is-tick
        button.skills__card-title__btn.is-cross(type="button" @click.prevent="removeExistedCategory")
    hr
    table.skills
      skills-item(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      )
    hr
    .add-skill-wrapper.blocked
      input.elem__new(type="text" v-model="skill.title" placeholder="Новый навык")
      input.elem__percent(type="text" v-model="skill.percent" placeholder="100%")
      button.skills__new-add(type="button" @click="addNewSkill") 
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    category: Object,
    skills: Array,
  },
  data() {
    return {
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    }
  },
  components: {
    skillsItem: () => import("components/skills-item.vue")
  },
  methods: {
    ...mapActions('skills', ['addSkill ']), 
    ...mapActions("categories", ["removeCategories", "editSkill"]),
    async removeExistedCategory() {
      try {
        await this.removeCategory(this.category.id);
      } catch (error) {}
    }, 
    async addNewSkill() {
      try {
        await this.addSkill(this.skill);
      } catch (error) {
        alert('Произошла ошибка при загрузке скиллов') 
      }
    }
  }
};
</script>