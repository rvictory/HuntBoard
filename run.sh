#!/usr/bin/env bash
# Todo: Drop privileges?

BIND=${1:-127.0.0.1}

rackup -p4567 -o$BIND /opt/HuntBoard/config.ru
