# Task Manager API Powered by Zeyad

![Alt text](https://i.ibb.co/ZzMX7sRc/Screenshot-from-2025-05-21-16-02-32.png)

## Tech Stack

- Node.js
- Express
- Prisma O
- MySQL
- Joi for validation
- bcrypt for password encryption
- Swagger for API documentation

## Setup

1. Clone the repo

2. Install dependencies:

```bash
npm install
```

3. Database Migrate:

```bash
npx prisma migrate dev --name init
```

4. Start server:

```bash
npm start
```

## Endpoints

- POST `/users` - Create user
- POST `/tasks` - Create task
- GET `/tasks/user/:id` - Get user's tasks
- PATCH `/tasks/:id` - Update task status

## Swagger:

 ```bash
http://localhost:3000/api-docs
```
