FROM jupyter/scipy-notebook

USER root

RUN apt-get update && apt-get install -y libxml2-dev libxslt1-dev libffi-dev libssl-dev

ADD requirements.txt /
RUN pip install -r /requirements.txt
