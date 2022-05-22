<template>
  <div>
    <vs-card class="wallet__container">
      <div class="mx-2">
        <p class="text-lg">Total Worth</p>
        <h3 class="font-bold text-4xl">$ 457,638.789</h3>
      </div>
      <div>
        <div
          v-for="(item, index) in itemsa"
          :key="index"
          @mouseenter="hoverCustomization(index)"
          @mouseleave="hover = false"
          class="
            flex
            items-center
            mt-4
            bg-gray-400
            wallet__container__content
            relative
          "
        >
          <small class="flex items-center justify-center">
            <vs-icon
              class="wallet__container__content__icon-bg"
              :class="hover == 'hover' + index ? `hovered` : ``"
              size="large"
              icon="euro"
            />
            <p class="text-xl mx-6">
              {{ item.amount }}
              <span class="capitalize">{{ item.currency }}</span>
            </p>
            <div
              class="absolute wallet__container__content__arrows"
              :class="hover == 'hover' + index ? 'flex' : 'hidden'"
            >
              <vs-tooltip
                position="bottom"
                text="Deposit"
                style="z-index: 1000000000000000000000000000000000000000"
              >
                <vs-icon
                  @click="
                    hover == 'hover' + index
                      ? showTransactionsPopup('Deposit')
                      : ''
                  "
                  class="mx-2"
                  :class="hover == 'hover' + index ? 'icon__downward' : ''"
                  size="large"
                  icon="arrow_downward"
              /></vs-tooltip>

              <vs-tooltip position="bottom" text="Withdraw">
                <vs-icon
                  @click="
                    hover == 'hover' + index
                      ? showTransactionsPopup('Withdraw Funds')
                      : ''
                  "
                  :class="hover == 'hover' + index ? 'icon__upward' : ''"
                  size="large"
                  icon="arrow_upward"
              /></vs-tooltip>
            </div>
          </small>
        </div>
      </div>
    </vs-card>

    <!-- Transaction popup  -->
    <div
      class="overlay__bg"
      v-if="transactionPopup"
      @click="showTransactionsPopup"
    >
      <div class="overlay__inner" @click.stop>
        <div class="my-4 w-full flex justify-between items-center px-4">
          <h2 class="font-semibold">{{ transactionPopupType }}</h2>
          <h2 class="text-grey cursor-pointer" @click="showTransactionsPopup">
            X
          </h2>
        </div>
        <!-- transaction type  -->
        <div class="overlay__inner__transaction__type px-8">saqssd</div>
        <!-- select coin  -->
        <v-select :items="items" label="Standard">
          <template v-slot:selection="{ item, index }">
            <img :src="item.image" />{{ item.name }} {{ index }}</template
          >
          <template v-slot:item="{ item }"
            ><img :src="item.image" />{{ item.name }}</template
          >
        </v-select>
      </div>
    </div>

    <!--// Transaction popup  -->
  </div>
</template>

<script>
import DepositPopup from "../../../components/organization/DepositPopup.vue";
import vSelect from "vue-select";
export default {
  components: { DepositPopup, vSelect },
  data() {
    return {
      worth: {},
      hover: false,
      transactionPopup: false,
      transactionPopupType: "",
      items: [
        {
          name: "Foo",
          image:
            "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
        },
        {
          name: "Bar",
          image:
            "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
        },
        {
          name: "Hoo",
          image:
            "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
        },
        {
          name: "Coo",
          image:
            "https://www.gravatar.com/avatar/b17065ea1655f1e3283aac8d8fc16019?s=48&d=identicon&r=PG",
        },
      ],
      itemsa: [
        {
          currency: "euro",
          amount: "343,721.00",
        },
        {
          amount: "453,721.000",
          currency: "dollar",
        },
        {
          amount: "7.9876",
          currency: "ETH",
        },
        {
          amount: "876.0984.",
          currency: " BNB",
        },
        {
          amount: "0.0235",
          currency: "USDT",
        },
        {
          amount: "453,721.00",
          currency: "MATIC",
        },
      ],
    };
  },
  methods: {
    showTransactionsPopup(type) {
      this.transactionPopupType = type;
      this.transactionPopup = !this.transactionPopup;
    },
    hoverCustomization(index) {
      if (this.hover) {
        this.hover = 0;
      } else {
        this.hover = "hover" + index;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.wallet__container {
  width: 30%;
  &__content {
    padding: 1em 2em;
    background-color: #f6f7f9;
    color: #798ba0;
    font-size: 1.25em;
    box-shadow: 0px 6px 24px rgba(104, 89, 180, 0.1);
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: linear-gradient(90deg, #f8be17 0%, #ffce42 101.56%);
      color: #fff;
    }
    &__icon-bg {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #dfdfdf;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      font-size: 2rem;
    }
    .icon {
      &__upward,
      &__downward {
        color: #fff;
        background-color: #f8d364;
        border-radius: 5px;
        &:hover {
          background: #fff;

          color: #f8be17;
        }
      }
    }
    &__arrows {
      right: 1.5em;
    }
  }
}
.hovered {
  background: #fff;
  color: #f8be17;
}

.overlay {
  &__bg {
    z-index: 100000 !important;
    top: 0;
    left: 0;
    background-color: #21211f77;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
  }
  &__inner {
    width: 25%;
    padding: 1.5em 0.5em;
    border-radius: 5px;
    background-color: #fff;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
}
</style>