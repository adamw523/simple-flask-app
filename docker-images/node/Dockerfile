FROM node:6.5

RUN apt-get update; apt-get install -qy sudo

# Add user
RUN useradd -m node -s /bin/bash

ADD entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
