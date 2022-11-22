<script>
import PrimaryButton from './slot/PrimaryButton.vue';

export default {
    name: 'TestimonialsFeedback',
    components: {
        PrimaryButton
    }
}
</script>

<template>
    <section class="testimonials_feedback">
        <div class="container_sm">
            <span>headache free</span>
            <h3>
                Award Winning Moving Company
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
@use '../assets/scss/partials/variable.scss' as *;

.testimonials_feedback {
    background-color: $mv-Dirty-White;
    padding-top: 117px;
    padding-bottom: 114px;
    text-align: center;

    span {
        @include span_upper;
        font-weight: bold;
        color: $mv-Silver-Chalice;
    }

    h3 {
        color: $mv-Lima;
        padding-top: 18px;
        padding-bottom: 36px;
    }

    p {
        @include mv-p;
        padding-bottom: 32px;
    }

}
</style>