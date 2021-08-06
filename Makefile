###########################################################################
## Make file
## @author: Irfan Andriansyah <irfan@99.co>
## @since: 2021.08.06
###########################################################################

default:

###########################################################################
## Make Initial Dev
###########################################################################
init-dev:
	@yarn add -D git-cz@4.7.6 husky@4.3.8 lint-staged@10.5.4
	@yarn install

###########################################################################
## Run On Dev Server
###########################################################################
setup-env-dev: cleansing-env
	@cp env/local/.env .env.local

run-dev: setup-env-dev
	@yarn start


###########################################################################
## Setup ENV
###########################################################################
cleansing-env:
	@if [ -e ".env.production.local" ];then rm -rf ".env.production.local" ; fi
	@if [ -e ".env.local" ];then rm -rf ".env.local" ; fi
	@if [ -e ".env" ];then rm -rf ".env" ; fi
	@cp env/global/.env .env