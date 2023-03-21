#!/bin/bash

# set files to 644 [except *.sh]
find /home/ec2-user/app/ -type f -not "*.sh" -print0 | xargs -0 chmod 0644

# set folders to 755
find /home/ec2-user/app/ -type d -print0 | xargs -0 chmod 0755
