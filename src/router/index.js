import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import PaymentInfo from "@/views/Info/Sub/PaymentInfo";
import Info from "@/views/Info/Info";
import SellerInfo from "@/views/Info/Sub/SellerInfo";
import AccessInfo from "@/views/Info/Sub/AccessInfo";
import RefundInfo from "@/views/Info/Sub/RefundInfo";
import ContactInfo from "@/views/Info/Sub/ContactInfo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/info",
    name: "info",
    component: Info,
    children: [
      {
        path: "",
        component: PaymentInfo,
      },
      {
        path: "seller",
        component: SellerInfo,
      },
      {
        path: "access",
        component: AccessInfo,
      },
      {
        path: "refund",
        component: RefundInfo,
      },
      {
        path: "contacts",
        component: ContactInfo,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
