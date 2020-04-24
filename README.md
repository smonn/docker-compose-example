# Basic docker-compose example

This is a basic example for how to run docker-compose with
nginx as a proxy to map paths to ports of other services,
without exposing the actual service port.

> Note that this is not for production use and just meant
> to serve as an introductory example.

## Commands

See the [Docker Compose documentation][docs] for details

```sh
# build and start the services
docker-compose up --build --detach
```

```sh
# stop and remove the services
docker-compose down
```

[docs]: https://docs.docker.com/compose/
