"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_network_1 = require("fabric-network");
const path = __importStar(require("path"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Create a new file system based wallet for managing identities.
            const walletPath = path.join(process.cwd(), 'Org1Wallet');
            const wallet = new fabric_network_1.FileSystemWallet(walletPath);
            console.log(`Wallet path: ${walletPath}`);
            // Create a new gateway for connecting to our peer node.
            const gateway = new fabric_network_1.Gateway();
            const connectionProfile = path.resolve(__dirname, '..', 'connection.json');
            let connectionOptions = { wallet, identity: 'org1Admin', discovery: { enabled: true, asLocalhost: true } };
            yield gateway.connect(connectionProfile, connectionOptions);
            // Get the network (channel) our contract is deployed to.
            const network = yield gateway.getNetwork('mychannel');
            // Get the contract from the network.
            const contract = network.getContract('demo-contract');
            // Submit the specified transaction.
            yield contract.submitTransaction('createMyAsset', '002', 'Night Watch');
            console.log(`Transaction has been submitted`);
            // Disconnect from the gateway.
            yield gateway.disconnect();
        }
        catch (error) {
            console.error(`Failed to submit transaction: ${error}`);
            process.exit(1);
        }
    });
}
main();
//# sourceMappingURL=create copy.js.map