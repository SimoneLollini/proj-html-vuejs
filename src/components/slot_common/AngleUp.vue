<script>
export default {
    name: 'AngleUp',
    methods: {
        scrollToTop() {
            window.window.scrollTo(0, 0)
        }
    }
}
</script>


<template>

    <div @click="this.scrollToTop" class="angle_square d-flex flex-column justify-content-center align-items-center">

        <font-awesome-icon icon="fa-solid fa-angle-up" />

    </div>

</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

.angle_square {
    height: 25px;
    width: 35px;
    border-radius: 5px 5px 0 0;
    background-color: rgba(0, 0, 0, 0.679);
    position: fixed;
    bottom: 0;
    right: 20px;
    color: rgba(255, 255, 255, 0.899);

    &:hover {
        transition: 700ms;
        padding-bottom: 5px;
        height: 30px;
        cursor: pointer;
        color: $mv-Success-light;
    }
}
</style>