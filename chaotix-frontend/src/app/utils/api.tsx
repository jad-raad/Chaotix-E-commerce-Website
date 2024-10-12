// src/utils/api.ts
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // Your FastAPI backend URL

// Define the User interface
export interface User {
    username: string;
    password: string; // Ideally, passwords should not be stored directly
}

// Define the Product interface
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

// Define the response interfaces
export interface RegisterResponse {
    msg: string;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
}

// User Registration
export const registerUser = async (user: User): Promise<RegisterResponse> => {
    const response = await axios.post<RegisterResponse>(`${API_URL}/register`, user);
    return response.data;
};

// User Login
export const loginUser = async (user: User): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, user);
    return response.data;
};

// Fetch Products
export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(`${API_URL}/products/`);
    return response.data;
};
