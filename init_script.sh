#!/bin/bash

if [ !(-n "$(groups | grep docker)") ]; then
    if [ -n "$(cat /etc/group | grep docker)" ]; then
        sudo usermod -aG docker $USER
        echo "Use su - \$USER"
    else
        sudo groupadd docker
        echo "Group docker added!"
    fi
fi
