<template lang="pug">
  .skill-container
    .skills__card-title__text
      h2 {{category.category}}
      .skills__card-title__buttons
        button.skills__card-title__btn.is-pencil(type="button" @click.prevent="editMode = true")
        button.skills__card-title__btn.is-trash(
          type="button" 
          @click="removeExistedCategory"
          ) 
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
        button.skills__card-title__btn.is-tick(type="button" @click="changeSkillTitle")
        button.skills__card-title__btn.is-cross(type="button"  @click.prevent="editMode = false")
    table.skills
      skills-item(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      )
  
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
    value: String,
    errorText: String
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
      ...mapActions("tooltips", ["showTooltip"]),
    async removeExistedCategory() {
      if (confirm("Удалить группу?") === false) return;

      this.editmode = false;

      try {
        const response = await this.removeCategories(this.category.id);
        this.showTooltip({
          type: "success",
          text: "Категория удалена"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
      async changeSkillTitle() {
      try {
        const response = await this.editCategories({
          id: this.category.id,
          title: this.newTitle
        });

        this.editmode = false;

        this.showTooltip({
          type: "success",
          text: "Имя категории обновлено"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async saveCategory() {
      this.editedCategory.title = this.editedCategory.category
      try {
        await this.editCategories(this.editedCategory);
        this.editmode = false;
       this.showTooltip({
          type: "success",
          text: "Категория сохранена"
        });
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