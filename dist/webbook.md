# I. HTML

HTML (Hypertext Markup Language) jest językiem znaczników. Służy do przedstawienia struktury informacji (tekst, multimedia, audio). Używany przeważnie na stronach internetowych razem z css'em i js'em.

HTML to text. Jego rozszerzenie to .html (ewentualnie .htm)

Historię HTML'a można znaleźć w internecie, w nauce jest ona zbędna, toteż ją pominąłem.

## 1. Uruchamianie html

Aby uruchomić `kod` html wystarczy otworzyć plik (.html) w przeglądarce.

### `index.html`

```html
Witaj świecie!
```

Zapisz plik jako `index.html` (lub inaczej byle kończył się na `.html`) i otwórz w przeglądarce.

Powinieneś otrzymać:

<div>Witaj świecie!<div>

## 2. Podstawy HTML

### Tagi

Html składa się z tagów. Tagi to kontenery lub elementy. Każdy tag zaczyna się od `<nazwaTagu>` a kończy na `</nazwaTagu>`, wszyskto pomiędzy tym jest w tym kontenerze. Ewentualnie niekture tagi (jak `img`) nie mogą mieć nic w środku, je zaznacza się jako `<nazwaTagu />`.

![DOM](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.OwB_s5otLj2bU-GorPjU8wHaFP%3Fr%3D0%26pid%3DApi&f=1&ipt=27a074775607d8adcc3d7ffa55564bcb337f4fd88f4c389412728c0525b72e3f)

### DOM (Document object model)

Każda strona ma strukrurę, dzięki której jest zachowany pożądek.

Oto najprostrza struktura DOM

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Moja Strona</title>
  </head>
  <body>
    Witaj świecie!
  </body>
</html>
```

Wyjaśnienie

`<!DOCTYPE html>` jest zaznaczeniem, że używamy html w tym pliku.

Wszystko w tagu `<html>` to elementy strony.

Tag `<head>` zawiera informacje na temat strony których nie widać na stronie, zaś `<body>` odpowiada za widoczny kontent na stronie.

Tag `<title>` służy do nadania stronie tytułu, umieszcza się go jedynie w tagu `head`.

W tagu `head` można też umieścić tag `meta`, reprezentujący meta dane, służy to wyłącznie podczas udostępniania tej strony lub dla wyszukiwarki w indeksowaniu stron (jeśli jest hostowana w internecie).

### 4 tagi

Tag `div` jest najczęściej używanym tagiem, służy do dzielenia kontentu, jest typowym kontenerem

```html
<body>
  <div>
    Kontenery
    <div>Kontener 1</div>
    <div>Kontener 2</div>
  </div>
</body>
```

Istnieją też tagi `header` `main` `footer` które odpowiadają za organizację, wszystkie działają tak jak `div`, każdy w tych trzech powinno się użyć maksymalnie raz.

```html
<body>
  <header>Nagłówek</header>
  <main>Główny kontent strony</main>
  <footer>Końcówka</footer>
</body>
```

### Własności

Różnym takom można przypisać różne własności. `style` `class` i `id` można przypisać do każdego elementu na stronie, jednak większość własności jest specjalne dla danego tagu.

```html
<body id="body">
  Mam id `body`
  <div class="klasa">Mam klasę `klasa`</div>
</body>
```

Na przykład `<meta />` ma atrybuty (własności) `name` i `content` (poczytaj więcej w internecie).

```html
<head>
  <!-- Optymalny stosunek wysokości do szerokości -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Opis strony -->
  <meta name="description" content="Uczę się programowania!" />
</head>
```

### `<img />` (obrazek)

Przedstawia jakiś obraz ma atrybury `src` (ścieszka lokalna lub link do obrazka) `alt` (opis gdyby obraz się nie `width` (szerokość) `height` (długość)wczytał)

```html
<img
  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.OwB_s5otLj2bU-GorPjU8wHaFP%3Fr%3D0%26pid%3DApi&f=1&ipt=27a074775607d8adcc3d7ffa55564bcb337f4fd88f4c389412728c0525b72e3f"
  alt="DOM Wyjaśnienie"
/>
```

## 3. Tagi HTML

Jak wiemy html składa się z tagów które można w sobie zagnieżdżać, przyjrzyjmy się innym tagom.

### `<section>` (sekcja)

Służy do zaznaczenia sekcji, działa tak samo jak `div`.

### `<p>` (paragraf)

Służy do umieszczania tekstu. Przeglądarki automatycznie dodają przeźroczystą linię przed.

```html
<body>
  <p>Langusty</p>
  <p>Langusta 1</p>
  <p>Langusta 2</p>
</body>
```

### `<b>` (pogrubiony tekst)

Żadko spotykany, pogrubia tekst, to samo można otrzymać za pomocą css.

```html
<b>Jestem pogrubiony</b>
```

### `<strong>` (ważny tekst)

Zaznacza, że ten tekst jest ważny, rzadko spotykany.

### `<del>` (tekst przekreślony)

```html
<del>Jestem usunięty</del>
```

### `<h1>` `<h2>` ... `<h6>` (nagłówki)

Przeglądarka dodwkiaje pogrubienie, poszczegulne nagłówki różnią zasię wielkością (co można zmienić za pomocą css)

```html
<h1>Jestem duży</h1>
<h3>Jestem średni</h3>
<h5>Jestem mały</h5>
```

### `<ul>` (lista punktowana) `<ol>` (lista numerowana) `<li>` (element listy)

```html
<ul>
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element 3</li>
</ul>
<ol>
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element 3</li>
</ol>
```

### `<style>`

Wszystko w tym tagu to kod css.

### `<style>`

Wszystko w tym tagu to kod js.

```html
<style>
  /* CSS code ... */
</style>
<script>
  /* JS code ... */
</script>
```

### `<table>` (tabela) `<tr>` (wiersz tabeli) `<th>` (nagłówek tabeli) `<td>` (dane tabeli)

```html
<table>
  <tr>
    <td>Lp</td>
    <td>Imie</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Leon</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Stefan</td>
  </tr>
</table>
```

### `<!-- -->` (komentarz)

Wszystko pomiędzy `<!--` a `-->` jest zakomentowane, nie widoczne na stronie.

```html
<!-- Warzywa -->
<div>
  Ziemniak
  <!-- Pomidor -->
  Czosnek
</div>
```

### `<canvas>` (płutno)

Służy do rysowania za pomocą js. Ma atrybuty `width` `height`, jednak żadko się ich używa, lepiej edytować rozmiary płutna za pomocą js (ew. css)

```html
<canvas width="300" height="200"></canvas>
```

### `<button>` (przycisk)

Bardzo ważny, pozwala za pomocą js (a nawet z html) wywoływać funkcje js (czyli działać interaktywnie). Argumenty: `onClick`. (Hipotetycznie każdy element html może nasłuchiwać na kliknięcie w niego myszki, ale na raziee nie musisz się przejmować).

```html
<button onClick="alert(`kliknąłeś przycisk`)">Kliknij mnie!</button>
```

### `<label>` (etykieta)

Używana przeważnie do opisu imput'a.

### `<input />` (wejście)

Bardzo ważny, pozwala zaciągać dane od użytkownika. Niektóre atrybuty: `type` (typ).

```html
<input type="button" />
<div>
  <label for="imie">Twoje imie</label>
  <input type="text" />
</div>
<input type="file" />
<input type="checkbox" />
<!-- ... -->
```

### `<a />` (link)

Służy do przemieszczania się pomiędzy stronami (profesjonalnie się go nie używa, zamiast niego np. NextJS proponuje komponent `Link`, który działa bardzie optymalnie, na razie nie ma się co przejmować)

```html
<a href="https://github.com/kubashh">Odwiedź Kubę na GitHub'ie!</a>
```

### `<article>` (artykół)

Działa podobnie jak `div`, jedynie łatwiej go udostępnić dalej oraz zaznacza w kodzie, że to artykół lub coś pokrewnego.

### `<br>` (przełamanie)

Daje miejsce pomiędzy elementami, przełamanie lini. Tag sam się zamyka.

```html
<p>
  Be not afraid of greatness.<br />
  Some are born great,<br />
  some achieve greatness,<br />
  and others have greatness thrust upon them.
</p>
<p>-William Shakespeare</p>

<p>
  Be not afraid of greatness. Some are born great, some achieve greatness, and
  others have greatness thrust upon them.
</p>
<p>-William Shakespeare</p>
```

### `<nav>`

Pomaga w nawigacji po stronie.

### `<form>` (formularz)

Ułatwia tworzenie formularza.

```html
<form></form>
```

## 4. Prosty projekt w HTML

Najlepiej uczy się w praktyce, pora coś zrobić! Zrobimy prostą, statychną stronę o autach audi

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Audi" />
    <title>Audi</title>
  </head>
  <body>
    <header>
      <h1>Krótka historia aut marki Audi</h1>
    </header>
    <main>
      <div>
        <h4>Auta marki audi są niesamowite, zobacz na kilka modeli poniżej.</h4>
      </div>

      <div>
        <h2>Audi 80. Rok 1986</h2>
        <p>
          W 1986 roku, gdy Audi 80 na bazie Passata zaczynało nabierać wizerunku
          "samochodu dziadka", wprowadzono model 89. Ta zupełnie nowa inwestycja
          sprzedawała się bardzo dobrze. Jednak jego nowoczesny i dynamiczny
          wygląd zewnętrzny przeczył niskim osiągom podstawowego silnika, a jego
          podstawowy pakiet był dość spartański (nawet lusterko po stronie
          pasażera było opcją). W 1987 roku Audi zaprezentowało nowe, bardzo
          eleganckie Audi 90, które posiadało znacznie lepszy zestaw wyposażenia
          standardowego. Na początku lat dziewięćdziesiątych sprzedaż Audi serii
          80 zaczęła spadać, zaczęły pojawiać się też podstawowe problemy
          konstrukcyjne.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Audi80-1992.JPG/960px-Audi80-1992.JPG"
          alt="Audi 80"
        />
      </div>
      <div>
        <h2>Audi 90. Rok 1987</h2>
        <p>
          W 1987 roku Audi zaprezentowało nowe, bardzo eleganckie Audi 90, które
          posiadało znacznie lepszy zestaw wyposażenia standardowego.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/16/Audi_90q20v.jpg"
          alt="Audi 90"
        />
      </div>
      <!-- ... więcej aut -->
    </main>
    <footer>Bibliografia: www.wikipedia.org</footer>
  </body>
</html>
```

# I. CSS

Poznałeś już html'a, jest nie najładniejszy. Pora by poznać css (Cascading Style Sheets) by strona wyglądała lepiej.
