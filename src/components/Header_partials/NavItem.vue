<script>
export default {
  name: 'NavItem',
  props: {
    item: Object,
    index: Number,
  }
}
</script>



<template>
  <a :href="item.href" :class="index === 0 ? 'active' : ''">
    {{ item.text }}
  </a>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

a {
  &:hover {
    color: $mv-Success;
  }

  color: $mv-Darker;
  padding-right: 35px;
}

.active {
  color: $mv-Success
}
</style>
