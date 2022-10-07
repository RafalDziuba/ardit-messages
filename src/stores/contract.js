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
      connectingError: false,
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

    async connectWallet() {
      this.wallet = new ArweaveWebWallet({
        name: "Ardit",
        // logo: 'URL of your logo to be displayed to users'
      });
      await this.wallet.setUrl("arweave.app");
      await this.wallet.connect();
      await this.contract.connect("use_wallet");
    },

    async voteInteraction(functionType, id) {
      try {
        await this.contract.writeInteraction({
          function: functionType,
          id: id,
        });
      } catch (error) {
        console.log(error);
        alert("hi from vote error");
      }
    },

    async addContent(payload) {
      try {
        await this.contract.writeInteraction({
          function: "postMessage",
          content: payload,
        });
      } catch (error) {
        console.log(error);
        alert("hi from error");
      }
    },
  },
});
