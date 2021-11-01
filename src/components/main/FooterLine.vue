<template>
  <footer class="footer">
    <div class="container wow fadeInDown" data-wow-duration="0.5s">
      <div class="footer__copyright">Copyright © 2021 Tenderhelp.</div>
      <div class="footer__links">
        <a
          href="/docs/security.pdf"
          target="_blank"
          class="footer__link link link--default"
          rel="nofollow"
          >{{ $t("Условия доступа к сервису") }}</a
        >
        <a
          href="/docs/no-tell.pdf"
          target="_blank"
          class="footer__link link link--default"
          rel="nofollow"
          >{{ $t("Условия использования") }}</a
        >
        <a
          href="/docs/oferta.pdf"
          target="_blank"
          class="footer__link link link--default"
          rel="nofollow"
          >{{ $t("Публичная оферта") }}</a
        >
        <a
          target="_blank"
          href="https://www.facebook.com/tenderhelp.com.ua"
          class="footer__link footer__link--icon link link--default"
          rel="nofollow"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9999 0C31.0462 0 40 8.95499 40 20.0001C40 31.0464 31.0462 40 19.9999 40C8.95362 40 0 31.0462 0 20.0001C0 8.95499 8.95376 0 19.9999 0Z"
              fill="#B4B4BB"
            />
            <path
              d="M22.4344 13.7694H25.0119V9.96191H21.9819V9.97565C18.3106 10.1057 17.5582 12.1694 17.4919 14.3369H17.4843V16.2382H14.9844V19.9669H17.4843V29.9618H21.2519V19.9669H24.3381L24.9343 16.2382H21.2531V15.0895C21.2531 14.357 21.7405 13.7694 22.4344 13.7694Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterLine",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 60px 0 30px;
  border-top: 1px solid #eaeaec;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__copyright {
    color: #b4b4bb;
    font-size: pxToRem(16);
    line-height: pxToRem(22);
  }

  &__links {
    display: flex;
    align-items: center;
  }

  &__link {
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 1160px) {
  .footer {
    .container {
      padding: 0 32px;
    }
  }
}

@media screen and (max-width: 786px) {
  .footer {
    padding-top: 46px;

    .container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &__links {
      order: 0;
      width: 100%;
      margin-bottom: 8px;
    }

    &__copyright {
      order: 1;
    }
  }
}

@media screen and (max-width: 650px) {
  .footer {
    &__links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &__link {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 24px;
      }
    }
  }
}
</style>
