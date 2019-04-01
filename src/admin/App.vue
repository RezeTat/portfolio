<template lang="pug">
.wrapper
  .wrapper-container
    header.header
      .header-container
        .header-info
          .user
            .user__pic
              img(src="../images/content/user.jpg").user__pic-avatar
            .user__name
              .span Резе Татьяна
          .header__title Панель администрирования
        a.exit__btn Выйти
    section.menu
      .container
        ul.tabs
          -
            var userinfo = ['Обо мне','Работы', 'Отзывы'];
          each item in userinfo
            li.tabs__item
              .tabs__link #{item}
    main.content-container
      .about__page-container
        .container
          .about__page-title Блок "Обо мне"
          button.about__page-add__new Добавить группу
        .about__page-content
          .container
            ul.skills-list
              li.skills-list__item(v-for="n in 4")
                .card
                  .card__title
                    .skills__title-container
                      .skills__card-title 
                        .input__edit
                          .skills__card-title__input
                            label.input__card
                              input.input__elem(placeholder="Название новой группы")
                          .skills__card-title__buttons
                            .skills__card-title__btn
                              button.btn.is-tick.no-words
                            .skills__card-title__btn
                              button.btn.is-cross.no-words
                        .skills__card-title__text Workflow
                        .skills__card-title__icon
                          button.btn.is-pencil.no-words(type="button")
                  .card__content
                    .skill-list__table
                      .skills__table-container
                        table.skills
</template>                          

<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");


@import "../styles/blocks/admin-header.pcss";
@import "../styles/admin/header.pcss";
@import "../styles/admin/menu.pcss";






