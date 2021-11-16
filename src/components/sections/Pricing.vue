<template>
  <div class="pricing__all">
    <div class="container">
      <h2
        class="pricing__title"
        v-html="$t('Выберите свой план <br />Tenderhelp')"
      ></h2>
    </div>
    <div class="pricing" id="pricing">
      <div class="container">
        <div class="pricing__period">
          <div class="pricing__period-list">
            <div class="pricing__period-item active">{{ $t("1 месяц") }}</div>
            <div class="pricing__period-item">{{ $t("3 месяца") }}</div>
            <div class="pricing__period-item">{{ $t("6 месяцев") }}</div>
          </div>
        </div>
        <div class="pricing__items">
          <div class="pricing__item pricing__item--base">
            <div class="pricing__item-header">
              <div class="pricing__item-name">{{ $t("Старт") }}</div>
              <div class="pricing__item-price">грн 900</div>
              <div class="pricing__item-price-free">{{ $t("бесплатно") }}</div>
              <div class="pricing__item-price-free-descr">
                {{ "*" + $t("до конца 2021") }}
              </div>
              <div class="pricing__item-header-action" @click="toRegistration">
                {{ $t("Попробовать") }}
              </div>
              <div class="pricing__item-descr">
                {{ $t("Лучший выбор для личного использования") }}
              </div>
            </div>
            <div class="pricing__item-content">
              <div class="pricing__item-options">
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("доступные коды ДК закупки") }}
                    </div>
                    <div class="pricing__item-option-text">{{ $t("все") }}</div>
                  </div>
                </div>
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("тип закупки") }}:
                    </div>
                    <div class="pricing__item-option-text">
                      {{ $t("упрощенные") }}
                    </div>
                  </div>
                </div>
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("количество тендеров в период подписки") }}:
                    </div>
                    <div class="pricing__item-option-text">
                      {{ $t("неограниченно") }}
                    </div>
                  </div>
                </div>
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("особенности") }}:
                    </div>
                    <div class="pricing__item-option-text">
                      {{
                        $t(
                          "упрощенные процедуры, только для одного пользователя"
                        )
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="pricing__item-actions">
                <div class="pricing__item-action" @click="toRegistration">
                  {{ $t("Попробовать") }}
                </div>
              </div>
            </div>
          </div>
          <div class="pricing__item pricing__item--pro">
            <div class="pricing__item-header">
              <div class="pricing__item-name">
                {{ $t("Профи") }}
              </div>
              <div class="pricing__item-price">грн 3 000</div>
              <div class="pricing__item-price-free">{{ $t("бесплатно") }}</div>
              <div class="pricing__item-price-free-descr">
                {{ "*" + $t("до конца 2021") }}
              </div>
              <div class="pricing__item-header-action" @click="toRegistration">
                {{ $t("Попробовать") }}
              </div>
              <div class="pricing__item-descr">
                {{
                  $t("при оплате 3 мес скидка 900 грн / 6 мес скидка 1 500 грн")
                }}
              </div>
            </div>
            <div class="pricing__item-content">
              <div class="pricing__item-options">
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("доступные коды ДК закупки") }}:
                    </div>
                    <div class="pricing__item-option-text">
                      {{ $t("все") }}
                    </div>
                  </div>
                </div>
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("тип закупки") }}:
                    </div>
                    <div class="pricing__item-option-text">
                      {{ $t("все") }}
                    </div>
                  </div>
                </div>
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("количество тендеров в период подписки") }}:
                    </div>
                    <div class="pricing__item-option-text">100</div>
                  </div>
                </div>
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("особенности") }}:
                    </div>
                    <div class="pricing__item-option-text">
                      {{
                        $t("все типы закупок, возможность создавать команды")
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="pricing__item-actions">
                <div class="pricing__item-action" @click="toRegistration">
                  {{ $t("Попробовать") }}
                </div>
              </div>
            </div>
          </div>
          <div class="pricing__item pricing__item--corp">
            <div class="pricing__item-header">
              <div class="pricing__item-name">{{ $t("Корпоративный") }}</div>
              <div class="pricing__item-price">{{ $t("Договорная") }}</div>
              <div class="pricing__item-price-free">{{ $t("бесплатно") }}</div>
              <div class="pricing__item-price-free-descr">
                {{ "*" + $t("до конца 2021") }}
              </div>
              <div class="pricing__item-header-action" @click="toRegistration">
                {{ $t("Связаться с нами") }}
              </div>
            </div>
            <div class="pricing__item-content">
              <div class="pricing__item-options">
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("доступные коды ДК закупки") }}:
                    </div>
                    <div class="pricing__item-option-text">{{ $t("все") }}</div>
                  </div>
                </div>
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("тип закупки") }}:
                    </div>
                    <div class="pricing__item-option-text">{{ $t("все") }}</div>
                  </div>
                </div>
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("количество тендеров в период подписки") }}:
                    </div>
                    <div class="pricing__item-option-text">
                      {{ $t("неограниченно") }}
                    </div>
                  </div>
                </div>
                <div class="pricing__item-option">
                  <div class="pricing__item-option-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 9L6.5 12L13.5 5"
                        stroke="#BEE1EE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="pricing__item-option-content">
                    <div class="pricing__item-option-title">
                      {{ $t("особенности") }}:
                    </div>
                    <div class="pricing__item-option-text">
                      {{
                        $t(
                          "все типы закупок, только для команд, аналитика и дополнительные возможности автоматизации"
                        )
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="pricing__item-actions">
                <div class="pricing__item-action" @click="toRegistration">
                  {{ $t("Связаться с нами") }}
                </div>
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
  name: "Pricing",
  methods: {
    toRegistration() {
      window.open("https://app.tenderhelp.com.ua/registration");
    },
  },
};
</script>

<style lang="scss" scoped>
.pricing {
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: #f7f7f8;
  border-radius: 40px;
  margin-bottom: 100px;

  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 56px;
    color: #0a0a0b;
    margin-bottom: 80px;
  }

  &__period {
    display: flex;
    justify-content: center;

    &-list {
      margin-bottom: 40px;
      background: #eaeaec;
      border-radius: 40px;
      width: 345px;
      max-width: 100%;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      padding: 4px;
    }

    &-item {
      font-family: "Proxima Nova", sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #898994;
      padding: 7px 10px;
      text-align: center;
      border-radius: 20px;
      width: calc(33.3333333% - 10px);
      white-space: nowrap;
      cursor: pointer;
      border: 1px solid transparent;
      transition: opacity 0.2s linear;

      &:hover {
        opacity: 0.8;
      }

      &.active {
        background: #ffffff;
        border: 1px solid #f7f7f8;
        box-shadow: 0px 8px 18px -40px rgba(20, 20, 37, 0.05);
        color: #0a0a0b;
      }
    }
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
  }

  &__item {
    width: calc(33.3333% - 16px);
    background: #ffffff;
    border-radius: 2px;
    padding: 24px;
    display: flex;
    flex-direction: column;

    &-content {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    &--base & {
      &-header {
        background-color: #3ca6cd;

        &-action {
          color: #3ca6cd;
        }
      }

      &-action {
        background-color: #3ca6cd;
        color: #ffffff;
      }
    }

    &--pro & {
      &-header {
        background-color: #a30000;

        &-action {
          color: #a30000;
        }
      }

      &-action {
        background-color: #a30000;
        color: #ffffff;
      }
    }

    &--corp & {
      &-header {
        background-color: #4050e8;

        &-action {
          color: #fff;
          background: transparent;
          border: 1px solid #fff;
        }
      }

      //&-name {
      //  color: #0a0a0b;
      //}
      //
      //&-price {
      //  color: #0a0a0b;
      //}

      &-action {
        color: #4050e8;
        background: transparent;
        border: 1px solid #4050e8;
      }
    }

    &-header {
      padding: 32px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;

      &-action {
        padding: 10px 24px;
        background: #ffffff;
        border-radius: 40px;
        font-family: "Proxima Nova", sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 16px;
        cursor: pointer;
        transition: opacity 0.2s linear;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    &-name {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      color: #ffffff;
      margin-bottom: 24px;

      small {
        font-family: "Proxima Nova", sans-serif;
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
      }
    }

    &-price {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 4px;
      text-decoration: line-through;

      &-free {
        color: #fff;
        font-size: 24px;
        line-height: 28px;
        font-weight: 600;
        margin-top: 10px;

        &-descr {
          color: #fff;
          margin-bottom: 16px;
        }
      }
    }

    &-descr {
      font-family: "Proxima Nova", sans-serif;
      font-weight: 600;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      color: #ffffff;
    }

    &-content {
    }

    &-options {
      margin-bottom: 40px;
    }

    &-option {
      display: flex;
      align-items: flex-start;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      &-icon {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        flex-shrink: 0;
        flex-grow: 0;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      &-title {
        font-family: "Proxima Nova", sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #0a0a0b;
      }

      &-text {
        font-family: "Proxima Nova", sans-serif;

        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #898994;
      }
    }

    &-actions {
      display: flex;
      justify-content: center;
      margin-top: auto;
    }

    &-action {
      padding: 10px 24px;
      border-radius: 40px;
      font-family: "Proxima Nova", sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      transition: opacity 0.2s linear;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .pricing {
    .container {
      padding: 10px;
    }
    &__item {
      width: calc(50% - 12px);
      margin-top: 24px;
    }
  }
}

@media screen and (max-width: 786px) {
  .pricing {
    .container {
      padding: 20px;
    }
    &__item {
      width: calc(100%);
      margin-top: 24px;
    }
  }
}
</style>
