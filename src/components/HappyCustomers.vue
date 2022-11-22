<script>
import SingleCol from './component_partials/SingleCol.vue';
import PrimaryButton from './slot/PrimaryButton.vue';

export default {
    name: 'HappyCustomers',
    components: {
        PrimaryButton,
        SingleCol
    },
    data() {
        return {
            customers: [
                {
                    name: 'nome',
                    image: 'url',
                    description: 'descrizione',
                }, {
                    name: 'nome',
                    image: 'url',
                    description: 'descrizione',
                }
            ]
        }
    }

}
</script>

<template>
    <section class="customers">
        <div class="titles">
            <span>happy customers</span>
            <h3>Testimonials</h3>
        </div>
        <!-- /titles -->

        <div class="container_lg">
            <div class="row row-cols-3">
                <!-- <SingleCol :col="customer" v-for="customer in this.customers" /> -->

                <div class="col">
                    <div class="card_body">
                        <div class="card_top">
                            <img src="../assets/images/avada-movers-johndoe-final.jpg" alt="">
                        </div>

                        <div class="card_bottom">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias, omnis
                                necessitatibus eaque commodi totam temporibus in consequuntur odio quas, facilis
                                doloribus odit earum. Nesciunt?
                            </p>
                            <PrimaryButton>Read more</PrimaryButton>
                        </div>

                    </div>

                </div>
                <div class="col">
                    <div class="card_body">
                        <div class="card_top">
                            <img src="../assets/images/avada-movers-janedoe-final.jpg" alt="">
                        </div>

                        <div class="card_bottom">
                            <h4>Jane Doe</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias, omnis
                                necessitatibus eaque commodi totam temporibus in consequuntur odio quas, facilis
                                doloribus odit earum. Nesciunt?
                            </p>
                            <PrimaryButton>Read more</PrimaryButton>
                        </div>

                    </div>

                </div>
                <div class="col">
                    <div class="card_body">
                        <div class="card_top">
                            <img src="../assets/images/avada-movers-johnsmith-final.jpg" alt="">
                        </div>

                        <div class="card_bottom">
                            <h4>John Smith</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias, omnis
                                necessitatibus eaque commodi totam temporibus in consequuntur odio quas, facilis
                                doloribus odit earum. Nesciunt?
                            </p>
                            <PrimaryButton>Read more</PrimaryButton>
                        </div>

                    </div>

                </div>

            </div>
            <!-- /.row -->
        </div>
        <!-- ./container_lg -->
    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variable.scss' as *;

.customers {
    background-image: url(../assets/images/avada-movers-testimonial-background.jpg);
    background-size: cover;

    .titles {
        text-align: center;
        padding-top: 131px;

        span {
            color: $mv-Silver-Chalice;
            @include span_upper;
            font-weight: bold;

        }

        h3 {
            color: $mv-Lima;
            padding-bottom: 45px;
            padding-top: 25px;
        }
    }

    .card_body {
        padding: 14px;
        text-align: center;

        img {
            width: 108px;
            aspect-ratio: 1/1;
            object-fit: contain;
            border-radius: 50%;
        }

        .card_bottom {
            margin-top: 14px;
            padding-bottom: 21px;

            h4 {
                color: $mv-Denim;
                padding-top: 31px;
                padding-bottom: 23px;
            }

            p {
                padding-bottom: 29px;
            }
        }
    }
}
</style>