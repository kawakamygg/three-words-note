FROM node:15-alpine

# aws keys
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV NODE_PATH /usr/lib/node_modules/

# change work directory
WORKDIR /usr/src/app

# update apk
RUN apk update

# update npm
RUN npm install -g npm

# install pip
RUN apk add --no-cache python3 py3-pip

# update pip
RUN pip3 install --upgrade pip

# install aws cli
RUN pip3 install awscli

# install boto3
RUN pip3 install boto3

# install amplify cli
RUN npm install -g @aws-amplify/cli

# install serverless framework
RUN npm install -g serverless

# install create-next-app
RUN npm install -g create-next-app

# set aws key 
RUN sls config credentials --provider aws --key ${AWS_ACCESS_KEY_ID} --secret ${AWS_SECRET_ACCESS_KEY}
