# Usage

```
docker compose up -d --build
docker compose run --rm -it client-adapter-acha -a psql   # Postgresql
docker compose run --rm -it client-adapter-acha -a rest   # REST Api
```

# Acceder a la db

```
docker exec -it adapter-db psql -U acha -d adapter
```
