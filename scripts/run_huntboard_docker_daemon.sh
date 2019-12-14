#!/usr/bin/env bash

# Get the Directory that this script lives in so we always execute the right things at the right places
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

docker run -d -p4567:4567 huntboard