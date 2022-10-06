import { defineStore } from 'pinia';
import { WarpFactory } from 'warp-contracts/web';

export const useContractStore = defineStore('contract', {
  state: () => {
    return {
      contract: [],
      contractId: '104Baqn4dDwL7ojuZtbMy5qitBa-WY1_sOai79TJ_Ig',
      messages: [],
    };
  },
  actions: {
    async getContract() {
      const warp = WarpFactory.forMainnet();
      const contract = warp.contract(this.contractId);
      // const address = await warp.arweave.wallets.jwkToAddress(wallet);
      const { cachedValue } = await contract.readState();
      this.contract = cachedValue.state;

      console.log(this.contract);
    },

    async addContent(payload) {
      const warp = WarpFactory.forMainnet();
      const contract = warp.contract(this.contractId);
      const wallet = await warp.arweave.wallets.generate();
      await contract.connect(wallet);
      await contract.writeInteraction({ function: 'postMessage', content: payload });
    },

    async addUpvote (id) {
      const warp = WarpFactory.forMainnet();
      const contract = warp.contract(this.contractId);
      const wallet = await warp.arweave.wallets.generate();
      await contract.connect(wallet);
      await contract.writeInteraction({ function: 'upvoteMessage', id: id });
    },

    async addDownvote (id) {
      const warp = WarpFactory.forMainnet();
      const contract = warp.contract(this.contractId);
      const wallet = await warp.arweave.wallets.generate();
      await contract.connect(wallet);
      await contract.writeInteraction({ function: 'downvoteMessage', id: id });
    }
  },

  getters: {
  },
});
