module.exports = {
  base: {
    factory: '0x71D234A3e1dfC161cc1d081E6496e76627baAc31',
    gaugeFactory: '0x35f35cA5B132CaDf2916BaB57639128eAC5bbcb5',
    gaugeFactory2: '0xD30677bd8dd15132F251Cb54CbDA552d2A05Fb08',
    voter: '0x16613524e02ad97edfef371bc883f2f5d6c480a5',
    NonfungiblePositionManager: '0x827922686190790b37229fd06084350E74485b72',
    masterchefV3: '0xC6A2Db661D5a5690172d8eB0a7DEA2d3008665A3',
    fromBlock: 3200567,
    fromBlockSickle: 12116234,
    chainName: 'base',
  },
  optimism: {
    factory: '0xB4C31b0f0B76b351395D4aCC94A54dD4e6fbA1E8',
    gaugeFactory: '0x8391fE399640E7228A059f8Fa104b8a7B4835071',
    oldGaugeFactory2: '0x282AC0eA96493650F1A5E5e5d20490C782F1592a',
    gaugeFactory2: '0x327147eE440252b893A771345025B41A267Ad985',
    voter: '0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C',
    oldNonfungiblePositionManager: '0xbB5DFE1380333CEE4c2EeBd7202c80dE2256AdF4',
    NonfungiblePositionManager: '0x416b433906b1B72FA758e166e239c43d68dC6F29',
    fromBlock: 105896812,
    fromBlockSickle: 117753454,
    chainName: 'optimism',
  },
  arbitrum: {
    factory: '0x53d9780DbD3831E3A797Fd215be4131636cD5FDf',
    gaugeFactory: '0xAAA2564DEb34763E3d05162ed3f5C2658691f499',
    gaugeFactory2: '0xaa2fbd0c9393964af7c66c1513e44a8caaae4fda',
    NonfungiblePositionManager: '0xAA277CB7914b7e5514946Da92cb9De332Ce610EF',
    masterchefV3: '0x5e09ACf80C0296740eC5d6F643005a4ef8DaA694',
    fromBlock: 69820005,
    fromBlockSickle: 197499243,
    chainName: 'arbitrum',
  },
  linea: {
    factory: '0x0F6aBc6B808B377d6AeD8dA1FAD5E135C99C81a3',
    fromBlockSickle: 4949355,
    fromBlock: 381770,
    gaugeFactory: '0xAAA932839641c037452f826BB9d7B2057129833b',
    gaugeFactory2: '0xAAA2D4987EEd427Ba5E2c933EeFCD75C84b446B7',
    voter: '0xAAAf3D9CDD3602d117c67D80eEC37a160C8d9869',
    NonfungiblePositionManager: '0xAAA78E8C4241990B4ce159E105dA08129345946A',
    masterchefV3: '0x22E2f236065B780FA33EC8C4E58b99ebc8B55c57',
    chainName: 'linea',
  },
  ethereum: {
    factory: '0x9D70B9E5ac2862C405D64A0193b4A4757Aab7F95',
    chainName: 'ethereum',
    masterchefV3: '0x556B9306565093C855AEA9AE92A594704c2Cd59e',
    fromBlockSickle: 19580798,
  },
  mode: {
    factory: '0x53d9780DbD3831E3A797Fd215be4131636cD5FDf',
    chainName: 'mode',
    fromBlockSickle: 7464171,
    gaugeFactory: '0x31832f2a97Fd20664D76Cc421207669b55CE4BC0',
    voter: '0xD2F998a46e4d9Dd57aF1a28EBa8C34E7dD3851D7',
    fromBlock: 7453232,
  },
  fantom: {
    factory: '0x53d9780DbD3831E3A797Fd215be4131636cD5FDf',
    chainName: 'fantom',
    fromBlockSickle: 79166260,
    NonfungiblePositionManager: '0x2B52294425a9a229322228de659eDE9D146D7c2f',
    gaugeFactory: '0x5b3220cb732245ffe8e26df228ac93feb685c157',
    fromBlock: 58469764,
    voter: '0xe3d1a117df7dcac2eb0ac8219341bad92f18dac1',
  },
  mantle: {
    factory: '0xB4C31b0f0B76b351395D4aCC94A54dD4e6fbA1E8',
    chainName: 'mantle',
    fromBlockSickle: 62383980,
    moeMasterchef: '0xA756f7D419e1A5cbd656A438443011a7dE1955b5'
  },
  bsc: {
    factory: '0x53d9780DbD3831E3A797Fd215be4131636cD5FDf',
    chainName: 'bsc',
    masterchefV3: '0x556B9306565093C855AEA9AE92A594704c2Cd59e',
    fromBlockSickle: 37565801
  },
  sonic: {
    factory: '0x53d9780DbD3831E3A797Fd215be4131636cD5FDf',
    chainName: 'sonic',
    fromBlockSickle: 1449481,
    NonfungiblePositionManager: '0xa05a9efDb6e4FBc6deaDA988306b0dE5C53a8788',
    gaugeFactory: '0x8CF82D413cA20a40a2Fa43C2bF77D136d81299e9',
    fromBlock: 4028276,
    voter: '0x3aF1dD7A2755201F8e2D6dCDA1a61d9f54838f4f',
  },
  hemi: {
    factory: '0xc6013E57a0811C7111A8fB07ACd2E248D9489C99',
    chainName: 'hemi',
    fromBlockSickle: 1741373,
    gaugeFactory: '0x1E97Cd6b8ce5052b3fAee512C04F93a967c4c0E4',
    fromBlock: 1741373,
  },
  avax: {
    factory: '0x53d9780DbD3831E3A797Fd215be4131636cD5FDf',
    chainName: 'avax',
    fromBlockSickle: 52924795,
  },
  ink: {
    factory: '0xc6013E57a0811C7111A8fB07ACd2E248D9489C99',
    chainName: 'ink',
    fromBlockSickle: 7174745,
  },
  unichain: {
    factory: '0x233D9067677dCf1a161954D45B4C965B9d567168',
    chainName: 'unichain',
    fromBlockSickle: 10858337,
  },
  katana: {
    factory: '0x233D9067677dCf1a161954D45B4C965B9d567168',
    chainName: 'katana',
    fromBlockSickle: 5297524,
  },
  fraxtal: {
    factory: '0xAc371D6E651b6450ea8c4cE346Ddd44B62d851B5',
    chainName: 'fraxtal',
    fromBlockSickle: 13191747,
  },
  polygon: {
    factory: '0x53d9780DbD3831E3A797Fd215be4131636cD5FDf',
    chainName: 'polygon',
    fromBlockSickle: 70860185,
  },
  lisk: {
    factory: '0x233D9067677dCf1a161954D45B4C965B9d567168',
    chainName: 'lisk',
    fromBlockSickle: 17528958,
  },
}
