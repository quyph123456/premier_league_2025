# Premier League 2025 Teams Management

A RESTful API for managing football teams participating in the 2025 Premier League season.

## Features
- **List all teams** - Get all registered teams
- **View team details** - Get detailed information about a specific team
- **Add new team** - Register a new team for the season
- **Edit team info** - Update team information
- **Soft Delete and Force Delete team** - Remove a team from the system

## Technologies Used
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast and minimal web framework
- **MongoDB + Mongoose** - NoSQL database and ODM
- **Handlebars (hbs)** - Template engine for rendering views
- **Bootstrap & CSS** - Basic UI styling

## Steps to run this project:
1. git clone https://github.com/quyph123456/premier_league_2025.git -> cd premier_league_2025
2. npm i
3. move to file src\config\db\index.js to config connect to mongodb
4. import sample data from file src\public\json\premier_league_teams.json to mongodb
5. npm run watch
6. npm start

## Project Structure
premier_league_2025/
│-- src/
│   │-- app/
│       ├── controllers/            # Logic for team management
│       ├── models/                 # Mongoose schema
│   │-- config/
│       ├── db/                     # MongoDB connection
│   │-- public/
│       ├── css/                    # Static styles (do not push code)
│   │-- resources/
│   |   │-- scss/                   # Static styles
│   |   │-- views/
│           ├── layouts/            # Main Handlebars layouts
            ├── partials/           # Handlebars layouts for header and footer of website
│           ├── teams/              # Team-related pages
│   │-- routes/                     # API routes
│   │-- index.js                    # Main Express application
│-- package.json
│-- README.md



    
   
