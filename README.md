# Task Manager API Powered by Zeyad

## Tech Stack

- Node.js
- Express
- Prisma O
- MySQL
- Joi for validation

## Setup

1. Clone the repo

2. Install dependencies:

```bash
npm install
```

3. Push schema:

```bash
npx prisma db push
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
