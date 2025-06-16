# 🚀 Express + Mongoose + TypeScript Setup Guide

A starter template for building a backend application using **TypeScript**, **Express**, and **Mongoose**.

---

## ⚙️ Step-by-Step Setup

### ✅ 1. Initialize Node Project

```bash
# Initialize a new Node.js project
npm init -y

# Install main dependencies
npm install express mongoose

# Install development dependencies
npm install --save-dev typescript @types/node @types/express ts-node-dev

# Initialize TypeScript configuration
tsc --init

```

# Folder Structure
src/
├── app.ts             # Entry point for express configuration
├── server.ts          # Entry point to start the server
└── app/
    ├── model/         # Mongoose models
    ├── controller/    # Controller functions
    └── interface/     # TypeScript interfaces
