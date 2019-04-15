<template lang="pug">
    section.work
        .container
            .work__page-title Блок "Работы"
            work-form(v-if="shouAddFormWork")
            .work__all
                ul.work__all-list
                    li.work__all-item.item__button
                        button.work__all-add(
                            v-if="shouAddFormWork ===false"
                            @click="shouAddFormWork=true"
                        )
                            .work__all-add__title Добавить работу
                    li.work__all-item(v-if="editmode===false")
                        work-item(
                            v-for="work in works"
                            :key="work.id"
                            :work="work"
                        )
                            .work__all-img
                                .work__all-images {{work.photo}}
                                    .works__all-tag {{work.techs}}
                                    tags(
                                        :tags="tagsArray"
                                    )
                            .work__all-text 
                                .work__all-title {{work.title}}
                                .work__all-desc {{work.description}}
                                .work__all-link {{work.link}}   
                            .work__all-buttons
                            button.btn__correct Править
                            button(
                                type="button"
                                @click="removeExistedWork"
                            ).btn__delete Удалить
                    li.work__all-item(v-else)
                            .work__all-img
                                .work__all-images {{work.photo}}
                                    app-input.form__input
                                    .works__all-tag
                                    tags(
                                        :tags="tagsArray"
                                    )
                                        app-input.form__input
                            .work__all-text 
                                .work__all-title {{work.title}}
                                    app-input.form__input
                                .work__all-desc {{work.description}}
                                    app-input.form__input
                                .work__all-link {{work.link}}   
                                    app-input.form__input
                            .work__all-buttons
                            button.btn__correct Править
                            button(
                                type="button"
                                @click="removeExistedWork"
                            ).btn__delete Удалить
</template> 

<script>
import { mapState, mapActions } from "vuex";
import requests from "@/requests";
export default {
    components: {
        worksAdd:() => import("components/works-add.vue"),
        appInput: () => import("components/input.vue"),
        appButton: () => import("components/button.vue"),
        workForm:() => import("components/work-form.vue"),
    },
    data() {
        return {
            shouAddFormWork:false,
            rendedPhotoUrl: "",
            editmode: false
        }
    },
    computed:{
        ...mapState('works',{
            works: state=>state.works
    })
    },
    methods:{
        ...mapActions('works', ['fetchWorks'] ),
        ...mapActions('works', ['removeWorks'] ),
    },
    async created(){
        try{
            await this.fetchWorks();
        } catch (error){
            alert('ошибка')
        }
    },
    async removeExistedWork(){
        try {
            await this.removeWork(this.work.id);
        } catch (error) {
            alert('ошибка')
        }
    }
}
</script>
