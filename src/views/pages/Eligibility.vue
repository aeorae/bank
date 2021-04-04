<template>
    <div id="eligibility">
        <navbar />
        <br>
        <!-- new code -->
        <div class="uk-container">
        <h1 class="uk-heading-line uk-text-center"><span>Becoming a Member</span></h1>
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img src="https://img.freepik.com/free-photo/person-playing-chess_89286-98.jpg?size=626&ext=jpg" alt="">
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">The Credit Union Advantage</h3>
                        <p>Credit Unions are owned and operated by their members, not stockholders. Any residual income, after expenses, is retained in the credit union to 1) make it stronger by setting aside reserves, and 2) to give back to the membership by providing higher deposit rates and lower loan rates. A Credit Union is where people of commonality have an opportunity to pool their money in such a way that they become the mission of the Credit Union; to improve the financial wellbeing of its members and the community it serves. Any and all credit unions have been formed to serve that way. </p>
                    </div>
                </div>
            </div>

            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <img src="https://image.freepik.com/free-photo/person-s-hand-putting-money-glass-jar-near-decreasing-stacked-coins_23-2147919232.jpg" alt="" uk-cover>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">The Fedorae Advantage</h3>
                        <p>The Florist FCU was formed to serve the florist industry. If you or a family member works for a grower, distributor, broker, supplier, association, or shop that services the floral industry, you are eligible to become a member. It makes no difference in what city or state you reside; we have members all over the country--from coast to coast and border to border. We have the ability to service your needs quickly and efficiently. </p>
                    </div>
                </div>
            </div>
            <br> <br>
            <div class="js-upload" uk-form-custom>
                <input type="file" multiple>
                <button class="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom">Download Membership Application</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Eligibility.vue"
    }
</script>

<style scoped>
    .uk-button:hover{
        background-color: black;
        color: white;
    }
    p{
        text-align: left;
    }

</style>