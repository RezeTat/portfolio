<template lang="pug">
  .skill-container(v-if="editmode === false")
    .skills__card-title__text
      h2 {{category.category}}
      .skills__card-title__buttons
        button.skills__card-title__btn.is-pencil(type="button" @click="editmode = true")
        button.skills__card-title__btn.is-trash(type="button" @click.prevent="removeExistedCategory") 
    hr
    table.skills
      skills-item(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      )
    hr
    .add-skill-wrapper.blocked
      input.elem__new(
        type="text" 
        v-model="skill.title" 
        placeholder="Новый навык"
        :errorText="validation.firstError('skill.new')"
        )
      input.elem__percent(
        type="text" 
        v-model="skill.percent" 
        placeholder="100%"
        :errorText="validation.firstError('skill.percent')"
        )
      button.skills__new-add(type="button" @click="addNewSkill") 

  .skill-container(v-else)
    .skills__card-title__text
      h2 
        input(type="text" v-model="editedCategory.category")
      .skills__card-title__buttons
        button.skills__card-title__btn.is-tick(type="button" @click="saveCategory")
        button.skills__card-title__btn.is-cross(type="button" @click="editmode = false") 
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
import { Validator } from "simple-vue-validator";
import { renderer, getAbsoluteImgPath } from "@/helpers/pictures";
export default {
    mixins: [require("simple-vue-validator").mixin],
    validators: {
    "skill.new": value => {
      return Validator.value(value).required("Заполните скилл");
    },
    "skill.percent": value => {
      return Validator.value(value).required("Заполните проценты");
    },
  },
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
      },
      editmode: false,
      editedCategory: {...this.category}
    }
  },
  components: {
    skillsItem: () => import("components/skills-item.vue")
  },
  methods: {
    ...mapActions('skills', ['addSkill ']), 
    ...mapActions("categories", ["removeCategories", "editCategories"]),
    async removeExistedCategory() {
      try {
        await this.removeCategories(this.category.id);
      } catch (error) {}
    }, 
    async saveCategory() {
      try {
        await this.editCategories(this.editedCategory);
        this.editmode = false;
      } catch (error) {
        alert('Произошла ошибка при сохранении')
      }
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