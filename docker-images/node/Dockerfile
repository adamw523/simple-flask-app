FROM node:6.5

# Add user
RUN useradd -m node -s /bin/bash

ADD entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
