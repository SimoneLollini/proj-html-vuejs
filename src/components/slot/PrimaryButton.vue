<template>
    <button class="btn_primary">
        <slot />
    </button>
</template>
  
<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

.btn_primary {
    background-color: $mv-Denim;
    color: $mv-White;
    text-transform: uppercase;
    font-weight: 700;
    padding: 11px 21px;
    border-radius: 20px;
    border: none;
    font-size: 11px;
    cursor: pointer;
}
</style>