# Luminex React App

Modern React galerie s integrací Sanity CMS

## Funkce

- **React 18 + TypeScript**: Moderní stack, typová bezpečnost
- **styled-components**: Vlastní stylování komponent
- **Sanity.io CMS**: Dynamické načítání obrázků, popisků a tagů
- **Galerie & Modal**: Responzivní galerie s modálním carousel zobrazením obrázků a popisků
- **Skeleton Loading**: Plynulé načítání obrázků s efektem skeletonu
- **Tagy**: Každý obrázek může mít více tagů
- **Kontaktní formulář**: Odesílání e-mailu přes mailto, validace polí
- **SocialRow**: Odkazy na sociální sítě (Facebook, X, Instagram, Email)

## Struktura projektu

- `src/components/Gallery/` – Galerie obrázků, skeleton, tagy
- `src/components/ModalCarousel/` – Modal s carouselem a popiskem obrázku
- `src/components/Contact/` – Kontaktní formulář a SocialRow
- `src/components/SocialRow/` – Ikony a odkazy na sítě
- `src/components/Navbar/`, `Footer/`, `Title/` – Navigace, patička, titulek
- `src/sanityClient.ts` – Konfigurace Sanity klienta
- `.env.local` – Citlivé údaje (ID projektu, token)

## Nastavení Sanity

1. Vytvořte soubor `.env.local` v rootu projektu:
   ```env
   REACT_APP_SANITY_PROJECT_ID=yourProjectId
   REACT_APP_SANITY_TOKEN=yourSanityToken
   ```
2. Ujistěte se, že v Sanity máte typ dokumentu `imageAsset` s polem `image`, `title`, `description`, `tags`.

## Spuštění projektu

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Vývojové závislosti

- `react-scripts` (CRA)
- `@sanity/client`
- `styled-components`, `@types/styled-components`
- `eslint`, `eslint-config-react-app`, `prettier`
- `typescript`

## Licence

MIT
