// Texty sekcí webu. Fakta měnit jen po domluvě s Ing. Havířem.

export const sluzby = {
  nadpis: 'Co nabízím',
  uvod:
    'Služby jsou určené obcím, které vlastní kanalizaci a provozují ji samy. Nejčastěji jde o jednotnou kanalizaci zaústěnou bez čištění do vodního toku. Pomohu obci nastavit vše, co zákon od provozovatele vyžaduje, a tyto povinnosti dlouhodobě plnit.',
  bloky: [
    {
      kdy: 'Na začátku',
      nadpis: 'Vstupní audit a pasport kanalizace',
      text: 'Nejdřív zjistím, co obec má a co chybí. Pak kanalizaci zmapuji a vytvořím pasport, který je podkladem pro všechny další dokumenty.',
      body: [
        'vyhodnocení stavu a plán dalších kroků',
        'zaměření šachet a výustí se zákresem do digitální mapy kanalizace',
        'soupis stok, šachet a výustí s fotodokumentací',
        'technická zpráva o stavu kanalizace',
        'založení majetkové evidence, příprava dat pro digitální technickou mapu kraje',
      ],
    },
    {
      kdy: 'Podle potřeby',
      nadpis: 'Povolení a dokumenty',
      text: 'Vyřídím povolení a připravím dokumenty, které obec jako provozovatel potřebuje mít.',
      body: [
        'povolení krajského úřadu k provozování kanalizace',
        'prodloužení, změna nebo nové povolení k vypouštění',
        'jednání s úřadem o dalším postupu v čištění odpadních vod',
        'provozní řád a kanalizační řád',
        'plán financování obnovy kanalizace',
        'zajištění zápisu kanalizace do digitální technické mapy kraje a jeho aktualizace',
      ],
    },
    {
      kdy: 'Každý rok · pevná cena',
      hlavni: true,
      nadpis: 'Roční balíček služeb',
      text: 'Podle smlouvy zajistím v termínu celou každoroční agendu provozovatele kanalizace.',
      body: [
        'výkon funkce odborného zástupce provozovatele',
        'kontroly sítě, výustí a odlehčovacích komor, provozní deník',
        'vybrané údaje majetkové a provozní evidence (VÚME/VÚPE)',
        'hlášení o vypouštění odpadních vod pro vodní bilanci',
        'plánová a vyrovnávací kalkulace stočného',
        'plán kontroly míry znečištění a vyhodnocení rozborů',
        'hlídání platnosti povolení a schválených dokumentů',
        'konzultace k provozu kanalizace a ke všem zpracovaným dokumentům',
        'roční zpráva o provozu pro zastupitelstvo',
      ],
    },
    {
      kdy: 'Podle potřeby',
      nadpis: 'Stočné a poradenství',
      text: 'Poradím a pomohu tam, kde obec potřebuje rozhodnout nebo chce věci nastavit nově.',
      body: [
        'pomoc při zavádění stočného – výpočet ceny, smlouvy s odběrateli, reklamační řád',
        'poradenství k možnostem čištění odpadních vod v obci',
        'jednání s vodoprávním a krajským úřadem',
        'obecné poradenství ve vodním hospodářství',
      ],
    },
  ],
  pruh: {
    text: 'Povinnosti, které se každý rok opakují, zajistím v rámci balíčku za pevnou cenu. Ostatní služby, například poplatkové přiznání k poplatku za vypouštění odpadních vod do vod povrchových, jen tehdy, když je obec potřebuje. Cenovou nabídku připravím na míru.',
    tlacitko: 'Vyžádat nabídku',
  },
};

export const kalendar = {
  nadpis: 'Kalendář povinností',
  uvod:
    'Provozování kanalizace s sebou nese povinnosti, které je potřeba každý rok plnit. Obec dodá podklady. Hlášení a kalkulace zpracuje a odevzdá odborný zástupce.',
  obdobi: [
    {
      kdy: 'Začátek roku',
      nadpis: 'Evidence a hlášení',
      text: 'Hlášení o vypouštění odpadních vod pro vodní bilanci a vybrané údaje majetkové a provozní evidence pro ministerstvo.',
    },
    {
      kdy: 'Jaro',
      nadpis: 'Vyrovnávací kalkulace',
      text: 'Porovnání kalkulace stočného se skutečností za minulý rok a jeho zveřejnění.',
    },
    {
      kdy: 'Konec roku',
      nadpis: 'Plánová kalkulace',
      text: 'Kalkulace stočného na další rok a aktualizace plánu kontroly odpadních vod.',
    },
    {
      kdy: 'Průběžně',
      nadpis: 'Provoz a kontrola',
      text: 'Kontroly sítě a výustí, provozní deník, vyhodnocení rozborů a hlídání platnosti povolení.',
    },
  ],
};

export const postup = {
  nadpis: 'Postup spolupráce',
  kroky: [
    { nadpis: 'Úvodní schůzka', zvyrazneni: 'Nezávazná a zdarma.', text: 'Přijedu za vámi a probereme, co obec potřebuje.' },
    { nadpis: 'Vstupní audit', text: 'Vyhodnotím stav a navrhnu další kroky.', zdarma: 'Při uzavření smlouvy zdarma.' },
    { nadpis: 'Pasport', text: 'Zmapuji síť a připravím podklad pro všechny další dokumenty.' },
    { nadpis: 'Roční balíček služeb', text: 'Převezmu nasmlouvanou agendu a zajistím ji v termínu.' },
  ],
};

// ==text== = zvýrazněná pasáž (limetkový podklad), na webu se značky nezobrazí.
export const oMne = {
  nadpis: 'Váš odborný zástupce',
  odstavce: [
    'Jmenuji se Jiří Havíř a ==přes dvacet let== se věnuji kanalizacím a čistírnám odpadních vod. Mám zkušenosti s jejich ==provozem, opravami i povinnostmi==, které s nimi souvisejí. Vystudoval jsem vodní hospodářství obcí na VUT v Brně.',
    'Sám jsem zastupitelem malé obce, takže znám i druhou stranu. Starosta řeší spoustu věcí a kanalizace je jen jednou z nich. Mým cílem je, aby její ==provozování splňovalo všechny požadavky zákona a přitom vám zabíralo co nejméně času a energie==. Pracuji osobně, jsem k zastižení na telefonu a do obce rád přijedu.',
  ],
};

export const dotazy = {
  nadpis: 'Časté dotazy',
  polozky: [
    {
      otazka: 'Musí obec svou kanalizaci provozovat?',
      odpoved:
        'Ano. Vlastník kanalizace pro veřejnou potřebu musí zajistit její provozování. Buď ji provozuje sám s povolením krajského úřadu a s odborným zástupcem, nebo provozování smluvně svěří provozovateli, který povolení má. Malou kanalizaci obce obvykle provozují samy.',
    },
    {
      otazka: 'Musí mít obec bez čistírny odborného zástupce?',
      odpoved:
        'Ano. Pokud obec kanalizaci provozuje sama, musí mít zajištěnou odbornou kvalifikaci. Splňuje ji buď vlastní zaměstnanec, nebo smluvní odborný zástupce.',
    },
    {
      otazka: 'Zůstává obec provozovatelem?',
      odpoved:
        'Ano. Obec zůstává vlastníkem i provozovatelem. Odborný zástupce za ni zajišťuje odborný dohled nad provozem, evidenci, hlášení a komunikaci s úřady.',
    },
    {
      otazka: 'Komu patří dokumentace?',
      odpoved:
        'Všechno, co pro obec vytvořím, patří obci a má k tomu průběžný přístup. Jde například o pasport, evidenci, provozní deník a hlášení.',
    },
    {
      otazka: 'Úřad nám prodlužuje povolení k vypouštění jen na krátkou dobu a tlačí nás k čištění. Co s tím?',
      odpoved:
        'Pomohu s prodloužením povolení. S úřadem domluvím realistický plán dalšího postupu v čištění odpadních vod, který bude odpovídat možnostem obce.',
    },
    {
      otazka: 'Musí obec vybírat stočné?',
      odpoved:
        'Nemusí. Kalkulaci stočného ale obec musí zpracovat a odevzdat i tehdy, když ho nevybírá. Stočné navíc pomáhá tvořit rezervu na obnovu kanalizace, kterou zákon vyžaduje.',
    },
    {
      otazka: 'Co zůstává na obci?',
      odpoved:
        'Obec zajišťuje běžnou údržbu a opravy kanalizace. Rozbory objedná u akreditované laboratoře podle plánu kontroly, který připravím. Včas mi dodá podklady a dá vědět o úniku závadných látek, nových přípojkách nebo kontrole z úřadu.',
    },
    {
      otazka: 'Kolik služby stojí?',
      odpoved:
        'Cenu tvoří roční balíček za pevnou částku a služby podle potřeby. Nabídku připravím na míru po úvodní schůzce podle stavu kanalizace a dokumentace obce.',
    },
  ],
};

export const keStazeni = {
  nadpis: 'Dokumenty ke stažení',
  soubory: [
    {
      soubor: 'Letak_sluzby_web.pdf',
      ikona: 'dokument',
      nazev: 'Přehled služeb',
      popis: 'Co za obec zajistím a jak začínáme · PDF, 1 strana',
    },
    {
      soubor: 'Kalendar_povinnosti_kanalizace.pdf',
      ikona: 'kalendar',
      nazev: 'Kalendář povinností',
      popis: 'Co obec během roku čeká, měsíc po měsíci · PDF, 1 strana',
    },
  ],
};
