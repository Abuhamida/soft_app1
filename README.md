# Category Management API

This is a Node.js project built with Express and Supabase. It provides RESTful API endpoints for managing categories in a database.

---

## **Features**
- Create a new category.
- Retrieve all categories.
- Retrieve a specific category by ID.
- Update a category by ID.
- Delete a category by ID.

---

## **Technologies Used**
- **Node.js**: Runtime environment.
- **Express**: Web framework for building APIs.
- **Supabase**: Backend-as-a-service for database management.
- **Postman**: API testing tool.

---

## **Setup Instructions**

### **1. Prerequisites**
- Node.js (v16 or higher) installed.
- A Supabase account and project.
- Postman (or any API testing tool).

### **2. Clone the Repository**
```bash
git clone https://github.com/Abuhamida/soft_app1.git
cd soft_app1
```

### **3. Install Dependencies**
Install the required dependencies using npm:
```bash
npm install
```

### **4. Set Up Environment Variables**
Create a `.env` file in the root directory and add your Supabase credentials:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

### **5. Start the Server**
Run the server using the following command:
```bash
node index.js
```
The server will start at `http://localhost:3000`.

---

## **API Endpoints**

### **1. Create a Category**
- **URL:** `/create_category`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
      "name": "Electronics",
      "description": "All electronic items"
  }
  ```
- **Response:**
  ```json
  {
      "message": "Category created successfully",
      "data": [
        {
            "id": "37deba5f-db64-498b-9c24-70b97ce91c96",
            "name": "Electronics",
            "description": "All electronic items",
            "created_at": "2025-03-05T13:39:15.889691+00:00"
        }
    ]
  }
  ```

### **2. Get All Categories**
- **URL:** `/get_all_categories`
- **Method:** `GET`
- **Response:**
  ```json
  {
      "data": [
        {
            "id": "37deba5f-db64-498b-9c24-70b97ce91c96",
            "name": "Electronics",
            "description": "All electronic items",
            "created_at": "2025-03-05T13:39:15.889691+00:00"
        }
    ]
  }
  ```

### **3. Get Category by ID**
- **URL:** `/get_category_by_id/"37deba5f-db64-498b-9c24-70b97ce91c96`
- **Method:** `GET`
- **Response:**
  ```json
  {
     "data": [
        {
            "id": "37deba5f-db64-498b-9c24-70b97ce91c96",
            "name": "Electronics",
            "description": "All electronic items",
            "created_at": "2025-03-05T13:39:15.889691+00:00"
        }
    ]
  }
  ```

### **4. Update a Category**
- **URL:** `/update_category/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
      "name": "Updated Electronics",
      "description": "Updated description"
  }
  ```
- **Response:**
  ```json
  {
      "message": "Category updated successfully",
      "data": [
        {
            "id": "37deba5f-db64-498b-9c24-70b97ce91c96",
            "name": "Updated Electronics",
            "description": "Updated description",
            "created_at": "2025-03-05T13:39:15.889691+00:00"
        }
    ]
  }
  ```

### **5. Delete a Category**
- **URL:** `/delete_category_by_id/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
      "message": "Category deleted successfully",
      "data": {
          "id": "37deba5f-db64-498b-9c24-70b97ce91c96"
      }
  }
  ```

---

## **Testing the API**
- Use Postman or any API testing tool.
- Import the following collection for testing:
  - **Postman Collection Link:** *(Replace with your actual Postman collection link if available).*
- Test each endpoint as described above.

---

## **Project Structure**
```
your-project/
│
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── index.js              # Main server file
├── supabase.js           # Supabase client setup
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
└── README.md             # Project documentation
```

---

## **Contributing**
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**
For questions or feedback, please contact:
- **Your Name:** your-email@example.com
- **GitHub:** [abuhamida](https://github.com/abuhamida)

---

### **How to Use This README**
1. Replace placeholders like `your-username`, `your-repo-name`, and `your-email@example.com` with your actual details.
2. Add a `LICENSE` file if you want to include a license for your project.
3. Update the Postman collection link if you have one.

---
