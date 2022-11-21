<script>
export default {
    name: 'Jumbotron'
}
</script>

<template>
    <section class="jumbotron justify-content-center d-flex align-items-center">
        <div class="wrapper">
            <h6>
                moving without the hassle
            </h6>
            <h2>
                we make it simple
            </h2>
            <h6>
                professional service with quality and customer satisfation
            </h6>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variable.scss' as *;

.jumbotron {
    height: 563px;
    background-image: url(../assets/images/avada-movers-homeherobackground-final.jpg);
    background-size: cover;

    .wrapper {
        text-align: center;
        text-transform: uppercase;

        h2 {
            font-size: 38px;
            font-weight: 900;
            color: $mv-Shark;
        }

        h6 {
            font-size: 11px;
            font-weight: 700;
            color: $mv-Dove-Gray;
        }
    }
}
</style>