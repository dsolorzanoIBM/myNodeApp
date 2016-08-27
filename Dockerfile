FROM registry.eu-gb.bluemix.net/ibmnode
MAINTAINER d@d.s

WORKDIR /srv
RUN mkdir app
WORKDIR /srv/app

ADD app /srv/app/

EXPOSE 80
CMD ["node","app.js"]