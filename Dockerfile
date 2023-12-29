ARG ALPINE_VERSION=3.18.4

FROM alpine:${ALPINE_VERSION}

ARG ENV=DEV

RUN apk add --update npm

COPY package.json package-lock.json script.sh .

COPY styles /styles
COPY store /store
COPY pages /pages
COPY components /components
COPY backend/utilities.js /backend/utilities.js

EXPOSE 3000

RUN chmod u+x script.sh 

CMD ./script.sh