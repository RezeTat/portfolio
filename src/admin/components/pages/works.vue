<template lang="pug">
    section.work
        .container
            .work__page-title Блок "Работы"
            .work__new
                .work__new-title Редактирование работы
                .work__new-content
                    .work__new-content__left
                        .work__new-ipg
                            .work__new-ipg__text Перетащите или загрузите для загрузки изображения
                            button.work__new-ipg__add Загрузить
                        .work__new-ipg__tablets
                            .work__new-img__tab
                            button.work__new-ipg__tablets-add Изменить превью
                    .work__new-content__right
                        .work__new-desc
                        label.form-block
                            span.form-block__name Название
                            input.form__input(placeholder="Дизайн сайта для автосалона Porsche")
                        label.form-block 
                            span.form-block__name Ссылка
                            input.form__input(placeholder="https//www.porsche-pulkovo.ru")
                        label.form-block.form-block__textarea
                            span.form-block__name Описание
                            textarea.form__input.form__input-textarea(required, placeholder="Порше_Центр_Пулково_-_является_официальным_дилером_марки_Порше_")
                        label.form-block
                            span.form-block__name Добавление тэга
                            input.form__input(placeholder="Jquery,_Vue.js,_HTML5")
                        .work__new-tag
                            .work__new-tag__name HTML
                                button.work__new-tag__delete
                            .work__new-tag__name CSS
                                button.work__new-tag__delete
                            .work__new-tag__name Javascript
                                button.work__new-tag__delete
                .work__new-buttons
                    button.work__new-buttons__delete Отмена
                    button.work__new-buttons__save Сохранить
            .work__all
                ul.work__all-list
                    li.work__all-item.item__button
                        button.work__all-add(@click="addNewWork")
                    li.work__all-item
                        work-item(
                            v-for="work in works"
                            :key="work.id"
                            :work="work"
                        )
                   
</template> 

<script>
import { mapState, mapActions } from "vuex";
export default {
    components: {
    appInput: () => import("components/input.vue"),
    appButton: () => import("components/button.vue")
    },
      data() {
    return {
      rendedPhotoUrl: "",
      work: {
        desc: "",
        title: "",
        photo: ""
      }
    };
  },
    methods: {
        appendFileAndRenderPhoto(e) {
        const file = e.target.files[0];
        this.review.photo = file;

        const reader = new FileReader();

        try {
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.rendedPhotoUrl = reader.result;
        };
        } catch (error) {
        alert("sh*t happens :(");
        }
}
}
}

</script>
