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
      section.about__page
        .container
          .about__page-title 
            .about__page-title__title Блок "Обо мне"
            button.about__page-add__new Добавить группу
        .about__page-content
          .container
            ul.skills-list
              li.skills-list__item
                .skills__card-title__input
                  //- label.input__card
                  //-   input.input__elem(placeholder="Название новой группы")
                  .skills__card-title__text Workflow
                  .skills__card-title__buttons
                    .skills__card-title__btn
                      button.btn.is-tick.no-words
                    .skills__card-title__btn
                      button.btn.is-cross.no-words
                .card__content
                  .skill-list__table
                    .skills__table-container
                      .skills
                        .skills__row
                          .skills__name Git
                          .skills__percent 100%
                          .skills__buttons
                            .skills__btn
                              button.btn.is-pencil
                            .skills__btn
                              button.btn.is-trash
                        .skills__row
                          .skills__name Git
                          .skills__percent 100%
                          .skills__buttons
                            .skills__btn
                              button.btn.is-pencil
                            .skills__btn
                              button.btn.is-trash
                        .skills__row
                          .skills__name Git
                          .skills__percent 100%
                          .skills__buttons
                            .skills__btn
                              button.btn.is-pencil
                            .skills__btn
                              button.btn.is-trash
                        .skills__row
                          .skills__name Git
                          .skills__percent 100%
                          .skills__buttons
                            .skills__btn
                              button.btn.is-pencil
                            .skills__btn
                              button.btn.is-trash
                    .skills__new
                      label.input__new
                        input.elem__new(placeholder="Новый навык")
                      label.percent__new
                        input.elem__percent(placeholder="100%")
                      button.skills__new-add 
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
                button.work__all-add 
                  .work__all-add__title Добавить работу
              li.work__all-item
                .work__all-img
                  .work__all-images
                .work__all-text
                  .work__all-title Сайт школы образования
                  .work__all-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .work__all-link http://loftschool.ru
                .work__all-buttons
                  button.btn__correct Править
                  button.btn__delete Удалить
              li.work__all-item
                .work__all-img
                  .work__all-images
                .work__all-text
                  .work__all-title Сайт школы образования
                  .work__all-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .work__all-link http://loftschool.ru
                .work__all-buttons
                  button.btn__correct Править
                  button.btn__delete Удалить
              li.work__all-item
                .work__all-img
                  .work__all-images
                .work__all-text
                  .work__all-title Сайт школы образования
                  .work__all-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .work__all-link http://loftschool.ru
                .work__all-buttons
                  button.btn__correct Править
                  button.btn__delete Удалить
              li.work__all-item
                .work__all-img
                  .work__all-images
                .work__all-text
                  .work__all-title Сайт школы образования
                  .work__all-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .work__all-link http://loftschool.ru
                .work__all-buttons
                  button.btn__correct Править
                  button.btn__delete Удалить
              
      section.reviews
        .container
          .reviews__title Блок "Отзывы"
          form.reviews__new
            .reviews__new-title Новый отзыв
            .reviews__new-content
              .reviews__new-content__left
                .add__new-foto
                a.add__new-foto__text(href="#") Добавить фото
              .reviews__new-content__right
                .reviews__user
                  label.form-block.form-block-reviews
                    span.form-block__name Имя автора
                    input.form__input(placeholder="Ковальчук Дмитрий")
                  label.form-block.form-block-reviews
                    span.form-block__name Титул автора
                    input.form__input(placeholder="Основатель LoftSchool")
                .reviews__text
                  label.form-block.form-block__textarea-reviews
                    span.form-block__name Отзывы
                    textarea.form__input.form__input-textarea(placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!")
                .work__new-buttons
                  button.work__new-buttons__delete Отмена
                  button.work__new-buttons__save Сохранить
          .reviews__all
            .reviews__all-add
              ul.reviews__all-list
                li.reviews__all-list__item.item__button
                  button.reviews__all-add__btn 
                    .reviews__all-add__title Добавить отзыв
                li.reviews__all-list__item
                  .user__info
                    .user__avatar
                    .uder__name
                      .user__name-name Владимир Сабанцев
                      .user__name-job Преподаватель
                  .reviews__desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .work__all-buttons
                    button.btn__correct Править
                    button.btn__delete Удалить
                li.reviews__all-list__item
                  .user__info
                    .user__avatar
                    .uder__name
                      .user__name-name Владимир Сабанцев
                      .user__name-job Преподаватель
                  .reviews__desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .work__all-buttons
                    button.btn__correct Править
                    button.btn__delete Удалить
                li.reviews__all-list__item
                  .user__info
                    .user__avatar
                    .uder__name
                      .user__name-name Владимир Сабанцев
                      .user__name-job Преподаватель
                  .reviews__desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .work__all-buttons
                    button.btn__correct Править
                    button.btn__delete Удалить






</template>                          

<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

@import "../styles/admin/header.pcss";
@import "../styles/admin/menu.pcss";
@import "../styles/admin/about.pcss";
@import "../styles/admin/work.pcss";
@import "../styles/admin/reviews.pcss";
</style>




