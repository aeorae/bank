<template>
    <div id="whoweare">
        <navbar />
        <br>
        <div class="uk-container">
        <h1 class="uk-heading-line uk-text-center"><span>About Fedorae Services Bank</span></h1>
            <p>We pride ourselves on creating lifelong customer relationships and business partnerships in our communities.</p>

            <div class="uk-section uk-section-default">

                <div class="uk-container">
                <div class="uk-panel uk-text-center">
                    <!-- switcher -->
                    <div uk-grid>
                        <div class="uk-width-small@m">
                            <span uk-icon="icon: chevron-down"></span>
                            <span uk-icon="icon: chevron-down"></span>
                            <span uk-icon="icon: chevron-down"></span>
                            <ul class="uk-nav uk-nav-default uk-list-striped uk-list-divider" uk-switcher="connect: #component-nav; animation: uk-animation-fade">
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Leadership Team</a></li>
                                <li><a href="#">Community Involvement</a></li>

                            </ul>

                        </div>
                        <div class="uk-width-expand@m">

                            <ul id="component-nav" class="uk-switcher">
                                <li>
                                    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                                            <img src="https://image.freepik.com/free-photo/employees-sharing-ideas-full-shot_23-2148352538.jpg" alt="" uk-cover>
                                            <canvas width="600" height="400"></canvas>
                                        </div>
                                        <div>
                                            <div class="uk-card-body">
                                                <h3 class="uk-card-title">Careers</h3>
                                                <p>Bank First is an equal opportunity employer committed to creating a diverse workforce. We consider all qualified applicants without regard to race, religion, color, sex, national origin, age, sexual orientation, gender identity, disability or veteran status, among other factors.</p>

                                                <p> Discover the benefits of working at an independent community bank!</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="uk-child-width-1-3@m " uk-grid>
                                            <div class="uk-card uk-card-default" >
                                                <div class="uk-card-media-top">
                                                    <img src="https://image.freepik.com/free-photo/adult-businessman-shot-urban-environment_101945-2293.jpg" alt="">
                                                </div>
                                                <div class="uk-card-body ">
                                                    <ul class="uk-list uk-list-divider uk-text-left">
                                                        <li><h3 class="uk-card-title">Mr. Damion <br>Mitchel</h3></li>
                                                        <li data-v-65c9dc9f=""><span>Chair/ Department of Computer & Information Sciences</span></li>
                                                        <li>
                                                            <div uk-lightbox>
                                                                <a class="uk-button uk-button-default" href="images/photo.jpg">View Bio</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        <div class="uk-card uk-card-default" >
                                            <div class="uk-card-media-top">
                                                <img src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="">
                                            </div>
                                            <div class="uk-card-body ">
                                                <ul class="uk-list uk-list-divider uk-text-left">
                                                    <li><h3 class="uk-card-title">Mr. Christopher <br>Dunn</h3></li>
                                                    <li data-v-65c9dc9f=""><span>UNISS/ Chief Information Officer</span></li>
                                                    <li>
                                                        <div uk-lightbox>
                                                            <a class="uk-button uk-button-default" href="images/photo.jpg">View Bio</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="uk-card uk-card-default">
                                            <div class="uk-card-media-top">
                                                <img src="https://image.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-16056.jpg" alt="">
                                            </div>
                                            <div class="uk-card-body ">
                                                <ul class="uk-list uk-list-divider uk-text-left">
                                                    <li><h3 class="uk-card-title">Mr. Anthonio Anderson</h3></li>
                                                    <li data-v-65c9dc9f=""><span>Vice President of Technology/ Chief Information Officer</span> Chair </li>
                                                    <li>
                                                        <div uk-lightbox>
                                                            <a class="uk-button uk-button-default" href="images/photo.jpg">View Bio</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <!-- the cards -->
                                    <div class="uk-child-width-1-3@m" uk-grid>
                                        <div>
                                            <div class="uk-card uk-card-default">
                                                <div class="uk-card-media-top">
                                                    <img src="https://image.freepik.com/free-photo/eco-concept-with-group-volunteers_23-2147807218.jpg" alt="">
                                                </div>
                                                <div class="uk-card-body">
                                                    <h3 class="uk-card-title"><router-link to="/experienced-relationship-managers">Experienced Relationship Managers</router-link></h3>
                                                    <p>By helping with community and charity projects, FSB is involved with making Jamaica a better place.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="uk-card uk-card-default">
                                                <div class="uk-card-media-top">
                                                    <img src="https://img.freepik.com/free-photo/small-plant-with-coins_23-2147807265.jpg?size=626&ext=jpg" alt="">
                                                </div>
                                                <div class="uk-card-body">
                                                    <h3 class="uk-card-title"><router-link to="/">Come Grow With Us</router-link></h3>
                                                    <p>Together, we can do great things for your financial future. Open an account with us today. We help you make the most of every opportunity with personalized financial services for every stage of life, because you never stop growing.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="uk-card uk-card-default">
                                                <div class="uk-card-media-top">
                                                    <img src="https://img.freepik.com/free-photo/adult-children-hands-holding-paper-family-cutout_49149-811.jpg?size=626&ext=jpg" alt="">
                                                </div>
                                                <div class="uk-card-body">
                                                    <h3 class="uk-card-title"><router-link to="/">A relationship-based community bank</router-link></h3>
                                                    <p>By helping with community and charity projects, FSB is involved with making Jamaica a better place.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <!-- -->
                    <br><br>
                    <h1 class="uk-heading-line uk-text-center"><span>History of Fedorae Services Bank</span></h1>
                    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                        <div class="uk-card-media-left uk-cover-container">
                            <img src="https://image.freepik.com/free-photo/elderly-couples-talking-about-finance-with-piggy-bank_1150-7852.jpg" alt="" uk-cover>
                            <canvas width="600" height="400"></canvas>
                        </div>
                        <div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Where We Are Coming From</h3>
                                <p>Fedorae Services Bank received a federal charter in 1969, after members of the WesTexas New Mexico Florist Association looked for ideas to benefit the members of the Association. The original office was in Midland, Texas, and in 1973 it was moved to Roswell, New Mexico where the volunteer manager lived and owned a flower shop.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WhoWeAre.vue",
        components: {

        }
    }
</script>

<style scoped>
    img{
        border-radius: 5px;
    }

</style>