#!/bin/bash

# php artisan jwt:secret
cd laradock && docker-compose up -d nginx mysql redis
docker-compose exec workspace php artisan migrate
