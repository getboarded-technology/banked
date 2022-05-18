<template>
  <div class="container flex items-center justify-center">
    <div class="progress-circle__container">
      <div class="progress-circle__percent flex flex-col items-center">
        <small
          ><span class="text-black font-bold text-2xl">{{
            percent * (this.stepNumber + 1)
          }}</span>
          <span class="text-black font-bold text-xl">%</span>
        </small>

        <span class="text-lg">{{ stepNumber + 1 }}/4</span>
      </div>

      <svg
        class="progress-circle"
        viewBox="0 0 106 106"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="ProgressBar" transform="translate(-17.000000, -17.000000)">
            <circle
              id="Oval"
              stroke="#f8f9fa"
              stroke-width="7"
              fill-rule="nonzero"
              cx="70"
              cy="70"
              r="50"
            ></circle>
            <path
              class="progress-circle__path"
              stroke-linecap="round"
              d="M70,120 C97.6142375,120 120,97.6142375 120,70 C120,42.3857625 97.6142375,20 70,20 C42.3857625,20 20,42.3857625 20,70 C20,97.6142375 42.3857625,120 70,120 Z"
              id="Oval-Copy"
              stroke="#59bf78"
              stroke-width="7"
              :stroke-dasharray="circle"
              fill-rule="nonzero"
              transform="translate(70.000000, 70.000000) rotate(-125.000000) translate(-70.000000, -70.000000) "
            ></path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadialBar",
  props: ["stepNumber"],
  data() {
    return {
      percent: 25,
    };
  },
  methods: {
    randomNumber() {
      this.percent = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    },
  },
  computed: {
    circle() {
      return (
        ((this.percent * (this.stepNumber + 1)) / 100) * 100 * Math.PI + ",9999"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-circle {
  max-width: 100px;
  max-height: 100px;
  width: 100%;
  transform: scaleX(1) rotate(-55deg);

  &__percent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__container {
    display: inline-block;
    position: relative;
  }

  &__path {
    transition: 0.5s ease-in-out all;
  }
}
</style>