<script>
export default {
    name: 'FreeQuote'
}
</script>

<template>

    <section class="free_quote">
        <a href="#">
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
            <span>get a free quote online now!</span>
        </a>
    </section>
</template>


<style lang="scss">
@use '../../assets/scss/partials/variable.scss' as *;

.free_quote {
    text-align: center;
    padding: 16px 0;
    background-color: $mv-Secondary;

    a {
        color: $mv-White;
    }


    span {
        padding: 0 9px;
        @include span_upper
    }
}
</style>