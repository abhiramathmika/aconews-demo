# 🎯 Machine Test Challenge - ACONEWS
This project was developed as part of a Machine Test Round (comapny - [Acowale](https://acowale.com/)). The task was to build a responsive and dynamic News App using the GNews API, with the following requirements:

### ✅ Use a free-tier API key from GNews.
### ✅ Build a responsive frontend that looks great across mobile, tablet, and desktop.
### ✅ Create a backend to handle news filtering and search functionality.
### ✅ Deploy the app on Firebase using its free tier for hosting.
### ✅ Submit the project via a GitHub repository along with a summary of the process, challenges, and victories.



# 🌟 ACONEWS - A Slick, Responsive News App Powered by GNews API 🌟

![ACONEWS Screenshot](https://github.com/user-attachments/assets/2feb0351-e5c5-45fb-932a-a44107cbd406)

ACONEWS is a sleek, responsive news aggregator that fetches the latest headlines from around the world. Powered by the GNews API, ACONEWS delivers real-time, relevant news right to your screen, wrapped in a smooth and polished user interface. Built with a React frontend, the app is hosted on Firebase for seamless scalability.

---

## 📑 Table of Contents

1. Features
2. Setup and Installation
3. Deployment
4. Project Structure
5. GNews API
6. GitHub Repository
7. Summary of My Experience
8. Special Thanks
9. Note

---

## 🚀 Features

- **GNews API Integration**: Real-time news data fetched from [gnews.io](https://gnews.io/) via their robust API.
- **Slick and Responsive UI**: Designed with a clean, mobile-friendly layout to ensure a smooth user experience on all devices.
- **Backend**: A streamlined backend ensures news delivery feels like it's coming from a seasoned journalist.
- **Hosted on Firebase**: Deployed using Firebase Hosting for blazing-fast load times and simple deployment.
- **GitHub Repository**: [View the source code](https://github.com/mirza7175/aconews) to check out the code structure, quality, and approach.

---

## 🛠️ Setup and Installation

### 1. Clone the Repository
```bash
git clone https://github.com/mirza7175/aconews-demo.git
cd aconews-demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up API Key

- Visit [gnews.io](https://gnews.io/) to obtain an API key.
- Create a `.env` file in the root of the project and add your API key:

```bash
REACT_APP_GNEWS_API_KEY=your_api_key_here
```

### 4. Run the App
```bash
npm start
```

The app will be live at `http://localhost:3000/`.

---

## 🚀 Deployment

[aconews-demo](https://aconews-demo.web.app/)

The app is hosted on Firebase Hosting for quick, scalable deployment. If you want to deploy your own version:

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Log In to Firebase
```bash
firebase login
```

### 3. Initialize Firebase in Your Project
```bash
firebase init
```

Follow the prompts to set up Firebase Hosting.

### 4. Deploy
```bash
firebase deploy
```

---

## 📂 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── NewsCard.js
│   │   └── Search.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── .env
└── README.md
```

---

## 🔑 GNews API

This project uses the GNews API to fetch the latest news. You can sign up and get your API key from [gnews.io](https://gnews.io/).

---

## 🔗 GitHub Repository

You can view the full codebase and history of the project at the following repository:

[https://github.com/mirza7175/aconews-demo](https://github.com/mirza7175/aconews)

---

## 😅 Summary of My Experience

Building ACONEWS was a fantastic learning experience. From fetching live data from the GNews API to designing a responsive frontend, it was a journey filled with challenges and victories. 

### Victories:
- **API Integration**: I successfully integrated the GNews API into the app, and seeing the live news feed for the first time was incredibly satisfying.
- **Responsive Design**: Ensuring the UI looked sleek and responsive across various devices was a major achievement.
- **Firebase Hosting**: Deploying the app to Firebase was quick and efficient, making the app accessible globally.

### Challenges:
- **API Key Management**: Handling environment variables across local and deployed environments took some trial and error.
- **CSS Tweaks**: Ensuring pixel-perfect responsiveness had me pulling out my hair a few times!
  
### The Time I Cried:
There was that one moment when the app didn’t compile due to a typo in my `.env` file that took far too long to figure out. After fixing it, I was back on track, feeling both relieved and empowered.

---

## ❤️ Special Thanks

Big thanks to Acowale for providing to showcase my work, the GNews team for their awesome API and the Firebase team for providing such a smooth deployment experience.

---
## Note

The Gnews API allows 100 request per day. So if you are unable to see news it's because you have reached the daily request limit.
