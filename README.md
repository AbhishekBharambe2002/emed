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
    
bash
    git clone
    cd emed


2. **Install dependencies for the backend**:
    
bash
    cd node-server
    npm install


3. **Install dependencies for the frontend**:
    
bash
    cd emed
    npm install


4. **Set up environment variables**:
    Create a .env file in the backend directory and add your MongoDB URI
   and any other required environment variables.


6. **Run the application**:
    
bash
    # Run the backend server
    cd node-server
    npm start

    # Run the frontend development server
    cd emed
    npm start




