<template>
    <div id="faq">
        <navbar />
        <div class="uk-container">
            <!-- content goes here -->
            <!-- This is the FAQ section -->
            <br>
            <h1 class="uk-heading-divider uk-text-left"><span>FAQ</span></h1>
            <!-- uikit code -->
            <p style="text-decoration: underline">Click Your Question To Get an Answer.</p>
            <br>
            <ul class="uk-text-left uk-list uk-list-striped" uk-accordion="multiple: true">
                <li class="uk-open">
                    <a class="uk-accordion-title" href="#"><h2>Am I subject to tax on my investment as an overseas resident?</h2></a>
                    <div class="uk-accordion-content">
                        <p>Yes you are. However, if you are domiciled outside of Jamaica, you may be eligible for a reduced rate of taxation. The rate is determined by the taxation treaty, which exists between your country and Jamaica. Country Rate United States 12.5% Canada 15% The United Kingdom 15% CARICOM 15%. Please contact our client relations officer or your wealth advisor for other countries..</p>
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#"><h2>What is the minimum to open an account?</h2></a>
                    <div class="uk-accordion-content">
                        <p>The minimum amount required to open an account varies based on product. Please contact your Wealth Advisor for more details...</p>
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#"><h2>Why do I need investment advice?</h2></a>
                    <div class="uk-accordion-content">
                        <p>An informed investor is a successful investor. Successful wealth creation requires an intimate understanding of the financial markets. While you may not have the time or the expertise to keep up the dynamic bond, money and stock markets, our in house research department spends each day monitoring the financial markets both locally and overseas. Any of our wealth managers will be able to provide you with timely relevant information that will help you build the ideal portfolio for your wealth objectives. Visit our Advice and Planning page for more information...</p>
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#"><h2>What are your rates?</h2></a>
                    <div class="uk-accordion-content">
                        <p>Market conditions may cause rates to vary. Please contact our customer service representatives or your wealth manager for this information.</p>
                    </div>
                </li>
                <br>
                <button class="uk-button uk-button-secondary uk-light"><router-link to="/">View All Questions</router-link></button>
            </ul>
            <!-- -->
            <br> <br>
            <p style="text-decoration: underline">Not seeing your question? Write to us. We are always happy to hear from you.</p>
                <app-form />
        </div>
        </div>
</template>

<script>
    export default {
        name: "FAQ.vue"
    }
</script>

<style scoped>

</style>