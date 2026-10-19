// Sponsors. Add a `logo` (a WebP in public/sponsors/, about 520 px wide, with its real width and height) when a logo
// arrives. Entries without a logo show as empty slots. A light-on-transparent logo (white text) needs `onDark: true`
// so it sits on a dark tile.
export type Sponsor = {
  id: string;
  name: string;
  logo?: { src: string; width: number; height: number; onDark?: boolean };
};

export const sponsors: Sponsor[] = [
  { id: "manara-west", name: "Manara West", logo: { src: "/sponsors/manara-west.webp", width: 786, height: 228 } },
  { id: "cair-ca", name: "CAIR California", logo: { src: "/sponsors/Full-Color_Logo_CAIR_CA.svg", width: 1061, height: 336 } },
  { id: "mpac", name: "MPAC", logo: { src: "/sponsors/MPAC-Short-BlueBlack.webp", width: 3381, height: 1441 } },
  { id: "idea", name: "IDEA", logo: { src: "/sponsors/IDEA.webp", width: 499, height: 229 } },
  { id: "zakat-foundation", name: "Zakat Foundation", logo: { src: "/sponsors/ZakatFoundation.webp", width: 260, height: 260 } },
];
