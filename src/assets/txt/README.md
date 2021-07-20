# `-front end-`

```
This app is the interactive end the user sees.

It allows for general news articles to be reviewed, for them to be filtered by topic and also for them to be sorted in various ways.

The details for each article can be viewed along with the associated comments. The user is able to confirm they 'like' particualr articles (up to 5 times only.)

There are various users already created on the backend and it is posisble to list the users and log in.

Logged in users are able to remove comments if required.

The front end is hosted on Netlify. The repo is stored on github. The latest addresses are listed under the 'links' section.
```

## `to run this repo locally`

```
1.  Link to the github repo and fork it to your own git account
2.  In your chosen editor, clone the repo using: git clone <web-address from your fork>
3.  Select the main folder of your newly cloned repo
4.  Right click over the folder name and selct: run in integrated terminal
5.  In the terminal, install the dependancies using: npm install
6.  Run the app using: npm start
```

# `-back end-`

```
There is also the back end app where the database is managed and the psql database is stored.

This app is hosted on Heroku and the repo is stored on github. The latest addresses are listed under the 'links' section.
```

## `to run the back end repo locally`

```
1.  Link to the github repo and fork it to your own git account
2.  In your chosen editor, clone the repo using: git clone <web-address from your fork>
3.  Select the main folder of your newly cloned repo
4.  Right click over the folder name and selct: run in integrated terminal
5.  Install the dependancies using: npm install
6.  If you are using WSL, run postgres manually using: sudo service postgresql start
7.  The above command is only required on WSL (Windows Subsystem Linux) as the database server is not initialised at startup
8.  Set up the database on your system using: npm setup-dbs
9.  The above command creates the psql database ready to be seeded
10. Populate the test database locally using: npm seed
11. The pre-written tests can be run using: npm test
12. To run your own tests, the server will need to be listening. This is done using port 8080 via the command: run start
13. Your can them run your own tests using insomnia or other similar tools
```

## `-latest Links-`

This site is hosted on Netlify: https://nc-news-mike-j.netlify.app

## `-github repo's-`

This site: https://github.com/Mike-200/nc-news

The back-end: https://github.com/Mike-200/be-nc-news
