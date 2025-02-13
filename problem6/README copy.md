# Scoreboard API Module

## Introduction
This is a backend module for managing player scores, ensuring real-time updates and protecting the API from fraud.

## Main Features
- Get the Top 10 players with the highest scores
- Update player scores
- Update the score in real-time
- Authenticate API requests to prevent malicious users

## API Endpoints

### 1. Get top 10 players
- **Description**:  Returns a list of the top 10 players with the highest scores.
- **URL**: GET /scores/top10
- **Authorization**: `Bearer <token>`
- **Query Parameters**: limit: Optional, defaults to 10.
- **Response**:
```
{
  code: 200,
  payload: [
    { userId: "string", score: 100 },
    { userId: string, score: 95 },
    ...
  ], 
  message: 'success'
}
```

### 2. Update player scores
- **Description**:  Update player scores
- **URL**: PATCH /scores/:id
- **Authorization**: `Bearer <token>`
- **Request body**: 
```
{
  points: 95
}
```
- **Response**:
```
{
  code: 200,
  payload: { name: "string", points: 95, logo: "url" },
  message: 'success'
}
```
### 3. Real-time Updates (WebSocket)
- **Description**: The Real-time Scoreboard API enables live updates of player scores using WebSocket. This ensures that users always see the latest scores without needing to refresh the page.
- **URL**: /api/scoreboards
- **Flow of Execution**:
```
graph TD
    A[User completes action] --> B[Frontend sends API request to /scores/update]
    B --> C[API validates user authentication]
    C --> D[API validates actionId uniqueness]
    D --> E[Update user score in database]
    E --> F[Broadcast updated leaderboard to WebSocket clients]
    F --> G[Clients update displayed leaderboard]
```

### 4. Improvements Suggestions
- **Caching for Leaderboard**: Use Redis to store the top scores, reducing database load during frequent requests.
- **Rate Limiting**: Implement rate limiting to prevent abuse of the PATCH /api/scoreboards endpoint.
- **Audit Logging**: Log all score update requests for monitoring and debugging.
- **Action Verification**: Add a server-side mechanism to validate the authenticity of actionId before updating scores. (Base on business case)
- **WebSocket Scaling**: Use a message broker (e.g., Redis Pub/Sub or Kafka) to support large-scale WebSocket connections.
    
### 5. Technology Stack
- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO
- **Authentication**: JWT-based authentication