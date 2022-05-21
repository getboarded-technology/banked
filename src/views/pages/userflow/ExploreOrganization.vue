<template>
  <div>
    <div class="my-6 flex">
      <vs-input
        icon-after="true"
        icon="search"
        color="warning"
        placeholder="Search Organization"
        v-model="search"
      />
      <vs-dropdown vs-trigger-click class="mx-6">
        <a class="a-icon" href="#">
          <vs-icon class="mx-2" icon="filter_list" />Filter
          <vs-icon class="" icon="expand_more"></vs-icon>
        </a>

        <vs-dropdown-menu>
          <vs-dropdown-item> Option 1 </vs-dropdown-item>
          <vs-dropdown-item> Option 2 </vs-dropdown-item>
          <vs-dropdown-item> Option 3 </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>

    <div
      class="
        grid
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
      "
    >
      <vx-card class="org" v-for="(orgData, index) in orgData" :key="index">
        <div class="flex">
          <img :src="orgData.imgSrc" alt="" />
          <span class="mx-4 flex flex-col justify-center"
            ><h4 class="font-semibold capitalize">{{ orgData.name }}</h4>
            <a
              class="org_link"
              :href="orgData.link"
              target="_blank"
              rel="noopener noreferrer"
              >{{ orgData.link }}</a
            >
          </span>
        </div>
        <p class="my-2 org__about">
          {{ orgData.about }}
        </p>

        <div class="my-6">
          <h4 class="font-bold">{{ orgData.money }}</h4>
          <p class="my-2 org__size">
            {{ orgData.size }} Community Size | {{ orgData.active }} Active
          </p>
        </div>

        <vs-button
          color="#f8be17"
          class="connect__wallet__btn font-semibold text-black"
        >
          Join now
        </vs-button>
      </vx-card>
    </div>
  </div>
</template>

<script>
import lens from "@/assets/images/utils/lens-protocol.png";
import polkastarter from "@/assets/images/utils/polkastarter.png";
import polygon from "@/assets/images/utils/polygon.png";
import gitcoin from "@/assets/images/utils/gitcoin.png";
import zapper from "@/assets/images/utils/zapper.png";

export default {
  name: "ExploreOrganization",
  data() {
    return {
      orgData: [
        {
          imgSrc: lens,
          name: "lens protocol",
          link: "http://lens.dev",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis conguenulla in mattis.",
          money: "$423,654,654.008",
          size: "342",
          active: "24",
        },
        {
          imgSrc: polkastarter,
          name: "polkastarter",
          link: "https://polkastarter.com",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis conguenulla in mattis.",
          money: "$423,654,654.008",
          size: "342",
          active: "24",
        },
        {
          imgSrc: polygon,
          name: "polygon",
          link: "https://polygon.technology",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis conguenulla in mattis.",
          money: "$423,654,654.008",
          size: "342",
          active: "24",
        },
        {
          imgSrc: gitcoin,
          name: "gitcoin",
          link: "https://gitcoin.co",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis conguenulla in mattis.",
          money: "$423,654,654.008",
          size: "342",
          active: "24",
        },
        {
          imgSrc: zapper,
          name: "zapper",
          link: "zapper.fi",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis conguenulla in mattis.",
          money: "$423,654,654.008",
          size: "342",
          active: "24",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.org {
  a,
  &__about,
  &__size {
    color: #798ba0;
  }
}
</style>

<style scoped>
.vs-input >>> .vs-input--input {
  border-radius: 1.5em;
}
.vs-input >>> .vs-icon {
  font-size: 1.7em;
}
.vs-con-dropdown {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.5em;
  padding: 0.2em 1.2em;
  background: #fff;
}

.vs-con-dropdown >>> a {
  display: flex;
  align-items: center;
  color: #000;
  font-weight: 600;
  font-size: 1.2em;
}

.vs-dropdown-menu >>> a:hover {
  color: #000 !important;
}

.vs-dropdown--menu >>> .vs-icon {
  color: #a8b0b9;
  font-size: 1.4em;
}
</style>