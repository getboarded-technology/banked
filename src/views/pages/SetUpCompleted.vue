<template>
  <div class="setup">
    <div class="setup__top relative flex items-center">
      <img src="@/assets/images/logo/banked.svg" alt="" />
      <ConnectWalletButton class="wallet__btn" />
    </div>
    <div class="setup__content">
      <img
        src="@/assets/images/pages/setup/Successful-illustration.svg"
        alt=""
      />
      <h3 class="md:my-4 font-bold text-4xl">
        Organization is Setup Successfully
      </h3>
      <p class="text-xl">
        Next, setup your visibility and start inviting your Admin Team
      </p>
      <vs-button class="md:mt-10"
        ><span class="font-semibold" @click="$router.push('/user/explore-organization');">Continue</span></vs-button
      >
    </div>
  </div>
</template>

<script>
import ConnectWalletButton from "../../components/home/ConnectWalletButton.vue";
export default {
  name: "SetUpCompleted",
  components: {
    ConnectWalletButton,
  },
};
</script>

<style lang="scss" scoped>
.setup {
  padding: 2em;
  height: 80vh;
  &__content {
    img {
      width: 15%;
    }
    h3 {
      color: #000;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
}

.wallet__btn {
  position: absolute;
  right: 2em;
}
</style>