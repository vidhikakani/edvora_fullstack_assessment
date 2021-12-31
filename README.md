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
![1 ](https://user-images.githubusercontent.com/96503444/147832878-04d3bed7-616b-42cd-89bf-cec4e0473e88.png)
![2](https://user-images.githubusercontent.com/96503444/147832880-6ad1689e-4e03-47ba-accc-e22361c2a0d6.png)
![3](https://user-images.githubusercontent.com/96503444/147832881-d8dcabc5-70cd-4d23-b8ba-0cc57f7c3cc6.png)
![4](https://user-images.githubusercontent.com/96503444/147832882-ed46087d-dbeb-4eb0-926e-52bed9a9aa60.png)
![5](https://user-images.githubusercontent.com/96503444/147832884-4df9410b-58ad-49c3-a165-14d8d61fe6e1.png)
![6](https://user-images.githubusercontent.com/96503444/147832885-b7e527d0-2f28-4e9f-a87c-41481decb3f4.png)
![7](https://user-images.githubusercontent.com/96503444/147832886-d402b0fc-651b-489b-8320-bcc39dc64955.png)
