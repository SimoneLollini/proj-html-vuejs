<script>
import LogoMovers from '../slot_common/LogoMovers.vue';
export default {
    name: "FooterMain",
    data() {
        return {
            avadaMovers: [
                {
                    text: "Home",
                    href: "#"
                },
                {
                    text: "Rates",
                    href: "#"
                },
                {
                    text: "Testimonials",
                    href: "#"
                },
                {
                    text: "Blog",
                    href: "#"
                },
                {
                    text: "Free Quote",
                    href: "#"
                },
            ],
            recentPosts: [
                {
                    text: "Heading Out To College?",
                    href: "#"
                },
                {
                    text: "Moving Your Business?",
                    href: "#"
                },
                {
                    text: "Outstanding Quality",
                    href: "#"
                },
                {
                    text: "Cost of Moving",
                    href: "#"
                },
                {
                    text: "Best Moving Tips",
                    href: "#"
                },
            ]
        };
    },
    components: { LogoMovers }
}
</script>

<template>
    <div class="footer_main">
        <div class="container_lg">
            <div class="row">
                <div class="col-4">
                    <span>
                        About
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque expedita suscipit debitis ipsam.
                        Quas sit quo at rerum repellendus, iusto veniam reiciendis magni fugit magnam.
                    </p>

                    <LogoMovers />

                </div>

                <div class="col-3">
                    <span>
                        About
                    </span>
                    <div v-for="link in this.avadaMovers">

                        <a :href="link.href">
                            <font-awesome-icon icon="fa-solid fa-angle-right" /> {{ link.text }}
                        </a>
                    </div>
                </div>
                <div class="col-3">
                    <span>
                        Recent Posts

                    </span>
                    <div v-for="link in this.recentPosts">

                        <a :href="link.href">
                            <font-awesome-icon icon="fa-solid fa-angle-right" /> {{ link.text }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

.footer_main {
    border-top: 11px solid $mv-Lima;

    a {
        @include mv-a;
        color: $mv-Shark;
        display: inline-block;
        padding-bottom: 20px;
    }

    .row {
        padding-top: 52px;
        padding-bottom: 57px;

        span {
            display: inline-block;
            padding-bottom: 34px;
        }

        .col-4 {
            padding-left: 0;
            padding-right: 2rem;

            p {
                padding-bottom: 55px;
            }

            img {
                width: 133px;
                margin-top: 43px;
                margin-bottom: 57px;
            }
        }
    }
}
</style>