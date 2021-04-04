<template>
    <div id="reg">
        <!-- i dont even know... just in case ig -->
        <navbar/>
        <div class="uk-container">
            <register-form/>
        </div>
        <br>
    </div>
</template>

<script>
    import RegisterForm from "../../components/RegisterForm";
    export default {
        name: "RegisterPage.vue",
        components: {RegisterForm}
    }
</script>

<style scoped>

</style>