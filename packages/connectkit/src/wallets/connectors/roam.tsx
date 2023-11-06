import { WalletProps } from '../wallet';

import { isAndroid } from '../../utils';
import { isRoam } from '../../utils/wallets';
import Logos from '../../assets/logos';

export const roam = (): WalletProps => {
  const isInstalled = isRoam();

  return {
    id: 'roam',
    name: 'Roam',
    logos: {
      default: <Logos.Roam />,
    },
    logoBackground: '#FFFFFF',
    scannable: false,
    downloadUrls: {
      download:
        'https://roam.xyz/',
      website: 'https://roam.xyz/',
      ios: 'https://roam.xyz/download',
    },
    installed: Boolean(isInstalled),
    createUri: (uri: string) => {
      return isAndroid()
        ? uri
        : `roam://wc.roam.xyz?uri=${encodeURIComponent(uri)}`;
    },
  };
};
