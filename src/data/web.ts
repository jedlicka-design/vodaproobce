// Základní údaje webu. Texty jednotlivých sekcí jsou v src/data/obsah.ts.

export const web = {
  nazev: 'Voda pro obce',
  osoba: 'Ing. Jiří Havíř',
  title: 'Odborný zástupce kanalizace pro obce | Ing. Jiří Havíř',
  description:
    'Odborné zastoupení provozovatele kanalizace, evidence, hlášení a povolení pro obce. Ing. Jiří Havíř, voda pro obce.',
  telefon: '+420 733 677 749',
  telefonHref: 'tel:+420733677749',
  email: 'havir@vodaproobce.cz',
  sidlo: 'Obora u Boskovic',
  // IČO doplnit po zahájení podnikání. Dokud je prázdné, v patičce se nezobrazí.
  ico: '',
  // Access key z web3forms.com (není tajný, patří do HTML). Dokud je prázdný,
  // formulář místo odeslání ukáže telefon a e-mail.
  web3formsKey: '21b60fd4-cd98-47bc-8365-565fc6533467',
};

export const menu = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#kalendar', label: 'Kalendář povinností' },
  { href: '#postup', label: 'Postup' },
  { href: '#o-mne', label: 'Odborný zástupce' },
  { href: '#dotazy', label: 'Dotazy' },
  { href: '#ke-stazeni', label: 'Ke stažení' },
  { href: '#kontakt', label: 'Kontakt', cta: true },
];

/** Cesta k souboru nebo stránce s ohledem na `base` (GitHub Pages bez domény). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
