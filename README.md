🏡 Smart Home Dashboard
=======================

A modern **Smart Home Dashboard** for monitoring and controlling smart devices in real time. This dashboard integrates **Firebase** for database, and real-time updates.

🚀 Features
-----------

-   📊 **Real-time Consumption Data:** Monitor electricity, heating, and water usage.

-   🔌 **Device Control:** Turn devices on/off (Smart Lamp, Smart TV, WiFi, etc.).

-   🎥 **Security Cameras:** View live feeds and toggle cameras.

-   ☁️ **Cloud Storage:** Store device states and settings in Firebase Firestore.

🛠️ Tech Stack
--------------

-   **Frontend:** React.js

-   **Backend:** Firebase Firestore (NoSQL Database)



🔥 Firebase Setup
-----------------

1.  **Create a Firebase Project:**

    -   Go to Firebase Console and create a new project.

2.  **Enable Firestore & Authentication:**

    -   Navigate to **Firestore Database** → Create Database.

    -   Go to **Authentication** → Enable Email/Password Sign-in.

3.  **Add Firebase Config to Your App:**

    -   Copy your Firebase configuration from **Project Settings**.

    -   Create a `firebaseConfig.js` file in `src/` and paste:

```javascript
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

🏃‍♂️ Getting Started
---------------------

1.  **Clone the Repository**

    ```sh
    git clone https://github.com/Ankursinsinwar/Smart-Home-Dashboard.git
    cd Smart-Home-Dashboard/frontend
    ```

2.  **Install Dependencies**

    ```sh
    npm install
    ```

4.  **Run the App**

    ```sh
    npm run dev
    ```

6.  **Deploy to Firebase**

    ```sh
    npm run build
    firebase deploy
    ```

📸 Screenshot
-------------

![Screenshot 2025-03-24 205658](https://github.com/user-attachments/assets/2e70aef0-6d79-48fc-8d2e-5c24f880b09a)


🤝 Contributing
---------------

Contributions are welcome! Feel free to submit a PR.

* * * * *

**© 2024 Smart Home Dashboard - Built with ❤️**
