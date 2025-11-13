# Usage

```
docker compose up -d --build
docker compose run --rm -it client-adapter-acha
```

Cambiar el adapter en `compose.yml` linea 32 y volver a ejecutar

```
docker compose up -d --build
docker compose run --rm -it client-adapter-acha
```


# Acceder a la db

```
docker exec -it adapter-db psql -U acha -d adapter
```
