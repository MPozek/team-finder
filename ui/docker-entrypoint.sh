#!/bin/sh


chown -LR node node_modules
echo $(ls -l)

npm rebuild esbuild

exec "$@"
