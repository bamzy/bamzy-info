#!/usr/bin/env bash
#it will tell you in human readable form how long your server has been running
uptime | sed -le 's/^.*: \(.*\)$/\1/'