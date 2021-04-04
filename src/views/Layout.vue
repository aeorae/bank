<template>
        <div id="layout" class="" style="background-color: #708EA4;">
            <!-- navbar component -->
            <navbar />
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="large-12 cell">
                        <!-- hero image -->

                        <div class="">
                            <hero />
                        </div>

                    </div>
                </div>
            </div>
            <br>


                <!-- community -->
                <div style="background-color: #486E88;">
                    <!-- real why bank with us -->
                    <br><br><br>
                    <h1 class="uk-heading-line uk-text-center"><span style="color: #fff;">Why bank with us?</span></h1>
                    <br>
                    <div class="uk-container">
                    <div class=" uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" style="margin-left: 10px; margin-right: 10px;" uk-grid>
                        <div class="uk-card-media-left uk-cover-container">
                            <img src="https://image.freepik.com/free-photo/smiling-young-couple-shaking-hands-with-insurance-agent_1139-978.jpg " alt="" uk-cover>
                            <canvas width="600" height="400"></canvas>
                        </div>
                        <div>
                            <div class="uk-card-body">
                                <h2 class="uk-card-title">Why our clients choose us.</h2>
                                <p>Fedorae Services Bank is focused on the positive impact we can make in the world. The world is changing, and we're transforming to meet those changes. <a href="/whyfsb">Learn more.</a></p> <!-- I put an <a></a> tag instead of the router-link because when clicked it showed the footer first. -->
                            </div>
                        </div>
                    </div>
                    <br><br><br>
                </div>
                <!-- -->
            </div>

                        <div class="grid-container">
                            <div class="grid-x grid-padding-x">
                                <div class="large-12 cell">
                        <!-- serving component -->
                        <div class="">
                            <!-- heading -->
                            <br> <br> <br>
                            <h1 class="uk-heading-line uk-text-center"><span style="color: #fff;">Serving the Community</span></h1>
                            <p style="color: #fff;">We are a relationship-based community bank focused on providing innovative products and services that are value driven.</p>
                            <br>
                            <serving />
                            <br>
                        </div>
                    </div>
                </div>
                        </div>

                <!-- better money -->
            <div id="better-money" style="background-color: #29516D;" >
                <div class="uk-container">
                    <div>
                        <br>
                        <h1 class="uk-heading-line uk-text-center" style="color: #fff;">Better Money Habits® for your financial life</h1>
                        <div class="grid-x grid-padding-x">
                            <div class="uk-container">
                                <p style="color: #fff;">Explore priorities below to get starteds</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid-x grid-padding-x uk-child-width-1-3@m uk-container" style="margin-right: 10px; margin-left: 10px;" uk-grid uk-scrollspy="cls: uk-animation-slide-top; target: .uk-card; delay: 300; repeat: false">
                        <div class="large-6 medium-6 cell uk-card  uk-card-body">
                            <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" alt="">
                            <div class="primary note">
                                <p style="background-color: #000;"><router-link class="uk-light" to="/better-money-habits">How does your spending measure up?</router-link></p>
                            </div>
                        </div>
                        <div class="large-6 medium-6 cell uk-card  uk-card-body">
                            <img src="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                            <div class="primary note">
                                <p style="background-color: #000;"><router-link class="uk-light" to="/better-money-habits">Buy a home comfortably and affordably with these tips</router-link></p>
                            </div>
                        </div>
                    </div>
                    <div class="grid-x grid-padding-x uk-child-width-1-3@m uk-container" style="margin-right: 10px; margin-left: 10px;" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: false">
                        <div class="large-6 medium-6 cell uk-card  uk-card-body">
                            <img src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">
                            <div class="primary note">
                                <p style="background-color: #000;"><router-link class="uk-light" to="/better-money-habits">Savings, money market or CD: Which account is right for you?</router-link></p>
                            </div>
                        </div>
                        <div class="large-6 medium-6 cell uk-card  uk-card-body">
                            <img src="https://images.unsplash.com/photo-1552334949-3dcfaf514919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">
                            <div class="primary note">
                                <p style="background-color: #000;"><router-link class="uk-light" to="/better-money-habits">Here's how to help your teen make smart spending trade-offs</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <br><br><br>
            </div>
            <!-- -->


                        <!-- here to help was here -->
                    <div class="uk-container">
                    <div class=""><br/>

                        <div id="map">
                            <h1 class="uk-heading-line uk-text-center" style="color: #fff;">Locations</h1>
                            <iframe data-v-94b0156a="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.206008338066!2d-77.50110748483439!3d18.01564058912235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb95897d52a933%3A0x9564ba8648e3594e!2sNorthern+Caribbean+University%3A+Department+of+Computer+and+Information+Sciences!5e0!3m2!1sen!2sjm!4v1560874697516!5m2!1sen!2sjm" allowfullscreen="allowfullscreen" style="border: 0px none;" width="100%" height="400" frameborder="0"></iframe>
                            <br>
                            <button class="uk-button uk-button-secondary uk-light uk-width-1-1 uk-margin-small-bottom"><router-link to="/contact/#locations">View All</router-link></button>
                        </div>
                        <br>
                        <br>
                        <div class="">
                            <!-- login component -->
                            <login />
                        </div>
                        <br>
                    </div>
                    <!-- here to help was here -->
                </div>

            <!-- -->
            <div class="uk-container">
                <div class="large-12 cell uk-container">
                    <div class="callout">

                        <h1 class="uk-heading-line uk-text-center"><span>Here to Help</span></h1>
                        <form style="margin-left: 30px; margin-right: 30px;">
                            <div class="grid-x grid-padding-x">
                                <div class="large-12 cell">
                                    <br>
                                    <label>Providing resources to meet your needs</label>
                                    <br>
                                </div>
                            </div>
                            <div class="grid-x grid-padding-x">
                                <div class="large-4 medium-4 cell x uk-card uk-card-default uk-card-body uk-card-hover">
                                    <label>Online Demos</label>
                                    <h4>Online Demos</h4>
                                    <p>Tutorials for Our Services</p>
                                    <router-link to="/online-demo" href="#">Learn More</router-link>
                                </div>
                                <div class="large-4 medium-4 cell x uk-card uk-card-primary uk-card-body uk-card-hover">
                                    <label>ATMs & Locations</label>
                                    <h4>ATMs & Locations</h4>
                                    <p>22 Locations Throughout Jamaica</p>
                                    <router-link to="/atm-locator">Find Locations</router-link>
                                </div>
                                <div class="large-4 medium-4 cell x uk-card uk-card-default uk-card-body uk-card-hover">
                                    <label>Security Center</label>
                                    <h4>Security Center</h4>
                                    <p>Protect Yourself From Fraud</p>
                                    <router-link to="/security" href="#">Learn More</router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br><br><br>
            <div class="uk-container">
                <div class="large-12 cell uk-container">
                    <testimonials />
                </div>
            </div>
            <!-- partnership component -->
            <br><br><br>
            <div class="uk-container">
                <div class="large-12 cell uk-container">
                        <partnership />
                </div>
            </div>
            <!-- layout end -->
            </div>
    <!-- footer -->
</template>

<script>
export default {
    name: "Layout.vue",
    components: {

    }
}
</script>

<style scoped>

</style>