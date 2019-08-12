# Aula 2

## Iniciando projeto com npm init
Todo projeto node com npm criamos usando o comando `npm init`.
Ele serve para referenciar as dependencias do nosso projeto.

```bash
$ npm init -y
```

> exemplo package.json
```
{
  "name": "aula-2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```




```bash
$ npm install typescript
```

```bash
cat > tsconfig.json
```

```
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
  ]
}
```

```
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
```

```bash
$ npm i -g gign
```