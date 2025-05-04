#!/bin/bash

cd ./database/
if [ -n "$(groups | grep docker)" ]; then
    if [ -n "$(docker ps -a | grep sushitime-postgres)" ]; then
        if [ "$1" = "-r" ]; then
            docker compose down --volumes
            echo "Container deleted, volume removed!"
            ./../init_script.sh
        elif [ -n "$(docker ps | grep sushitime-postgres)" ]; then
            echo "Container already started!"
        else
            docker start sushitime-postgres
            echo "Container started!"
        fi
    else
        docker compose up -d
        echo "Container started!"
    fi
else
    if [ -n "$(cat /etc/group | grep docker)" ]; then
        sudo usermod -aG docker $USER
        echo "New shell will be created, please launch command again!"
        newgrp docker
    else
        sudo groupadd docker
        echo "Group docker added!"
        ./../init_script.sh
    fi
fi

PID_FILE=".pids"

cd ../server/
if [ "$1" = "-r" ]; then
    npm install
fi

if [ -d "node_modules" ]; then
    nohup npm run dev >> server.log 2>&1 &
    echo "$! : server" >> "../$PID_FILE"
fi

cd ../client/
if [ "$1" = "-r" ]; then
    npm install
fi

if [ -d "node_modules" ]; then
    nohup npm run dev >> server.log 2>&1 &
    echo "$! : client" >> "../$PID_FILE"
fi
