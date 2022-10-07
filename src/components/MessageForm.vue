<script setup>
import { ref } from "vue";
import { useContractStore } from "../stores/contract";

let content = ref("");
const store = useContractStore();

const sendContent = async () => {
  if (content.value == "") {
    return;
  } else {
    await store.addContent(content.value);
    content.value = "";
    store.getContract();
  }
};
</script>

<template>
 <section>
  <button @click="store.connectWallet()">CONNECT WALLET</button>
    <form>
    <div class="form__group field">
      <input
        type="input"
        v-model="content"
        class="form__field"
        placeholder="Message"
        name="message"
        id="message"
        required
      />
      <label for="message" class="form__label">Message</label>
    </div>
    <button @click.prevent="sendContent">Send</button>
  </form>
 </section>
</template>

<style scoped lang="scss">
$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;

section {
    width: 40%;
}

form {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
  }
  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }

  button {
    width: 10rem;
    height: 3rem;
    cursor: pointer;
  }
}
</style>
