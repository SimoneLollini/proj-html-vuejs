<script>
import PrimaryButton from './slot/PrimaryButton.vue';
export default {
    name: 'EaseMove',
    components: {
        PrimaryButton
    }
}
</script>

<template>
    <section class="ease_move">
        <div class="container_lg d-flex justify-content-end align-items-center h-100">
            <div class="wrapper">
                <div class="titles">
                    <span>we remove the headache from moving</span>
                    <h3>Move With Ease</h3>
                    <hr>
                    <p>
                        Whit our super simple service we can take you from getting a quote, right through to begin in
                        your new home with all of your belongings securely packed and safely delivered, even in the
                        rooms of your choise.
                    </p>
                    <a href="#">
                        <PrimaryButton>get a free quote now</PrimaryButton>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variable.scss' as *;

.ease_move {
    margin-top: 128px;
    margin-bottom: 24px;
    height: 575px;
    background-image: url(../assets/images/avada-movers-movewithease-background-new.jpg);
    background-size: cover;

    .wrapper {
        max-width: 448px;
        background-color: $mv-Lima-light;
        border: 11px solid $mv-Lima-dark;
        padding: 32px;
        text-align: center;

        .titles {
            color: $mv-White;

            span {
                @include span_upper
            }

            hr {
                max-width: 258px;
                margin: auto;
                margin-top: 22px;
                margin-bottom: 30px;
            }
        }

    }


}
</style>