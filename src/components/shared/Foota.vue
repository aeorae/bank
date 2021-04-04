<template>
    <div style="background-color: #032137;">
        <!-- uptop code -->
            <a href="#" id="return-to-top" uk-scroll><i class="icon-chevron-up"></i></a>

        <!--uikit code -->
        <div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
                <div style="background-color: #032137;" class=" uk-padding uk-light">
                    <div class="uk-text-center">
                        <h4 class="uk-heading-line"><span>Contact Information</span></h4>
                        <ul class="uk-text-center">
                            <li>Telephone:   1-876-874-3092</li>
                            <li>Toll Free:   1-888-308-2973</li>
                            <li>Fax: 1-876-313-4897</li>
                            <li>E-mail: info@fedserbank.com</li>
                        </ul>
                    </div>
                </div>
                <div class=" uk-padding uk-light">
                        <h4 class="uk-heading-line uk-text-center"><span>Resources</span></h4>
                        <div class="uk-text-center">
                            <!--<li data-v-8e427216=""><span uk-icon="icon: link"></span><a data-v-8e427216="" href="/contact" class="uk-text-capitalize future router-link-exact-active router-link-active">Contact Us</a></li>-->
                            <li><span uk-icon="icon: link"></span><router-link to="/contact">Contact Us</router-link></li>
                            <li><span uk-icon="icon: link"></span><router-link to="/feedback">Give Feedback</router-link></li>
                            <li><span uk-icon="icon: link"></span><router-link to="/atm-locator">ATM Locator</router-link></li>
                            <li><span uk-icon="icon: link"></span><router-link to="/site-map">Site Map</router-link></li>
                        </div>
                </div>
            <div class=" uk-padding uk-light">
                <h4 class="uk-heading-line uk-text-center"><span>About</span></h4>
                <div class="uk-text-center">
                    <li><span uk-icon="icon: link"></span><router-link to="/about">Our Company</router-link></li>
                    <li><span uk-icon="icon: link"></span><router-link to="/customer-service">Customer Service</router-link></li>
                    <li><span uk-icon="icon: link"></span><router-link to="/terms">Terms of Use</router-link></li>
                    <li><span uk-icon="icon: link"></span><router-link to="/security">Security</router-link></li>
                    <li><span uk-icon="icon: link"></span><router-link to="/privacy">Privacy</router-link></li>
            </div>
            </div>
                <div class=" uk-padding uk-light">
                    <div class="uk-text-center">
                        <h4 class="uk-heading-line uk-text-center"><span>Social Media</span></h4>
                        <a href="" class="uk-icon-button" uk-icon="instagram"></a>
                        <a href="" class="uk-icon-button" uk-icon="twitter"></a>
                        <a href="" class="uk-icon-button" uk-icon="facebook"></a>
                        <br>
                        <a href="" class="uk-icon-button" uk-icon="whatsapp"></a>
                        <a href="" class="uk-icon-button" uk-icon="linkedin"></a>
                        <a href="" class="uk-icon-button" uk-icon="youtube"></a>
                    </div>
                </div>
        </div>
        <div id="copyright" class=" uk-padding uk-light">
            <hr>
            <p class="copyright">© 2019 Fedorae Services Bank Corporation. All rights reserved.</p>
        </div>
</div>

</template>

<script>
    export default {
        name: "Foota.vue"
    }
</script>

<style scoped>
    li{
        list-style: none;
        text-align: left;
    }
    h4{
        margin-bottom: 1em;
    }
    .copyright{
        text-align: center;
    }
    a{
        margin: 15px;
    }
    ul li {
        padding: 7px;
    }


    @import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed');

    @keyframes shadow-pulse
    {
        0% {
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
        }
        100% {
            box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);
        }
    }

    @keyframes shadow-pulse-big
    {
        0% {
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.1);
        }
        100% {
            box-shadow: 0 0 0 70px rgba(0, 0, 0, 0);
        }
    }

       /* up top style */
    #return-to-top {
        position: fixed;
        bottom: 20px;
        right: 1px;
        background: rgb(0, 0, 0);
        background: rgba(0, 0, 0, 0.7);
        width: 50px;
        height: 50px;
        display: block;
        text-decoration: none;
        -webkit-border-radius: 35px;
        -moz-border-radius: 35px;
        border-radius: 35px;
        display: none;
        -webkit-transition: all 0.3s linear;
        -moz-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }
    #return-to-top i {
        color: #fff;
        margin: 0;
        position: relative;
        left: 1px;
        top: 13px;
        font-size: 19px;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }
    #return-to-top:hover {
        background: rgba(0, 0, 0, 0.9);
    }
    #return-to-top:hover i {
        color: #fff;
        top: 5px;
    }


    /* Extra Things */
    body{background: #eee ;font-family: 'Open Sans', sans-serif;}h3{font-size: 30px; font-weight: 400;text-align: center;margin-top: 50px;}h3 i{color: #444;}

</style>

