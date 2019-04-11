
<template lang="pug">
.about-page-container
  .container
    .about-page__title
      h1.page-title Обо мне
      button.about-page__add-new(
        @click="showAddingForm = true"
        v-if="showAddingForm === false"
        ) Добавить группу

    .about-page__content
      .container.container--mobile-wide
        ul.skill-list
          li.skill-list__item(v-if="showAddingForm")
            skills-add()
          li.skill-list__item(
            v-for="category in categories"
            :key="category.id"
            )
          skills-group(
            :category="category"
            :skills="filterSkillsByCategoryId(category.id)"
            )



//     section.about__page
//         .container
//             .about__page-title 
//                 .about__page-title__title Блок "Обо мне"
//                 button.about__page-add__new Добавить группу
//             .about__page-content
//             .container
//                 ul.skills-list
//                 li.skills-list__item
//                     form.form__new(@submit.prevent="admin")
//                     .skills__card-title__input
//                         admin-input(
//                             type="tytle"
//                             placeholder="Название новой группы"
//                             v-model="todo.title"
//                             :errorText="validation.firstError('todo.title')"
//                             @keydown.enter="addNewTodo"
//                             icon="title"
//                         )
//                         .skills__card-title__buttons
//                         .skills__card-title__btn
//                             button.btn.is-tick.
//                         .skills__card-title__btn
//                             button.btn.is-cross.
//                     .card__content
//                         .skill-list__table
//                         .skills__table-container
//                             table.skills
//                                 tr.skills__row
//                                     td.skills__name 
//                                     td.skills__percent 
//                                     td.skills__buttons
//                                 tr.skills__row
//                                     td.skills__name 
//                                     td.skills__percent 
//                                     td.skills__buttons
//                                 tr.skills__row
//                                     td.skills__name 
//                                     td.skills__percent 
//                                     td.skills__buttons
//                                 tr.skills__row
//                                     td.skills__name 
//                                     td.skills__percent 
//                                     td.skills__buttons
//                         .skills__new.input__new-add
//                             admin-input(
//                             type="text"
//                             placeholder="Новый навык"
//                             v-model="todo.text"
//                             :errorText="validation.firstError('todo.text')"
//                             @keydown.enter="addNewTodo"
//                             icon="text"
//                             )
//                             admin-input(
//                             type="numer"
//                             placeholder="100%"
//                             v-model="todo.percent"
//                             :errorText="validation.firstError('todo.percent')"
//                             @keydown.enter="addNewTodo"
//                             icon="percent"
//                             )
//                             button.skills__new-add(
//                             type="submit"
//                             :disabled="disableSubmit"
//                             )
//                 li.skills-list__item
//                     .skills__card-title__input
//                     .skills__card-title__text Workflow
//                     .skills__card-title__buttons
//                         .skills__card-title__btn
//                         button.btn.is-tick.no-words
//                         .skills__card-title__btn
//                         button.btn.is-cross.no-words
//                     .card__content
//                     .skill-list__table
//                         .skills__table-container
//                         table.skills
//                             tr.skills__row
//                                 td.skills__name Git
//                                 td.skills__percent 100 %
//                                 td.skills__buttons
//                                 .skills__btn
//                                     button.btn.is-pencil
//                                 .skills__btn
//                                     button.btn.is-trash
//                             tr.skills__row
//                                 td.skills__name Terminal
//                                 td.skills__percent 90 %
//                                 td.skills__buttons
//                                 .skills__btn
//                                     button.btn.is-pencil
//                                 .skills__btn
//                                     button.btn.is-trash
//                             tr.skills__row
//                                 td.skills__name Galp
//                                 td.skills__percent 80 %
//                                 td.skills__buttons
//                                 .skills__btn
//                                     button.btn.is-pencil
//                                 .skills__btn
//                                     button.btn.is-trash
//                             tr.skills__row
//                                 td.skills__name Webpack
//                                 td.skills__percent 85 %
//                                 td.skills__buttons
//                                 .skills__btn
//                                     button.btn.is-pencil
//                                 .skills__btn
//                                     button.btn.is-trash      
//                         .skills__new
//                         label.input__new
//                             input.elem__new(placeholder="Новый навык")
//                         label.percent__new
//                             input.elem__percent(placeholder="100%")
//                         button.skills__new-add 
//                 li.skills-list__item
//                     .skills__card-title__input
//                     .skills__card-title__text Frontend
//                     .skills__card-title__buttons
//                         .skills__card-title__btn
//                         button.btn.is-tick.no-words
//                         .skills__card-title__btn
//                         button.btn.is-cross.no-words
//                     .card__content
//                     .skill-list__table
//                         .skills__table-container
//                         table.skills
//                             tr.skills__row
//                                 td.skills__name HTML5 
//                                 td.skills__percent 100 %
//                                 td.skills__buttons
//                                 .skills__btn
//                                     button.btn.is-pencil
//                                 .skills__btn
//                                     button.btn.is-trash
//                             tr.skills__row
//                                 td.skills__name CSS3
//                                 td.skills__percent 90 %
//                                 td.skills__buttons
//                                 .skills__btn
//                                     button.btn.is-pencil
//                                 .skills__btn
//                                     button.btn.is-trash
//                             tr.skills__row
//                                 td.skills__name Javascript
//                                 td.skills__percent 80 %
//                                 td.skills__buttons
//                                 .skills__btn
//                                     button.btn.is-pencil
//                                 .skills__btn
//                                     button.btn.is-trash
//                             tr.skills__row
//                                 td.skills__name Jquery и Vue.js
//                                 td.skills__percent 85 %
//                                 td.skills__buttons
//                                 .skills__btn
//                                     button.btn.is-pencil
//                                 .skills__btn
//                                     button.btn.is-trash      
//                         .skills__new
//                         label.input__new
//                             input.elem__new(placeholder="Новый навык")
//                         label.percent__new
//                             input.elem__percent(placeholder="100%")
//                         button.skills__new-add  

</template>       



<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsAdd: () => import('components/skills-add.vue'),
    skillsGroup: () => import('components/skills-group.vue')
  },
  data() {
    return {
      showAddingForm: false 
    }
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions('categories', ['fetchCategories']),
    ...mapActions('skills', ['fetchSkills']),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    }
  },
  async created() {
    try {
      await this.fetchCategories(); 
    } catch (error) {
      alert('Произошла ошибка при загрузке категорий') 
    }

    try {
      await this.fetchSkills(); 
    } catch (error) {
      alert('Произошла ошибка при загрузке скиллов') 
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

 .skill-container {
  border: 1px solid black;
  padding: 10px;
}

.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.about-page__add-new {
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}

.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;

  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }

  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}
</style>
