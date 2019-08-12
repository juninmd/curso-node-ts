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
    "incremental": true,
    "baseUrl": "./",
    "outDir": "dist",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true,
    "lib": [
      "esnext",
      "dom"
    ],
    "stripInternal": true,
    "target": "es5",
    "module": "commonjs",
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "preserveConstEnums": true,
    "removeComments": true,
    "sourceMap": true,
    "strict": false,
    "strictNullChecks": true,
    "noImplicitAny": false,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "typeRoots": [
      "node_modules/@types",
    ],
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
