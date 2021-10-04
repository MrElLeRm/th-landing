<template>
  <div class="page page--info">
    <div class="info__banner">
      <div class="container">
        <div class="info__banner-title">
          Умови надання <br />
          доступу до сервісу
        </div>
      </div>
    </div>
    <div class="container">
      <div class="info__body">
        <div class="info__sidebar">
          <router-link
            to="/info"
            exact-active-class="active"
            exact
            class="info__nav-link"
          >
            Умови оплати
          </router-link>
          <router-link
            to="/info/access"
            exact-active-class="active"
            exact
            class="info__nav-link"
          >
            Умови надання доступу
          </router-link>
          <router-link
            to="/info/refund"
            exact-active-class="active"
            exact
            class="info__nav-link"
          >
            Умови повернення товару
          </router-link>
          <router-link
            to="/info/seller"
            exact-active-class="active"
            exact
            class="info__nav-link"
          >
            Інформація про Продавця
          </router-link>
          <router-link
            to="/info/contacts"
            exact-active-class="active"
            exact
            class="info__nav-link"
          >
            Контактна інформація
          </router-link>
          <router-link
            to="/info/faq"
            exact-active-class="active"
            exact
            class="info__nav-link"
            >FAQ</router-link
          >
        </div>
        <div class="info__content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style lang="scss" scoped>
.page {
  &--info {
    padding: 0;
  }
}
.info {
  &__banner {
    padding: 140px 0 100px;
    background-color: #4050e8;
    background-image: url(~@/assets/img/info-banner-icons.png);
    background-size: 405px;
    background-repeat: no-repeat;
    background-position: 80% bottom;

    &-title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 48px;
      line-height: 67px;
      color: #ffffff;
    }
  }

  &__body {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    align-items: flex-start;
  }

  &__sidebar {
    width: 270px;
    flex-shrink: 0;
    margin-right: 124px;
    display: flex;
    flex-direction: column;
  }

  &__content {
    flex-grow: 1;
  }

  &__nav {
    &-link {
      font-family: "Proxima Nova", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      color: #898994;
      text-decoration: none;
      transition: opacity 0.2s linear;
      margin-bottom: 16px;

      &:hover {
        opacity: 0.7;
      }

      &.active {
        font-family: "Montserrat", sans-serif;
        color: #0a0a0b;
      }
    }
  }
}
</style>

<style lang="scss">
.info {
  &__text-content {
    h2 {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 40px;
      line-height: 56px;
      color: #0a0a0b;
      margin-top: 0;
      margin-bottom: 40px;
    }

    h3 {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      color: #0a0a0b;
    }

    p {
      font-family: "Proxima Nova", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #4e4e56;

      &.bold {
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        color: #0a0a0b;
        margin-bottom: 40px;
      }

      &.title {
        font-weight: 600;
        color: #0a0a0b;
      }

      &.big {
        font-size: 18px;
        line-height: 27px;
      }

      & + p {
        margin-top: 16px;
      }
    }

    ol {
      list-style: none;
      counter-reset: my-counter;
      padding-left: 0;
      & > li {
        position: relative;
        counter-increment: my-counter;
        padding-left: 24px;
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
        }

        &::before {
          display: block;
          position: absolute;
          top: 1px;
          left: 0;
          content: counter(my-counter);
          width: 4px;
          font-family: "Proxima Nova", sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #0a0a0b;
        }
      }
    }

    ul {
      margin-top: 16px;
      list-style-type: disc;

      padding-left: 24px;

      li {
        margin-bottom: 4px;
      }
    }

    li {
      font-family: "Proxima Nova", sans-serif;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #4e4e56;
    }

    a {
      color: #7f8af0;
      text-decoration: none;
      transition: opacity 0.2s linear;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
