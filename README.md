# Pantry Pal
An app that takes any number of ingredients and searches an extensive database to bring delicious recipes you can make with the ingredients you have on hand.

## How It's Made:
- React and Vite for the front end using styled components 
- Node and express backend with Mongodb database

## Try it out:
- Development currently hosted [here](https://pantrypal.onrender.com) on render
- Main branch hosted [here](https://pantrypal.cyclic.app/)

## Optimizations
1. using a front end framework would provide a more standard and uniform styling experience

### Env files
- example env files are in the backend and frontend folders

## How to run project
1. git clone 
2. add .env file to backend folder /backend/.env and to frontend folder /frontend/.env
3. #### backend env file contents 
   ### Port
   - PORT=4000
   ### mongo connection string
   - MONGO_URI="mongodb+srv://USERNAME:PASSWORD@cluster0.losdw.mongodb.net?retryWrites=true&w=majority"
   ### spoonacular api key
   - API_KEY="string of stufff"
   ### jwt secret string
   - JWT_SECRET="anotherrandom stringafdasfasdf"
   ### open ai api key chatGPT api key if meal planner desired
   - OPENAI_API_KEY="fasdfasdfasdfHAAXoxfadsfasd9uSxQVe"
   ### server sercret 
   - SEVER_SECRET="string of stuff"
4. #### frontend env file contents for dev enviroment
   ### api address of local server
   - VITE_API_IP = "http://localhost:4000"

5. #### (OPTIONAL) .env.production file to test build with empty string so request are relative to server serving files
   - VITE_API_IP =""
7. npm install 
8. npm run dev
9. A local host ip address will display in console for link to local running version

