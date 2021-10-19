# autotests
use project

npm install

npm install -g webdriver-manager

webdriver-manager update

webdriver-manager start

npm run chrome-config



Selenoid for windows

docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v ${HOME}:/root -e OVERRIDE_HOME=${HOME} aerokube/cm:latest-release selenoid start

cm.exe selenoid start --vnc

cm.exe selenoid-ui start


appium -a 127.0.0.1 -p 4723 --allow-insecure chromedriver_autodownload
