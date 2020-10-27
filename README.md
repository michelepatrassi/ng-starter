# ng-starter

## Features

### Frontend

- Angular Universal
- HMR
- AngularFire
- Tailwind (https://notiz.dev/blog/angular-10-with-tailwindcss)
- logger (https://github.com/dbfannin/ngx-logger)

### Backend

- Cloud functions

### Utils

- shared TS lib
- Eslint and prettier
- deployment configuration to Cloud functions
- firebase emulator
- circleCI deployment
- autorun terminals (to enable, set `autorun: true` in `terminals.json`)
- utility services wrappers (e.g. meta, platform)

# Usage

## Initial setup

- git clone git@github.com:michelepatrassi/ng-starter.git
- git remote remove origin
- create GitHub repo and initialize the repo
- git remote add template git@github.com:michelepatrassi/ng-starter.git

## Get latest updates

- git fetch --all
- git merge template/main
