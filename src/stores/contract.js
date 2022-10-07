import { defineStore } from "pinia";
import { WarpFactory } from "warp-contracts/web";
import { ArweaveWebWallet } from "arweave-wallet-connector";

export const useContractStore = defineStore("contract", {
  state: () => {
    return {
      contractState: [],
      contractId: "48G_IllU9G-PRyl4Ods88STtQ1h0Eo8zHQUHdNlHKZw",
      messages: [],
      warp: null,
      contract: null,
      wallet: null,
    };
  },
  actions: {
    async getContract() {
      this.warp = await WarpFactory.forMainnet();
      this.contract = await this.warp.contract(this.contractId);
      const { cachedValue } = await this.contract.readState();
      this.contractState = cachedValue.state;

      console.log(this.contractState);
    },

    // async connectWallet() {
    //   this.wallet = await this.warp.arweave.wallets.generate();
    //   this.contract.connect(this.wallet);
    // },

    async connectWallet() {
      this.wallet = new ArweaveWebWallet({
        name: "App name",
        // logo: 'URL of your logo to be displayed to users'
      });
      this.wallet.setUrl('arweave.app');
      const address = await this.wallet.connect();
      console.log(address);
    },

    async voteInteraction(functionType, id) {
      await this.connectWallet();
      await this.contract.writeInteraction({
        function: functionType,
        id: id,
      });
    },

    async addContent(payload) {
      await this.connectWallet();
      await this.contract.writeInteraction({
        function: "postMessage",
        content: payload,
      });
    },

    // async addUpvote(id) {
    //   const warp = WarpFactory.forMainnet();
    //   const contract = warp.contract(this.contractId);
    //   const wallet = await warp.arweave.wallets.generate();
    //   await contract.connect(wallet);
    //   await contract.writeInteraction({ function: "upvoteMessage", id: id });
    // },

    // async addDownvote(id) {
    //   const warp = WarpFactory.forMainnet();
    //   const contract = warp.contract(this.contractId);
    //   const wallet = await warp.arweave.wallets.generate();
    //   await contract.connect(wallet);
    //   await contract.writeInteraction({ function: "downvoteMessage", id: id });
    // },
  },
});
