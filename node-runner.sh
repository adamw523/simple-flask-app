docker run --rm -i -t -v `pwd`:/node -e "HOST_GID=`id -g`" -e "HOST_UID=`id -u`" adamw523/node-runner  "$@"
