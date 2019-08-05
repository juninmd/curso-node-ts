# Aula 1

## Montando Ambiente

Vamos fazer o download do NodeJS <https://nodejs.org/en/> de preferência a versão LTS.  (LTS é a versão estável).

Para desenvolver nossos códigos, iremos utiizar o editor Visual Studio Code <https://code.visualstudio.com/>
Ele é leve, possui um depurador integrado, extensões...

Agora iremos baixar o Yarn, <https://yarnpkg.com/pt-BR/>, um gerenciador de dependências alternativo

Também iremos conhecer o NVM (Node Version Mananger), muito útil para quem necessita ter diversas versões do NodeJS instaladas na máquina.

Linux/Mac: <https://github.com/creationix/nvm>

Windows: <https://github.com/coreybutler/nvm-windows>

## Conhecendo um pouco sobre JavaScript

<p>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1200px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg" width="200" />
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="200" /></p>


`JavaScript` foi inventado por `Brendan Eich` em 1995.

Sendo `ECMAScript` o nome oficial da linguagem.
</p>

## Palavras Reservadas

<table style="border-collapse: collapse;
border-spacing: 0;
width: 100%;
display: table;
border: 1px solid #ccc;">
<tbody><tr>
<td>abstract</td>
<td>arguments</td>
<td>await*</td>
<td>boolean</td>
</tr>
<tr>
<td>break</td>
<td>byte</td>
<td>case</td>
<td>catch</td>
</tr>
<tr>
<td>char</td>
<td>class*</td>
<td>const</td>
<td>continue</td>
</tr>
<tr>
<td>debugger</td>
<td>default</td>
<td>delete</td>
<td>do</td>
</tr>
<tr>
<td>double</td>
<td>else</td>
<td>enum*</td>
<td>eval</td>
</tr>
<tr>
<td>export*</td>
<td>extends*</td>
<td>false</td>
<td>final</td>
</tr>
<tr>
<td>finally</td>
<td>float</td>
<td>for</td>
<td>function</td>
</tr>
<tr>
<td>goto</td>
<td>if</td>
<td>implements</td>
<td>import*</td>
</tr>
<tr>
<td>in</td>
<td>instanceof</td>
<td>int</td>
<td>interface</td>
</tr>
<tr>
<td>let*</td>
<td>long</td>
<td>native</td>
<td>new</td>
</tr>
<tr>
<td>null</td>
<td>package</td>
<td>private</td>
<td>protected</td>
</tr>
<tr>
<td>public</td>
<td>return</td>
<td>short</td>
<td>static</td>
</tr>
<tr>
<td>super*</td>
<td>switch</td>
<td>synchronized</td>
<td>this</td>
</tr>
<tr>
<td>throw</td>
<td>throws</td>
<td>transient</td>
<td>true</td>
</tr>
<tr>
<td>try</td>
<td>typeof</td>
<td>var</td>
<td>void</td>
</tr>
<tr>
<td>volatile</td>
<td>while</td>
<td>with</td>
<td>yield</td>
</tr>
</tbody></table>

## Objetos, Propriedades e Métodos

<table style="border-collapse: collapse;
border-spacing: 0;
width: 100%;
display: table;
border: 1px solid #ccc;">
<tbody><tr>
<td>Array</td>
<td>Date</td>
<td>eval</td>
<td>function</td>
</tr>
<tr>
<td>hasOwnProperty</td>
<td>Infinity</td>
<td>isFinite</td>
<td>isNaN</td>
</tr>
<tr>
<td>isPrototypeOf</td>
<td>length</td>
<td>Math</td>
<td>NaN</td>
</tr>
<tr>
<td>name</td>
<td>Number</td>
<td>Object</td>
<td>prototype</td>
</tr>
<tr>
<td>String</td>
<td>toString</td>
<td>undefined</td>
<td>valueOf</td>
</tr>
</tbody></table>

## Regra de Ouro

Você já deve ter conhecido algum código JavaScript antes, e bem, pode ter se deparado com a palavra `var`, como o próprio nome sugere, `variável`, porém ela tem um problema que foi superado na versão do `EcmaScript 6`.

O `var` não se isola em um escopo, então caso você tenha uma função dentro de uma função, o valor ali atribuído no escopo menor, pode atingir o maior.

> Exemplo: O código é iniciado com x = 10, porém o código dentro do escopo pequeno afeta o exterior.
```javascript
var x = 10;
// x = 10
{
    var x = 2;
    // x = 2
}
// x = 2
```
Assim foram criado os `let` que é um variável de um escopo, podendo ser instanciada somente uma vez e `const` herdando o mesmo, porém sendo uma constante, não pdemos atribuir valores mais de uma vez.

> Exemplo: O código é iniciado com x = 10, dentro do escopo é criado x sendo = 2, sem afetar o funcionamento da variável inicial.
```javascript
var x = 10;
// x = 10
{
    let x = 2;
    // x = 2
}
// x = 10
```
> Exemplo: Tentamos alterar o valor da const x.
```javascript
const x = 10;
// x = 10
{
    const x = 2;
    // SyntaxError: redeclaration of const x
}
// x = 10
```

> Exemplo: O mesmo vale para o let
```javascript
let x = 10;
// x = 10
{
    let x = 2;
    // SyntaxError: redeclaration of const x
}
// x = 10
```



## Operadores

<table style="border-collapse: collapse;
border-spacing: 0;
width: 100%;
display: table;
border: 1px solid #ccc;">
<tbody><tr>
<th style="width:12%">Operador</th>
<th>Descrição</th>
<th>Comparação</th>
<th>Retorno</th>
</tr>
<tr>
<td rowspan="3">==</td>
<td rowspan="3">equivalente</td>
<td>x == 8</td>
<td>false</td>
</tr>
<tr>
<td>x == 5</td>
<td>true</td>
</tr>
<tr>
<td>x == "5"</td>
<td>true</td>
</tr>
<tr>
<td rowspan="2">===</td>
<td rowspan="2">valor e tipo equivalente</td>
<td>x === 5</td>
<td>true</td>
</tr>
<tr>
<td>x === "5"</td>
<td>false</td>
</tr>
<tr>
<td>!=</td>
<td>não equivalente</td>
<td>x != 8</td>
<td>true</td>
</tr>
<tr>
<td rowspan="3">!==</td>
<td rowspan="3">valor e tipo não equivalente</td>
<td>x !== 5</td>
<td>false</td>
</tr>
<tr>
<td>x !== "5"</td>
<td>true</td>
</tr>
<tr>
<td>x !== 8</td>
<td>true</td>
</tr>
<tr>
<td>&gt;</td>
<td>maior que</td>
<td>x &gt; 8</td>
<td>false</td>
</tr>
<tr>
<td>&lt;</td>
<td>menor que</td>
<td>x &lt; 8</td>
<td>true</td>
</tr>
<tr>
<td>&gt;=</td>
<td>maior ou igual</td>
<td>x &gt;= 8</td>
<td>false</td>
</tr>
<tr>
<td>&lt;=</td>
<td>menor ou igual</td>
<td>x &lt;= 8</td>
<td>true</td>
</tr>
</tbody></table>
</div>

## Operadores Lógicos

<table style="border-collapse: collapse;
border-spacing: 0;
width: 100%;
display: table;
border: 1px solid #ccc;">
<tbody><tr>
<th style="width:12%">Operator</th>
<th>Descrição</th>
<th>Exemplo</th>
<th>Resultado</th>
</tr>
<tr>
<td>&amp;&amp;</td>
<td>and</td>
<td> (x &lt; 10 &amp;&amp; y &gt; 1) </td>
<td> true</td>
</tr>
<tr>
<td>||</td>
<td>or</td>
<td>(x == 5 || y == 5)</td>
<td>false</td>
</tr>
<tr>
<td>!</td>
<td>not</td>
<td> !(x == y)</td>
<td>true</td>
</tr>
</tbody></table>

[Exemplos](./exemplos.md)

[Voltar](../Readme.MD)
