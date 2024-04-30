test args='':
  deno test {{args}}

dist:
  esbuild --target=es2017 --bundle --minify --sourcemap --outdir=./dist/ ./src/all.js
