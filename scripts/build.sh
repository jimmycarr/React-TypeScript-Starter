#!/bin/bash
curl -O https://nodejs.org/dist/v8.9.3/node-v8.9.3-linux-x64.tar.xz
tar -xf node-v8.9.3-linux-x64.tar.xz
ls node-v8.9.3-linux-x64/bin
export PATH=${PWD}/node-v8.9.3-linux-x64/bin:$PATH

npm install
cd client && npm install
npm run build
