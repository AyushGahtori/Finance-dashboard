# Finance Tracker with Machine Learning

Welcome to the Finance Tracker with Machine Learning! This application helps you track your finances and uses machine learning to predict next year's revenue. The project is split into two parts: the server and the client.

## Features

- Track your daily, weekly, and monthly expenses and revenues
- Visualize your financial data with charts and graphs
- Predict next year's revenue using machine learning algorithms
- User-friendly interface

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine
- npm (Node Package Manager) installed

## Installation

Follow these three easy steps to run the project locally:

1. **Install Dependencies**
    ```bash
    npm install
    ```

2. **Run the Server**
    ```bash
    cd server
    npm run dev
    ```

3. **Run the Client**
    ```bash
    cd client
    npm run dev
    ```

## Usage

Once the server and client are running, open your web browser and navigate to `http://localhost:3000` to start using the Finance Tracker.

## Project Structure

```plaintext
.
├── client                  # Frontend code
│   ├── public              # Public files (HTML, images, etc.)
│   └── src                 # React components and application logic
├── server                  # Backend code
│   ├── models              # Database models
│   ├── routes              # API routes
│   └── index.js            # Entry point for the server
├── .gitignore              # Files and directories to ignore in Git
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation

