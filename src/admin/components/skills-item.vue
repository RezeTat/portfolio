<template lang="pug">
  tr.skills__row(v-if="editmode === false")
    td.skills__name {{skill.title}}
    td.skills__percent {{skill.percent}}%
    td.skills__buttons
      button.btn.is-pencil(type="button" @click="editmode = true") 
      button.btn.is-trash(type="button" @click="removeExistedSkill") 
      
  
  tr(v-else)
    td
      input(type="text" v-model="editedSkill.title")
    td
      input(type="text" v-model="editedSkill.percent")
    td 
      button.skills__card-title__btn.is-tick(type="button" @click="save") 
      button.skills__card-title__btn.is-cross(type="button" @click="editmode = false") 

</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editmode: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch (error) {}
    },
    async save() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {
        alert('Произошла ошибка при сохранении')
      }
    }

  }
};
</script>

