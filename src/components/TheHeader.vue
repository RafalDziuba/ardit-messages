<script setup>
import { useContractStore } from "../stores/contract";
const store = useContractStore();
</script>

<template>
  <header>
    <h1>
      <p>Contract id:</p>
      <a :href="`https://sonar.warp.cc/#/app/contract/${store.contractId}`">
        {{ store.contractId }}
      </a>
    </h1>
  </header>
</template>

<style scoped lang="scss">
@import "../style/_colors";
header {
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $background;
  h1 {
    display: flex;
    flex-direction: row;
    color: $white;
    p {
      font-size: 1.4rem;
    }
    a {
      font-size: 1.4rem;
      margin-left: 1rem;
      color: $white;
    }
  }
}
</style>
