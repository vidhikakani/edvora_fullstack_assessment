# edvora_fullstack_assessment
Edvora Fullstack Assessment

Fullstack application based on the Pokemon API (pokeapi.co) that has the following features:

1. Login/Signup
2. Storing the user’s favorite pokemon in a database and retrieving it with an authenticated API call

We require you to create the assessment using FastAPI and React.js. 
We would also like you to not use tools such as Firebase/Hasura to simplify the development.

# Download and install required tools/software
1. PostgreSQL
2. Node.js
3. Python/Anaconda

# Steps to run:
1. git clone <project_url> && cd edvora_fullstack_assessment
2. cd api
3. pip install -r requirements.txt
4. Open command prompt in /api directory and run the following commands
    a. python
    b. from services import services
    c. services.create_database()
    d. exit()
5. python -m uvicorn main:app --reload
6. Open new terminal and cd client
7. npm start

# Features implemented
1. Ability for a user to Login/Signup
2. Ability to view logged-in user
3. Display list of pokemons
4. Load more pokemons on demand
5. Use secure api to store user's favorite pokemons on database
6. Use secure api to delete user's favorite pokemon
7. Ability for user to logout

# Screenshots
![alt text](C:\Users\vidhi\OneDrive\Pictures\Screenshots\1.png)
![alt text](C:\Users\vidhi\OneDrive\Pictures\Screenshots\2.png)
![alt text](C:\Users\vidhi\OneDrive\Pictures\Screenshots\3.png)
![alt text](C:\Users\vidhi\OneDrive\Pictures\Screenshots\4.png)
![alt text](C:\Users\vidhi\OneDrive\Pictures\Screenshots\5.png)
![alt text](C:\Users\vidhi\OneDrive\Pictures\Screenshots\6.png)
![alt text](C:\Users\vidhi\OneDrive\Pictures\Screenshots\7.png)