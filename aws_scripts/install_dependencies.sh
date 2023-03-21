#!/bin/bash
source /home/ec2-user/.bash_profile
set -x


cd /home/ec2-user/app/ || exit
npm install
