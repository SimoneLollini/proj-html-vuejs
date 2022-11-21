<script>
export default {
    name: 'HeaderTop'
}
</script>

<template>
    <div class="header_top">
        <div class="container_lg d-flex justify-content-between align-items-center">
            <div class="contact_us">
                <a href="#" class="phone">
                    <font-awesome-icon icon="fa-solid fa-phone" />
                </a>
                <a href="#">Call us for a free quote</a>
            </div>

            <div class="social">
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-youtube" />
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variable.scss' as *;

.header_top {
    background-color: $mv-Lima;
    padding-top: 11px;
    padding-bottom: 12px;
    border-bottom: 1px solid $mv-Lima-light;
    font-size: 9px;
    color: $mv-White;

    a {
        font-size: 9px;
        color: $mv-White;
    }

    .phone {
        font-size: 10px;
        display: inline-block;
        padding-left: 10px;
        transform: scale(-1, 1);
    }

    .social {
        font-size: 12px;

        a {
            padding-left: 14px;
        }
    }
}
</style>