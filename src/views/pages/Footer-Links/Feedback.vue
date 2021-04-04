<template>
    <div id="feedback">
        <navbar/>
        <!-- CONTACT -->
        <div class="uk-container">
            <!-- notice -->
            <div data-v-2b3ed754="" class="uk-background-default uk-dark uk-first-column" style="padding: 20px; !important;">
                <div data-v-2b3ed754="" class="uk-container uk-container-small uk-padding">
                    <p data-v-2b3ed754="" class="uk-text-center uk-text-lead@l uk-text-large@l">We are always waiting to hear from you.</p>
                </div>
            </div>
            <!-- -->
            <h1 class="uk-heading-line uk-text-center"><span> Tell Us How You Feel</span></h1>
            <ul style="text-align: center;">
                <li>Follow Us</li> |
                <li>Like Us</li>
            </ul>
            <div>
                <ul>
                    <li><a href="" uk-icon="icon: facebook"></a></li>
                    <li> | </li>
                    <li>  <a href="" uk-icon="icon: twitter"></a></li>
                    <li> | </li>
                    <li> <a href="" uk-icon="icon: instagram"></a></li>
                    <li> | </li>
                    <li><a href="" uk-icon="icon: youtube"></a> </li>
                </ul>
            </div>
        <h1 class="uk-heading-line uk-text-center"><span>Contact Form</span></h1>
        <br>
        <div class="container uk-text-left uk-background-secondary uk-light ">
            <form action="action_page.php">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name...">

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name...">

                <label for="lname">E-mail</label>
                <input type="text" id="email" name="email" placeholder="Your Email...">

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="jamaica">Jamaica</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

            </form>
            <br>
            <form action="https://www.fedoraeservices.com/index.php?route=information/contact" method="post" enctype="multipart/form-data" class="form-horizontal">
                <fieldset>
                    <legend><h4 class="uk-heading uk-align-left">Captcha</h4></legend>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-captcha">Enter the code in the box below</label>
                        <div class="col-sm-10">
                            <input type="text" name="captcha" id="input-captcha" class="form-control" />
                            <img src="https://s17-us2.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fwww.abeautifulsite.net%2Fuploads%2F2011%2F01%2Fcaptcha.png&sp=e827fd0d60ad3a5fced32e2349c05512&anticache=310097" alt="" />
                        </div>
                    </div>
                </fieldset>

                <br>
                <div class="buttons">
                    <div class="pull-right">
                        <input style="border-radius: 5px;" class="uk-button uk-button-secondary" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
        </div>
        <!-- -->
    </div>
</template>

<script>
    export default {
        name: "Feedback.vue"
    }
</script>

<style scoped>
    /* Contact form */
    h1{
        text-align: center;
    }

    input{
        border-radius: 10px;
        width: 20%;
    }

    input[type=text], select, textarea {
        width: 80%;
        border: none;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical
    }


    input[type=submit] {
        background-color: #8a8a8a;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }


    input[type=submit]:hover {
        background-color: #000000;
    }

    .container {
        border-radius: 5px;
        padding: 70px;
    }
    label{
        color: white;
    }
    ul li{
        text-align: center;
        list-style: none;
        display: inline;
        padding: 10px;
    }





</style>