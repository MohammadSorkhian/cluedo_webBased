# software-engineering-project

There are two folders 

1- Frontend 
2- Backend

Download the project on your local computer 

prerequisite

Install Node JS 

https://nodejs.org/en/download/

How to verify that node is successfully installed  

open cmd or terminal and type 

node --version 

if the command above gives you the node version means it installed sucessfully.

To Run Server 

go to backend folder from cmd or terminal 

cd Backend 

for first time run 

npm install 

this command will install all the node dependencies 

Now to run server run following command 

node index.js

please read the instructions carefully after running the command above it will give you a message 

DB connected sucessfully and server is running at localhost:3000

Message looks like this 

(node:1485) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
app listening at http://localhost:3000
(node:1485) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
(node:1485) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
Successfully connected to the database


Once complete server is now up and running keep it running 

Now open the folder frontend no need to do this in terminal or cmd 

Just open it in a navigation window 

![alt text](https://drive.google.com/file/d/1nf0V2v9AALE8YgsaOMlQ91HgG2ZEMNOt/view?usp=sharing)
 
you will find index.html file that you need to right click and open in chrome 

once file is open in chrome 

you will see the login screen

use one from the following credentials 

miaftab

example@1234

moso

example@1234

nishant

example@1234

once logged in then you will be redirected to next page 

create game 

select user for example if you selected three players to pick 

it will verify from users and give you a message that 2 players selected 
and one is unavailable 

click continue it will assign cards to all players 

you can see now players there character and cards 

click start game 

Now you will be moved to game board 


## NOTE Our Game is web based and it will do api calls to update Database so while your testing please wait when you click something and let it update 10 to 20 secs, If you still found any defulty in your testing or setting up the environment please feel free to contact me. 
+1 709 770 3467

miaftab@mun.ca
