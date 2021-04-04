<template>
    <div id="overview-personal">
        <navbar/>
        <br>
        <div class="uk-container">
            <h1 class="uk-heading-line uk-text-center">Overview</h1>
            <deposit  />
            <creditcard />
            <loans/>
            <mortgages-real-estate />
            <insurance-p/>
            <rates/>
        </div>
    </div>
</template>

<script>
    import Deposit from "./Business-Personal/Deposit";
    import creditcard from "./Business-Personal/CreditCardP";
    import loans from "./Business-Personal/LoansP";
    import MortgagesRealEstate from "./Business-Personal/MortgagesRealEstate";
    import InsuranceP from "./Business-Personal/InsuranceP";
    import Rates from "../../components/Rates";
    export default {
        name: "PersonalOverview",
        components: {
            Rates,
            InsuranceP,
            MortgagesRealEstate,
            creditcard,
            Deposit,
            loans
        }
    }
</script>

<style scoped>

</style>