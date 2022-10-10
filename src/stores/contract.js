import { defineStore } from "pinia";
import { WarpFactory } from "warp-contracts/web";
import { ArweaveWebWallet } from "arweave-wallet-connector";
import { toast } from "vue3-toastify";

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
      // const loader = toast.loading("Connecting...");
      await this.wallet.setUrl("arweave.app");
      await this.wallet.connect();
      await this.contract.connect("use_wallet");
      // toast.remove(loader);
      toast.success("Conntected!");
    },

    async voteInteraction(functionType, message) {
      try {
        if (message.votes.addresses.includes(this.wallet.address)) {
          toast.error("Already voted!");
        } else if (message.creator == this.wallet.address) {
          toast.error(`You can't vote on your own content!`);
        } else {
          await this.contract.writeInteraction({
            function: functionType,
            id: message.messageId,
          });
          toast.success("Voted!");
          this.getContract();
        }
      } catch (error) {
        console.log(error);
        toast.error("Wallet not connected!");
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
        toast.error("Wallet not connected!");
      }
    },
  },
});
