<!-- =========================================================================================
    File Name: VerticalNavMenuItem.vue
    Description: Vertical NavMenu item component. Extends vuesax framework's 'vs-sidebar-item' component
    Component Name: VerticalNavMenuItem
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div
    class="vs-sidebar--item my-2"
    :class="[
      { 'vs-sidebar-item-active': activeLink },
      { 'disabled-item pointer-events-none': isDisabled },
    ]"
  >
    <router-link
      tabindex="-1"
      v-if="to"
      exact
      :class="[{ 'router-link-active': activeLink }]"
      :to="to"
      :target="target"
    >
      <img
        class="mx-2"
        :class="[{ 'router-link-active__icon': activeLink }]"
        :src="icon"
        alt=""
      />
      <slot />
    </router-link>

    <a v-else :target="target" :href="href" tabindex="-1">
      <img class="mx-2" :src="icon" alt="" />
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: "v-nav-menu-item",
  props: {
    icon: { type: String, default: "" },
    iconSmall: { type: Boolean, default: false },
    iconPack: { type: String, default: "material-icons" },
    href: { type: [String, null], default: "#" },
    to: { type: [String, Object, null], default: null },
    slug: { type: String, default: null },
    index: { type: [String, Number], default: null },
    featherIcon: { type: Boolean, default: true },
    target: { type: String, default: "_self" },
    isDisabled: { type: Boolean, default: false },
  },
  computed: {
    activeLink() {
      return this.to == this.$route.path ||
        (this.$route.meta.parent == this.slug && this.to)
        ? true
        : false;
    },
  },
};
</script>

<style lang="scss">
.router-link-active {
  background: none !important;
  box-shadow: none !important;
  &__icon {
    filter: invert(25%) sepia(79%) saturate(478%) hue-rotate(2deg)
      brightness(106%) contrast(95%);
  }
}
</style>
