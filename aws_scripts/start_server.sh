#!/bin/bash
source /home/ec2-user/.bash_profile
set -x


pm2 start /home/ec2-user/app/build/index.js
