/** External links — wired exactly as specified in the handoff. */
export const LINKS = {
  booksy: 'https://booksy.com/pl-pl/296751_fizjosfera_fizjoterapia_6803_elk',
  instagram: 'https://www.instagram.com/fizjosfera.elk/',
  facebook: 'https://www.facebook.com/profile.php?id=61576603081042',
  tel: 'tel:+48570033530',
  phoneDisplay: '570 033 530',
  maps: 'https://maps.google.com/?q=Adama+Mickiewicza+9B+19-300+Ełk',
  mapsEmbed:
    'https://maps.google.com/maps?q=Adama%20Mickiewicza%209B%2019-300%20E%C5%82k&z=15&output=embed',
} as const;

/** In-page anchor navigation. */
export const NAV_ITEMS = [
  { label: 'O mnie', href: '#o-mnie' },
  { label: 'Usługi', href: '#uslugi' },
  { label: 'Gabinet', href: '#gabinet' },
  { label: 'Cennik', href: '#cennik' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;
