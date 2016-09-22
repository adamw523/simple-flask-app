#! /bin/bash

# exit if UID or GID aren't set

id_error_msg="Please set the HOST_UID and HOST_GID environment variables"
[ -z "$HOST_UID" ] && { echo $id_error_msg; exit 1;}
[ -z "$HOST_GID" ] && { echo $id_error_msg; exit 1;}

dir_error_msg="Please mount work volume in /node"
[ ! -d /node ] && { echo $dir_error_msg; exit 1;}

# change node UID to $UID
usermod -u $HOST_UID node

# change node GID to $GID
groupmod -g $HOST_GID node

bash

