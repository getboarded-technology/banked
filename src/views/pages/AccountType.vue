<template>
  <div class="md:p-8 h-screen flex">
    <div class="w-1/4">
      <vs-col type="flex">
        <vs-card>
          <div>
            <img
              class="account__type__container__logo md:w-4/5"
              src="@/assets/images/logo/banked.svg"
              alt="Banked"
            />
          </div>

          <div class="account__type__container__content">
            <h3 class="text-black font-bold text-4xl">
              Banked<br />
              to the future way of work!
            </h3>
            <p class="my-4 text-lg font-medium">
              Create communities, causes and other opportunities.
            </p>
          </div>

          <img
            class="rocket__img"
            src="@/assets/images/pages/account-type/rocket.svg"
            alt=""
          />
        </vs-card>
      </vs-col>
    </div>

    <div class="content__detail">
      <h2 class="font-semibold">
        How would you like to primarily use the platform?
      </h2>
      <div
        v-for="(accontType, index) in accontTypes"
        class="content__detail__box md:py-5 md:px-3"
        @click="$router.push(accontType.routeTo)"
        :key="index"
      >
        <div class="flex items-center">
          <div class="content__detail__box__account__img">
            <img :src="accontType.imgSrc" alt="" />
          </div>

          <div class="mx-4">
            <h5 class="font-semibold capitalize">{{ accontType.type }}</h5>
            <p class="my-2 font-medium" style="color: #798ba0">
              {{ accontType.about }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <ConnectWalletButton class="wallet__btn" />
  </div>
</template>

<script>
import personal from "@/assets/images/pages/account-type/personal.png";
import organization from "@/assets/images/pages/account-type/organization.png";
import ConnectWalletButton from "@/components/home/ConnectWalletButton.vue";

export default {
  name: "AccountType",
  components: {
    ConnectWalletButton,
  },
  data() {
    return {
      accontTypes: [
        {
          routeTo: "",
          type: "Personal",
          about: "I want to create a personal profile",
          imgSrc: personal,
        },
        {
          routeTo: "/organization/name",
          type: "Organization",
          about: "I want to create an Organization",
          imgSrc: organization,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.account__type {
  &__container {
    &__content {
      margin-top: 7em;
    }
  }
}
.content__detail {
  padding: 5rem;
  margin-top: 6%;
  h2 {
    width: 75%;
  }
  &__box {
    margin-top: 2em;
    width: 50%;
    background-color: #fff;
    box-shadow: 0px 6px 24px rgba(67, 21, 21, 0.05);
    width: 75%;
    &:hover {
      border-radius: 10px;
      border: 2px solid #f7dd59;
      transform: scale(1.05);
      transition: transform 0.5s;
    }
    &__account__img {
      box-shadow: 0px 20px 20px rgba(241, 172, 61, 0.2);
    }
  }
}
.rocket__img {
  margin: -2.5em;
  width: 25rem;
  border-radius: 16px;
}

.wallet__btn{
  position: absolute;
  right: 2em;
}

@media only screen and (max-width: 991px) {
  .content__detail {
    padding: 2.5rem;
    &__box {
      width: 80%;
    }
  }
}
</style>

<style scoped>
.vs-col >>> .vs-card--content {
  padding: 2em !important;
  overflow: hidden;
}
</style>