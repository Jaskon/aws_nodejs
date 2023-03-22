# aws_nodejs

CD is dependent on src/index.js location. __Do not move it!__\
In case you need to move its location - go into the instance and delete a registered app under the old location:\
`pm2 delete ${app}/src/index.js`, where `${app}` is the app location path\
And of course change paths in aws scripts.

If CD still fails - clear its cache:\
`rm -rf *` inside `/opt/codedeploy-agent/deployment-root/` folder.
