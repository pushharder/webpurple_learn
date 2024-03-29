---
title: Основы JavaScript. Часть 2
templateKey: 'article-page'
order: 1
---

# Операторы

**Операторы** работают с **переменными(variables)** и **значениями(values)**.

Операторы позволяют из простых **выражение(expressions)** строить более сложные выражения.

`5+4;` – числовой литерал 5 и числовой литерал 4 – первичные выражения (в данном случае значения), оператор + позволяет _из двух первичных выражений получить более сложное выражение_, которое возвращает результат арифметического сложения двух значений.

# Типы операторов

Операторы могут быть разбиты на категории по количеству требуемых им операндов.

Операторы JS:

-   унарные;

    **_operator_ operand;**

    ++a;

    **operand _operator_;**

    a++;

-   бинарные;

    **operand _operator_ operand;**

    a + b;

    a \* b;

-   тернарный; - один – условный оператор

    **operand _operator_ operand _operator_ operand;**

    a > b ? a : b

# Операторы присвоения

**Операторы присвоения** – бинарные операторы
operand _operator_ operand.

```js
var x; - заранее созданная переменная
x = 10;
x = 'myname';
console.log(x = 100 + 1); // в консоли: 101
```

Основной оператор присваивания - это знак равно `=`

Сначала вычисляется значение справа (_right-hand side_) от оператора, а затем вычисленное значение записывается в операнд, которые находится слева (_left-hand side_) от оператора

Слева от оператора присваивания (=) может находится **только выражение в которое можно записать значение – переменная или свойство объекта!**

```js
x = 10;
y = 'hello';

10 = 101; // Uncaught ReferenceError: Invalid left-hand side in assignment
```

Оператор `=` возвращает значение

Все операторы возвращают значение
`x = 10;`

Значение справа записывает в переменную x, а затем возвращается

```js
console.log((x = 10)); // 10
```

Благодаря этому присваивание можно использовать как часть более сложного выражения:

```js
var a, b;
b = a = 10;
```

### ВНИМАНИЕ!

`var a = 10;` - _инструкция_, не возвращает значения

`a = 10;` - _выражение_, возвращает значение

В этих двух примерах оператор присвоения работает по-разному.

## Операторы вспомогательного присваивания

> TODO таблица с операторами

# Операторы сравнения

**Операторы сравнения** – бинарные операторы
operand _operator_ operand

Как и другие операторы, сравнение возвращает значение. Это значение имеет **логический тип** (`true` или `false`).

**Строгие сравнения** истинны только в том случае, если типы сравниваемых значений являются одинаковыми

**Сравнения с преобразованием типов**. Перед тем как непосредственно выполнить сравнение, операнды приводятся к одному типу.

Операторы равенства:

-   `==` оператор *равно* сначала приводит операнды к одному типу, и затем применяет строгое сравнение.

-   `!=` оператор *не равно* возвращает `true` в том случае, если операнды не равны. Аналогичен оператору равенства, перед сравнением приводит операнды к одному типу.

-   `===` оператор _строгое равно_ возвращает `true` в том случае, если операнды строго равны

-   `!==` оператор *строго не равно* возвращает истину в том случае, если операнды не равны, или их типы отличаются друг от друга.

## Особенности сравнения

-   Две строки строго равны только в том случае, если они имеют одинаковую длину, и те же символы в одинаковой последовательности и соответствующих позициях.
-   Два числа строго равны в том случае, если они численно равны.
-   Два логических значения (boolean) равны только в том случае, если они оба true или false.
-   Значения `null` и `undefined` равны себе как в строгом сравнении, так и в не в строгом.

# Операторы отношения:

-   `>` оператор *больше* возвращает `true` в том случае, если значение левого операнда больше, чем правого.

-   `>=`  оператор _больше или равно_, возвращает `true` в том случае, если значение операнда слева больше или равно значению операнда справа.

-   `<` оператор _меньше_, возвращает `true` в том случае, если значение операнда слева меньше, чем значение операнда справа.

-   `<=` оператор _меньше или равно_, возвращает `true` в том случае, если значение операнда слева меньше, или равно значению операнда справа.

### При использования данных операторов происходит приведение типов!

# Арифметические операторы

**Арифметические операторы** – бинарные, требуют два операнда.

-   `+` сложение -  результат зависит от типа данных операндов!
-   `-` вычитание
-   `*` умножение
-   `/` деление
-   `%` деление с остатком

# Логические операторы

Бинарные логические операторы - `||` и `&&`

`||` _Логическое ИЛИ_ - если хотя бы один из операндов `true`, то возвращает `true`, иначе – `false`

```js
true || true; // true
true || false; // true
false || true; // true
false || false; // false
```

`&&` _Логическое И_ - возвращает `true`, если оба аргумента истинны, а иначе – `false`

```js
true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

# Что возвращает логический оператор?

Логический оператор возвращает значение одного и только одного из своих операндов или **логический оператор выбирает значение одного из своих операторов**.

> _operand selector operators_

```js
console.log(1 || 0); // 1
console.log(1 && 0); // 0
```

`||` - возвращает первое значение которое, соответствует `true` иначе (когда все `false`) последнее значение
`&&` - возвращает первое значение, которое соответствует false иначе (когда все `true`) последнее значение

## Унарный логический оператор

`!` _Логическое НЕ_ - сначала приводит аргумент к логическому типу `true`/`false`, затем возвращает противоположное значение.

```js
!true; //  false
!0; // true
```

Его результат - всегда булево значение!

## Унарные операторы инкремент и декремент

Инкремент (`++`) увеличивает на 1 значение операнда и возвращает значение.
Декремент (`--`) уменьшает на 1 значение операнда и возвращает значение.

Могут находиться в префиксной и постфиксной позиции
В префиксной позиции (до операнда - `++x`). Сначала увеличивает значение операнда на единицу, затем возвращает получившееся значение.
В постфиксной позиции (после операнда – `x++`). Сначала возвращает значение операнда, а потом увеличивает его на единицу.

```js
var a = 10;
var b = ++a;
console.log(a, b); // 11,11

var a = 10;
var b = a++;
console.log(a, b); // 11,10
```

# Ветвления

## Выражение IF

```
if (condition)
    statement1
[else
    statement2]
```

_сondition_ -  выражение результат которого либо `true`, либо `false`

_statement1_ – инструкции, которые будут выполнены, если _condition_ возвращает `true`.

_statement2_ – инструкции, которые будут выполнены, если _condition_ возвращает `false` и присутствует слово `else`.

## Циклы

**Циклы (loops)** - простой способ сделать какое-то действие несколько раз.

Цикл **for**:

```
for ([initialization]; [condition]; [incrementExpression])
    statement
```

_Statement_ внутри тела цикла выполняется если выражение _condition_ возвращает `true`;
_IncrementExpression_ выполняется каждую итерацию.

Цикл **while**:

```
while (condition)
    statement
```

_Statement_ выполняется до тех пор пока выражение _condition_ возвращает `true`.

# Массивы

**Массив (Array)** – разновидность объекта, которая предназначена для хранения _пронумерованных_ значений и предлагает дополнительные методы для удобного манипулирования такой коллекцией.

```js
var emptyArr = [];

var strings = ['one', 'two', 'three'];

var mix = [1, 2, null, 'hello', [1, 2, 3]];

var arr = [100, 200, 300];
a[0]; // 100
a[1]; // 200
a[2]; // 300
```

# Объявление функции

Чтобы не повторять один и тот же код во многих местах, придуманы функции. Функции являются основными «строительными блоками» программы.

```js
var f = function(a, b) {
    return a + b;
};
```

`a`,`b` – параметры функции (ожидается входная информация)
`return` – возвращаемое из функции значение

```js
var result = f(1, 2); // 1 и 2 – аргументы переданные в функцию
console.log(result); // 3
```

**Вызов функции – выражение (expression)!**
