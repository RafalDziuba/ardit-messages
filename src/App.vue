<template>
  <div>
    <TheHeader></TheHeader>
  </div>
  <div class="wrapper">
    <MessageForm></MessageForm>
    <div v-if="store.contractState.messages" class="content">
      <div
        class="message"
        v-for="msg in store.contractState.messages.slice().reverse()"
        :key="msg.id"
      >
        <div class="votes-counter">{{ msg.votes.status }}</div>
        <p>{{ msg.content }}</p>
        <h3>
          <a :href="`https://viewblock.io/arweave/address/${msg.creator}`"
            >{{ msg.creator }}}</a
          >
        </h3>
        <div class="votes">
          <div
            class="upvote"
            @click.prevent="addInteraction('upvoteMessage', msg.messageId)"
          >
            +
          </div>
          <div
            class="downvote"
            @click.prevent="addInteraction('downvoteMessage', msg.messageId)"
          >
            -
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContractStore } from "./stores/contract";
import TheHeader from "./components/TheHeader.vue";
import MessageForm from "./components/MessageForm.vue";

const store = useContractStore();

store.getContract();

const addInteraction = async (functionType, id) => {
  await store.voteInteraction(functionType, id);
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,100;1,400;1,500;1,600;1,700&display=swap");
@import "./style/colors";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
  font-size: 10px;
}

.wrapper {
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  height: calc(100vh - 6rem);

  display: flex;
  flex-direction: row;

  background-color: $background;

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

      .votes-counter {
        position: relative;
        top: 1rem;
        left: -3rem;
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
