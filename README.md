# typed-everything

You need to setup the client and server. 

## server
You need to have mysql running and setup a DB as per `server/ormconfig.json`

Bootstrap
```
cd client
npm install
```

Start dev server
```
npm run dev
```

## client
Bootstrap
```
cd client
npm install
```

Start dev server
```
npm run start
```

To re-run the `graphql-codegen`. The graphql server needs to be running.
```
npm run graphql-codegen
```