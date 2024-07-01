**Project Title**: **Emed**

**Project Description**:
Emed is a comprehensive web application designed to dynamically display medicines as products. 
Users have the capability to upload images of their prescriptions, which are then converted to base64 strings for secure storage and processing.
The platform includes a dedicated doctor login system, enabling doctors to view uploaded prescriptions by reconverting the base64 strings back into images. 
Additionally, Emed features a robust login system that accurately verifies user credentials, distinguishing between incorrect passwords and non-existent usernames.

**Usage**:

**User Login**:
Login with your credentials.
Select a product from the product page.
Upload a prescription image.

**Doctor Login**:
Sign up and login with your credentials.
Navigate to the prescription page to view uploaded prescriptions.

**Installation**

1. **Clone the repository**:
    ```bash
    git clone 
    cd emed
    ```

2. **Install dependencies for the backend**:
    ```bash
    cd node-server
    npm install
    ```

3. **Install dependencies for the frontend**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the `backend` directory and add your MongoDB URI  any other required environment variables.(Replace the mongo(moongoose.connect) link
   in index.js with the enviroment variable


6. **Run the application**:
    ```bash
    # Run the backend server
    cd node-server
    npm start

    # Run the frontend development server
    npm start
    ```
Screenshots:
Login Page
![Screenshot 2024-06-29 183910](https://github.com/AbhishekBharambe2002/emed/assets/123597077/7ee9b705-8c4e-4e2d-8429-c7d85cef8d0d)


Sign Up Page
![Screenshot 2024-07-01 140311](https://github.com/AbhishekBharambe2002/emed/assets/123597077/fda9a573-f1df-4ff9-9d6a-2ec60a105cc8)


Product PAge
![Screenshot 2024-06-29 184046](https://github.com/AbhishekBharambe2002/emed/assets/123597077/c68d8a86-5fbd-42ba-b98f-00b012fe2f17)


Search Product
![Screenshot 2024-06-29 184215](https://github.com/AbhishekBharambe2002/emed/assets/123597077/95221e61-70e9-4b36-a972-e8e41a341fe0)

![Screenshot 2024-06-29 185211](https://github.com/AbhishekBharambe2002/emed/assets/123597077/9f90b670-5202-4b30-b4b6-bd58e995d71d)


Prescription Upload
![Screenshot 2024-06-29 185523](https://github.com/AbhishekBharambe2002/emed/assets/123597077/c25612a3-8fce-4bd2-8d5e-c07a49f0ec4c)


Doctor Login
![Screenshot 2024-06-29 185925](https://github.com/AbhishekBharambe2002/emed/assets/123597077/08b666e2-02cd-4b0f-8b4e-c2756a10be90)


View Prescription
![Screenshot 2024-06-29 190052](https://github.com/AbhishekBharambe2002/emed/assets/123597077/5d707d19-9ed5-49ff-b3ac-45228681b7fa)
