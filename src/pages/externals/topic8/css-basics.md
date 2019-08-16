---
title: CSS. Начальный уровень
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

# CSS. Начальный уровень

CSS (Cascading Style Sheets — каскадные таблицы стилей) используются для описания внешнего вида документа, созданного с помощью языка разметки. Чаще всего используются для создания визуальныхстилей веб-страниц и пользовательских интерфейсов, написанных с помощью HTML и XHTML.

Язык CSS значительно отличается от языка HTML. Однако, как и HTML, он довольно прост для понимания.

[Способы добавления стилей на страницу](http://htmlbook.ru/samcss/sposoby-dobavleniya-stiley-na-stranitsu)

## Синтаксис

CSS имеет очень простой синтаксис. Таблицы стилей разделены на правила. Каждое правило состоит из двух частей: селектора и одного лии нескольких свойств. Например:

<p align="center">
    <img
        width='500'
        title='Syntax'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1770796/selector_1_.gif"
    />
</p>

## Цвета

Все цвета получаются сочетанием красного, зеленого и синего в определенных пропорциях. Каждому цвету задается значение в диапазоне от 0 до 255.

### HEX

Часто для определения цвета используется HEX-нотация. В этом случае цвет определяют 3 двузначных шестнадцатеричных числа, стоящие после символа `#`, т.е. каждый цвет определяется выражением `#RRGGBB`, где `RR` (красный), `GG` (зеленый) и `BB` (синий) - числа, определяющие долю этих цветов в финальном цвете.

### RGB

Наряду с HEX используются RGB-значения. Они определяются выражением `rgb(red, green, blue)`, где `red`, `green`, `blue` - десятичные числа от 0 до 255 или процентное значение от `0%` до `100%`.

Пример:

<table>
    <tbody>
    <tr>
        <th style="width:50%">Color</th>
        <th style="width:20%">Color HEX</th>
        <th>Color RGB</th>
    </tr>
    <tr>
        <td style="background-color:#000000">&nbsp;</td>
        <td>#000000</td>
        <td>rgb(0,0,0)</td>
    </tr>
    <tr>
        <td style="background-color:#FF0000">&nbsp;</td>
        <td>#FF0000</td>
        <td>rgb(255,0,0)</td>
    </tr>
    <tr>
        <td style="background-color:#00FF00"></td>
        <td>#00FF00</td>
        <td>rgb(0,255,0)</td>
    </tr>
    <tr>
        <td style="background-color:#0000FF">&nbsp;</td>
        <td>#0000FF</td>
        <td>rgb(0,0,255)</td>
    </tr>
    <tr>
        <td style="background-color:#FFFF00">&nbsp;</td>
        <td>#FFFF00</td>
        <td>rgb(255,255,0)</td>
    </tr>
    <tr>
        <td style="background-color:#00FFFF">&nbsp;</td>
        <td>#00FFFF</td>
        <td>rgb(0,255,255)</td>
    </tr>
    <tr>
        <td style="background-color:#FF00FF">&nbsp;</td>
        <td>#FF00FF</td>
        <td>rgb(255,0,255)</td>
    </tr>
    <tr>
        <td style="background-color:#C0C0C0">&nbsp;</td>
        <td>#C0C0C0</td>
        <td>rgb(192,192,192)</td>
    </tr>
    <tr>
        <td style="background-color:#FFFFFF">&nbsp;</td>
        <td>#FFFFFF</td>
        <td>rgb(255,255,255)</td>
    </tr>
    </tbody>
</table>

### RGBA

Поддержка RGBA-цветов, в отличие от вышеописанных, несколько меньше. Они поддерживаются в браузерах IE9+, Firefox 3+, Chrome, Safari, и Opera 10+.

RGBA-цвета определяются выражением `rgba(red, green, blue, alpha)`, т.е. добавляется альфа-канал, определяющий прозрачность элемента. Значения альфа-параметра лежат в диапазоне от 0.0 (полностью прозрачный) до 1.0 (полностью видимый).

Например, определим цвет фона:

```css
#p1 {
    background-color: rgba(255, 0, 0, 0.5); /* red */
}
```

### Наименования цветов

Кроме вышеописанных способов задания цветов, можно воспользоваться непосредственно названием цвета, например:

```css
#p1 {
    background-color: red;
}
```

### HSL и HSLA

Также существуют форматы HSL и HSLA. Название формата HSL образовано от сочетания первых букв Hue (оттенок), Saturate (насыщенность) и Lightness (светлота). Оттенок это значение цвета на цветовом круге и задаётся в градусах. 0° соответствует красному цвету, 120° — зелёному, а 240° — синему. Значение оттенка может изменяться от 0 до 359. Насыщенностью называется интенсивность цвета, измеряется в процентах от 0% до 100%. Значение 0% обозначает отсутствие цвета и оттенок серого, 100% максимальное значение насыщенности. Светлота задает, насколько цвет яркий и указывается в процентах от 0% до 100%. Малые значения делают цвет темнее, а высокие светлее, крайние значения 0% и 100% соответствуют чёрному и белому цвету.

Формат HSLA, по аналогии с RGBA, добавляет альфа-канал.

[Подробнее о цветах в CSS](http://htmlbook.ru/css/value/color).

## Фон

Задание фона проиллюстрировано на следующих примерах:

[example](http://jsbin.com/fumifu/edit?html,css,output)

[example](http://jsbin.com/nosuwa/edit?html,css,output)

## Единицы измерения

В CSS многие свойства принимают единицы измерения. При этом допускаются отрицательные значения.

Единицы измерения делятся на абсолютные и относительные.

[Подробнее о единицах измерения](https://learn.javascript.ru/css-units).

## Размеры элементов

CSS превосходно подходит для задания размеров элементам. В нем существует 4 свойства для этой цели.

Высота `height` и ширина `width` делают именно то, что подразумевает их названия, т.е. определяют высоту и ширину контента элемента.

`margin` определяет размер внешних отступов элемента, расположенных снаружи границы элемента.

`padding` определяет размеры внутренних отступов.

Пример:

[example](http://jsbin.com/diroyi/edit?html,css,output)

## CSS box model

Все HTML-элементы могут рассматриваться как боксы (boxes).

Термин "box model" используется, когда речь заходит о дизайне и верстке.

CSS-box представляет из себя контейнер, который "оборачивает" HTML-элемент и состоит из марджинов, границ, паддингов и, собственно, контента.

<p align="center">
    <img
        width='400'
        title='CSS'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1872264/box-model_1_.gif"
    />
</p>

Box model позволяет добавлять границы элементам и задавать отступы между ними.

### Ширина и высота

Ширина и высота, как и говорилось ранее, определяют ширину и высоту зоны контента. Для вычисления полных размеров элемента к ним надо добавить паддинги, границы и марджины. Например:

```css
div {
    width: 320px;
    padding: 10px;
    border: 5px solid gray;
    margin: 0;
}
```

Ширина элемента = width + левый padding + правый padding + левая border + правая border + левый margin + правый margin = 350px

Высота элемента = height + верхний padding + нижний padding + верхняя border + нижняя border + верхний margin + нижний margin

### "Схлопывание" марджинов

При соприкасании вертикальных марджинов двух элементов будет применен только больший марджин, в то время как меньший внешний отступ будет проигнорирован.

[example](http://jsbin.com/qazabut/edit?html,css,output)

### Размеры

Есть возможность изменить расчет общих размеров элемента. Для этого используется свойства [`box-sizing`](https://www.w3schools.com/css/css3_box-sizing.asp).

[example](http://jsbin.com/rezugo/edit?html,css,output)

### Margin

Марджины определяют внешние отступы элементов

[example](http://jsbin.com/hagici/edit?html,css,output)

### Padding

Паддинги определяют внутренние отступы элементов, т.е. пространство от границ элементов до контента.

[example](http://jsbin.com/qusuxi/edit?html,css,output)

### Border

CSS позволяет стилизовать стиль, размер и цвет границ элемента.

Также стоит упомянуть о свойстве `border-radius`, с помощью которого можно изменять углы элемента, например, закруглять их.

## Outline

Outline - это линия вокруг элемента (за границами), выделяющая элемент.

[example](http://jsbin.com/ferani/edit?html,css,output)

## Font

Свойства шрифта определяют семейство шрифта, размер, стиль текста.

В CSS есть два типа названий шрифтов: определяющие группы шрифтов со схожим внешним видом ("Serif", "Sans-serif", "MonoSpace") и определяющие конкретное семейство шрифтов ("Times New Roman", "Arial").

Разница между Serif (с засечками) и Sans-serif (без засечек) показана на рисунке ниже:

<p align="center">
    <img
        width='400'
        title='Fonts'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1779836/serif_1_.gif"
    />
</p>

Ниже показана принадлежность семейств шрифтов к определенным группам:

<table>
    <tbody>
    <tr>
        <th style="width:20%">Generic family</th>
        <th style="width:30%">Font family</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Serif</td>
        <td>
            <span style="font-size:150%;font-family:Times New Roman">Times New Roman</span><br>
            <span style="font-size:150%;font-family:Georgia">Georgia</span>
        </td>
        <td>Шрифты с засечками имеют маленькие линии на некоторых символах</td>
    </tr>
    <tr>
        <td>Sans-serif</td>
        <td>
            <span style="font-size:150%;font-family:Arial">Arial</span><br>
            <span style="font-size:150%;font-family:Verdana">Verdana</span>
        </td>
        <td>"Sans" означает "без" - эти шрифты не имеют засечек</td>
    </tr>
    <tr>
        <td>Monospace</td>
        <td>
            <span style="font-size:150%;font-family:Courier New">Courier New</span><br>
            <span style="font-size:150%;font-family:Lucida Console">Lucida Console</span>
        </td>
        <td>Все символы этой группы имеют одинаковую ширину</td>
    </tr>
    </tbody>
</table>

Для изменения шрифта используются свойства `font-family`, `font-style`, `font-size`, `font-variant`, `font-weight`. [Подробнее](https://html5book.ru/css-shrifty).

## Text

CSS позволяет изменять параметры текста, например междустрочное расстояние, расстояние между словами и символами и т.д.. См. подробное описание свойств [тут](https://html5book.ru/css-text/), [тут](https://html5book.ru/css-text/css-text-2/) и [тут](https://html5book.ru/css-text/css-text-3/).

## Валидация

Зачем валидировать CSS?

-   Валидация служит инструментом отладки
-   Валидация упрощает обслуживание
-   Валидация помогает обучаться правильной технике
-   Валидация - признак профессионализма

Для валидации можно использовать [этот валидатор](http://jigsaw.w3.org/css-validator).

## Полезные ссылки

[CSS: Значения и единицы измерения. Шрифт. Свойства текста](https://events.yandex.ru/lib/talks/561/)

[Самоучитель CSS](http://htmlbook.ru/samcss)
