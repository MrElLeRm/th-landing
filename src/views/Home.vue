<template>
  <div class="page page--home">
    <header-banner></header-banner>
    <for-who></for-who>
    <why-we></why-we>
    <how-start></how-start>
    <pricing></pricing>
    <lets-try></lets-try>
  </div>
</template>

<script>
import HeaderBanner from "@/components/sections/HeaderBanner";
import ForWho from "@/components/sections/ForWho";
import WhyWe from "@/components/sections/WhyWe";
import HowStart from "@/components/sections/HowStart";
import LetsTry from "@/components/sections/LetsTry";
import Pricing from "@/components/sections/Pricing";

export default {
  name: "Home",
  components: {
    Pricing,
    LetsTry,
    HowStart,
    WhyWe,
    ForWho,
    HeaderBanner,
  },
  mounted() {
    document.querySelectorAll(".wow").forEach((el) => {
      el.classList.remove("wow");
      el.style = "";
    });
  },
};
</script>

<style lang="scss" scoped>
.page {
  &--home {
    padding-bottom: 60px;
  }
}

@media screen and (max-width: 640px) {
  .page {
    &--home {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
