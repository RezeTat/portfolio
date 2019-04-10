<template lang="pug">
    section.about__page
        .container
            .about__page-title 
                .about__page-title__title Блок "Обо мне"
                button.about__page-add__new Добавить группу
            .about__page-content
            .container
                ul.skills-list
                li.skills-list__item
                    form.form__new(@submit.prevent="admin")
                    .skills__card-title__input
                        admin-input(
                            type="tytle"
                            placeholder="Название новой группы"
                            v-model="todo.title"
                            :errorText="validation.firstError('todo.title')"
                            @keydown.enter="addNewTodo"
                            icon="title"
                        )
                        .skills__card-title__buttons
                        .skills__card-title__btn
                            button.btn.is-tick.
                        .skills__card-title__btn
                            button.btn.is-cross.
                    .card__content
                        .skill-list__table
                        .skills__table-container
                            table.skills
                                tr.skills__row
                                    td.skills__name 
                                    td.skills__percent 
                                    td.skills__buttons
                                tr.skills__row
                                    td.skills__name 
                                    td.skills__percent 
                                    td.skills__buttons
                                tr.skills__row
                                    td.skills__name 
                                    td.skills__percent 
                                    td.skills__buttons
                                tr.skills__row
                                    td.skills__name 
                                    td.skills__percent 
                                    td.skills__buttons
                        .skills__new.input__new-add
                            admin-input(
                            type="text"
                            placeholder="Новый навык"
                            v-model="todo.text"
                            :errorText="validation.firstError('todo.text')"
                            @keydown.enter="addNewTodo"
                            icon="text"
                            )
                            admin-input(
                            type="numer"
                            placeholder="100%"
                            v-model="todo.percent"
                            :errorText="validation.firstError('todo.percent')"
                            @keydown.enter="addNewTodo"
                            icon="percent"
                            )
                            button.skills__new-add(
                            type="submit"
                            :disabled="disableSubmit"
                            )
                li.skills-list__item
                    .skills__card-title__input
                    .skills__card-title__text Workflow
                    .skills__card-title__buttons
                        .skills__card-title__btn
                        button.btn.is-tick.no-words
                        .skills__card-title__btn
                        button.btn.is-cross.no-words
                    .card__content
                    .skill-list__table
                        .skills__table-container
                        table.skills
                            tr.skills__row
                                td.skills__name Git
                                td.skills__percent 100 %
                                td.skills__buttons
                                .skills__btn
                                    button.btn.is-pencil
                                .skills__btn
                                    button.btn.is-trash
                            tr.skills__row
                                td.skills__name Terminal
                                td.skills__percent 90 %
                                td.skills__buttons
                                .skills__btn
                                    button.btn.is-pencil
                                .skills__btn
                                    button.btn.is-trash
                            tr.skills__row
                                td.skills__name Galp
                                td.skills__percent 80 %
                                td.skills__buttons
                                .skills__btn
                                    button.btn.is-pencil
                                .skills__btn
                                    button.btn.is-trash
                            tr.skills__row
                                td.skills__name Webpack
                                td.skills__percent 85 %
                                td.skills__buttons
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
                li.skills-list__item
                    .skills__card-title__input
                    .skills__card-title__text Frontend
                    .skills__card-title__buttons
                        .skills__card-title__btn
                        button.btn.is-tick.no-words
                        .skills__card-title__btn
                        button.btn.is-cross.no-words
                    .card__content
                    .skill-list__table
                        .skills__table-container
                        table.skills
                            tr.skills__row
                                td.skills__name HTML5 
                                td.skills__percent 100 %
                                td.skills__buttons
                                .skills__btn
                                    button.btn.is-pencil
                                .skills__btn
                                    button.btn.is-trash
                            tr.skills__row
                                td.skills__name CSS3
                                td.skills__percent 90 %
                                td.skills__buttons
                                .skills__btn
                                    button.btn.is-pencil
                                .skills__btn
                                    button.btn.is-trash
                            tr.skills__row
                                td.skills__name Javascript
                                td.skills__percent 80 %
                                td.skills__buttons
                                .skills__btn
                                    button.btn.is-pencil
                                .skills__btn
                                    button.btn.is-trash
                            tr.skills__row
                                td.skills__name Jquery и Vue.js
                                td.skills__percent 85 %
                                td.skills__buttons
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

</template>       