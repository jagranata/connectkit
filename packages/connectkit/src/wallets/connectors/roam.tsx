import { WalletProps } from '../wallet';

import { isRoam } from '../../utils';
import Logos from '../../assets/logos';

export const roam = (): WalletProps => {
  const isInstalled = isRoam();

  return {
    id: 'roam',
    name: 'Roam',
    logos: {
      default: <Logos.Roam />,
      transparent: <Logos.Roam />,
      appIcon: <Logos.Roam />,
      connectorButton: <Logos.Roam />,
    },
    logoBackground: '#8697FF',  
    scannable: false,
    downloadUrls: {
      download:
        'https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782',  // FIXME
      website: 'https://www.roam.xyz/',
      ios: 'https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782',  // FIXME
    },
    installed: isInstalled,
  };
};
