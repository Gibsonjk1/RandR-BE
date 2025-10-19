# Setting up a TypeScript project

## Initialize your project
`npm init`

## Install the TypeScript module as a dev dependency
`npm install typescript --save-dev`

## Initilize your TypeScript project using npx and tsc
`npx tsc --init`

## Replace the contents of your tsconfig.json file
```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [ "src/**/*" ],
  "exclude": [ "node_modules" ]
}
```

## Create a src folder

`mkdir src`

## Create your main app TypeScript file: app.ts in the src folder

`src/app.ts`

## Modify your package.json file

### Set your main property to the compiled result of your TypeScript project
`"main": "dist/app.js"`

## Modify the scripts section of your package.json 
```
  "scripts": {
    "build": "tsc",
    "start": "node dist/app.js",
    "dev": "nodemon --watch src --exec ts-node src/app.ts"
  }
```

## Install Express, ts-node, nodemon, @types/express, and @types/node as dev dependencies

`npm install express ts-node nodemon @types/express @types/node --save-dev`

## Create a src folder and create your app.ts file

```
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
```

## Build your project
`npm run build`

## Run your project
`npm run start`

## Run your project and watch for file changes to trigger automatic rebuild
`npm run dev`