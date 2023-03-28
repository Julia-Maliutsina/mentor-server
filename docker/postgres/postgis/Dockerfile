FROM postgres:13

LABEL maintainer="PostGIS Project - https://postgis.net"

ENV POSTGIS_MAJOR 3
ENV POSTGIS_VERSION 3.0.3+dfsg-2.pgdg100+1

RUN apt-get update \
    && apt-get install wget -y \
    && apt-get install postgresql-13-postgis-3 -y \
    && apt-get install postgis -y

RUN mkdir -p /docker-entrypoint-initdb.d
COPY initdb-postgis.sh /docker-entrypoint-initdb.d/10_postgis.sh
COPY update-postgis.sh /usr/local/bin