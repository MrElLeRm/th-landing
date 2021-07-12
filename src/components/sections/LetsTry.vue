<template>
  <div class="lets-try">
    <div class="container">
      <div
        class="lets-try__dot wow fadeInDownBig"
        data-wow-duration="0.5s"
      ></div>
      <div class="lets-try__title wow fadeInUp" data-wow-duration="0.5s">
        Готовы попробовать?
      </div>
      <div class="lets-try__input wow fadeInUp" data-wow-duration="0.5s">
        <div class="input simple">
          <div class="input__label">Email</div>
          <input
            type="text"
            class="input__el"
            name="phone-email"
            title="Email"
          />
        </div>
      </div>
      <div class="lets-try__button wow fadeInUp" data-wow-duration="0.5s">
        <button class="button button--accent">Получить тестовый доступ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LetsTry",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/_mixins.scss";

.lets-try {
  background-color: #060b37;
  padding: 100px 0;
  border-radius: 40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__dot {
    width: 40px;
    height: 40px;
    background-color: $primaryMain;
    border-radius: 50%;
    margin-bottom: 40px;
  }

  &__title {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: pxToRem(40);
    line-height: pxToRem(56);
    margin-bottom: 32px;
    color: #ffffff;
  }

  &__input {
    max-width: 350px;
    width: calc(100% - 40px);
    margin-bottom: 40px;

    .input {
      &__label {
        font-weight: 400;
        color: $secondaryGrayLabel;
      }

      &__el {
        color: #ffffff;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .lets-try {
    padding: 80px 0;

    &__title {
      font-size: pxToRem(18);
      line-height: pxToRem(27);
    }
  }
}
</style>
