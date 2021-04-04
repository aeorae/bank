import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard";
import Accounts from "../components/Accounts";
import BankCards from "../components/BankCards";
import WhatsNew from "../components/WhatsNew";
import Transactions from "../components/Transactions";
import Credits from "../components/Credits";
import Rates from "../components/Rates";
import Loans from "../components/Loans";
import Contact from "../views/Contact";
import FAQ from "../views/pages/FAQ";
import Locations from "../views/pages/Locations";
import Personal from "../views/pages/Personal";
import Business from "../views/pages/Business";
import Corporate from "../views/pages/Corporate";
import Services from "../views/pages/Services";
import Help from "../views/pages/Help";
import History from "../views/pages/History";
import Eligibility from "../views/pages/Eligibility";
import Whyfedorae from "../views/pages/Whyfedorae";
import ExpRelage from "../views/pages/ExpRelage";
import WhoWeAre from "../views/pages/WhoWeAre";
import Leadership from "../views/pages/Leadership";
import LostCard from "../views/pages/LostCard";
import SetUpAccount from "../views/pages/SetUpAccount";
import PersonalOverview from "../views/pages/PersonalOverview";
import CreditCardP from "../views/pages/Business-Personal/CreditCardP";
import Deposit from "../views/pages/Business-Personal/Deposit";
import InsuranceP from "../views/pages/Business-Personal/InsuranceP";
import LoansP from "../views/pages/Business-Personal/LoansP";
import MerchantCardServices from "../views/pages/Business-Personal/MerchantCardServices";
import MortgagesRealEstate from "../views/pages/Business-Personal/MortgagesRealEstate";
import BusinessSolutions from "../views/pages/Corporate/BusinessSolutions";
import EconomicReports from "../views/pages/Corporate/EconomicReports";
import Financial from "../views/pages/Corporate/Financial";
import IndustrySpecialists from "../views/pages/Corporate/IndustrySpecialists";
import IntermediaryBusiness from "../views/pages/Corporate/IntermediaryBusiness";
import InternationalSolutions from "../views/pages/Corporate/InternationalSolutions";
import TransactionBanking from "../views/pages/Corporate/TransactionBanking";
import Feedback from "../views/pages/Footer-Links/Feedback";
import ATMs from "../views/pages/Footer-Links/ATMs";
import Sitemap from "../views/pages/Footer-Links/Sitemap";
import Privacy from "../views/pages/Footer-Links/Privacy";
import Security from "../views/pages/Footer-Links/Security";
import GrowWithUs from "../views/pages/GrowWithUs";
import Relationshipbb from "../views/pages/Relationshipbb";
import BetterMoneyHabits from "../views/pages/BetterMoneyHabits";
import OnlineDemo from "../views/pages/OnlineDemo";
import Terms from "../views/pages/Footer-Links/Terms";
import CustomerService from "../views/pages/Footer-Links/CustomerService";
import AllTestimonials from "../views/pages/AllTestimonials";
import LoginPage from "../views/pages/LoginPage";
import RegisterPage from "../views/pages/RegisterPage";

Vue.use(VueRouter);

const routes = [
  {path: "/", name: "home", component: Home},
  {path: "/about", name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {path: "/dashboard", name: "Dashboard", component: Dashboard},
  {path: "/accounts", name: "Accounts", component: Accounts},
  {path: "/bankcards", name: "BankCards", component: BankCards},
  {path: "/credit", name: "Credits", component: Credits},
  {path: "/rates", name: "Rates", component: Rates},
  {path: "/loans", name: "Loans", component: Loans},
  {path: "/whatsnew", name: "WhatsNew", component: WhatsNew},
  {path: "/transcations", name: "Transactions", component: Transactions},
  {path: "/contact", name: "Contact", component: Contact},
  {path: "/FAQ", name: "FAQ", component: FAQ},
  {path: "/locations", name: "Locations", component: Locations},
  {path: "/personal", name: "Personal", component: Personal},
  {path: "/business", name: "Business", component: Business},
  {path: "/corporate", name: "Corporate", component: Corporate},
  {path: "/services", name: "Services", component: Services},
  {path: "/help", name: "Help", component: Help},
  {path: "/history", name: "History", component: History},
  {path: "/eligibility", name: "Eligibility", component: Eligibility},
  {path: "/whyfsb", name: "Whyfedorae", component: Whyfedorae},
  {path: "/experienced-relationship-managers", name: "ExpRelage", component: ExpRelage},
  {path: "/who-we-are", name: "WhoWeAre", component: WhoWeAre},
  {path: "/leadership", name: "Leadership", component: Leadership},
  {path: "/lost-card", name: "LostCard", component: LostCard},
  {path: "/set-up-account", name: "SetUpAccount", component: SetUpAccount},
  {path: "/overview", name: "PersonalOverview", component: PersonalOverview},
  {path: "/deposit", name: "Deposit", component: Deposit},
  {path: "/insurance", name: "InsuranceP", component: InsuranceP},
  {path: "/loans", name: "LoansP", component: LoansP},
  {path: "/business-solutions", name: "BusinessSolutions", component: BusinessSolutions},
  {path: "/economic-reports", name: "EconomicReports", component: EconomicReports},
  {path: "/financial", name: "Financial", component: Financial},
  {path: "/industry-specialists", name: "IndustrySpecialists", component: IndustrySpecialists},
  {path: "/intermediary-business", name: "IntermediaryBusiness", component: IntermediaryBusiness},
  {path: "/international-solutions", name: "InternationalSolutions", component: InternationalSolutions},
  {path: "/transaction-banking", name: "TransactionBanking", component: TransactionBanking},
  {path: "/credit-card", name: "CreditCardp", component: CreditCardP},
  {path: "/mortgages-real-estate", name: "MortgagesRealEstate", component: MortgagesRealEstate},
  {path: "/merchant-card-services", name: "MerchantCardServices", component: MerchantCardServices},
  {path: "/feedback", name: "Feedback", component: Feedback},
  {path: "/atm-locator", name: "ATMs", component: ATMs},
  {path: "/site-map", name: "Sitemap", component: Sitemap},
  {path: "/privacy", name: "Privacy", component: Privacy},
  {path: "/security", name: "Security", component: Security},
  {path: "/grow-with-us", name: "GrowWithUs", component: GrowWithUs},
  {path: "/relationship-based", name: "Relationshipbb", component: Relationshipbb},
  {path: "/better-money-habits", name: "BetterMoneyHabits", component: BetterMoneyHabits},
  {path: "/online-demo", name: "OnlineDemo", component: OnlineDemo},
  {path: "/terms", name: "Terms", component: Terms},
  {path: "/customer-service", name: "CustomerService", component: CustomerService},
  {path: "/all-testimonials", name: "AllTestimonials", component: AllTestimonials},
  {path: "/login", name: "LoginPage", component: LoginPage},
  {path: "/register", name: "RegisterPage", component: RegisterPage}








];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;
