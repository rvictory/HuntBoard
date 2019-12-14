#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
BIND=${1:-127.0.0.1}

# Todo: Drop privileges?
rackup -p4567 -o$BIND $DIR/../config.ru
