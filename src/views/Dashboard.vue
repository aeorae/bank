<template>
    <div id="dash">
        <DashNav />

        <div class="grid-x grid-padding-x">
            <!-- welcome notice, add some two way binding for name -->
            <div class="large-12 cell">
                <marquee behavior="scroll" direction="left"><h1>Hi again, Jane...</h1></marquee>
            </div>
        </div>

        <!-- the cards -->
        <cards />

    </div>
</template>

<script>
    import DashNav from "../components/DashNav";
    export default {
        name: "Dashboard.vue",
        components: {
            DashNav
        }
    }
</script>

<style scoped>
    /* Style the container with a rounded border, grey background and some padding and margin */
    .container {
        border: 2px solid #ccc;
        background-color: #eee;
        border-radius: 5px;
        padding: 16px;
        margin: 16px 0;
        float: left;
    }

    /* Clear floats after containers */
    .container::after {
        content: "";
        clear: both;
        display: table;
    }

    /* Float images inside the container to the left. Add a right margin, and style the image as a circle */
    .container img {
        float: left;
        margin-right: 20px;
        border-radius: 50%;
    }

    /* Increase the font-size of a span element */
    .container span {
        font-size: 20px;
        margin-right: 15px;
    }

    /* Add media queries for responsiveness. This will center both the text and the image inside the container */
    @media (max-width: 500px) {
        .container {
            text-align: center;
        }

        .container img {
            margin: auto;
            float: none;
            display: block;
        }
    }
    .container{
        margin-left: 2em;
    }
    .callout{
        float: right;
        height: 0%;
    }
</style>