# Birdie

The cryptocurrency blotter. Counterpart to [owl](https://github.com/DrCalx/owl)

## Prerequisites

Install the following items:
  - [Node.js](https://nodejs.org)
  - [Git](https://git-scm.com/downloads)

## Setup

First, get [owl](https://github.com/DrCalx/owl) up and running.

Then get set up, run the following commands:
```
git clone git@github.com:DrCalx/birdie.git
cd birdie/
npm install
npm start
```

Visit the blotter at http://localhost:4200

## Deploying to prod

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

Clone the heroku repository:
```
git remote add heroku https://git.heroku.com/birdie-blotter.git
```

Then, to push to prod:
```
npm test
npm version patch
git push
git push heroku master
heroku logs
```

Visit the site at https://birdie-blotter.herokuapp.com