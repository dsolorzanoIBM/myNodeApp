FROM node:latest
MAINTAINER d@d.s

WORKDIR /srv
RUN mkdir app
WORKDIR /srv/app

ADD app /srv/app/

EXPOSE 3000
CMD ["node","app.js"]