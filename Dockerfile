#FROM node:14.15.4 as builder

#WORKDIR /src

#COPY . .

#RUN npm config set registry http://registry.npm.taobao.org/

#RUN npm install vue-video-player --save
#RUN npm install video-flash --save

#RUN npm install \
#  --prefer-offline \
#  --frozen-lockfile \
#  --non-interactive \
#  --production=false

#RUN npm  run build

#RUN rm -rf node_modules && \
#  NODE_ENV=production npm install \
#  --prefer-offline \
#  --pure-lockfile \
#  --non-interactive \
#  --production=true

FROM node:14.15.4-alpine3.11

WORKDIR /src

COPY . .

RUN npm install -production
#COPY --from=builder /src  .

ENV HOST 0.0.0.0

EXPOSE 8081 

CMD [ "npm", "start" ]
