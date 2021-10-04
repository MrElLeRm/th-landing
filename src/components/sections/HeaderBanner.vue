<template>
  <div
    class="header-banner wow fadeIn"
    data-wow-duration="0.5s"
    data-wow-delay="0.2"
  >
    <div class="container">
      <div class="header-banner__geometry header-banner__geometry--top-right">
        <svg
          width="311"
          height="47"
          viewBox="0 0 311 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0562579 -55.0827C13.4986 -89.4892 40.0584 -117.147 73.8927 -131.971C107.727 -146.794 146.064 -147.571 180.471 -134.128C214.878 -120.686 242.535 -94.1261 257.359 -60.2918C272.183 -26.4575 272.959 11.8798 259.517 46.2864L129.786 -4.39811L0.0562579 -55.0827Z"
            fill="#060B37"
          />
        </svg>
      </div>
      <div
        class="header-banner__title wow fadeInUp"
        data-wow-duration="0.5s"
        data-wow-delay="0.2s"
      >
        {{ $t("Тендер — это просто") }}
      </div>
      <div
        class="header-banner__sub-title wow fadeInUp"
        data-wow-duration="0.5s"
        data-wow-delay="0.3s"
        v-html="
          $t(
            'Сервис автоматической подготовки документов, <br />для тендерных торгов и открытых закупок'
          )
        "
      ></div>
      <div
        class="header-banner__link wow fadeInUp"
        data-wow-duration="0.5s"
        data-wow-delay="0.4s"
      >
        <span class="button button--white" @click="scrollToId('lets-try')">{{
          $t("Начать роботу с tenderhelp")
        }}</span>
      </div>

      <div
        class="header-banner__screen wow fadeInRight"
        data-wow-duration="0.5s"
        data-wow-delay="0.5s"
      >
        <div class="header-banner__geometry header-banner__geometry--screen">
          <svg
            width="137"
            height="138"
            viewBox="0 0 137 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.214844"
              y="87.5996"
              width="100"
              height="100"
              transform="rotate(-60 0.214844 87.5996)"
              fill="#060B37"
            />
          </svg>
        </div>
        <img
          src="~@/assets/img/screen-tenders.png"
          alt="Экран ваших тендеров"
        />
      </div>
    </div>
  </div>
</template>

<script>
import scrollToMixin from "@/mixins/scroll-to-mixin";

export default {
  mixins: [scrollToMixin],
  name: "HeaderBanner",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/_mixins.scss";

.header-banner {
  position: relative;
  background-color: $primaryMain;
  border-radius: 40px;
  padding: 100px 25px;

  .container {
    max-width: 960px;
  }

  &__title {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-weight: 600;
    color: #ffffff;
    font-size: pxToRem(48);
    line-height: pxToRem(67);
    margin-bottom: 24px;
  }

  &__sub-title {
    color: #f7f7f8;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: pxToRem(20);
    line-height: pxToRem(30);
    margin-bottom: 32px;
    text-align: center;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__screen {
    position: relative;
    display: flex;
    margin-top: 100px;

    img {
      max-width: 100%;
      z-index: 2;
    }
  }

  &__geometry {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &--top-right {
      top: 0;
      right: 84px;
    }

    &--screen {
      top: -5px;
      left: 6px;
      transform: translateY(-50%);
    }
  }
}

@media screen and (max-width: 650px) {
  .header-banner {
    width: calc(100% + 20px);
    margin-left: -10px;
    padding: 80px 20px;

    &__title {
      font-size: pxToRem(28);
      line-height: pxToRem(40);
      margin-bottom: 24px;
    }

    &__sub-title {
      font-size: pxToRem(18);
      line-height: pxToRem(27);
      margin-bottom: 32px;
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__screen {
      position: relative;
      display: flex;
      margin-top: 100px;

      img {
        max-width: 100%;
        z-index: 2;
      }
    }

    &__geometry {
      &--top-right {
        top: 0;
        right: 0;
      }

      &--screen {
        top: -5px;
        left: -20px;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
