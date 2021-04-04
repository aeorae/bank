<template>
    <div id="hero" >
        <div uk-slideshow="autoplay: true">
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 7.4:3.3; animation: push">

                <ul class="uk-slideshow-items">
                    <li>
                        <img src="https://www.bankofthewest.com/~/media/Images-responsive/hosted/personal-home/homepage072219.jpg" alt="" uk-cover>
                        <div class="uk-position-left uk-position-small uk-text-left uk-light">
                            <div class="texty uk-container">
                                <h2 class="uk-margin-remove" style="color: black;">THE BANK FOR CHANGE </h2><br>
                                <p class="uk-margin-remove" style="color: black;">Where you put your money matters. Open a checking
                                    <br>account with a bank that finances a sustainable tomorrow.</p><br>
                                <button class="uk-button-secondary wrapper"><a class="uk-button uk-button-secondary ani" href="/set-up-account">Apply Now</a></button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="https://www.discover.com/content/dam/dfs/online-banking/images/how-to-choose-the-right-finance-app-desktop.jpg" alt="" uk-cover>
                        <div class="uk-position-left uk-position-small uk-text-left uk-light">
                            <div class="uk-container" style=" margin-top: 33px">
                                <h2 class="uk-margin-remove" style="color: white; font-weight: bolder;">Easy to love.</h2><br><br>
                                <p class="uk-margin-remove" style="color: white;">Online banking, now as simple as everything else you do on your phone</p><br>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="https://www.discover.com/content/dam/dfs/online-banking/images/full-home-hero.jpg" alt="" uk-cover>
                        <div class="uk-position-left uk-position-small uk-text-left uk-light">
                            <div class="texty uk-container">
                                <h3 class="uk-margin-remove" style="color: orange;">Discover Online Banking</h3>
                                <h1 class="uk-margin-remove" style="color: black;">Banking your way.</h1>
                            </div>
                        </div>
                    </li>
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

                <div class="uk-position-bottom-center uk-position-small">
                    <ul class="uk-dotnav">
                        <li uk-slideshow-item="0"><a href="#">Item 1</a></li>
                        <li uk-slideshow-item="1"><a href="#">Item 2</a></li>
                        <li uk-slideshow-item="2"><a href="#">Item 3</a></li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "hero.vue"
    }
</script>

<style scoped>

#navcon a{
    background-color: cadetblue;
}
    .texty{
        margin: 10em;
        margin-right: 10px;
    }
    .uk-button:hover{
        background-color: #157539;
        color: white;
    }
    .uk-position-center-left:hover{
        background-color: lightgrey;
    }
    .uk-position-center-right:hover{
        background-color: lightgrey;
    }
    /* apply ani */
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

.ani
{
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    text-align: center;
    background: cadetblue;
    animation: shadow-pulse 1s infinite;
}

</style>