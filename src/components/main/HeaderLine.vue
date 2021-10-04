<template>
  <header class="header wow fadeInDown" data-wow-duration="0.5s">
    <div class="container">
      <router-link to="/">
        <th-logo class="header__logo"></th-logo>
      </router-link>
      <div
        class="mmenu-button"
        :class="{ active: mobileMenuOpened }"
        @click="toggleNav"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="header__nav" :class="{ active: mobileMenuOpened }">
        <a href="#pricing" class="header__nav-link header__nav-link--default">{{
          $t("Тарифы")
        }}</a>
        <router-link
          to="/info/contacts"
          class="header__nav-link header__nav-link--default"
          >{{ $t("Контакты") }}</router-link
        >
        <a
          target="_blank"
          class="header__nav-link button button--accent button--small"
          href="//app.tenderhelp.com.ua/login"
          >{{ $t("Для зарегистрированных пользователей") }}</a
        >
      </div>
    </div>
  </header>
</template>

<script>
import ThLogo from "@/components/other/ThLogo";
export default {
  name: "HeaderLine",
  components: { ThLogo },
  data() {
    return {
      mobileMenuOpened: false,
    };
  },
  methods: {
    toggleNav() {
      this.mobileMenuOpened = !this.mobileMenuOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
.header {
  position: relative;
  padding: 12px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    display: flex;
    align-items: center;

    &-link {
      margin-right: 40px;
      &--default {
        font-family: "Proxima Nova", sans-serif;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #4e4e56;
        text-decoration: none;
        transition: opacity 0.2s linear;

        &:hover {
          opacity: 0.8;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.mmenu-button {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 32px;
  z-index: 99999;
  width: 24px;
  height: 20px;

  &.active {
    position: fixed;
    top: 22px;

    span {
      &:nth-child(1) {
        top: 24px;
        left: 50%;
        transform: rotate(45deg) translateX(-50%) translateY(-50%);
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        top: 7px;
        left: 50%;
        transform: rotate(-45deg) translateX(-50%) translateY(-50%);
      }
    }
  }

  span {
    position: absolute;
    display: block;
    width: 24px;
    height: 2px;
    background-color: $primaryBlack;

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }

    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
  }
}

@media screen and (max-width: 1160px) {
  .header {
    .container {
      padding: 0 32px;
    }
  }
}

@media screen and (max-width: 786px) {
  .mmenu-button {
    display: block;
  }

  .header {
    &__nav {
      &.active {
        opacity: 1;
        visibility: visible;
      }

      opacity: 0;
      visibility: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 99;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s linear;

      &-link {
        margin-right: 0;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
