#!/bin/bash

# php artisan jwt:secret
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
  echo Arguments to migrate data \(f: fresh migration, s: seeding\)
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

echo $COMMAND

eval $COMMAND