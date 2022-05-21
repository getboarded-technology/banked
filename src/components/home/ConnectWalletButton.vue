<template>
  <div>
    <vs-button
      v-if="!walletAddress"
      @click="showWallets"
      color="#f8be17"
      class="connect__wallet__btn font-semibold text-black"
    >
      Connect Wallet
    </vs-button>

    <div class="flex" v-else>
      <div class="rounded-full overflow-hidden mx-2">
        <img
          class="w-14 h-14 object-cover"
          src="@/assets/images/utils/defaultAvatar.png"
          alt=""
        />
      </div>

      <div>
        <h4 class="font-large">
          {{ walletAddress.slice(0, 5) }}....{{
            walletAddress.slice(walletAddress.length - 5, walletAddress.length)
          }}
        </h4>
      </div>
    </div>

    <div class="overlay__bg" v-if="wallet" @click="showWallets">
      <div class="overlay__inner" @click.stop>
        <div class="my-4 w-full flex justify-between items-center px-4">
          <h2 class="font-semibold">Connect to wallet</h2>
          <h2 class="text-grey cursor-pointer" @click="showWallets">X</h2>
        </div>
        <!-- wallet type  -->
        <div class="overlay__inner__wallet__type px-8">
          <button
            v-for="(walletType, index) in walletTypes"
            @click.prevent="walletUse(walletType.type)"
            class="my-4 overlay__inner__wallet__type__btn rounded-md"
            :key="index"
          >
            <span class="text-xl text-black font-bold m-0">{{
              walletType.name
            }}</span>
            <div
              v-if="walletType.type === 'metamask'"
              class="text-xl text-grey flex m-0"
            >
              Networks
              <span>
                <vs-icon class="mx-1" size="small" icon="info"></vs-icon>
              </span>
            </div>
            <img
              class="overlay__inner__wallet__type__icon"
              :src="walletType.imgSrc"
            />
          </button>
          <div class="font-medium text-lg">
            <p>
              Data policies in compliance with the
              <a
                href="https://fairdatasociety.org/"
                target="blank"
                class="text-sky-600 cursor-pointer"
                style="color: #2563eb"
                >Fair Data Society Principles.</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import metamask from "@/assets/images/wallet/Metamask.svg";
import coinbase from "@/assets/images/wallet/Coinbase.svg";
import walletconnect from "@/assets/images/wallet/WalletConnect.svg";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

export default {
  name: "ConnectWalletButton",
  data() {
    return {
      wallet: false,
      walletTypes: [
        {
          type: "metamask",
          name: "Metamask",
          imgSrc: metamask,
        },
        {
          type: "walletConnect",
          name: "WalletConnect",
          imgSrc: walletconnect,
        },
        {
          type: "coinbaseWallet",
          name: "Coinbase Wallet",
          imgSrc: coinbase,
        },
      ],
      publicAddress: "",
      coinbase: "",
    };
  },
  computed: {
    walletAddress() {
      return this.$store.state.walletAddress;
    },
  },
  methods: {
    showWallets() {
      this.wallet = !this.wallet;
    },
    async connectMetaMask(web3) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const coinbase = await web3.eth.getCoinbase();
      if (!coinbase) {
        this.$vs.notify({
          title: this.$t("Login.notify.title"),
          text: this.$t("Metamasklogin.activate"),
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
        });
      }
      return (this.publicAddress = account.toLowerCase());
    },
    async walletConnect(web3) {
      const provider = new WalletConnectProvider({
        rpc: {
          1: "https://mainnet.mycustomnode.com",
          3: "https://ropsten.mycustomnode.com",
          100: "https://dai.poa.network",
          // ...
        },
      });
      await provider.enable();
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const coinbase = await web3.eth.getCoinbase();
      if (!coinbase) {
        this.$vs.notify({
          title: this.$t("Login.notify.title"),
          text: this.$t("Metamasklogin.activate"),
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
        });
      }
      this.publicAddress = account.toLowerCase();
      console.log(this.publicAddress);
    },
    async connectCoinbase(web3) {
      //omkar
    },
    walletUse(type) {
      const web3 = new Web3(Web3.givenProvider);
      if (!web3.givenProvider) {
        this.$vs.notify({
          title: this.$t("Login.notify.title"),
          text: this.$t("Metamasklogin.install"),
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
        });
      } else {
        console.log(type);
        if (type === "metamask") {
          this.connectMetaMask(web3);
        } else if (type === "walletConnect") {
          this.walletConnect(web3);
        } else {
          this.connectCoinbase; //temp
        }

        this.$store.dispatch("updateWalletInfo", {
          walletAddress: this.publicAddress,
        });
        if (this.walletAddress) {
          this.wallet = false;
          this.$router.push("/account-type");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.connect__wallet__btn {
  background: linear-gradient(90deg, #f8be17 0%, #ffce42 101.56%) !important;
  width: 100%;
}
.overlay {
  &__bg {
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #21211f77;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__inner {
    width: 30%;
    padding: 1.5em 0.5em;
    border-radius: 5px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    &__wallet__type {
      &__btn {
        padding: 2em 1em;
        background-color: #f2f3f5;
        width: 100%;
        border-radius: 6px;
        border: 2px solid #dbdde5;
        height: 50px;
        display: inline-flex !important;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &:hover {
          box-shadow: 0 4px 8px 0 rgba(175, 165, 165, 0.527);
          transform: scale(1.1);
          transition: transform 0.2s;
        }
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .overlay {
    &__inner {
      width: 85%;
    }
  }
}
</style>