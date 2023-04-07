# Superapp

Superapp is a revolutionary new app built on web3 technology that allows users to easily register and connect with their favorite third-party applications such as Spotify, YouTube, and Netflix. With our unique token-based registration system, users can access all their favorite apps with just one login!

## Getting Started

### Prerequisites

To run the Superapp, you will need to have the following software installed on your machine:

- Node.js
- MongoDB
- Ethereum node

### Installing

1. Clone the repository:
```
git clone https://github.com/Talant01/HKUST_LEAKLOCK_BACKEND.git
```

2. Install the dependencies:

```
cd HKUST_LEAKLOCK_BACKEND/backend
npm install
```

3. Configure the environment variables:

```
cp .env.example .env
```

Update the `.env` file with your MongoDB URI and Ethereum node URL.

4. Start the server:

```
npm start
```


The server should now be running on `http://localhost:3000`.

## API Endpoints

The Superapp API provides the following endpoints:

- `/register` (POST) - register a new user with web3
- `/login` (POST) - log in a user with web3
- `/spotify` (GET, POST) - get and create Spotify playlists
- `/youtube` (GET, POST) - get and create YouTube videos

## Built With

- Node.js
- Express.js
- MongoDB
- Web3.js
