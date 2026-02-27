import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './src/utils/db.js';
import Product from './src/models/productModel.js';
import User from './src/models/userModel.js';

dotenv.config();

connectDB();

const products = [
    {
        name: 'Airpods Wireless Bluetooth Headphones',
        image: 'https://images.unsplash.com/photo-1606220588913-b3aecb3b0d24?w=500&q=80',
        description: 'Bluetooth technology lets you connect it with compatible devices wirelessly. High-quality audio offers an immersive listening experience. Built-in microphone allows you to take calls while working.',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
    },
    {
        name: 'iPhone 13 Pro 256GB Memory',
        image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&q=80',
        description: 'Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life.',
        brand: 'Apple',
        category: 'Electronics',
        price: 999.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
    },
    {
        name: 'Sony Playstation 5',
        image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80',
        description: 'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
        brand: 'Sony',
        category: 'Electronics',
        price: 499.99,
        countInStock: 11,
        rating: 5,
        numReviews: 12,
    },
    {
        name: 'Logitech G-Series Gaming Mouse',
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80',
        description: 'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
        brand: 'Logitech',
        category: 'Electronics',
        price: 49.99,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
    }
];

const importData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany(); // Clear users as well if needed

        // Create a dummy admin user
        const createdUsers = await User.insertMany([
            {
                name: 'Admin User',
                email: 'admin@example.com',
                password: 'password123',
                isAdmin: true,
            },
            {
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
            }
        ]);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error with Seeder: ${error}`);
        process.exit(1);
    }
};

importData();
