# Cum adaugi un articol nou pe desprinderi.ro

Sistemul funcționează identic cu cel de pe edivlaston.ro: editezi **un singur fișier** (`articole.json`), dai commit pe GitHub, iar Netlify publică automat în 1-2 minute.

---

## Structura fișierelor

```
desprinderi.ro/
├── articole.json      ← EDITEZI DOAR ACESTA ca să adaugi articole
├── blog.html          ← pagina cu lista de articole (nu o atingi)
├── articol.html       ← pagina de citire (nu o atingi)
├── imagini/           ← (opțional) încarci aici imaginile articolelor
└── ...restul site-ului
```

---

## Pasul 1 — Scrii articolul

Scrie-l normal, în Google Docs sau direct. Recomandări pentru SEO:

- **1000-1400 cuvinte** — lungimea ideală pentru Google
- Paragrafe scurte, separate printr-un rând gol
- **Subtitlurile** se scriu ca linii scurte, fără punct la final (ex: „Ce faci dacă te-ai recunoscut") — sistemul le transformă automat în titluri de secțiune
- Un titlu care conține întrebarea căutată pe Google (ex: „Cele 5 semne că bei mai mult decât crezi")

---

## Pasul 2 — (Opțional) Încarci imaginea

1. GitHub → folderul `imagini/` → **Add file → Upload files**
2. Format JPG sau WebP, minim 1200x675px
3. Nume clar: `alcool-semne.jpg`
4. **Commit changes**

Dacă nu ai imagine, lași câmpul gol — apare un placeholder elegant „de(s)".

---

## Pasul 3 — Editezi `articole.json`

Deschide `articole.json` pe GitHub → pictograma **creion** (Edit) → adaugă noul articol **la începutul listei**, imediat după prima `[`.

### Structura unui articol

```json
{
  "id": "002",
  "titlu": "Titlul articolului — de preferat o întrebare căutată pe Google",
  "slug": "titlu-scurt-fara-diacritice",
  "categorie": "Alcool",
  "data": "2026-09-01",
  "autor": "Edi Vlaston",
  "timp_citire": "6 min",
  "imagine": "imagini/alcool-semne.jpg",
  "rezumat": "1-2 propoziții care apar pe card și ca lead. Trebuie să atragă.",
  "meta_descriere": "Descrierea care apare în Google. Max 155 caractere, cu cuvântul-cheie.",
  "continut": "Primul paragraf.\n\nAl doilea paragraf.\n\nUn subtitlu scurt\n\nParagraf sub subtitlu."
}
```

### Câmpurile explicate

| Câmp | Ce e | Contează pentru |
|------|------|-----------------|
| `id` | Număr unic (002, 003...) | Ordine internă |
| `titlu` | Titlul afișat | SEO — pune întrebarea căutată |
| `slug` | URL-ul articolului (fără diacritice, cu liniuțe) | SEO — devine `articol.html?a=slug` |
| `categorie` | Grupa articolului | Filtrele de pe pagina blog |
| `data` | `AAAA-LL-ZZ` | Sortare (cel mai nou sus) |
| `timp_citire` | ex: "6 min" | Afișat sub titlu |
| `imagine` | Calea către poză, sau gol `""` | Cardul articolului |
| `rezumat` | 1-2 propoziții | Card + lead + meta |
| `meta_descriere` | Textul din Google | SEO |
| `continut` | Articolul întreg, paragrafe separate cu `\n\n` | Corpul articolului |

### Categorii disponibile

- `Alcool`
- `Adicții comportamentale`
- `Codependență & Familie`
- `Recuperare`
- `Interviu motivațional`

(Poți inventa categorii noi — apar automat ca filtre pe pagina de blog.)

---

## Pasul 4 — Salvezi

1. Verifică JSON-ul pe **https://jsonlint.com** (copiază tot → Validate)
2. Dacă e verde → **Commit changes** pe GitHub
3. Netlify publică automat în 1-2 minute
4. Articolul apare pe `desprinderi.ro/blog.html`

---

## Greșeli frecvente

❌ **Ghilimele duble în text** — dacă textul conține `"`, înlocuiește cu `'` sau cu „ghilimele românești"

❌ **Lipsă virgulă între articole** — fiecare articol (în afară de ultimul) trebuie urmat de `,`

❌ **Data greșită** — mereu `AAAA-LL-ZZ` (ex: `2026-09-01`)

❌ **Slug cu diacritice sau spații** — folosește doar litere mici, cifre și liniuțe: `cum-ma-las-de-alcool`

---

## Idei de articole (din planul de conținut)

Ordinea recomandată pentru primele luni:

1. ✅ Cele 5 semne că bei mai mult decât crezi *(Alcool — publicat)*
2. Ce e codependența și cum o recunoști *(Codependență & Familie)*
3. Ce faci când cineva drag nu vrea ajutor *(Codependență & Familie)*
4. Interviul motivațional — de ce funcționează *(Interviu motivațional)*
5. Cum funcționează dependența de ecrane *(Adicții comportamentale)*
6. Recidiva nu e un eșec — e o etapă *(Recuperare)*

Fiecare răspunde la o întrebare pe care oamenii o caută pe Google → trafic organic.
