# student_CRUD_project


# 🧑‍🎓 Student CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) web application built using:

* ⚙️ **Backend:** Spring Boot (Java)
* 🎨 **Frontend:** React.js
* 🗄️ **Database:** PostgreSQL

---

# 📁 Project Structure

```
student-crud-app/
│
├── T7        # Spring Boot Application
│
├── frontend/       # React Application
│
├── README.md
```

---

# 🚀 Features

* Add new students
* View all students
* Update student details
* Delete student
* REST API integration
* Responsive UI using React

---

# 🛠️ Tech Stack

### Backend:

* Java
* Spring Boot
* Spring Data JPA
* PostgreSQL

### Frontend:

* React.js
* Axios
* HTML/CSS

---

# ⚙️ Backend Setup (Spring Boot)

## 📌 Step 1: Go to backend folder

```
cd backend
```

## 📌 Step 2: Configure Database

Open `application.properties` and update:

```
spring.datasource.url=jdbc:postgresql://localhost:5432/student_db
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## 📌 Step 3: Run Backend

```
mvn spring-boot:run
```

👉 Backend will run on:

```
http://localhost:8080
```

---

## 📌 Step 4: Test API

Open in browser:

```
http://localhost:8080/api/students
```

---

# 🎨 Frontend Setup (React)

## 📌 Step 1: Go to frontend folder

```
cd frontend
```

## 📌 Step 2: Install dependencies

```
npm install
```

## 📌 Step 3: Run React App

```
npm start
```

👉 Frontend will run on:

```
http://localhost:3000
```

---

# 🔗 API Endpoints

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | /api/students      | Get all students   |
| GET    | /api/students/{id} | Get student by ID  |
| POST   | /api/students      | Create new student |
| PUT    | /api/students/{id} | Update student     |
| DELETE | /api/students/{id} | Delete student     |

---

# ⚠️ Important Notes

* Make sure PostgreSQL is running
* Create database:

```
student_db
```

* Backend must run before frontend
* Check CORS configuration in backend

---

# 🧪 Sample Data (Optional)

```
INSERT INTO student (name, email) VALUES ('John Doe', 'john@example.com');
```

---

# 🧠 Future Improvements

* Add authentication (Login/Register)
* Add pagination & search
* Improve UI design
* Deploy on cloud (AWS / Vercel / Render)

---





If you like this project, give it a ⭐ on GitHub!
