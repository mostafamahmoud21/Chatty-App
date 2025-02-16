import { config } from "dotenv";
import { connectdb } from "../lib/db.js";
import User from "../models/user.model.js";

config()

const seedUsers = [
  {
    email: "ahmed.ali@example.com",
    fullName: "Ahmed Ali",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    email: "mohamed.hassan@example.com",
    fullName: "Mohamed Hassan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    email: "omar.khaled@example.com",
    fullName: "Omar Khaled",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    email: "youssef.mostafa@example.com",
    fullName: "Youssef Mostafa",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    email: "khaled.saeed@example.com",
    fullName: "Khaled Saeed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    email: "hassan.abbas@example.com",
    fullName: "Hassan Abbas",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    email: "abdelrahman.farouk@example.com",
    fullName: "Abdelrahman Farouk",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    email: "mustafa.ismail@example.com",
    fullName: "Mustafa Ismail",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    email: "fatma.ahmed@example.com",
    fullName: "Fatma Ahmed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    email: "eman.mohamed@example.com",
    fullName: "Eman Mohamed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    email: "sara.kamel@example.com",
    fullName: "Sara Kamel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    email: "mariam.samir@example.com",
    fullName: "Mariam Samir",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    email: "dina.farid@example.com",
    fullName: "Dina Farid",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    email: "noor.hassan@example.com",
    fullName: "Noor Hassan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    email: "layla.yassin@example.com",
    fullName: "Layla Yassin",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg"
  }
];



export const seedDatabase = async () => {
  try {
    await connectdb();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
