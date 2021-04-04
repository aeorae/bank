<template>
    <div id="navi" uk-sticky="show-on-up: true">

        <nav class="uk-navbar-container" uk-navbar>
            <!-- off canvas button -->
            <button style="position: relative;" id="menu" class="uk-button " type="button" uk-toggle="target: #offcanvas-nav"><span uk-icon="icon: menu"></span></button>
            <!-- the logo -->
            <router-link to="/"><img id="this-thing" class="" style="margin-left: 10px; margin-top: 5px;" src="logoyo.png" alt=""></router-link>

            <div id="navs" class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="uk-active disappear"><router-link to="/">Home</router-link></li>
                    <li>
                        <router-link to="/about" class="disappear">About Us<span uk-icon="icon: chevron-down"></span></router-link>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><router-link to="/history">History</router-link></li>
                                <li><router-link to="/eligibility">Eligibility</router-link></li>
                                <li><router-link to="/all-testimonials">Testimonials</router-link></li>
                                <li><router-link to="/who-we-are">Who We Are</router-link></li>
                                <li><router-link to="/leadership">Meet Our Leaders</router-link></li>
                                <li class="uk-nav-divider"></li>
                            </ul>
                        </div>
                    </li>
                    <!-- more links -->
                    <li>
                        <router-link to="/contact" class="disappear">Contact Us</router-link>
                    </li>
                    <li>
                        <router-link to="/help" class="disappear" >Help<span uk-icon="icon: chevron-down"></span></router-link>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><router-link to="/help/#faq">FAQ</router-link></li>
                                <li><router-link to="/lost-card">Lost Card</router-link></li>
                                <li><router-link to="/set-up-account">Set Up An account</router-link></li>
                            </ul>
                        </div>
                    </li>
                    <li class=""><a class="uk-button" href="#modal-sections" uk-toggle><button class="uk-button uk-button-primary">Login</button></a></li>
                    <li class=""><router-link to="/set-up-account" class="uk-button" uk-toggle><button class="uk-button uk-button-secondary">Sign Up</button></router-link></li>
                </ul>
            </div>
            <!-- for tablets -->
            <div id="tablet">
                <ul id="problem" class="uk-navbar-right uk-list uk-position-right">
                        <li class="uk-margin-top"><a class="uk-button" href="#modal-sections" uk-toggle><button class="uk-button uk-button-primary">Login</button></a></li>
                        <li class="uk-margin-top"><router-link to="/set-up-account" class="uk-button" uk-toggle><button class="uk-button uk-button-secondary">Sign Up</button></router-link></li>
                </ul>
            </div>
            <!-- off canvas button
            <button style="margin-left: 20%;" id="menu" class="uk-button" type="button" uk-toggle="target: #offcanvas-nav"><span uk-icon="icon: menu"></span></button>
        -->
        </nav>
        <div id="rout">
            <!--<router-link to="/">Personal</router-link> |-->
            <button class="uk-button uk-link-muted" type="button"><router-link to="/personal">Personal</router-link><span uk-icon="icon: chevron-down"></span></button>
            <div uk-dropdown>
                <ul class="uk-nav uk-dropdown-nav">
                    <li><router-link to="/deposit">Deposit</router-link></li>
                    <li><router-link to="/credit-card">Credit Card</router-link></li>
                    <li><router-link to="/loans">Loans</router-link></li>
                    <li><router-link to="/mortgages-real-estate">Mortgages & Real Estate</router-link></li>
                    <li><router-link to="insurance">Insurance</router-link></li>
                    <li><router-link to="/rates">Rates</router-link></li>
                    <li class="uk-nav-divider"></li>
                    <li><router-link to="/contact">Contact Us</router-link></li>
                </ul>
            </div>
            <!--<router-link to="/about">Business</router-link>--> |
            <button class="uk-button uk-link-muted " type="button"><router-link to="/business">Business</router-link><span uk-icon="icon: chevron-down"></span></button>
            <div uk-dropdown>
                <ul class="uk-nav uk-dropdown-nav">
                    <li><router-link to="/deposit">Deposit</router-link></li>
                    <li><router-link to="/credit-card">Credit Card</router-link></li>
                    <li><router-link to="/loans">Loans</router-link></li>
                    <li><router-link to="/merchant-card-services">Merchant Card Services</router-link></li>
                    <li><router-link to="insurance">Insurance</router-link></li>
                    <li><router-link to="/rates">Rates</router-link></li>
                    <li class="uk-nav-divider"></li>
                    <li><router-link to="/contact">Contact Us</router-link></li>
                </ul>
            </div>
            <!--<router-link to="/about">Corporate</router-link>--> |
            <button class="uk-button uk-link-muted " type="button"><router-link to="/corporate">Corporate</router-link><span uk-icon="icon: chevron-down"></span></button>
            <div uk-dropdown>
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><router-link to="/transaction-banking">Transaction banking</router-link></li>
                    <li><router-link to="/financial">Financial</router-link></li>
                    <li><router-link to="/business-solutions">Business solutions</router-link></li>
                    <li><router-link to="/industry-specialists">Industry specialists</router-link></li>
                    <li><router-link to="/international-solutions">International solutions</router-link></li>
                    <li><router-link to="/intermediary-business">Intermediary business</router-link></li>
                    <li><router-link to="/economic-reports">Economic reports</router-link></li>
                    <li class="uk-nav-divider"></li>
                    <li><router-link to="/contact">Contact Us</router-link></li>
                </ul>
            </div>
        </div>

        <!-- off canvas -->
        <div id="offcanvas-nav" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar">
                <button class="uk-offcanvas-close" type="button" uk-close></button>
                <br>
                <h1 class="uk-heading-line uk-text-center"><span>Menu</span></h1>
                <ul class="uk-nav uk-nav-default">
                    <!-- idk i like the blue -->
                    <li class="uk-active"><router-link to="/">Home</router-link></li>
                    <li class="uk-nav-header"><router-link to="/about" href="#">About Us</router-link></li>
                    <li class="uk-nav-header"><router-link to="/contact" href="#">Contact Us</router-link></li>
                    <li class="uk-nav-header"><router-link to="/help" href="#">Help</router-link></li>
                    <br>
                    <hr class="uk-divider-icon">
                    <li class="login"><a class="uk-button" href="#modal-sections" uk-toggle>Login</a></li>
                    <br>
                    <li class="login"><router-link class="uk-button" to="/set-up-account" uk-toggle>Sign Up</router-link></li>
                </ul>

            </div>
        </div>
        <!-- modal code login -->
        <div id="modal-sections" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="uk-modal-header">
                    <label style="color: blue;" class="uk-modal-title">Login</label>
                </div>
                <div class="uk-modal-body">
                        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                            <div class="uk-card-media-left uk-cover-container">
                                <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" uk-cover>
                                <canvas width="600" height="400"></canvas>
                            </div>
                            <div>
                                <form>
                                    <br>
                                    <div class="">
                                        <div class="uk-inline">
                                            <input class="uk-input" type="text" placeholder="Online ID">
                                        </div>
                                    </div>

                                    <div class="">
                                        <div class="uk-inline">
                                            <input class="uk-input" type="text" placeholder="Passcode">
                                        </div>
                                    </div>
                                    <div class="">
                                        <input type="checkbox"> Save Online ID
                                    </div>
                                    <div>
                                        <button class="uk-button uk-button-default"><a href="http://localhost:8080/dashboard">Login</a></button>
                                    </div>
                                    <div class="uk-margin">
                                        <p>
                                            <a href="#">Forgot ID/Passcode?</a><br>
                                            <a href="/security">Security & Help</a> <!-- why i didnt use a router-link was because i did not know how to close the model when routing. -->
                                        </p>

                                    </div>
                                    <div class="">
                                        <button class="uk-button uk-button-default"><a href="/set-up-account">Open an Account</a></button>
                                    </div>
                                    <br>
                                </form>
                            </div>
                        </div>
                </div>
                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                </div>
            </div>
        </div>
        <!-- -->
        <!-- modal code sign up -->
        <div id="modal-sections-su" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="uk-modal-body">
                    <register-form/>
                </div>
                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                </div>
            </div>
        </div>
        <!-- -->

    </div>

</template>

<script>
    import RegisterForm from "../RegisterForm";
    export default {
        name: "NavBar.vue",
        components: {
            RegisterForm
        }
    }
</script>

<style scoped>
    /* Default Style */
    #navi {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #navi a {
        color: #2c3e50;
    }

    #navi a.router-link-exact-active {
        color: #1e87f0  ;
        font-weight: bold;
    }
    /* Default Style */

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #1e87f0;
    }
    /* Home, About Us & Them Thing DEH */
    @media only screen and (max-width : 800px){
        #navs{
            display: none;
        }
    }
    @media only screen and (max-width : 800px){
        #menu{
            visibility: visible;
        }
    }
    /* tablet login sign up button */
    @media only screen and (max-width : 767px){
        #tablet{
            display: none;
        }
    }
    @media only screen and (min-width : 801px){
        #tablet{
            display: none;
        }
    }
    div #rout{
        background-color: #f8f8f8;
        color: #5e5e5e;
    }
    .login a{
        border: 2px solid cadetblue;
    }
    .login a:hover{
        background-color: cadetblue;
        color: #f1f1f1;
    }
    form{
    text-align: center;
    }
    .uk-nav{
        text-align: left;
        margin-top: 0px;
    }
    .uk-navbar-dropdown{
        margin-top: 0px;
    }
   
</style>
