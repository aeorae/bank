<template>
    <div id="serving" class="uk-background-muted"  >
        <!-- heading
        <br> <br> <br>
        <h1 class="uk-heading-line uk-text-center"><span>Serving the Community</span></h1>
        <br> <br>
        <p>We are a relationship-based community bank focused on providing innovative products and services that are value driven.</p>
        <br>
        -->
        <!-- the cards -->
        <br>
        <div class="uk-child-width-1-3@m" uk-grid style="margin-left: 4px; margin-right: 40px; margin-top: 4px;">
            <div>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="https://image.freepik.com/free-photo/eco-concept-with-group-volunteers_23-2147807218.jpg" alt="">
                        </div>
                        <div class="uk-card-body uk-card-hover">
                            <h3 class="uk-card-title"><router-link to="/experienced-relationship-managers">Experienced Relationship Managers</router-link></h3>
                            <p>By helping with community and charity projects, FSB is involved with making Jamaica a better place.</p>
                        </div>
                    </div>
                <canvas width="100" height="50"></canvas>
            </div>
            <div>
                    <div class="uk-card uk-card-default uk-card-hover">
                        <div class="uk-card-media-top">
                            <img src="https://img.freepik.com/free-photo/small-plant-with-coins_23-2147807265.jpg?size=626&ext=jpg" alt="">
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title"><router-link to="/grow-with-us">Grow With Us at Services Fedorae</router-link></h3>
                            <p>Together, we can do great things for your financial future. We help you make the most every stop growing.</p>
                        </div>
                    </div>
            </div>
            <div>
                    <div class="uk-card uk-card-default uk-card-hover">
                        <div class="uk-card-media-top">
                            <img src="https://img.freepik.com/free-photo/adult-children-hands-holding-paper-family-cutout_49149-811.jpg?size=626&ext=jpg" alt="">
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title"><router-link to="/relationship-based">A relationship-based community bank</router-link></h3>
                            <p>By helping with community and charity projects, FSB is involved with making Jamaica a better place.</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Serving.vue"
    }
</script>

<style scoped>
    #navcon a{
        background-color: cadetblue;
    }
    img{
        padding: 10px;
        border-radius: 15px;
    }
</style>