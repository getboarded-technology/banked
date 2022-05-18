<template>
  <div>
    <div class="info">
      <h3 class="text-black font-bold text-4xl">Organization Information</h3>
      <section class="flex md:pt-8">
        <div class="w-1/2">
          <small class="w-4/5 flex justify-center"
            ><img src="@/assets/images/pages/organization/uploadPic.png" alt=""
          /></small>

          <small
            ><div class="font-bold text-black my-4 text-xl">Theme Color</div>
            <ColorPicker id="color-picker" />
          </small>
          <small
            ><div class="font-bold text-black my-4 text-xl">Location</div>
            <ColorPicker id="color-picker" />
          </small>
          <small
            ><div class="font-bold text-black my-4 text-xl">Location</div>
            <ColorPicker id="color-picker" />
          </small>
        </div>
        <div class="w-1/2">
          <small
            ><div class="font-bold text-black my-4 text-xl">
              Organization Name
            </div>
            <vs-input class="w-4/5" color="#f2c244" v-model="value4"
          /></small>

          <small
            ><div class="font-bold text-black my-4 text-xl">
              Organization Domain
            </div>
            <vs-input class="w-4/5" color="#f2c244" v-model="value4"
          /></small>

          <small
            ><div class="font-bold text-black my-4 text-xl">Website</div>
            <vs-input class="w-4/5" color="#f2c244" v-model="value4"
          /></small>

          <small
            ><div class="font-bold text-black my-4 text-xl">Work Email</div>
            <vs-input class="w-4/5" color="#f2c244" v-model="value4"
          /></small>

          <small
            ><div class="font-bold text-black my-4 text-xl">About</div>
            <vs-input class="w-4/5" color="#f2c244" v-model="value4"
          /></small>
        </div>
      </section>
    </div>

    <div class="overlay__bg" v-if="stepNumber === 3">
      <div class="overlay__inner">
        <div>
          <img src="@/assets/images/pages/organization/launchImg.svg" alt="" />
        </div>
        <div class="overlay__inner__content px-8 w-1/2">
          <div>
            <span class="capitalize text-white text-4xl font-semibold"
              >the future</span
            ><br /><span class="capitalize text-white text-3xl font-medium"
              >way of work!</span
            >
          </div>
          <div class="overlay__inner__content--2 my-4">
            Where people could work for multiple Organizations, DAOs and will
            have multiple income streams based on ‘value’ that they add instead
            of the ‘time’. This differs from the gig economy in a way that no
            one corporation is managing these jobs – people work towards a value
            added system instead of selling their time in the traditional work
            model.
          </div>
          <div class="">
            <vs-button class="w-full" color="#fff" type="filled"
              ><router-link to="/setup" class="text-black font-semibold"
                >Launch</router-link
              ></vs-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from "../../components/customComponents/ColorDropdown.vue";

export default {
  name: "OrganizationInfo",
  components: {
    ColorPicker,
  },

  props: ["stepNumber"],
  data() {
    return {
      userName: "",
      popup: true,
    };
  },
  methods: {
    showPopup() {
      this.popup = !this.popup;
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  padding: 2rem 4rem;
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
    width: 50%;
    display: flex;
    padding: 2em;
    border-radius: 15px;
    background-color: #6859b4;
    align-items: center;
    justify-content: space-around;
    display: flex;
    &__content {
      &--2 {
        color: #bdb8da;
        text-align: justify;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .info__detail {
    padding: 2.5rem;
    &__box {
      width: 80%;
    }
  }
}
</style>

<style scoped>
.vs-input >>> .vs-input--input {
  color: #666666;
}
.vselect >>> li:hover,
li::selection {
  background: #f8be17;
}
</style>
