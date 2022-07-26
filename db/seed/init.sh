#!/bin/bash

### Each top-level command should be triggered from here
### This is because Docker only lets us do one CMD, but we want multiple commands to be able to reference 'db'

# echo $# $0 $1 $2

# Import data.json to seed posts
mongoimport --host db --port 27017 \
  --db team-finder --collection posts \
  --authenticationDatabase admin --username $1 --password $2 \
  --drop --file /data.json --jsonArray

# We run the init-mongo script against the 'admin' collection,
# as that's where the user is defined/authenticated against
mongo db:27017/admin --eval "var pass = \"NekiKonjiSuBijel1\";" /init-mongo.js
