<template>
  <div class="wrapper">
    <h1>
      <p>Contract id:</p>
      {{ store.contractId }}
    </h1>
    <form>
      <div class="form__group field">
        <input
          type="input"
          v-model="content"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
        <label for="name" class="form__label">Name</label>
      </div>
      <button @click.prevent="sendContent">Send</button>
    </form>

    <div v-if="store.contract.messages" class="content">
      <div
        class="message"
        v-for="msg in store.contract.messages.slice().reverse()"
        :key="msg.id"
      >
        <p>{{ msg.content }}</p>
        <h3>{{ msg.creator }}</h3>
        <div class="votes">
          <div class="upvote" @click.prevent="upVote(msg.id)">+</div>
          <div class="downvote" @click.prevent="downVote(msg.id)">-</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContractStore } from "./stores/contract";
import { ref } from "vue";

let content = ref("");
const store = useContractStore();

store.getContract();

const sendContent = async () => {
  if (content.value == "") {
    return;
  } else {
    await store.addContent(content.value);
    content.value = "";
    store.getContract();
  }
};

const upVote = async (id) => {
  await store.addUpvote(id);
};

const downVote = async (id) => {
  await store.addDownvote(id);
};
</script>

<style lang="scss">
$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,100;1,400;1,500;1,600;1,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
  font-size: 10px;
}

.wrapper {
  margin: 0 auto;
  margin-top: 4rem;
  width: 60%;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
    flex-direction: row;
    gap: 2rem;
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
  .content {
    margin-top: 3rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    .message {
      width: 40rem;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 2rem 0;
      padding: 1rem;

      background-color: #38ef7e55;
      border-radius: 0.5rem;
      p {
        font-size: 1.8rem;
      }
      h3 {
        margin-left: auto;
        margin-top: 1rem;
      }

      .votes {
        position: absolute;
        right: -2rem;
        top: 1rem;
        .upvote,
        .downvote {
          font-size: 1.4rem;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
