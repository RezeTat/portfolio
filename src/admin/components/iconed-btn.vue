<template lang="pug">
  button(
    type="button"
    v-on="$listeners"
  ).btn
</template>

<style lang="postcss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0;

  &.no-words {
    &:after {
      width: 13px;
      height: 18px;
    }

    &:before {
      margin-right: 0;
    }
  }

  &:before {
    content: attr(data-text);
    font-weight: 600;
    color: rgba(65, 76, 99, 0.4);
    margin-right: 18px;
  }

  &:after {
    content: "";
    width: 17px;
    height: 17px;
    display: block;
  }
}
</style>

