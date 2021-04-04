<template>
    <div id="the-cards">
        <div id="big_wrapper">
            <div id="new_div">
                <aside id="side_news">
                    <!-- client image -->
                    <div id="menu">
                        <div class="container">
                            <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="Avatar" style="width:90px">
                        </div>
                        <br>
                        <!-- two way binding -->
                        <p>Jane Doe</p>
                        <div id="menus">
                            <hr>
                            <h4>Dashboard</h4>
                            <hr>
                            <!-- change hr to border-top {maybe} -->
                            <h4>Accounts</h4>
                            <hr>
                            <h4>Transactions</h4>
                            <hr>
                            <h4>Cards</h4>
                            <hr>
                            <h4>Credit</h4>
                            <hr>
                            <h4>Rates</h4>
                            <hr>
                            <h4>Loans</h4>
                            <hr>
                            <h4>Settings</h4>
                            <hr>
                            <h4>What's New</h4>
                        </div>
                    </div>
                </aside>
                <div class="uk-grid">
                    <div class="uk-child-width-expand">

                    </div>
                </div>

                <div class="uk-grid">
                    <div class="uk-child-width-expand">
                        <DashCards />

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import DashCards from "../components/DashCards";
    export default {
        name: "Cards.vue",
        components: {
            DashCards
        }
    }
</script>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
    }

    h1{
        font: bold 20px Tahoma;
    }

    h2{
        font: bold 14px Tahoma;
    }

    header, section, footer, aside, nav, article, hgroup{
        display: block;
    }

    body{
        width:100%;
        display: -webkit-box;
        -webkit-box-pack: center;
    }

    #big_wrapper{
        max-width: 1000px;
        margin: 20px 0px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-flex: 1;
    }

    #top_menu li{
        display: inline-block;
        list-style: none;
        padding: 5px;
        font: bold 14px Tahoma;
    }

    #new_div{
        display: -webkit-box;
        -webkit-box-orient: horizental;
    }

    #main_section{
        -webkit-box-flex: 1;
        margin: 20px;
        padding: 20px;
    }
    #side_news{
        border: 1px solid lightgrey;
        width: 220px;
        margin: 20px 20px;
        padding: 30px;
        text-align: left;
    }
    img{
        border-radius: 45px;
    }
    h4{
        border-right: 2px solid lightgrey;
    }
    li{
        list-style: none;
    }
    @media only screen and (max-width : 374px){
        #side_news{
            display: none;
        }
    }
    @media only screen and (max-width : 800px){
        #side_news{
            display: none;
        }
    }
    @media only screen and (max-width : 767px){
        span{
            display: none;
        }
    }



</style>