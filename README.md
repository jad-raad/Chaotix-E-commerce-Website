# Chaotix Clothing Brand

Chaotix Clothing Brand is a full-stack e-commerce application for showcasing and purchasing fashion products. This project includes a Next.js frontend and a FastAPI backend with PostgreSQL, and Dockerized services for the database. 

## Features

- **User Authentication**: Registration and login functionality using JWT tokens.
- **Product Management**: Displaying available products from the backend.
- **Cart Functionality**: Add/remove products from the cart, view cart items, and total price.
- **Checkout**: Select payment methods (Cash on Delivery, Visa), and complete purchase.
- **PostgreSQL Database**: Managed via Docker, stores users, products, and cart data.
- **Docker Support**: PostgreSQL is Dockerized for easy setup.

## Tech Stack

### Frontend
- **Next.js (TypeScript)**: Dynamic React-based framework for building the user interface.
- **CSS Modules**: For component-level styling.
- **Axios**: For API calls between the frontend and backend.

### Backend
- **FastAPI (Python)**: High-performance backend for handling API requests.
- **PostgreSQL**: A relational database to store users, products, and orders.
- **Docker**: Containerization for PostgreSQL.

## Installation and Setup

### Prerequisites
- Node.js
- Python 3.x
- Docker and Docker Compose

### Backend Setup (FastAPI)
1. Clone the repository:
    ```bash
    git clone https://github.com/jad-raad/Chaotix-E-commerce-Website
    cd chaotix-backend-fastapi
    ```
2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows: venv\Scripts\activate
    ```
3. Install backend dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Run Docker for PostgreSQL:
    ```bash
    docker-compose up -d
    ```
5. Run the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

### Frontend Setup (Next.js)
1. Navigate to the frontend directory:
    ```bash
    cd chaotix-frontend-nextjs
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Run the Next.js development server:
    ```bash
    npm run dev
    ```

### Environment Variables

- For the backend, ensure the `.env` file contains the necessary database and secret key configurations.
- For the frontend, you may need to configure API endpoints.

### API Endpoints

The backend provides the following main API routes:

- `/register`: User registration.
- `/login`: User login and authentication.
- `/products`: Fetch available products.
- `/cart`: Manage cart (add/remove products).
- `/checkout`: Handle checkout and payment processing.

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. For major changes, please open an issue first to discuss what you'd like to change.


