<template>
  <div id="color-picker">
    <div class="wrapper-dropdown">
      <span @click="toggleDropdown()" v-html="selector"></span>
      <ul class="dropdown" v-show="active">
        <li
          v-for="(color, i) in colors"
          :key="i"
          @click="setColor(color.hex, color.name)"
        >
          <span :style="{ background: color.hex }"></span> {{ color.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import colorOptions from "@/assets/data/colors.js";
export default {
  name: "ColorPicker",
  data() {
    return {
      active: false,
      selectedColor: "#F7941D",
      selectedColorName: "Orange",
      colors: colorOptions,
      orgData: {
        themeColor: {
          name: this.selectedColorName,
          code: this.selectedColor,
        },
      },
    };
  },
  computed: {
    selector() {
      if (this.selectedColor) {
        return (
          '<span style="padding: 0.3em 1em;margin : 0.5em;border-radius: 5px; background: ' +
          this.selectedColor +
          '"></span> ' +
          this.selectedColorName
        );
      }
    },
  },
  methods: {
    setColor(color, colorName) {
      this.selectedColor = color;
      this.selectedColorName = colorName;
      this.orgData.themeColor.name = colorName;
      this.orgData.themeColor.code = color;
      this.active = false;
      console.log(this.orgData);
    },
    toggleDropdown() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.wrapper-dropdown {
  position: relative;
  width: 80%;
  background: #fff;
  color: #2e2e2e;
  outline: none;
  cursor: pointer;
}
.wrapper-dropdown > span {
  width: 100%;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #666666;
  border-radius: 5px;
  padding: 0.7rem;
}
.wrapper-dropdown > span:active,
:focus {
  border: 1px solid #f8be17;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
}
.wrapper-dropdown > span > span {
  padding: 0 12px;
  margin-right: 5px;
}
.wrapper-dropdown > span:after {
  content: url("../../assets/images/pages/organization/downArrow.png");
  width: 0;
  height: 0;
  position: absolute;
  right: 2.5em;
}

.wrapper-dropdown .dropdown {
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  font-weight: normal;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  border: 1px solid #ababab;
  border-top: 0;
}

.wrapper-dropdown .dropdown li {
  display: block;
  text-decoration: none;
  color: #2e2e2e;
  padding: 5px;
  cursor: pointer;
}

.wrapper-dropdown .dropdown li > span {
  padding: 0 12px;
  margin-right: 5px;
}

.wrapper-dropdown .dropdown li:hover {
  background: #eee;
  cursor: pointer;
}
</style>