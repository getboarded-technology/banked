<template>
  <div class="md:p-8 h-screen flex relative">
    <div class="w-4/12">
      <vs-col type="flex">
        <vs-card>
          <div>
            <img
              class="organization__container__logo md:w-4/5"
              src="@/assets/images/logo/banked.svg"
              alt="Banked"
            />
          </div>
          <div class="flex flex-col">
            <RadialBar :stepNumber="activeStep" />
            <div class="md:mt-6">
              <div
                v-for="(step, index) in steps"
                :key="index"
                class="flex items-center relative md:my-8"
              >
                <div>
                  <span v-if="index < activeStep">
                    <img :src="greenTick" alt="" /><span
                      class="green-bar"
                    ></span
                  ></span>

                  <span
                    v-else
                    :class="
                      index === activeStep
                        ? `active__number`
                        : 'upcoming__number'
                    "
                    >{{ index + 1 }}</span
                  >
                </div>

                <div>
                  <span
                    class="px-4 text-lg completed__text"
                    :class="
                      index < activeStep
                        ? `completed__text`
                        : index === activeStep
                        ? 'active__text'
                        : 'upcoming__text'
                    "
                    >{{ step.name }}</span
                  >
                </div>

                <img
                  v-if="index === activeStep"
                  class="arrow absolute right-3"
                  src="@/assets/images/pages/organization/arrow.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </vs-card>
      </vs-col>
    </div>

    <div class="content__detail w-full">
      <ClaimName v-if="activeStep === 1" />
      <OrganizationInfo :stepNumber="activeStep" v-else />

      <div
        class="flex gap-6"
        :class="activeStep > 1 ? 'justify-end btns' : 'justify-center'"
      >
        <vs-button color="#B3BAC4" type="border" @click="previousStep"
          >Previous</vs-button
        >
        <vs-button
          @click="nextStep"
          color="#f8be17"
          class="connect__wallet__btn font-semibold text-black"
        >
          Continue
        </vs-button>
      </div>
    </div>

    <ConnectWalletButton class="wallet__btn" />
  </div>
</template>

<script>
import RadialBar from "../../../components/RadialBar/RadialBar.vue";
import ClaimName from "../../../components/organization/ClaimName.vue";
import OrganizationInfo from "../../../components/organization/OrganizationInfo.vue";
import ConnectWalletButton from "../../../components/home/ConnectWalletButton.vue";
import greenTick from "@/assets/images/pages/organization/green-tick.svg";

export default {
  name: "OrganizationType",
  components: { RadialBar, ClaimName, OrganizationInfo, ConnectWalletButton },
  data() {
    return {
      greenTick,
      activeStep: 1,
      steps: [
        {
          routeTo: "/account-type",
          name: "Account Type",
        },
        {
          routeTo: "/organization/name",
          name: "Claim a name",
        },
        {
          routeTo: "/organization/information",
          name: "Organization information",
        },
        {
          routeTo: "/organization/name",
          name: "Launch organization",
        },
      ],
    };
  },
  methods: {
    previousStep() {
      console.log(this.activeStep);
      this.activeStep = this.activeStep - 1;
      if (this.activeStep < 1) {
        this.$router.push({ name: "AccountType" });
      } else if (this.activeStep === 1) {
        this.$router.push("/organization/name");
      } else if (this.activeStep === 2) {
        this.$router.push("/organization/information");
      }
    },
    nextStep() {
      this.activeStep = this.activeStep + 1;
      if (this.activeStep === 2) {
        this.$router.push("/organization/information");
      }
    },
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      if (to.name === "ClaimName") {
        console.log('1');
        this.activeStep = 1;
      }else{
        this.activeStep = 2;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.organization {
  &__container {
    &__content {
      margin-top: 7em;
    }
  }
}

.completed__text {
  color: #dadada;
}
.active {
  &__text {
    color: #000;
  }
  &__number {
    color: white;
    background: #000;
    border-radius: 50%;
    font-size: 1.75em;
    padding: 0.2em 0.5em;
  }
}
.upcoming {
  &__text {
    color: #b3bac4;
  }
  &__number {
    color: #b3bac4;
    background: #fff;
    border: 2px solid #b3bac4;
    border-radius: 50%;
    font-size: 1.75em;
    padding: 0.1em 0.4em;
  }
}

.arrow {
  right: -1.5em;
}

.btns {
  margin-right: 11em;
}

.wallet__btn {
  position: absolute;
  right: 2em;
}

.green-bar {
  position: absolute;
  width: 2.5px;
  height: 25px;
  left: 1.2em;
  top: 3em;
  background: #a8e1b9;
  border-radius: 100px;
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

.vs-col >>> .con-vs-card,
.vs-col {
  height: 100% !important;
}
</style>