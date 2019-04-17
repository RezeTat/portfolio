<template lang="pug">
  header.header
      .header-container
        .header-info
          .user
            .user__pic
              img(src="../../images/content/user.jpg").user__pic-avatar
            .user__name
              .span Резе Татьяна
          .header__title Панель администрирования
        a.exit__btn Выйти
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"])
  }
};
</script>