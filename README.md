# 🎓 EduAlfa - Class 8 Student Assessment & Performance Tracking Platform

## Overview

EduAlfa is a Full Stack web application designed for Class 8 students to take subject-wise quizzes, track academic performance, and compete on a dynamic real-time leaderboard.

The platform provides separate Admin and Student portals, automatic quiz evaluation, score tracking, historical performance records, badges, achievements, and live leaderboard updates.

---

## ✨ Features

### 👨‍💼 Admin Portal

* Create and manage student records
* Generate and assign unique Student IDs
* Create and manage Class 8 subjects
* Create quizzes under subjects
* Add and manage quiz questions
* View student quiz attempts and scores
* Manage and update quiz data
* Dashboard statistics and analytics

### 👨‍🎓 Student Portal

* Login using Student ID
* View available subjects
* Attempt subject-wise quizzes
* Submit quiz responses
* Receive instant quiz results
* Track historical performance
* Earn badges and achievements
* View leaderboard rankings

### 📝 Quiz Evaluation

* Automatic answer evaluation
* Automatic score calculation
* Score storage in database
* Attempt history tracking
* Performance analytics

### 🏆 Real-Time Leaderboard

* Dynamic ranking system
* Automatic updates after quiz submissions
* Performance-based scoring
* Subject-wise rankings
* Live updates using Socket.IO

---

## 🛠 Technology Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Axios
* Socket.IO Client
* Framer Motion
* Recharts
* React Hot Toast

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT Authentication
* Socket.IO
* bcryptjs

### Database

* PostgreSQL
* Prisma ORM

---

## 📁 Project Structure

```text
edualfa/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── socket/
│   │   └── server.ts
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── hooks/
    │   ├── pages/
    │   ├── lib/
    │   └── App.tsx
    └── package.json
```

---

## 🗄 Database Schema

Database schema is available in:

```text
backend/prisma/schema.prisma
```

The schema includes models for:

* Students
* Subjects
* Quizzes
* Questions
* Quiz Attempts
* Leaderboard Data
* Badge Tracking

---

## ⚙️ Setup Instructions

### Backend Setup

```bash
cd backend

npm install

npm run prisma:generate

npm run prisma:migrate

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

---

## 👤 Admin Credentials

```text
Username: admin
Password: admin123
```

---

## 📊 Leaderboard Logic

Leaderboard rankings are calculated using:

* Quiz Accuracy
* Speed Bonus
* Performance Consistency

Formula:

```javascript
finalScore = Math.round(
  (accuracyScore + speedBonus) * consistencyMultiplier * 10
) / 10;
```

Where:

```javascript
accuracyScore = (correctPoints / totalPoints) * 100;
speedBonus = Math.min(fastAttempts * 5, 20);
consistencyMultiplier = attempts >= 3 ? 1.1 : 1.0;
```

---

## 🎖️ Badge System

The platform includes a gamification-based badge system to motivate students and reward consistent performance.

| Badge               | Condition                                   | Rarity    |
| ------------------- | ------------------------------------------- | --------- |
| 🥇 Top Scholar      | Rank #1 on leaderboard                      | Legendary |
| 💯 Perfectionist    | Perfect score on any quiz                   | Epic      |
| 🏆 Subject Champion | Complete all difficulty levels in a subject | Legendary |
| 🔥 On Fire          | Maintain a 3-quiz streak                    | Rare      |
| ⚡ Speed Demon       | Earn a fast completion bonus                | Rare      |
| 🔴 Hard Master      | Score 80%+ on a Hard quiz                   | Epic      |
| 🟡 Medium Master    | Score 80%+ on a Medium quiz                 | Rare      |
| 🟢 Easy Master      | Score 80%+ on an Easy quiz                  | Uncommon  |
| 📚 Subject Expert   | Achieve high-score mastery in a subject     | Uncommon  |

---

## 🔌 Real-Time Updates (Socket.IO)

The leaderboard updates automatically whenever a student submits a quiz.

### Event Flow

| Event                | Direction       | Description                                         |
| -------------------- | --------------- | --------------------------------------------------- |
| `leaderboard:update` | Server → Client | Triggered after quiz submission to refresh rankings |

### Benefits

* No page refresh required
* Instant leaderboard updates
* Live ranking synchronization
* Better user experience

---

## 🌐 API Endpoints

### Authentication

* POST `/api/auth/admin-login`
* POST `/api/auth/student-login`
* GET `/api/auth/me`

### Admin APIs

* `/api/admin/students`
* `/api/admin/subjects`
* `/api/admin/quizzes`
* `/api/admin/attempts`
* `/api/admin/stats`

### Student APIs

* `/api/student/subjects`
* `/api/student/quizzes`
* `/api/student/attempts`
* `/api/student/profile`

### Leaderboard APIs

* `/api/leaderboard`
* `/api/leaderboard/subject/:id`

---

## ✅ Assignment Requirements Covered

✅ Admin Portal

✅ Student Portal

✅ Subject-wise Quiz Management

✅ Automatic Quiz Evaluation

✅ Score Storage in Database

✅ Historical Performance Tracking

✅ Dynamic Leaderboard

✅ Real-Time Updates

✅ Responsive Frontend

✅ Backend API Integration

✅ Database Schema Design

✅ Input Validation

✅ Error Handling

✅ Badge & Achievement System

✅ Socket.IO Real-Time Communication

---

## 👨‍💻 Developed By

**Utkarsh**

Full Stack Developer
