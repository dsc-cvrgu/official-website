# DSC-CGU

This is the official Github repo for Developer Student Clubs C V Raman Global University website.

# To Deploy

In the root directory

## To deploy client

cd client && npm run build && firebase deploy --only hosting:client

## To deploy admin

cd client && cd admin && npm run build && cd .. && firebase deploy --only hosting:admin
