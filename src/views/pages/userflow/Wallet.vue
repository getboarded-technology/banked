<template>
  <div>
    <vs-card class="w-1/4">
      <div class="mx-2">
        <p class="text-lg">Total Worth</p>
        <h3 class="font-bold text-4xl">$ 457,638.789</h3>
      </div>
      <div>
        <div class="flex items-center bg-gray-400 wallet__content">
          <small>
            <vs-icon size="medium" icon="euro"/>
            fafawwfdw
          </small>
        </div>
      </div>
    </vs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      worth: {},
    };
  },
};
</script>


<style lang="scss" scoped>
.wallet__content {
  padding: 2em;
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
}
</style>