FROM node:16

# Create app directory
RUN mkdir /src
WORKDIR /src

# Install app dependencies
ADD package.json /src/package.json
RUN yarn

#Bundle app source
COPY . /src

EXPOSE 5001

CMD yarn start