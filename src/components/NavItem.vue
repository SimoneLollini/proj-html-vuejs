<script>
export default {
  name: 'NavItem',
  props: {
    item: Object
  }
}
</script>

<template>
  <a :href="item.href" :class="item.text === 'Home' ? 'active' : ''">
    {{ item.text }}
  </a>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variable.scss' as *;

a {
  color: $mv-Shark-dark;
  padding-right: 35px;
}

.active {
  color: $mv-Lima
}
</style>
