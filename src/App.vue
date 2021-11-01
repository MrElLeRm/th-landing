<template>
  <div id="app">
    <header-line></header-line>
    <router-view />
    <footer-line></footer-line>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/_base.scss";
</style>
<script>
import HeaderLine from "@/components/main/HeaderLine";
import FooterLine from "@/components/main/FooterLine";

export default {
  components: { FooterLine, HeaderLine },
  mounted() {},
  metaInfo: {
    titleTemplate: "%s | TenderHelp",
  },
};
</script>
