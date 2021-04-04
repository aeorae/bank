<template>
    <div id="privacy">
        <navbar />
        <br>
        <h1 class="uk-heading-line uk-text-center"><span>Privacy and Security </span></h1>
        <div class="uk-section uk-section-default">
            <div class="uk-container">
                <div class="uk-panel uk-text-left">
                    <img class="uk-align-left uk-margin-remove-adjacent" src="http://www.rc.com/_cs_apps/pt_photo_gallery/uploads/largeindustrypracticeareaphotos960x500/original/istock_Data-Privacy-and-Security_960x500.jpg" width="425" height="350" alt="Example image">
                    <p>
                    <p><b> <font size="6">Here's what you need to know (and do) to stay as safe as possible</font> </b></p>

                    <b>Your security is our top priority! Here are the ways we protect you:</b>
                    <div class="uk-container uk-container-small"></div>
                    <p>  - Protecting against threats with an award-winning cybersecurity team that delivers comprehensive security 24/7 <p>
                    <p>-  Continuously monitoring transactions for suspicious activity<p>
                    <p> - Alerting you to potential fraud through the mobile app, text alerts 1, email, or phone<p>

                    <p><b> Here is what you can do now to help fight fraud:</b>  <p>


                    <ul uk-accordion="multiple: true">
                        <li class="uk-open">
                            <a class="uk-accordion-title" href="#">Use our Mobile Banking app</a>
                            <div class="uk-accordion-content">
                    <p>Our mobile app is the best way for you to stay on top of any suspicious account activity </p>

                </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#">Check your contact information </a>
                    <div class="uk-accordion-content">
                        <p>You're not the only one protecting your account.If we spot an issue, we want to get in touch with you the quickest way possible. <p>
                        <p>   Provide your mobile number, so we can alert you to potential fraud</p>
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#">Create strong, unique passwords</a>
                    <div class="uk-accordion-content">
                        <p> Strong passwords are 8 or more characters long and include a combination of numbers, symbols and upper- and lowercase letters <p>
                        <p>  Use multifactor authentication when possible</p>

                    </div>
                </li>
                </ul>
                <ul uk-accordion="multiple: true">
                    <li class="uk-open">
                        <a class="uk-accordion-title" href="#">Protect Your Devices</a>
                        <div class="uk-accordion-content">
                            <p>Keep your phone, tablet and computer up to date with the latest browsers, operating systems and antivirus software </p>

                        </div>
                    </li>
                    <li>
                        <a class="uk-accordion-title" href="#">Keep Your Account Information Safe</a>
                        <div class="uk-accordion-content">
                            <p>- Go paperless<p>
                            <p>- Never write your PIN on the back of your card<p>
                            <p> - Use trusted online payment methods, such as Bill Pay or Zelle® instead of writing checks <p>
                            <p></p>
                        </div>
                    </li>

                </ul>

                <p> <b>The best way to avoid getting tricked by scammers is to know the tricks they use – and the red flags that signal scams.</b> <p>

                <p><b>Know the red flags</b> <p>
                The most common types of scams will target you through fake emails (a technique known as phishing), text messages (SMSishing or smishing) voice calls (vishing), letters or even someone who shows up at your front door unexpectedly. No matter which technique the scammer uses, you may be:

                <p> - Pressured to send money<p>
                <p> - Threatened with law enforcement action<p>
                <p> - Told to purchase gift cards and provide codes as a form of payment<p>
                <p> - Asked to cash a check for a stranger or send money via wire transfer or Zelle®<p>
                <p> - Asked to deposit a check that overpays for something you're selling, and then send the difference elsewhere<p>
                <p><b> The best ways to avoid getting scammed</b><p>
            </p>
                <p> Never Trust Caller ID:
                    <font color="blue">Scammers may pose as government officials, law enforcement or even Bank of America employees to steal your personal information. Always validate a person’s organization by calling them back through an official phone number.</font> </p>
                <p> Don't Pay upfront for a promise:
                    <font color="blue">Scammers may pose as government officials, law enforcement or even Bank of America employees to steal your personal information. Always validate a person’s organization by calling them back through an official phone number.</font>  </p>
                <p> Don't give an unsolicited caller or solicitor your information or codes:
                    <font color="blue">Fedorae Services  will never call you or visit your home asking you to verify your account numbers, password or access code. If you receive a call, text or email, or someone comes to your home asking for this information, don’t give it out. Consider installing an app to block robocalls to your phone.</font> </p>
                <p> Don't provide account or personal information via text or email:
                    <font color="blue">We will never email or text you requesting you to call or respond with your account number, PIN or access code.</font>  </p>
            </div>
        </div>
    </div>

    <p> <router-link to="/contact">Contact us</router-link> immediately if you've been a victim of a scam.</p>
    </div>

</template>

<script>
    export default {
        name: "Privacy.vue"
    }
</script>

<style scoped>
    img{
        border-radius: 5px;
    }

</style>
