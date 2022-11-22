<script>
import PrimaryButton from './slot/PrimaryButton.vue';

export default {
    name: 'OurOffers',
    components: {
        PrimaryButton
    }

}
</script>

<template>
    <section class="offers">
        <div class="titles">
            <span>we are professional</span>
            <h3>Full-Service Solution</h3>
        </div>
        <div class="container_lg">
            <div class="row row-cols-3">
                <div class="col">
                    <div class="card_body">
                        <div class="card_top">
                            <img src="../assets/images/avada-movers-serviceonephoto-final-600x383.jpg" alt="">
                        </div>
                        <!-- /.card_top -->
                        <div class="card_bottom">
                            <h4>Two Man Teams</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias, omnis
                                necessitatibus eaque commodi totam temporibus in consequuntur odio quas, facilis
                                doloribus odit earum. Nesciunt?
                            </p>
                            <PrimaryButton>Read more</PrimaryButton>
                        </div>
                        <!-- /.card_bottom -->
                    </div>
                    <!-- /.card_body -->
                </div>
                <!-- /.col -->
                <div class="col">
                    <div class="card_body">
                        <div class="card_top">
                            <img src="../assets/images/avada-movers-servicetwophoto-final-600x383.jpg" alt="">
                        </div>
                        <!-- /.card_top -->
                        <div class="card_bottom">
                            <h4> We Do All The Lifting </h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias, omnis
                                necessitatibus eaque commodi totam temporibus in consequuntur odio quas, facilis
                                doloribus odit earum. Nesciunt?
                            </p>
                            <PrimaryButton>Read more</PrimaryButton>
                        </div>
                        <!-- /.card_bottom -->
                    </div>
                    <!-- /.card_body -->
                </div>
                <!-- /.col -->
                <div class="col">
                    <div class="card_body">
                        <div class="card_top">
                            <img src="../assets/images/avada-movers-servicethreephoto-final-600x383.jpg" alt="">
                        </div>
                        <!-- /.card_top -->
                        <div class="card_bottom">
                            <h4> Coast To Coast </h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias, omnis
                                necessitatibus eaque commodi totam temporibus in consequuntur odio quas, facilis
                                doloribus odit earum. Nesciunt?
                            </p>
                            <PrimaryButton>Read more</PrimaryButton>
                        </div>
                        <!-- /.card_bottom -->
                    </div>
                    <!-- /.card_body -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- ./container_lg -->
    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variable.scss' as *;

.offers {
    background-color: $mv-White;

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
        background-color: $mv-light;
        text-align: center;


        .card_bottom {
            background-color: $mv-White;
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