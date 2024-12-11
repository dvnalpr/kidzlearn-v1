FROM node:22.11.0
WORKDIR /usr/src/app
ENV PORT 9000
ENV GCP_PROJECT_ID=kidzlearn-project
ENV NUMBER_MODEL_URL='https://storage.googleapis.com/kidzlearn-bucket/model/model_angka/model.json'
ENV LETTER_MODEL_URL='https://storage.googleapis.com/kidzlearn-bucket/model/model_tfjs/model.json'
COPY . .
RUN npm install
EXPOSE 9000
CMD [ "npm", "run", "start" ]