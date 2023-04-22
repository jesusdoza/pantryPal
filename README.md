### Pantry Pal

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
4. #### frontend env file contents
   ### api address of local server
   - VITE_API_IP = "http://localhost:4000"


5. npm install
6. npm run dev
7. A local host ip address will display in console for link to local running version
