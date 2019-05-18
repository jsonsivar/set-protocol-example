const dotenv = require('dotenv');
const path = require('path');

const pkg = require('../../package.json');

dotenv.config();

module.exports = {
  NODE_ENV: 'development',
  setProtocol: {
    mainnet: {
      coreAddress: '0x75FBBDEAfE23a48c0736B2731b956b7a03aDcfB2',
      transferProxyAddress: '0x25C499e7306248C308cef403D9824110817b305C',
      vaultAddress: '0x5ecd8E3b059BC5A69E2d7a73c60Bd4E9788972FF',
      rebalanceAuctionModuleAddress: '0x1db929398958082d2080AA1B501e460503f60467',
      kyberNetworkWrapperAddress: '0x3700414Bb6716FcD8B14344fb10DDd91FdEA59eC',
      setTokenFactoryAddress: '0x14f0321be5e581abF9d5BC76260bf015Dc04C53d',
      rebalancingSetTokenFactoryAddress: '0x4c4C649455c6433dC48ff1571C9e50aC58f0CeFA',
      exchangeIssueModuleAddress: '0x38E5462BBE6A72F79606c1A0007468aA4334A92b',
      issuanceOrderModuleAddress: '0x8440f6a2c42118bed0D6E6A89Bf170ffd13e21c0',
      rebalancingTokenIssuanceModule: '0x1F6eE9CE38E6BEEB968BB91f755998548D3165e0',
      payableExchangeIssue: '0x18B739aabC019d9eF160D44BA8A9dD6a717372Af',
      wrappedEtherAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    }
  }
};
