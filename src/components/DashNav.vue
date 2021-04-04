<template>
    <div id="navi" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">

        <nav class="uk-navbar-container" uk-navbar>

            <!-- the logo -->
            <router-link to="/"><img src="../assets/thefedoraes1.png" alt="Logo"></router-link>

            <div id="navs" class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li><a href="" uk-icon="icon: bell"></a></li>
                    <li><a href="" uk-icon="icon: cog"></a></li>
                    <li><a href="http://localhost:8080" aria-placeholder="Logout" uk-icon="icon: sign-out"></a></li>
                </ul>
            </div>
            <!-- off canvas button -->
            <button style="margin-left: 5px;" id="menu" class="uk-button" type="button" uk-toggle="target: #offcanvas-nav"><span uk-icon="icon: menu"></span></button>
        </nav>
        <!-- off canvas -->
        <div id="offcanvas-nav" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar">
                <ul class="uk-nav uk-nav-default">
                    <li> <div class="container">
                        <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="Avatar" style="width:90px">
                    </div></li>

                    <!-- v-model to get name -->
                    <li><h1>Jane Doe</h1></li>

                    <li class="uk-active"><a href="#">Dashboard</a></li>
                    <li class="uk-parent">
                        <a href="#">Balance</a>
                        <ul class="uk-nav-sub"></ul>
                    </li>
                    <li>Transactions</li>
                    <li class="uk-nav-header"><a href="#">Credits</a></li>
                    <li class="uk-nav-header"><a href="#">Rates</a></li>
                    <li class="uk-nav-header"><a href="#">Loans</a></li>
                    <li class="uk-nav-header"><a href="#">What's New</a></li>
                    <li class="uk-nav-divider"></li>
                    <!-- set if logged in change to log out | if logged out change to log in -->
                    <li class="login"><a href="http://localhost:8080">Logout</a></li>
                </ul>

            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "NavBar.vue",
        components: {

        }
    }
</script>

<style scoped>
    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: cadetblue;
    }
    @media only screen and (max-width : 1024px){
        #navs{
            visibility: visible;
        }
    }
    @media only screen and (max-width : 414px){
        #navs{
            display: none;
        }
    }
    @media only screen and (min-width : 365px){
        #menu{
            visibility: visible;
        }
    }
    .login{
        font-weight: bolder;
        color: #f1f1f1;
        border-radius: 2px;
    }
    .login a{
        border: 2px solid cadetblue;
    }
    .login a:hover{
        background-color: cadetblue;
        color: #f1f1f1;
    }
    img{
        border-radius: 45px;
    }
    h1{
        margin-top: 10px;
        border-bottom: 1px solid lightgrey;
    }
</style>