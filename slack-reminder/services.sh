#!/bin/bash
SCRIPT_DIR=$(cd $(dirname $0); pwd)

if [ "$1" = "build" ]; then
    docker build -t react-front:latest $SCRIPT_DIR/client
    docker build -t django-slack:latest $SCRIPT_DIR
elif [ "$1" = "create" ]; then
    docker-compose up
fi
