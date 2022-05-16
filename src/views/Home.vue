<template>
  <div class="home__container">
    <div class="home__container__topbar">
      <img
        class="home__container__topbar__logo"
        src="@/assets/images/logo/banked.svg"
        alt="Banked"
      />
      <ConnectWalletButton />
    </div>
    <div class="home__container__outer__content">
      <div class="inner__content">
        <img src="@/assets/images/pages/home/home-img.svg" alt="" />
        <h2 class="mt-6 md:mt-10">Welcome to Banked</h2>
        <p class="px-4 my-4 md:my-8">
          Creating a DAO treasury that transacts money using multisig between
          Org, Donors and Members
        </p>
        <ConnectWalletButton class="inner__content__btn" />
        <vs-button class="inner__content__btn my-6" color="dark" type="filled">Enter Address</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import ConnectWalletButton from "@/components/home/ConnectWalletButton.vue";
export default {
  components: {
    ConnectWalletButton,
  },
};
</script>

<style lang="scss" scoped>
.home__container {
  padding: 2em;
  &__topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__outer__content {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 80vh;
    .inner__content {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 80%;
      }
      h2 {
        color: #000;
        font-weight: 700;
      }
      p {
        color: #8692a6;
        text-align: center;
      }
      &__btn {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .home__container {
    padding: 1.5em;
    &__topbar {
      &__logo {
        width: 25%;
      }
    }
    &__outer__content {
      height: 80vh;
      .inner__content {
        width: 50%;
        img {
          width: 50%;
        }
        h2 {
          color: #000;
          font-weight: 700;
        }
      }
    }
  }
}
@media only screen and (max-width: 660px) {
  .home__container {
    &__outer__content {
      height: 75vh;
      .inner__content {
        width: 80%;
        p {
          width: 100%;
        }
      }
    }
  }
}
</style>