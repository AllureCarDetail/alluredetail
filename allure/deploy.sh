#!/bin/bash

set -e

./node_modules/.bin/vite build
rm  -rf ../assets
mv src/dist/** ../
cd ..
git add .
git commit -m $(date +%Y-%m-%d)
git push