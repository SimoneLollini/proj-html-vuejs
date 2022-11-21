<script>
export default {
    name: 'FreeQuote'
}
</script>

<template>

    <section class="free_quote">
        <font-awesome-icon icon="fa-solid fa-paper-plane" />
        <span>get a free quote online now!</span>
    </section>
</template>


<style lang="scss">
@use '../assets/scss/partials/variable.scss' as *;

.free_quote {
    text-align: center;
    padding: 16px 0;
    text-transform: uppercase;
    background-color: $mv-Denim;
    font-size: 13px;
    color: $mv-White;

    span {
        padding: 0 9px;
    }
}
</style>