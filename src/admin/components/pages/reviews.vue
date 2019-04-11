<template lang="pug">
  .reviews-section
    .container
      h1.page-title {{pageTitle}}
    .reviews-container
      .container.container--mobile-wide
        .reviews__form(v-if="showAddingForm")
          add-new-review(
            :title="formTitle"
            :mode="mode"
            @cancel="showAddingForm = false"
          )
        ul.reviews
          li.reviews__item
            add-new(
              @click="addNewReview"
            )
          li.reviews__item(v-for="review in reviews")
            reviews-item(
              :review="review"
              @updateWork="updateWork"
            )
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      mode: "",
      showAddingForm: false
    };
  },
  components: {
    addNew: () => import("components/add-new.vue"),
    addNewReview: () => import("components/reviews-add.vue"),
    reviewsItem: () => import("components/reviews-item.vue")
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    }),
    formTitle() {
      switch (this.mode) {
        case "add":
          return "Добавить отзыв";
        case "edit":
          return "Изменить отзыв";
        default:
          return "";
          console.warn("не верное значение поля mode в reviews");
      }
    }
  },
  created() {
    this.collectReviews();
  },
  methods: {
    ...mapActions("reviews", ["fetchReviews"]),
    ...mapActions("tooltips", ["showTooltip"]),
    updateWork() {
      this.mode = "edit";
      this.showAddingForm = true;
    },
    addNewReview() {
      this.mode = "add";
      this.showAddingForm = true;
    },
    async collectReviews() {
      try {
        await this.fetchReviews();
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: "Не удалось загурузить отзывы"
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.reviews {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
}

.reviews__item {
  margin-left: 30px;
  width: calc(100% / 3 - 30px);
  margin-bottom: 30px;
  @include tablets {
    width: calc(100% / 2 - 30px);
  }
  @include phones {
    width: 100%;
    margin-bottom: 15px;
  }
}

.reviews__form {
  margin-bottom: 30px;
}
</style>

// <template lang="pug">
//     section.reviews
//         .container
//             .reviews__title Блок "Отзывы"
//             form.reviews__new
//                 .reviews__new-title Новый отзыв
//                 .reviews__new-content
//                 .reviews__new-content__left
//                     .add__new-foto
//                     a.add__new-foto__text(href="#") Добавить фото
//                 .reviews__new-content__right
//                     .reviews__user
//                     label.form-block.form-block-reviews
//                         span.form-block__name Имя автора
//                         input.form__input(placeholder="Ковальчук Дмитрий")
//                     label.form-block.form-block-reviews
//                         span.form-block__name Титул автора
//                         input.form__input(placeholder="Основатель LoftSchool")
//                     .reviews__text
//                     label.form-block.form-block__textarea-reviews
//                         span.form-block__name Отзывы
//                         textarea.form__input.form__input-textarea(placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!")
//                     .work__new-buttons.reviews__new-buttons
//                     button.work__new-buttons__delete Отмена
//                     button.work__new-buttons__save Сохранить
//             .reviews__all
//                 .reviews__all-add
//                 ul.reviews__all-list
//                     li.reviews__all-list__item.item__button
//                     button.reviews__all-add__btn 
//                         .reviews__all-add__title Добавить отзыв
//                     li.reviews__all-list__item
//                     .user__info
//                         .user__avatar
//                         .uder__name
//                         .user__name-name Владимир Сабанцев
//                         .user__name-job Преподаватель
//                     .reviews__desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
//                     .work__all-buttons.reviews__all-buttons
//                         button.btn__correct Править
//                         button.btn__delete Удалить
//                     li.reviews__all-list__item
//                     .user__info
//                         .user__avatar
//                         .uder__name
//                         .user__name-name Владимир Сабанцев
//                         .user__name-job Преподаватель
//                     .reviews__desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
//                     .work__all-buttons
//                         button.btn__correct Править
//                         button.btn__delete Удалить
//                     li.reviews__all-list__item
//                     .user__info
//                         .user__avatar
//                         .uder__name
//                         .user__name-name Владимир Сабанцев
//                         .user__name-job Преподаватель
//                     .reviews__desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
//                     .work__all-buttons.reviews__all-buttons
//                         button.btn__correct Править
//                         button.btn__delete Удалить
    
// </template> 