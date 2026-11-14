# vodaproobce.cz

Web Ing. Jiřího Havíře – odborný zástupce kanalizace pro obce. Astro, statický výstup, GitHub Pages.

## Vývoj

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # výstup do dist/
```

Node 22.23+ (CI používá Node 24).

## Kde co upravit

| Co | Soubor |
|---|---|
| Telefon, e-mail, sídlo, IČO, klíč formuláře | `src/data/web.ts` |
| Texty sekcí (služby, kalendář, postup, o mně, dotazy, ke stažení) | `src/data/obsah.ts` |
| PDF ke stažení | `public/` |
| Ochrana osobních údajů | `src/pages/ochrana-osobnich-udaju.astro` |
| Vzhled | `src/styles/global.css` |

Písma (Inter, Source Serif 4) jsou z balíčků `@fontsource-variable/*` a hostují se spolu s webem – nic se nenačítá z Google Fonts.

## Nasazení

Push do `main` spustí `.github/workflows/deploy.yml` a web se nasadí na GitHub Pages
(Settings → Pages → Source: GitHub Actions).

- Bez vlastní domény: `https://jedlicka-design.github.io/<repo>/`
- S doménou: vytvořit `public/CNAME` s obsahem `vodaproobce.cz`, nastavit DNS
  a v Settings → Pages vyplnit Custom domain + Enforce HTTPS. Workflow pak staví web pro kořen domény.

## Formulář

Odesílá přes [Web3Forms](https://web3forms.com). Access key vložit do `web3formsKey` v `src/data/web.ts`.
Dokud je prázdný, formulář místo odeslání ukáže telefon a e-mail. Ochrana proti spamu: honeypot `botcheck`.

## Čeká se na

- [ ] portrét (návod v `src/components/About.astro`)
- [ ] IČO (začátek 2027) → `src/data/web.ts`
- [ ] text Ochrany osobních údajů → pak odebrat `noindex` a filtr v `astro.config.mjs`
- [ ] Web3Forms access key
- [ ] DNS + doména, přesměrování kanalizacebezstarosti.cz
- [ ] Google Search Console
