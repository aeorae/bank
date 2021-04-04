<template>
   <div id="help">
      <navbar />
      <!-- contain goes here -->
      <br>
      <div class="uk-container">
         <h1 class="uk-heading-line uk-text-center"><span>Help</span></h1>
         <!-- faq -->
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
               <button class="uk-button uk-button-secondary uk-light"><router-link to="/faq">View All Questions</router-link></button>
            </ul>
            <!-- -->
            <br> <br>
            <p style="text-decoration: underline">Not seeing your question? Write to us. We are always happy to hear from you.</p>
            <app-form />
         <!-- -->
         <br>
         <!--lost-card-->
         <br>
            <h1 class="uk-heading-divider"><span>Lost Your Card? We're Here To Help</span></h1>
            <div class="uk-section uk-section-default">
                  <div class="uk-panel uk-text-left">
                     <img class="uk-align-left uk-margin-remove-adjacent" src="https://img.freepik.com/free-photo/leather-purse-with-money-lying-park-bench-while-tourists-are-walking-away-image_43636-138.jpg?size=626&ext=jpg" width="425" height="350" alt="Example image">
                     <p>Fedorae Services Bank received a federal charter in 1969, after members of the WesTexas New Mexico Florist Association looked for ideas to benefit the members of the Association. The original office was in Midland, Texas, and in 1973 it was moved to Roswell, New Mexico where the volunteer manager lived and owned a flower shop.</p>
                     <p>In 2004, WTNM Federal Credit Union merged with Texas State Florists Association Credit Union, and the name for both was changed to The Florist Federal Credit Union. We honor the efforts and support of the volunteers of both Texas State and WTNM Credit Union, who's spirit and hard work helped to create a healthy and vibrant financial cooperative for florists, employees, and families nationwide. </p>
                     <button class="uk-button uk-button-secondary uk-light"><router-link to="/contact/#locations">Find a Branch Near You</router-link></button>
                  </div>
         </div>
         <!-- -->
         <!--set-up-account-->
         <br>
            <h1 class="uk-heading-divider"><span>Want To Set Up An Account? We're Here To Help</span></h1>
            <div class="uk-section uk-section-default">
               <div class="uk-container">
                  <br>
                  <div class="uk-panel uk-text-left">
                     <img class="uk-align-left uk-margin-remove-adjacent" src="https://img.freepik.com/free-photo/close-up-accounting-documents-with-money-coins_93675-52994.jpg?size=626&ext=jpg" width="425" height="350" alt="Example image">
                     <p>Fedorae Services Bank received a federal charter in 1969, after members of the WesTexas New Mexico Florist Association looked for ideas to benefit the members of the Association. The original office was in Midland, Texas, and in 1973 it was moved to Roswell, New Mexico where the volunteer manager lived and owned a flower shop.</p>
                     <p> Through the dedication of many volunteers serving in various capacities, the credit union began to grow and prosper. In 2004, WTNM Federal Credit Union merged with Texas State Florists Association Credit Union, and the name for both was changed to The Florist Federal Credit Union. We honor the efforts and support of the volunteers of both Texas State and WTNM Credit Union, who's spirit and hard work helped to create a healthy and vibrant financial cooperative for florists, employees, and families nationwide. </p>
                  </div>
                  <br> <br>
                  <div>
                     <button class="uk-button uk-button-secondary uk-margin-small-bottom uk-light uk-hover"><router-link to="/set-up-account">Open an Account</router-link></button>
                  </div>
               </div>
            </div>
         <!-- -->
      </div>
   </div>
</template>

<script>
    export default {
        name: "Help",
       components: {

       }
    }
</script>

<style scoped>

</style>