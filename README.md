# BFHL API

A simple API built with **Node.js + Express** and deployed on **Vercel**.  
This API processes input data (numbers, alphabets, and special characters) and returns categorized output along with user details.

---

##  Live API Endpoint

Base URL:  
 https://bfhl-api-pi-nine.vercel.app/bfhl

---

##  Features
- Categorizes numbers into **odd** and **even**.
- Identifies **alphabets** and converts them to **uppercase**.
- Detects **special characters**.
- Computes the **sum** of numbers.
- Generates a **concatenated string** from alphabets in reverse order.
- Includes **user details** (user_id, email, roll number).

---

##  Endpoints

### 1. **GET /bfhl**
Test if the server is running.  

**Request:**
```http
GET https://bfhl-api-pi-nine.vercel.app/bfhl
