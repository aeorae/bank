<template>
    <!-- this is the phone component -->
    <div id="login">
        <h1 class="uk-heading-line uk-text-center" style="color:#fff;"><span>Check Us Out on Mobile</span></h1>
        <!-- card -->
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <a uk-tooltip="Click To Download"  href="https://play.google.com/store/apps/details?id=com.securitybank&hl=en"><img class="callout" src="@/assets/iphone7.png" alt=""></a>
            </div>
            <div>
                <div class="uk-card-body">
                    <br><br><br>
                    <div>
                        <br>
                        <p><span uk-icon="icon: location"></span>Convenient Digital Banking</p>
                        <p class="uk-text-left">As a member of The Fedorae Services Bank FSB, you'll have 24/7/365 access to your account via online banking (currently undergoing a major upgrade) and mobile banking. </p>
                        <a uk-tooltip="Click To Download"  href="https://play.google.com/store/apps/details?id=com.securitybank&hl=en"><img style="width: 50%;" class="callout" src="https://bankfirstwi.bank/sft1126/apple-store.svg" alt=""></a>
                        <a uk-tooltip="Click To Download"  href="https://play.google.com/store/apps/details?id=com.securitybank&hl=en"><img style="width: 50%;" class="callout" src="https://bankfirstwi.bank/sft1126/google-play.svg" alt=""></a>
                        <br>
                    </div>
                    <div>
                        <br>
                        <p><span uk-icon="icon: receiver"></span>Skip the Call-Centers</p>
                        <p class="uk-text-left">When you call The Florist Federal Credit Union, you'll reach a friendly, helpful staff member that knows the answer to your question. Say goodbye to neverending holds and transfers. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue"
    }
</script>

<style scoped>
    label{
        margin-top: 10px;
    }



</style>