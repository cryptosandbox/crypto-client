# Cryptosandbox

The cryptocurrency blotter.

## Prerequisites

Install the following items:
  - [Node.js](https://nodejs.org)
  - [Git](https://git-scm.com/downloads)

## Setup

First, get [crypto-server](https://github.com/cryptosandbox/crypto-server) up and running.

Then to get set up, run the following commands:
```
git clone git@github.com:cryptosandbox/crypto-client.git
cd crypto-client/
npm install
npm start
```

Visit the blotter at http://localhost:4200

## Deploying to prod

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

Link to the heroku repository:
```
heroku git:remote -a cryptosandbox
```

Then, to push to prod:
```
npm test
npm version patch
git push
git push heroku master
heroku logs
heroku open
```

Visit the site at https://cryptosandbox.herokuapp.com