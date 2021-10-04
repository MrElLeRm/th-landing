<template>
  <div class="why-we">
    <div class="container">
      <div class="why-we__title wow fadeInUp" data-wow-duration="0.5s">
        {{ $t("Почему Tenderhelp") }}
      </div>
    </div>
    <div class="why-we__list">
      <div
        class="why-we__item why-we__item--big why-we__item--ltr wow fadeInUp"
        data-wow-duration="0.5s"
        data-wow-delay="0.2s"
      >
        <div class="container">
          <div class="why-we__item-content-wrapper">
            <div class="why-we__item-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#4050E8" />
                <path
                  d="M20.0472 14.6826C17.8251 14.6826 16.0238 16.484 16.0238 18.706V22.0589C15.647 22.4356 14.6826 23.5275 14.6826 24.0706C14.6826 24.441 14.9828 24.7412 15.3532 24.7412H24.7412C25.1115 24.7412 25.4118 24.441 25.4118 24.0706C25.4118 23.5275 24.4473 22.4356 24.0706 22.0589V18.706C24.0706 16.484 22.2693 14.6826 20.0472 14.6826Z"
                  fill="white"
                />
                <rect
                  x="19.376"
                  y="15.3525"
                  width="2.01171"
                  height="1.34114"
                  rx="0.670571"
                  transform="rotate(-90 19.376 15.3525)"
                  fill="white"
                />
                <path
                  d="M19.3766 26.7529C19.0063 26.7529 18.7061 26.4527 18.7061 26.0824L18.7061 25.4118L21.3883 25.4118L21.3883 26.0824C21.3883 26.4527 21.0881 26.7529 20.7178 26.7529L19.3766 26.7529Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="why-we__item-content">
              <div class="why-we__item-title">
                {{ $t("В 3 раза больше тендеров") }}
              </div>
              <div class="why-we__item-text">
                {{
                  $t(
                    "tenderhelp готовит реестр документов за доли секунды. Предложит готовые шаблоны документов и поможет специалисту подготовить самостоятельно новый шаблон"
                  )
                }}
              </div>
              <div class="why-we__item-review">
                <div class="why-we__item-review-name">{{ $t("Например") }}</div>
                <div class="why-we__item-review-text">
                  {{
                    $t(
                      "Ежемесячно проводится 10 тендерных процеду по вашей теме. Из-за занятости тендерного специалиста, ваша компания участвует в 3 из 10. С tenderhelp можно подготовить документы для 10 процедур и потенциально увеличеть прибыль в 3 раза"
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="why-we__item-graphics">
          <div class="why-we__item-screens">
            <div
              class="why-we__item-screen why-we__item-screen--1 wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.4s"
            >
              <img
                src="~@/assets/img/why-we-screen-1.png"
                alt="Требования к участнику и документации"
              />
            </div>
          </div>
          <div
            class="
              why-we__item-graphics-geometry why-we__item-graphics-geometry--1
            "
          >
            <svg
              width="358"
              height="234"
              viewBox="0 0 358 234"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.049 411.899C25.8664 366.717 0.483029 305.436 0.483029 241.538C0.483029 177.64 25.8663 116.359 71.049 71.1768C116.232 25.9942 177.512 0.610876 241.41 0.610849C305.308 0.610845 366.589 25.9942 411.772 71.1768L241.41 241.538L71.049 411.899Z"
                fill="#4050E8"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="why-we__item why-we__item--big why-we__item--rtl wow fadeInUp"
        data-wow-duration="0.5s"
        data-wow-delay="0.2s"
      >
        <div class="container">
          <div class="why-we__item-content-wrapper">
            <div class="why-we__item-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#3CA6CD" />
                <rect x="21" y="10" width="9" height="20" rx="2" fill="white" />
                <rect x="10" y="22" width="9" height="8" rx="2" fill="white" />
                <rect x="10" y="10" width="9" height="10" rx="2" fill="white" />
              </svg>
            </div>
            <div class="why-we__item-content">
              <div class="why-we__item-title">{{ $t("Без ошибок") }}</div>
              <div class="why-we__item-text">
                {{
                  $t(
                    "Данные о тендере и компании сервис получает из государственных реестров. Выбираете тендерные документы и сервис автоматически их заполняет"
                  )
                }}
              </div>
              <div class="why-we__item-review">
                <div class="why-we__item-review-name">{{ $t("Например") }}</div>
                <div class="why-we__item-review-text">
                  {{
                    $t(
                      "Тендерный специалист готовит параллельно документы для 2-3 тенедеров, для разных участников и допускает ошибки. С tenderhelp специалист защищен от механических ошибок и путаницы. Все данные о компании и тендере заполняются автоматически данными из государственных реестров"
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="why-we__item-graphics">
          <div class="why-we__item-screens">
            <div
              class="why-we__item-screen why-we__item-screen--2 wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.4s"
            >
              <img
                src="~@/assets/img/why-we-screen-2.png"
                alt="Требования к участнику и документации"
              />
            </div>
            <div
              class="why-we__item-screen why-we__item-screen--3 wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.5s"
            >
              <img
                src="~@/assets/img/why-we-screen-3.png"
                alt="Требования к участнику и документации"
              />
            </div>
          </div>
          <div
            class="
              why-we__item-graphics-geometry why-we__item-graphics-geometry--2
            "
          >
            <svg
              width="244"
              height="436"
              viewBox="0 0 244 436"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="-191.17"
                y="276.23"
                width="318.159"
                height="318.159"
                transform="rotate(-60 -191.17 276.23)"
                fill="#4050E8"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="why-we__group">
        <div
          class="
            why-we__item
            why-we__item--small
            why-we__item--small-centered
            why-we__item--small-dark
            wow
            fadeInUp
          "
          data-wow-duration="0.5s"
          data-wow-delay="0.2s"
        >
          <div class="why-we__item-content-wrapper">
            <div class="why-we__item-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#E56399" />
                <circle cx="20" cy="20" r="8" fill="white" />
                <path
                  d="M20 16V20L23 23"
                  stroke="#E56399"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="why-we__item-content">
              <div class="why-we__item-title">{{ $t("Контроль") }}</div>
              <div class="why-we__item-text">
                {{
                  $t(
                    "Руководитель видит информацию о прогрессе в работе с тендерами по каждому специалисту и по тендерному отдела в целом. Так же может переназначать ответственных за тендер на любом этапе, без потери данных. Быстро обучать новых сотрудника"
                  )
                }}
              </div>
            </div>
          </div>
          <div class="why-we__item-graphics">
            <div
              class="
                why-we__item-graphics-geometry why-we__item-graphics-geometry--4
              "
            >
              <svg
                width="342"
                height="260"
                viewBox="0 0 342 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="172.375"
                  y="463.452"
                  width="338.715"
                  height="338.715"
                  transform="rotate(-150 172.375 463.452)"
                  fill="#4050E8"
                />
              </svg>
            </div>
            <div class="why-we__item-screens">
              <div
                class="why-we__item-screen why-we__item-screen--4 wow fadeIn"
                data-wow-duration="0.5s"
                data-wow-delay="0.4s"
              >
                <img
                  src="~@/assets/img/why-we-screen-4.png"
                  alt="Требования к участнику и документации"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            why-we__item
            why-we__item--small
            why-we__item--small-left-align
            why-we__item--small-light
            wow
            fadeInUp
          "
          data-wow-duration="0.5s"
          data-wow-delay="0.2s"
        >
          <div class="why-we__item-content-wrapper">
            <div class="why-we__item-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#FF6666" />
                <path
                  d="M20.0472 14.6826C17.8251 14.6826 16.0238 16.484 16.0238 18.706V22.0589C15.647 22.4356 14.6826 23.5275 14.6826 24.0706C14.6826 24.441 14.9828 24.7412 15.3532 24.7412H24.7412C25.1115 24.7412 25.4118 24.441 25.4118 24.0706C25.4118 23.5275 24.4473 22.4356 24.0706 22.0589V18.706C24.0706 16.484 22.2693 14.6826 20.0472 14.6826Z"
                  fill="white"
                />
                <rect
                  x="19.376"
                  y="15.3525"
                  width="2.01171"
                  height="1.34114"
                  rx="0.670571"
                  transform="rotate(-90 19.376 15.3525)"
                  fill="white"
                />
                <path
                  d="M19.3766 26.7529C19.0063 26.7529 18.7061 26.4527 18.7061 26.0824L18.7061 25.4118L21.3883 25.4118L21.3883 26.0824C21.3883 26.4527 21.0881 26.7529 20.7178 26.7529L19.3766 26.7529Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="why-we__item-content">
              <div class="why-we__item-title">{{ $t("Уведомления") }}</div>
              <div class="why-we__item-text">
                {{
                  $t(
                    "Сервис сообщает о любых изменениях в тендерной документации и ы вовремя отреагируете и подготовитесь в срок. Напоминает о документах победителя, которые нужно подготовить"
                  )
                }}
              </div>
            </div>
          </div>
          <div class="why-we__item-graphics">
            <div
              class="
                why-we__item-graphics-geometry why-we__item-graphics-geometry--5
              "
            >
              <svg
                width="388"
                height="355"
                viewBox="0 0 388 355"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M89.0754 153.085C65.4511 194.004 59.0492 242.631 71.2781 288.27C83.5069 333.908 113.365 372.82 154.283 396.444C195.202 420.068 243.829 426.47 289.467 414.241C335.106 402.013 374.018 372.155 397.642 331.236L243.359 242.161L89.0754 153.085Z"
                  fill="#060B37"
                />
                <path
                  d="M116.606 166.923C133.8 122.914 167.772 87.5381 211.049 68.577C254.326 49.6159 303.363 48.6231 347.372 65.8171C391.381 83.0111 426.757 116.983 445.719 160.26C464.68 203.537 465.672 252.574 448.478 296.583L282.542 231.753L116.606 166.923Z"
                  fill="#060B37"
                />
              </svg>
            </div>
            <div class="why-we__item-screens">
              <div
                class="why-we__item-screen why-we__item-screen--5 wow fadeIn"
                data-wow-duration="0.5s"
                data-wow-delay="0.4s"
              >
                <img
                  src="~@/assets/img/why-we-screen-5.png"
                  alt="Требования к участнику и документации"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyWe",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/_mixins.scss";
.why-we {
  padding-top: 100px;
  padding-bottom: 100px;

  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: pxToRem(40);
    line-height: pxToRem(56);
    color: $primaryBlack;
    margin-bottom: 80px;
  }

  &__group {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }

  &__item {
    position: relative;
    min-height: 585px;
    background-color: #f7f7f8;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &--big {
      margin-bottom: 80px;
    }

    &--small & {
      &-content {
        &-wrapper {
          padding-left: 0;
        }
      }

      &-graphics {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: transparent;
      }

      &-title {
        color: #ffffff;
      }

      &-text {
        color: $bodyBg;
      }
    }

    &--small {
      width: calc(50% - 12px);

      &-centered {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-left-align {
        padding-left: 34px;
      }

      &-dark {
        background-color: #060b37;
      }

      &-light {
        background-color: $primaryMain;
      }
    }

    &--rtl & {
      &-content {
        &-wrapper {
          justify-content: flex-end;
          padding-right: 100px;
          padding-left: 0;
        }
      }

      &-graphics {
        left: 0;
      }

      &-screen {
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      height: 100%;
      flex-grow: 1;
    }

    &-icon {
      width: 40px;
      height: 40px;
      margin-top: 4px;
      margin-right: 27px;

      svg,
      img {
        width: 100%;
        height: 100%;
      }
    }

    &-title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: pxToRem(32);
      line-height: pxToRem(45);
      color: $primaryBlack;
      margin-bottom: 27px;
    }

    &-text {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: pxToRem(18);
      line-height: pxToRem(27);
      color: $secondaryBlack;
    }

    &-content {
      width: 100%;
      max-width: 372px;

      &-wrapper {
        flex-grow: 1;
        padding-left: 33px;
        padding-top: 60px;
        display: flex;
        align-items: flex-start;
      }
    }

    &-review {
      margin-top: 40px;

      &-name {
        font-size: pxToRem(16);
        line-height: pxToRem(22);
        font-weight: 600;
        color: $primaryBlack;
      }

      &-position {
        font-size: pxToRem(14);
        line-height: pxToRem(20);
        color: $secondaryGrayLabel;
        margin-bottom: 16px;
      }

      &-text {
        font-size: pxToRem(16);
        line-height: pxToRem(22);
        color: $secondaryGrayLabel;
      }
    }

    &-graphics {
      position: absolute;
      top: 0;
      right: 0;
      width: 447px;
      height: 100%;
      background-color: #060b37;

      &-geometry {
        position: absolute;

        &--1 {
          bottom: -4px;
          right: 0;
        }

        &--2 {
          top: 30px;
          left: -4px;
        }

        &--4 {
          left: 0;
          bottom: -4px;
        }

        &--5 {
          right: 0;
          bottom: -4px;
        }
      }
    }

    &-screen {
      position: absolute;
      display: flex;
      box-shadow: 0 30px 40px rgba(85, 85, 88, 0.05);
      z-index: 2;

      img {
        width: 100%;
        height: 100%;
      }

      &--1 {
        top: 67px;
        right: 147px;
        width: 498px;
        max-height: 446px;
      }

      &--2 {
        top: 64px;
        left: 147px;
        width: 498px;
        max-height: 383px;
        z-index: 3;
      }

      &--3 {
        bottom: 60px;
        left: 114px;
        width: 420px;
        max-height: 257px;
        z-index: 4;
      }

      &--4 {
        width: 308px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 4;
      }

      &--5 {
        width: 400px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 4;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .why-we {
    &__item {
      &-screen {
        &--1 {
          right: 80px;
        }

        &--2 {
          left: 50px;
        }

        &--3 {
          left: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 1160px) {
  .why-we {
    &__item {
      &--big {
        .container {
          order: 1;
        }
      }

      &--ltr & {
        &-graphics {
          margin-left: auto;
        }
      }

      &--rtl & {
        &-graphics {
          margin-right: auto;
        }
      }

      &--big & {
        &-content {
          &-wrapper {
            padding-bottom: 60px;
            padding-left: 20px !important;
            padding-right: 20px !important;
            justify-content: center;
          }
        }

        &-graphics {
          position: relative;
          height: 585px;
          order: 0;
        }

        &-screen {
          &--1 {
            right: 147px;
          }

          &--2 {
            left: 147px;
          }

          &--3 {
            left: 110px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .why-we {
    &__item {
      margin-bottom: 40px;
    }

    &__group {
      display: flex;
      flex-direction: column;

      .why-we {
        &__item {
          width: 100%;

          &-content {
            &-wrapper {
              justify-content: center;
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 786px) {
  .why-we {
    &__item {
      &--big & {
        &-graphics {
          position: relative;
        }

        &-screen {
          right: 30%;
          max-width: 400px;
          max-height: 446px;

          &--2 {
            left: 30%;
            right: unset;
          }

          &--3 {
            left: 20%;
            right: unset;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .why-we {
    padding: 80px 0;

    &__title {
      font-size: pxToRem(24);
      line-height: pxToRem(34);
      margin-bottom: 60px;
    }

    &__group {
      .why-we {
        &__item {
          &-content {
            &-wrapper {
              justify-content: flex-start;
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
          }
        }
      }
    }

    &__item {
      padding-left: 0 !important;

      &-icon {
        margin-right: auto;
        margin-bottom: 16px;
      }

      &-title {
        font-size: pxToRem(18);
        line-height: pxToRem(27);
      }

      &-text {
        font-size: pxToRem(16);
        line-height: pxToRem(22);
      }

      &-content {
        &-wrapper {
          flex-direction: column;
        }
      }

      &--big & {
        &-graphics {
          position: relative;
          width: 304px;
          height: 400px;

          &-geometry {
            svg {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }

            &--1 {
              width: 200px;
            }

            &--2 {
              width: 200px;
              max-height: 200px;
            }

            &--3 {
              width: 200px;
              max-height: 200px;
            }
          }
        }

        &-screen {
          right: 50px;
          width: 350px;

          &--2 {
            left: 50px;
            right: unset;
          }

          &--3 {
            left: 30px;
            right: unset;
            display: none;
          }
        }
      }

      &-graphics {
        &-geometry {
          &--4 {
            width: 200px;
          }

          &--5 {
            width: 200px;
            max-height: 200px;
          }
        }
      }

      &-screen {
        right: 50px;
        width: 350px;

        &--5 {
          width: 300px;
        }

        &--4 {
          width: 200px;
        }
      }
    }
  }
}

@media screen and (max-width: 486px) {
  .why-we {
    &__item {
      &--big & {
        &-graphics {
          height: 266px;
        }
      }

      &--small & {
        &-screen {
          top: unset !important;
          left: 50% !important;
        }
      }

      &-screen {
        width: 226px !important;
        max-height: 300px !important;
        height: auto !important;
        right: 40px !important;
        left: 40px !important;

        top: 30px;
      }

      &-graphics {
        &-geometry {
          &--1 {
            width: 100px !important;
          }

          &--2 {
            width: 100px !important;
          }

          &--4 {
            width: 100px !important;
          }

          &--5 {
            width: 100px !important;
          }
        }
      }
    }
  }
}
</style>
