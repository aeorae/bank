<template>
    <div id="log">
        <navbar/>
        <div class="uk-container">
            <br>
                <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                    <div class="uk-card-media-left uk-cover-container">
                        <img src="https://image.freepik.com/free-vector/login-concept-illustration_114360-757.jpg" alt="" uk-cover>
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
                        </form>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginPage.vue",
        components: {

        }
    }
</script>

<style scoped>

</style>