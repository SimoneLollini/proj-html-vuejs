<script>
import NavItem from './NavItem.vue'

export default {
    name: 'HeaderNav',
    components: {
        NavItem,
    },
    data() {
        return {
            Items: [
                {
                    href: '#',
                    text: 'Home'
                }, {
                    href: '#',
                    text: 'Rates'
                }, {
                    href: '#',
                    text: 'Testimonials'
                }, {
                    href: '#',
                    text: 'FAQ'
                }, {
                    href: '#',
                    text: 'Blog'
                }, {
                    href: '#',
                    text: 'Contact'
                },
            ]
        }
    }
}

</script>

<template>
    <div class="container_lg">
        <nav class="d-flex justify-content-between">
            <a href="#">
                <img src="../assets/images/avada-movers-logo.png" alt="logo">
            </a>
            <div class="link_wrapper d-flex align-items-center">
                <NavItem :item="item" v-for="item in this.Items" />
                <a href="#" class="btn_denim">FREE QUOTE</a>
            </div>
            <!-- /.link_wrapper -->
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variable.scss' as *;

nav {
    padding-top: 14px;


    .btn_denim {
        background-color: $mv-Denim;
        color: $mv-White;
        font-weight: 700;
        padding: 11px 21px;
        border-radius: 20px;
    }

    a {
        img {
            width: 133px;
        }

        font-size: 9px;
    }

}
</style>

