---
title: Основы HTML. Часть 1
templateKey: 'article-page'
order: 1
tags: html, css, basics, fundamentals
---

<p align="center">
    <img
        width='140'
        title='HTML'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
    />
</p>

# Основы HTML. Часть 1

## Поток документа

Под "потоком документа" (flow) понимают порядок отображения элементов на странице.

Элементы, расположенные выше по коду, отображаются перед элементами, расположенными ниже. Такая логика делает результат вывода элементов страницы предсказуемым и управляемым.

<p align="center">
    <img
        width='750'
        title='Flow'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1797036/potok.png"
    />
</p>

## Блочные элементы

-   Блочные (block) элементы расположены один под другим

-   Такие элементы имеют ширину, высоту, отступы

-   Блоки занимают всю ширину родительского элемента. Например, если задать им фон, то фон будет виден по всей ширине родительского элемента

-   Так как блочный элемент занимает всю ширину, его внутренние элементы могут быть выровнены горизонтально, т.е. к левому, правому краю, посередине и по всей ширине

-   Блочный элемент может быть внутри другого блочного элемента

-   Свойства строчных элементов не предназначены для блочных элементов, например, вертикальное выравнивание (`vertical-align`)

<p align="center">
    <img
        width='500'
        title='Block elements'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1832415/div_1_.png"
    />
</p>

К блочным элементам относятся:

-   `<div>` - раздел документа
-   `<h1>` - `<h6>` - заголовки
-   `<li>` - элемент списка
-   `<p>` - параграф
-   `<ul>` - маркированный список
-   `<ol>` - нумерованный список
-   `<dl>` - список определений
-   `<table>` - таблица
-   `<tr>` - строка таблицы

## Строчные элементы

-   В строчные (inline) элементы допускается вставлять текст и другие строчные элементы

-   В строчные элементы запрещено вставлять блочные

-   Высота строчных элементов не контролируется свойством `height`

-   Ширина пропорционально ширине контента

-   Строчные элементы расположены друг за другом в строке, могут переноситься на следующую строку при необходимости

-   Строчным элементам можно задать вертикальное выравнивание

<p align="center">
    <img
        width='500'
        title='Inline elements'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1832429/block-inline1_1_.png"
    />
</p>

К строчным элементам относятся:

-   `<a>` - ссылки
-   `<b>`, `<i>`, `<sup>` - работа со шрифтами
-   `<br>` - переход на новую строку
-   `<span>` - универсальный строчный элемент
-   `<th>` - ячейка заголовка в таблице
-   `<td>` - ячейка в таблице

## Строчно-блочные элементы

-   В строчно-блочных (inline-block) элементах возможно размещать текст или блочные элементы

-   Высота элемента рассчитывается автоматически браузером на основе контента

-   Ширина равна ширине контента с учетом отступов и границ

-   Inline-block элементы расположены в одной строке и переносятся на следующую при необходимости

-   Могут быть выровнены по вертикали

-   Допускается установка ширины и высоты

<p align="center">
    <img
        width='500'
        title='Inline-block elements'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1832440/httpatomoreillycomsourceoreillyimages531486_1_.png"
    />
</p>

## Спецсимволы (named character references)

HTML интерпретирует символы `<`, `>`, `&`, `"` и др. как специальные. При необходимости их использования они заменяются на, соответственно, `&lt;`, `&gt;`, `&amp;`, `&quot;`.
