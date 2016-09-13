FROM python:3.5

# RUN apt-get update && apt-get install -y libxml2-dev libxslt1-dev libffi-dev libssl-dev

RUN mkdir -p /usr/src/app
RUN mkdir -p /data

ENV FLASK_APP app.py

COPY requirements.txt /usr/src/app/
RUN pip install -r /usr/src/app/requirements.txt

WORKDIR /data/app/web/app
COPY app/entrypoint.sh /data/app/web/app/

CMD ["sh", "entrypoint.sh"]
