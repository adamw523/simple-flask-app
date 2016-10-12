# simple-flask-app

## Forwarding Ports

```
ssh -NL 5000:10.4.4.4:5000 -L 5588:10.4.4.4:5588 [devbox]
```

## Running npm / Webpack

```
./node-runner.sh npm install
./webpack-runner.sh --config webpack.conf.js --watch
```

## Create the database
```
docker-compose run db bash
psql -h db -U postgres
postgres-# create database "flask-app";

docker-compose run web bash
python manage.py db migrate

```
