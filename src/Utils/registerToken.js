export const tokenAddress  = '';
const tokenSymbol  = 'WRLK';
const tokenDecimals  =  9;
const tokenImage  = '';

try {
  // eslint-disable-next-line no-undef
  const wasAdded =  ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals,
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Sei pronto per giocare!!');
  } else {
    console.log('Acquista WRLK prima di poter giocare!');
  }
} catch (error) {
  console.log(error);
}