import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Foota from "./components/shared/Foota";
import Serving from "./components/Serving";
import Partnerships from "./components/Partnerships";
import Testimonials from "./components/Testimonials";
import Dashboard from "./views/Dashboard";
import Cards from "./components/Cards";
import Accounts from "./components/Accounts";
import BankCards from "./components/BankCards";
import Credits from "./components/Credits";
import Rates from "./components/Rates";
import WhatsNew from "./components/WhatsNew";
import Transactions from "./components/Transactions";
import Loans from "./components/Loans";
import NavBar from "./components/shared/NavBar";
import Whyfsb from "./components/Whyfsb";
import Form from "./components/Form";
import History from "./views/pages/History";
import RegisterPage from "./views/pages/RegisterPage";
import LoginPage from "./views/pages/LoginPage";


Vue.component("login", Login);
Vue.component("hero", Hero);
Vue.component("foota", Foota);
Vue.component("serving", Serving);
Vue.component("partnership", Partnerships);
Vue.component("testimonials", Testimonials);
Vue.component("dashboard", Dashboard);
Vue.component("cards", Cards);
Vue.component("accounts", Accounts);
Vue.component("bankcards", BankCards);
Vue.component("rates", Rates);
Vue.component("loans", Loans);
Vue.component("whatsnew", WhatsNew);
Vue.component("transactions", Transactions);
Vue.component("credits", Credits);
Vue.component("navbar", NavBar);
Vue.component("whyfsb", Whyfsb);
Vue.component("app-form", Form);
Vue.component("history", History);
Vue.component("regpage", RegisterPage);
Vue.component("logpage", LoginPage);



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
