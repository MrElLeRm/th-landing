<template>
  <div class="lets-try" id="lets-try">
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
          <div class="input__label">Имя</div>
          <input
            type="text"
            class="input__el"
            name="name"
            placeholder="Петр Иванов"
            title="Имя"
            v-model="$v.clientName.$model"
          />
          <div
            class="input__error"
            v-if="formSubmitted && !$v.clientName.required"
          >
            Имя должено быть заполнено
          </div>
        </div>
        <div class="input simple">
          <div class="input__label">Телефон</div>
          <input
            type="text"
            class="input__el"
            name="phone"
            placeholder="+38"
            title="Телефон"
            v-model="$v.clientPhone.$model"
            v-maska="'+38 (###) ###-##-##'"
          />
          <div
            class="input__error"
            v-if="formSubmitted && !$v.clientPhone.required"
          >
            Телефон должен быть заполнен
          </div>
        </div>
      </div>
      <div class="lets-try__button wow fadeInUp" data-wow-duration="0.5s">
        <button class="button button--accent" @click="createLead">
          Получить тестовый доступ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ClientApi } from "@/services/client-api";
import { required } from "vuelidate/lib/validators";

export default {
  name: "LetsTry",
  data() {
    return {
      clientName: "",
      clientPhone: "",
      formSubmitted: false,
    };
  },
  validations: {
    clientName: {
      required,
    },
    clientPhone: {
      required,
    },
  },
  methods: {
    createLead() {
      this.formSubmitted = true;
      this.$v.$touch();

      if (!this.$v.$invalid) {
        new ClientApi()
          .saveClient(this.clientName, this.clientPhone)
          .then(() =>
            this.$swal(
              "Ваша заявка принята!<br/>В ближайшее время мы с вами свяжемся."
            )
          );
      }
    },
  },
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
