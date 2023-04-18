#!/bin/bash
source /home/ec2-user/.bash_profile
set -x

npm run build --prefix /home/ec2-user/app
npm run build --prefix /home/ec2-user/app/frontend-app
