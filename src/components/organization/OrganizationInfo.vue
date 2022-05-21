<template>
  <div>
    <div class="info">
      <h3 class="text-black font-bold text-4xl">Organization Information</h3>
      <section class="flex md:pt-8">
        <div class="w-1/2">
          <small class="w-4/5 flex justify-center overflow-hidden relative">
            <input
              type="file"
              class="hidden"
              accept="image/*"
              @change="handleImageUpload"
              ref="imageUploader"
            /><img
              class="uploaded-img"
              @click="() => $refs.imageUploader.click()"
              :src="orgData.img ? orgData.img : uploadImg"
              alt="Upload Image"
              style="cursor: pointer"
            />
            <span class="flex items-end" style="cursor: pointer">
              <vs-icon
                v-if="orgData.img"
                @click="orgData.img = ''"
                color="#E1433E"
                size="25px"
                icon="delete"
            /></span>
          </small>

          <small
            ><div class="font-bold text-black my-4 text-xl">Theme Color</div>
            <ColorPicker id="color-picker" />
          </small>
          <small
            ><div class="font-bold text-black my-4 text-xl">Location</div>
            <v-select
              v-model="orgData.location"
              label="name"
              :options="countries"
            ></v-select>
          </small>
          <small
            ><div class="font-bold text-black my-4 text-xl">
              Community Links
            </div>
            <ColorPicker id="color-picker" />
          </small>
        </div>
        <div class="w-1/2">
          <small
            ><div class="font-bold text-black my-4 text-xl">
              Organization Name
            </div>
            <vs-input class="w-4/5" color="#f2c244" v-model="orgData.name"
          /></small>

          <!-- <small
            ><div class="font-bold text-black my-4 text-xl">
              Organization Domain
            </div>
            <vs-input class="w-4/5" color="#f2c244" v-model="value4"
          /></small> -->

          <small
            ><div class="font-bold text-black my-4 text-xl">Website</div>
            <vs-input class="w-4/5" color="#f2c244" v-model="orgData.website"
          /></small>

          <small
            ><div class="font-bold text-black my-4 text-xl">Work Email</div>
            <vs-input
              v-validate:orgData.email="'required|email'"
              data-vv-validate-on="blur"
              class="w-4/5"
              color="#f2c244"
              v-model="orgData.email"
          />
          </small>

          <small
            ><div class="font-bold text-black my-4 text-xl">About</div>
            <vs-textarea class="w-4/5" color="#f2c244" v-model="orgData.about"
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
import vSelect from "vue-select";
import uploadImg from "../../assets/images/pages/organization/uploadPic.png";
import countries from "@/assets/data/countries.js";

export default {
  name: "OrganizationInfo",
  components: {
    ColorPicker,
    vSelect,
  },
  props: ["stepNumber"],
  data() {
    return {
      userName: "",
      uploadImg: uploadImg,
      countries: countries,
      popup: true,
      orgData: {
        img: "",
        location: {},
        communityLinks: {},
        email: "",
        website: "",
        about: "",
      },
    };
  },
  methods: {
    showPopup() {
      this.popup = !this.popup;
    },
    handleImageUpload(e) {
      const file = e.target.files[0];
      this.orgData.img = URL.createObjectURL(file);
      console.log(this.orgData);
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

.uploaded-img {
  width: 10em;
  height: 10em;
  border-radius: 50%;
  object-fit: cover;
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
.v-select {
  width: 80%;
}
</style>
