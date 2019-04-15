<template lang="pug">
    .work__new
        .work__new-title Редактирование работы
        .work__new-content
            .work__new-content__left
                label.work__new-ipg(
                        :class="{'filled' : this.rendedPhotoUrl.length}"
                        :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`} "
                    )
                    input(
                        type="file"
                        v-validate="'required|image|size:1500'"
                        @change="appFileAndPhoto"
                    ).work__new-ipg__input
                    .work__new-ipg__text Перетащите или загрузите для загрузки изображения
                    app-button(
                        type="button"
                        @change="appFileAndPhoto"
                    ).work__new-ipg__add Загрузить
                .work__new-ipg__tablets
                    .work__new-img__tab
                    button.work__new-ipg__tablets-add Изменить превью
            .work__new-content__right
                .work__new-desc
                label.form-block
                    span.form-block__name Название
                    app-input.form__input(
                        v-model="work.title"
                        :errorText="validation.firstError('work.title')"
                        placeholder="Дизайн сайта для автосалона Porsche"
                        )
                label.form-block 
                    span.form-block__name Ссылка
                    app-input.form__input(
                        v-model="work.link"
                        :errorText="validation.firstError('work.link')"
                        placeholder="https//www.porsche-pulkovo.ru"
                        )
                label.form-block.form-block__textarea
                    span.form-block__name Описание
                    app-input.form__input.form__input-textarea( 
                        placeholder="Порше_Центр_Пулково_-_является_официальным_дилером_марки_Порше_"
                        fieldType="textarea"
                        v-model="work.description"
                        :errorText="validation.firstError('work.description')"
                        )
                .edit-form__row
                    add-tags(
                        v-model="work.techs"
                        @removeTag="value => this.work.techs = value"
                        :errorText="validation.firstError('work.techs')"
                    )
        .work__new-buttons
            button.work__new-buttons__delete Отмена
            button(
                type="button"
                @click="addWork"
            ).work__new-buttons__save Сохранить
</template>


<script>
import { tryStatement } from 'babel-types';
import {mapActions} from "vuex";
import { Validator } from "simple-vue-validator";
export default {
    mixins: [require("simple-vue-validator").mixin],
    validators: {
    "work.title": value => {
      return Validator.value(value).required("Заполните название");
    },
    "work.techs": value => {
      return Validator.value(value).required("Заполните технологии");
    },
    "work.link": value => {
      return Validator.value(value).required("Заполните ссылку");
    },
    "work.description": value => {
      return Validator.value(value).required("Заполните описание");
    },
    "work.photo": value => {
      return Validator.value(value).required("Вставьте файл");
    }
  },
    props: {
        mode: {
        type: String,
        default: "add",
        validator: value => ["add", "edit"].includes(value)
    },
    disabled: {
        type: Boolean,
        default: false
    }
  },
    components: {
        appInput: () => import("components/input.vue"),
        appButton: () => import("components/button.vue"),
        worksAdd:() => import("components/works-add.vue"),
        card: () => import("components/card.vue"),
        appButton: () => import("components/button.vue"),
        addTags: () => import("components/add-tags.vue"),
        errorsTooltip: () => import("components/errors-tooltip.vue")
    },
    data(){
        return{
            rendedPhotoUrl:"",
            photo:"",
            work: {
                id: 0,
                title: "",
                techs: "",
                link: "",
                photo: "",
                description: ""
            }
        };
    },
    methods:{
        ...mapActions("works", ["addNewWorks"]),
        appFileAndPhoto(e){
            const file=e.target.files[0];
            this.photo = file;

            const reader = new FileReader();

            try {
                reader.readAsDataURL(file);
                reader.onload = () =>{
                    this.rendedPhotoUrl = reader.result
                }
            } catch (error) {
                alert('картинка не загружена')
            }
        },
        async addWork(){
            try{
                await this.addNewWorks(this.work);
            } catch(error){
                alert('ошибка')
            }
        }
    }
        
}
</script>
