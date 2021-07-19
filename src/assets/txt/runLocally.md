This app if one of two.

This app is the front end that the user sees. It allows for general news articles to be reviewed, for them to be filtered by topic and also for them to be sorted in various ways.

The details for each article can be viewed along with the associated comments. The user is able to confirm they 'like' particualr articles (up to 5 times only.)

There are various users already created on the backend and it is posisble to list the users and log in.

Logged in users are able to remove comments if required.

The front end is hosted on Netlify. The repo is stored on github. The latest addresses are listed under the 'links' section.

The second app is the back end where the database is managed and the psql database is stored.

This app is hosted on Heroku. The repo is stored on github. The latest addresses are listed under the 'links' section.

To run this repo locally:-

1.  Link to the github repo and fork it to your own git account
2.  Install the dependancies using: npm install
3.  Run the app using: npm start

To run the back end repo locally:-

1.  Link to the github repo and fork it to your own git account
2.  Install the dependancies using: npm install
3.  If you are using WSL, run postgres manually using: sudo service postgresql start
4.  The above command is only required on WSL (Windows Subsystem Linux) as the database server is not initialised at startup
5.  Set up the database on your system using: npm setup-dbs
6.  The above command creates the psql database ready to be seeded
7.  Populate the test database locally using: npm seed
8.  The pre-written tests can be run using: npm test
9.  To run your own tests, the server will need to be listening. This is done using port 8080 via the command: run start
10. Your can them run your own tests using insomnia or other similar tools
