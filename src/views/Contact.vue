<template>
    <div id="contact">
        <navbar />
        <!-- content goes here -->
        <div id="something" class="uk-container">
            <!-- notice -->
            <div data-v-2b3ed754="" class="uk-background-default uk-dark uk-first-column" style="padding: 20px; !important;">
                <div data-v-2b3ed754="" class="uk-container uk-container-small uk-padding">
                    <p data-v-2b3ed754="" class="uk-text-center uk-text-lead@l uk-text-large@l">We are always waiting to hear from you. Feel free to contact us.</p>
                </div>
            </div>
            <!-- -->
            <h1 class="uk-heading-line uk-text-center"><span> Contact Us</span></h1>
            <ul style="text-align: center;">
                <li>Follow Us</li> |
                <li>Like Us</li>
            </ul>
            <div>
                <ul>
                    <li> <a href="" uk-icon="icon: instagram"></a></li>
                    <li> | </li>
                    <li>  <a href="" uk-icon="icon: twitter"></a></li>
                    <li> | </li>
                    <li><a href="" uk-icon="icon: facebook"></a></li>
                    <li> | </li>
                    <li><a href="" uk-icon="icon: youtube"></a> </li>
                </ul>
            </div>
            <!-- location component -->
            <locations />
            <!-- -->
            <app-form/>
            <!-- vali -->
        </div>
    </div>


</template>

<script>
    import Locations from "./pages/Locations";
    export default {
        name: "Contact.vue",
        components: {Locations}
    }
</script>

<style scoped>
    ul li{
        text-align: center;
        list-style: none;
        display: inline;
        padding: 10px;
    }

</style>
