<template>
    <div id="something" class="uk-card uk-card-default">
        <br><br>
        <h1 class="uk-heading-line uk-text-center"><span>Client Stories & Testimonials</span></h1>
        <div class="testimonial-slider">
            <ul class="slider">
                <li>
                    <div class="testimonial-slider-content">
                        <q>"I have always received prompt, courteous service. The staff has been pleasant and friendly."</q>
                        <p class="source">- Nancy, Omaha</p>
                    </div>
                </li>
                <li>
                    <div class="testimonial-slider-content">
                        <q>"I loved doing business with this bank."</q>
                        <p class="source">- Pat, Ankeny</p>
                    </div>
                </li>
                <li>
                    <div class="testimonial-slider-content">
                        <q>"Great, friendly staff, love the fact you can do your banking on the south side of town. :)"</q>
                        <p class="source">- Dorothy, Spencer</p>
                    </div>
                </li>
                <li>
                    <div class="testimonial-slider-content">
                        <q>"Tepui is proud to pioneer a new industry with the support of Fedorae Services Bank"</q>
                        <p class="source">- Evan Currid</p>
                    </div>
                </li>
            </ul>
                <button class="uk-button uk-button-secondary uk-text-center"><router-link class="uk-light" to="/all-testimonials">View All Testimonials</router-link></button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Testimonials.vue"
    }
</script>

<style scoped>
    #something{
        background-color: #e6e6e6;
    }
    body {
        padding: 50px 30px;
        text-align: center;
        color: #fff;
        font: normal normal 24px / 1.25 "Raleway", Helvetica, Arial, Verdana, sans-serif;
    }

    body p {
        max-width: 60ch;
        margin: 0 auto 2em;
    }

    .testimonial-slider {
        display: block;
        width: 100%;
        height: auto;
        margin-top: 100px;
    }

    .testimonial-slider ul.slider {
        display: block;
        list-style: none;
        padding: 0;
        position: relative;
        display: inline-block;
        width: 100%;
        height: 350px;
        overflow: hidden;
        margin: 0 auto;
    }

    .testimonial-slider ul.slider li {
        position: absolute;
        display: block;
        width: 100%;
        opacity: 0;
        margin: 0 auto;
    }
    .testimonial-slider ul.slider li:nth-child(1) {
        opacity: 1;

        -webkit-animation: fade-animation-1 25s infinite;
        animation: fade-animation-1 25s infinite;
    }
    .testimonial-slider ul.slider li:nth-child(2) {
        -webkit-animation: fade-animation-2 25s infinite;
        animation: fade-animation-2 25s infinite;
    }
    .testimonial-slider ul.slider li:nth-child(3) {
        -webkit-animation: fade-animation-3 25s infinite;
        animation: fade-animation-3 25s infinite;
    }
    .testimonial-slider ul.slider li:nth-child(4) {
        -webkit-animation: fade-animation-4 25s infinite;
        animation: fade-animation-4 25s infinite;
    }

    .testimonial-slider q {
        display: inline-block;
        font: normal 500 40px / 1.25 "Raleway", Helvetica, Arial, Verdana, sans-serif;
        letter-spacing: .5pt;
        text-shadow: 0 5px 10px rgba(0,0,0,.1);
        max-width: 35ch;
    }

    .testimonial-slider .source {
        margin-top: 25px;
        color: #8a8a8a;
        font: italic 300 20px / 1.35 "Raleway", Helvetica, Arial, Verdana, sans-serif;
    }

    /* KEYFRAME DECLARATIONS */
    @keyframes fade-animation-1 {
        0%, 25%, 100% {
            opacity:0
        }
        3%, 22% {
            opacity: 1;
        }
    }
    @keyframes fade-animation-2 {
        0%, 25%, 50%, 100% {
            opacity:0
        }
        28%, 47% {
            opacity: 1;
        }
    }
    @keyframes fade-animation-3 {
        0%, 50%, 75%, 100% {
            opacity:0
        }
        53%, 72% {
            opacity: 1;
        }
    }
    @keyframes fade-animation-4 {
        0%, 75%, 100% {
            opacity:0
        }
        78%, 97% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fade-animation-1 {
        0%, 25%, 100% {
            opacity:0
        }
        3%, 22% {
            opacity: 1;
        }
    }
    @-webkit-keyframes fade-animation-2 {
        0%, 25%, 50%, 100% {
            opacity:0
        }
        28%, 47% {
            opacity: 1;
        }
    }
    @-webkit-keyframes fade-animation-3 {
        0%, 50%, 75%, 100% {
            opacity:0
        }
        53%, 72% {
            opacity: 1;
        }
    }
    @-webkit-keyframes fade-animation-4 {
        0%, 75%, 100% {
            opacity:0
        }
        78%, 97% {
            opacity: 1;
        }
    }
</style>