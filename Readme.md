mongo db
sudo systemctl start mongod

Backend:
npx nodemon src/server.js

Frontend:
npm start

Docker 

docker-compose up -d
docker-compose logs -f

# start
docker-compose up -d

# stop
docker-compose down

---------------
## 🚀 How to Run This Project on Another PC

1️⃣ **Copy the Project**  
- Copy the entire `restaurant-app` folder (including `frontend/public/assets/`) to the new PC.

2️⃣ **Install Dependencies**

**Backend**
```bash
cd restaurant-app/backend
npm install


Frontend

cd ../frontend
npm install

3️⃣ Start MongoDB

Make sure MongoDB is installed and running locally:

sudo systemctl start mongod 

4️⃣ Run Backend

cd ../backend
npx nodemon src/server.js

Runs on http://localhost:5000

4️⃣ Run Frontend

cd ../frontend
npm start


Runs on http://localhost:3000