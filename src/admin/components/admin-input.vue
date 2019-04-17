<template lang="pug">
  label.input(
    :class="[iconClass, {'error' : !!errorText}]"
  )
    span.input__title(v-if="title") {{title}} 
    input(
      v-bind="$attrs"
      :value="value" 
      @input="$emit('input', $event.target.value)"
    ).input__admin.field__elem

    .input__error-tooltip
      errors-tooltip(
        :errorText="errorText"
      )
</template>

<script>
export default {
  props: {
    title: String,
    errorText: {
      type: String,
      default: ""
    },
    value: String | Number,
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
    }
  },
  components: {
    errorsTooltip: () => import("./errors-tooltip.vue")
  }
};
</script>


<style lang="postcss" scoped>
.input__error-tooltip {
  display: none;
  position: absolute;
  top: 100%;
  left: 30%;
  transform: translateX(-50%);
  z-index: 100;
}

.input {
  display: block;
  position: relative;
  margin-right: 15px;

  &.no-side-paddings {
    .input__admin {
      padding-right: 0;
      padding-left: 0;
    }
  }

  &_labeled {
    .input__admin {
      padding: 15px 0 18px;
    }
  }

  &_iconed {
    .input__title {
      display: block;
      margin-bottom: 13px;
    }
    .input__admin {
      background: left center / auto 29px no-repeat;
      font-size: 18px;
      font-weight: 400;
      padding-top: 17px;
      padding-bottom: 17px;
    }
  }

  &_icon {
    @each $icon in (user, key) {
      &-$(icon) {
        .input__admin {
          background-image: svg-load("$(icon).svg", fill=#cfd2d7);
        }
      }
    }
  }
  &.error {
    @each $icon in (user, key) {
      &.input_icon-$(icon) {
        .input__admin {
          background-image: svg-load("$(icon).svg", fill=$errors-color);
        }
      }
    }
  }
}

.error {
  .field__elem {
    border-color: $errors-color;
  }

  .input__error-tooltip {
    display: block;
  }
}

.textarea {
  position: relative;
}

.input__title {
  color: rgba(65, 76, 99, 0.5);
  font-weight: 600;
  opacity: 0.5;
}

.textarea__elem {
  height: 150px;
  padding: 20px;
  border: 1px solid rgba($text-color, 0.2);
  resize: none;
  font-weight: 600;
  margin-top: 10px;
  width: 100%;
}

.input__admin {
  width: 100%;
  border: none;
  border-bottom: 1px solid #1f232d;

  &::placeholder {
    color: rgba($text-color, .5);
  }
}
</style>
