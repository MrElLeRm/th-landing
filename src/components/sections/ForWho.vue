<template>
  <div class="for-who">
    <div class="container">
      <div class="for-who__info wow fadeInLeft" data-wow-duration="0.5s">
        <h2 class="for-who__title">{{ $t("Для кого") }}</h2>
        <div class="for-who__sub-title">
          {{
            $t(
              "Для тех кто хочет работать с государственными компаниями по-человечески."
            )
          }}
        </div>
      </div>
      <div class="for-who__list">
        <div
          class="for-who__item wow fadeInUp"
          data-wow-duration="0.5s"
          data-wow-delay="0.2s"
        >
          <div class="for-who__item-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#060B37" />
              <circle cx="20" cy="20" r="8" fill="white" />
              <path
                d="M20 16V20L23 23"
                stroke="#060B37"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="for-who__item-title">
            {{ $t("Для поставщиков товаров") }}
          </div>
          <div class="for-who__item-text">
            {{
              $t(
                "Для компаний, которые поставляют товары бюджетным организациям и предприятиям"
              )
            }}
          </div>
        </div>
        <div
          class="for-who__item wow fadeInUp"
          data-wow-duration="0.5s"
          data-wow-delay="0.3s"
        >
          <div class="for-who__item-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#060B37" />
              <path
                d="M27 18.2679C28.3333 19.0377 28.3333 20.9623 27 21.7321L18 26.9282C16.6667 27.698 15 26.7358 15 25.1962L15 14.8038C15 13.2642 16.6667 12.302 18 13.0718L27 18.2679Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="for-who__item-title">
            {{ $t("Для поставщиков услуг и работ") }}
          </div>
          <div class="for-who__item-text">
            {{
              $t(
                "Для компаний, которые предоставляют услуги бюджетным организациям и предприятиям"
              )
            }}
          </div>
        </div>
        <div
          class="for-who__item wow fadeInUp"
          data-wow-duration="0.5s"
          data-wow-delay="0.4s"
        >
          <div class="for-who__item-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#060B37" />
              <path
                d="M20 28C20 28 11 23.8498 11 18.9249C11 16.2049 13.3505 14 16.25 14C17.7191 14 19.0471 14.566 20 15.4782C20.9529 14.566 22.2809 14 23.75 14C26.6495 14 29 16.2049 29 18.9249C29 23.8498 20 28 20 28Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="for-who__item-title">
            {{ $t("Для консалтинговых компаний") }}
          </div>
          <div class="for-who__item-text">
            {{
              $t(
                "Для компаний, которые готовят тендерные документы под заказ и ценят время."
              )
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForWho",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_mixins.scss";
@import "~@/assets/scss/_variables.scss";
.for-who {
  padding: 100px 0;

  .container {
    display: flex;
    align-items: flex-start;
  }

  &__info {
    width: 23%;
    margin-right: 44px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: pxToRem(40);
    line-height: pxToRem(56);
    color: $primaryBlack;
    margin-bottom: 24px;
    margin-top: 14px;
  }

  &__sub-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: pxToRem(18);
    line-height: pxToRem(27);
    color: $primaryBlack;
  }

  &__list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 72%;
  }

  &__item {
    width: calc(33.333333% - 21px);
    padding: 24px 16px;

    &-icon {
      display: flex;
      align-items: center;
      margin-bottom: 32px;

      width: 40px;
      height: 40px;

      svg,
      img {
        width: 100%;
        height: 100%;
      }
    }

    &-title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: pxToRem(18);
      line-height: pxToRem(27);
      margin-bottom: 16px;
      color: $primaryBlack;
    }

    &-text {
      color: $secondaryBlack;
    }
  }
}

@media screen and (max-width: 1160px) {
  .for-who {
    .container {
      flex-wrap: wrap;
    }

    &__info {
      width: 100%;
      margin-bottom: 40px;
    }

    &__list {
      width: 100%;
    }
  }
}

@media screen and (max-width: 786px) {
  .for-who {
    &__item {
      width: calc(50% - 21px);
      padding: 24px 16px;
    }

    &__list {
      flex-wrap: wrap;
    }
  }
}

@media screen and (max-width: 650px) {
  .for-who {
    padding: 80px 0;

    &__title {
      font-size: pxToRem(24);
      line-height: pxToRem(34);
    }

    &__text {
      font-size: pxToRem(18);
      line-height: pxToRem(27);
    }

    &__item {
      width: 100%;
      &-title {
        font-size: pxToRem(16);
        line-height: pxToRem(22);
      }

      &-text {
        font-size: pxToRem(16);
        line-height: pxToRem(22);
      }
    }
  }
}
</style>
