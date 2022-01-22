import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Criptosistemas Clásicos',
    icon: 'unlock-outline',
    link: '/pages/clasicos',
    children: [
      {
        title: 'Desplazamiento',
        link: '/pages/clasicos/desplazamiento',
      },
      {
        title: 'Afín',
        link: '/pages/clasicos/afin',
      },
      {
        title: 'Vigenere',
        link: '/pages/clasicos/vigenere',
      },
      {
        title: 'Sustitución',
        link: '/pages/clasicos/sustitucion',
      },
      {
        title: 'Hill',
        link: '/pages/clasicos/hill',
      },
      {
        title: 'Permutación',
        link: '/pages/clasicos/permutacion',
      }
    ]
  },
  {
    title: 'Criptosistemas de Bloque',
    icon: 'unlock-outline',
    link: '/pages/bloque',
    children: [
      {
        title: 'S-DES',
        link: '/pages/bloque/sdes',
      },
      {
        title: 'DES',
        link: '/pages/bloque/des',
      },
      {
        title: 'T-DES',
        link: '/pages/bloque/tdes',
      },
      {
        title: 'AES',
        link: '/pages/bloque/aes',
      },
      
    ]
  },
  {
    title: 'Gamma Pentagonal',
    icon: 'keypad-outline',
    link: '/pages/gamma',
  },
  {
    title: 'Llave Pública',
    icon: 'unlock-outline',
    link: '/pages/bloque',
    children: [
      {
        title: 'RSA',
        link: '/pages/publica/rsa',
      },
      
    ]
  },
];
