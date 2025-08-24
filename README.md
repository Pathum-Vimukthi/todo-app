# **To-Do Task Web Application**

A full-stack to-do task management application built with **React
(Vite)** for the frontend, **Spring Boot (Java 21)** for the backend,
and **MySQL (8)** as the database. The entire solution is fully
containerized using **Docker** and orchestrated via **Docker Compose**.

---

## **Features**

- Add new tasks (Title & Description)
- View only the **latest 5 tasks**
- Mark tasks as **completed**
- Fully Dockerized (Frontend, Backend, Database)
- Auto-waits for database startup

---

## **Tech Stack**

- **Frontend:** React (Vite), served with Nginx
- **Backend:** Spring Boot (Java 21)
- **Database:** MySQL 8
- **Containerization:** Docker, Docker Compose

---

## **Project Structure**

    project-root/
     ├── backend/                 # Spring Boot backend
     │    ├── Dockerfile
     │    ├── pom.xml
     │    ├── src/
     │    └── wait-for-db.sh
     ├── frontend/                # React frontend
     │    ├── Dockerfile
     │    ├── package.json
     │    └── src/
     ├── docker-compose.yml
     └── README.md

---

## **Requirements**

- **Docker** (20+ recommended)
- **Docker Compose** (v2+ recommended)

---

## **How to Run**

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/Pathum-Vimukthi/todo-app.git
    cd todo-app
    ```

2.  **Start All Services**

    ```bash
    docker-compose up --build
    ```

3.  **Access the Application**

    - **Frontend (React via Nginx):** <http://localhost:5173>
    - **Backend API (Spring Boot):** <http://localhost:8080>
    - **MySQL Database:** `localhost:3308`
      - **Username:** root
      - **Password:** root
      - **Database:** todoapp

4.  **Stop All Services**

    ```bash
    docker-compose down -v
    ```

---

## **Run Locally (Without Docker)**

### **Start MySQL**
Ensure you have MySQL running locally with:
- **Database:** `todoapp`
- **Username:** `root`
- **Password:** `root`

Create database:
```sql
CREATE DATABASE todoapp;
```

### **Run Backend**
```bash
cd backend
mvn clean spring-boot:run
```
The backend will run at:
```
http://localhost:8080
```

### **Run Frontend**
```bash
cd frontend
npm install
npm run dev
```
The frontend will run at:
```
http://localhost:5173
```

**Note:** Ensure the API URL in the frontend points to `http://localhost:8080` during local development.

---

## **API Endpoints**

### **Base URL**

    http://localhost:8080

### **Endpoints**

- `POST /tasks` → Add a new task (JSON:
  `{ "title": "Task", "description": "Details" }`)
- `GET /tasks?limit=5` → Get the latest 5 tasks
- `PUT /tasks/{id}/complete` → Mark a task as completed

---
