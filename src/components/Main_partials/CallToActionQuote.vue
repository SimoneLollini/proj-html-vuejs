<script>
import PrimaryButton from '../slot_common/PrimaryButton.vue';

export default {
    name: 'CallToActionQuote',
    components: {
        PrimaryButton
    }
}
</script>

<template>
    <section class="Call_to_action">
        <div class="container_sm">
            <h3>
                Request A Free Quote
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis nihil et facere maxime tempore,
                in
                ex delectus itaque qui unde enim atque hic iure tempora nisi numquam minima assumenda repellendus
                aliquam,
                reiciendis dolores.
            </p>
            <PrimaryButton>Read our testimonials</PrimaryButton>
        </div>

    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/variable.scss' as *;

.Call_to_action {
    background-image: url(../../assets/images/avada-movers-request-quote-background.jpg);
    background-size: cover;
    @include CallToAction_Quote;
}
</style>