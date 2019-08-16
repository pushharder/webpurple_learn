---
title: Основы CSS. Часть 2
templateKey: 'article-page'
order: 2
tags: css, basics, fundamentals
---

<p align="center">
    <img
        width='100'
        title='CSS'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1755306/css3.svg"
    />
</p>

# Основы CSS. Часть 2

## Z-index

При позиционировании элементов они могут перекрывать друг друга. Свойство `z-index` определяет, какой элемент должен быть расположен спереди, а какой - сзади.

В некоторых случаях можно использовать свойство прозрачности `opacity`, чтобы добиться тех же результатов.

[example](http://jsbin.com/xupelekafe/edit?html,css,output)

## Overflow

Свойство `overflow` отвечает за отображение контента, выходящего за пределы своего контейнера.

[example](http://jsbin.com/fekume/edit?html,css,output)

## Скрытие элемента

Для скрытия элемента можно использовать разные методы.

-   `display: none;`

-   `visibility: hidden;`

-   и др.

[example](http://jsbin.com/saxupaf/edit?html,css,output)

Важно заметить, что в случае `display: none;` элемент выбивается из потока документа.

## Clip-path

[Это свойство](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) определяет область элемента, которая должна быть показана. Вырезаемая область определяется или URL, относящимся к SVG, или формой, например, [circle()](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle).

[Конструктор](https://bennettfeely.com/clippy/).

## Mask

Альтернативный способ вырезать область - [свойство `mask`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask). Оно также [не поддерживается в IE, Edge и Opera](https://caniuse.com/#search=mask).

[example](http://jsbin.com/kigepuzezo/edit?html,css,output)

## Псевдоклассы, псевдоэлементы

### Псевдоклассы

Псевдоклассы определяют динамическое состояние элементов, которое изменяется с помощью действий пользователя, а также положение в дереве документа.

Синтаксис применения псевдоклассов следующий.

```css
Селектор:Псевдокласс { Описание правил стиля }
```

Допускается применять псевдоклассы к именам идентификаторов или классов _(A.menu:hover {color: green})_, а также к контекстным селекторам _(.menu A:hover {background: #fc0})_. Если псевдокласс указывается без селектора впереди _(:hover)_, то он будет применяться ко всем элементам документа.

Пример:

```css
a:link {
    color: #036; /* Цвет непосещенных ссылок */
}
a:visited {
    color: #606; /* Цвет посещенных ссылок */
}
a:hover {
    color: #f00; /* Цвет ссылок при наведении на них курсора мыши */
}
a:active {
    color: #ff0; /* Цвет активных ссылок */
}
```

### Псевдоэлементы

Псевдоэлементы позволяют задать стиль элементов не определённых в дереве элементов документа, а также генерировать содержимое, которого нет в исходном коде текста. Синтаксис использования псевдоэлементов следующий.

```css
Селектор:Псевдоэлемент { Описание правил стиля }
```

Каждый псевдоэлемент может применяться только к одному селектору, если требуется установить сразу несколько псевдоэлементов для одного селектора, правила стиля должны добавляться к ним по отдельности, как показано ниже.

```css
.foo:first-letter {
    color: red;
}
.foo:first-line {
    font-style: italic;
}
```

Псевдоэлементы не могут применяться к внутренним стилям, только к таблице связанных или глобальных стилей.

## @-rules

@-правило - это инструкция CSS. Каждая инструкция начинается с `@` и содержит одно из ключевых слов.

### @font-face

Данное правило позволяет загружать на веб-страницу специальные шрифты. Правило указывает браузеру скачать шрифт из указанного источника и затем отобразить его, как определено в CSS.

```css
@font-face {
    font-family: 'My Web Font';
    src: url('https://fonts.gstatic.com/s/gloriahallelujah/v8/CA1k7SlXcY5kvI81M_R28cNDay8z-hHR7F16xrcXsJw.woff2');
}

body {
    font-family: 'My Web Font', 'Open Sans', cursive;
}
```

### @import

Это правило обычно указывается в начале файла и указывает на включение внешнего CSS-файла. При этом содержимое внешнего файла вставляется на строку, где указано правило.

[example](http://jsbin.com/rakevu/edit?html,css,output)

### @media

Это правило содержит условия для определения стилей для разных экранов. Условия могут содержать размеры экранов, что очень полезно для адаптивной верстки.

```css
@media not|only mediatype and (media feature) {
    CSS-Code;
}
```

Медиатипы:

<table>
    <tbody>
    <tr>
        <th style="width: 25%;">Значение</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>all</td>
        <td>Устройства любого медиа-типа</td>
    </tr>
    <tr>
        <td>print</td>
        <td>Принтеры</td>
    </tr>
    <tr>
        <td>screen</td>
        <td>Экраны компьютеров, планшетов, смартфоном и т.д.</td>
    </tr>
    <tr>
        <td>speech</td>
        <td>Скринридеры</td>
    </tr>
    </tbody>
</table>

Медиа функции:

<table>
    <tbody>
    <tr>
        <th style="width: 277px;">Критерий</th>
        <th>Значение критерия</th>
    </tr>
    <tr>
        <td style="width: 277px;">max-height</td>
        <td>Максимальная высота показываемой области, например, окна браузера</td>
    </tr>
    <tr>
        <td style="width: 277px;">max-width</td>
        <td>Максимальная ширина показываемой области, например, окна браузера</td>
    </tr>
    <tr>
        <td style="width: 277px;">min-height</td>
        <td>Минимальная высота показываемой области, например, окна браузера</td>
    </tr>
    <tr>
        <td style="width: 277px;">min-width</td>
        <td>Минимальная ширина показываемой области, например, окна браузера</td>
    </tr>
    <tr>
        <td style="width: 277px;">orientation</td>
        <td>Ориентация (портретная или ландшафтная)</td>
    </tr>
    </tbody>
</table>

[Подробнее о медиа-запросах](http://htmlbook.ru/css/value/media).

[Адаптивный дизайн](https://webref.ru/layout/advanced-html-css/responsive-web-design).

[example](http://jsbin.com/vetoce/edit?html,css,output)
