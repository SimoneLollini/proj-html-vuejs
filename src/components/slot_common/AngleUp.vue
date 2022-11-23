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
    <div @click="this.scrollToTop" class="angle_square d-flex justify-content-center align-items-center">
        <font-awesome-icon icon="fa-solid fa-angle-up" />
    </div>

</template>


<style lang="scss" scoped>
.angle_square {
    width: 35px;
    height: 25px;
    border-radius: 5px 5px 0 0;
    background-color: rgba(0, 0, 0, 0.679);
    position: fixed;
    bottom: 0;
    right: 20px;
    color: rgba(255, 255, 255, 0.899);

    &:hover {
        cursor: pointer;
    }
}
</style>