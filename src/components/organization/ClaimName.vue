<template>
  <div class="claim__name__detail">
    <div>
      <h3 class="text-black font-bold text-4xl">Claim a name</h3>
      <p class="my-4 text-lg font-medium" style="color: #8692a6">
        Claim your organization domain name
      </p>
    </div>

    <div class="md:mt-16">
      <div class="my-4 text-lg font-medium" style="color: #8692a6">
        Organization’s Name
      </div>
      <vs-input class="inputx" placeholder="Placeholder" v-model="value1" />
    </div>

    <div class="claim__name__detail__para">
      Banked uses the unstoppabledomains to assign names to organizations. The
      name you choose will be mapped to your organization’s Ethereum address and
      cannot be changed after you launch your organization.
    </div>
  </div>
</template>

<script>
export default {
  name: "ClaimName",
};
</script>

<style lang="scss" scoped>
.claim__name__detail {
  padding: 5rem;
  padding-bottom: 1rem;
  margin-top: 6%;
  &__para {
    margin: 2em 0;
    padding: 2em;
    width: 65%;
    border-radius: 10px;
    background: #eeeeee;
    color: #8692a6;
  }
}

@media only screen and (max-width: 991px) {
  .claim__name__detail {
    padding: 2.5rem;
    &__box {
      width: 80%;
    }
  }
}
</style>
