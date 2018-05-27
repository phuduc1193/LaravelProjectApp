#!/bin/bash

# php artisan jwt:secret
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
  echo Arguments to migrate data \(f: fresh migration, s: seeding\)
  exit
fi

if [ "$1" = "--down" ] || [ "$1" = "-d" ]; then
  cd laradock && docker-compose down
  exit
fi

cd laradock && docker-compose up -d workspace nginx mysql redis

if [ "$1" = "" ]; then
  exit
fi

COMMAND="docker-compose exec workspace php artisan migrate"

if [[ "$1" == *"f"* ]]; then
  COMMAND+=":fresh"
fi

if [[ "$1" == *"s"* ]]; then
  COMMAND+=" --seed"
fi

if [[ "$1" == *"c"* ]]; then
  COMMAND+=" && docker-compose exec workspace php artisan cache:clear"
fi

echo $COMMAND

eval $COMMAND