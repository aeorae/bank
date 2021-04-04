<template>
    <div id="everything">
        <div class="uk-grid">
            <div id="side_news" class="uk-child-width-expand">
                <aside>
                    <h4>Balance</h4>
                    <h5>$100.00 USD</h5>
                </aside>
            </div>
            <div id="side_news" class="uk-child-width-expand">
                <aside>
                    <h4>Account No.</h4>
                    <h6>874W3GF87GWEI</h6>
                </aside>
            </div>
            <div id="side_news" class="uk-child-width-expand">
                <aside>
                    <h4>Credits</h4>
                    <h5>Credit Score: 10,000</h5>
                </aside>
            </div>
            <div id="side_news" class="uk-child-width-expand">
                <aside>
                    <h4>Rates</h4>
                    <button class="currency-select btn btn-link btn-block" type="button" name="EUR">€ Euro</button>
                    <br>
                    <button class="currency-select btn btn-link btn-block" type="button" name="JMD">$ Jamaican</button>
                    <br>
                    <button class="currency-select btn btn-link btn-block" type="button" name="GBP">£ Pound Sterling</button>
                    <br>
                    <button class="currency-select btn btn-link btn-block" type="button" name="Other">Others</button>
                </aside>
            </div>
            <div id="side_news" class="uk-child-width-expand">
                <aside>
                    <h4>Loans</h4>
                    <a href="#">Register</a>
                </aside>
            </div>
            <div id="side_news" class="uk-child-width-expand">
                <aside>
                    <h4>What's New</h4>
                    <ul>
                        <li><a href="#">Something</a></li>
                        <li><a href="#">Something else</a></li>
                        <li><a href="#">Another Something</a></li>
                        <li><a href="#">More Something</a></li>
                        <li><a href="#">Yea thats Something</a></li>
                    </ul>
                </aside>
            </div>
            <div id="side_news" class="uk-child-width-expand">
                <aside>
                    <h4>Transactions</h4>
                    <ul>
                        <li><span uk-icon="icon: push"></span>You paid JPS $50. <em>29 mins ago...</em></li>
                        <li><span uk-icon="icon: push"></span>You paid NWA $20. <em>17 hours ago...</em></li>
                        <li><span uk-icon="icon: pull"></span>You received $100 from Account No. RTE54D7D  <em>1 day ago...</em></li>
                    </ul>
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DashCards.vue"
    }
</script>

<style scoped>
    #side_news{
        border: 1px solid lightgrey;
        width: 300px;
        margin: 10px 10px;
        padding: 50px;
        text-align: left;
        margin-left: 20px;
        list-style: none;
    }
    #everything{
        margin-left: 50px;
    }
    h4{
        border-bottom: 1px solid lightgrey;
    }


</style>