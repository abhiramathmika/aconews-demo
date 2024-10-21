

# 🌟 ACONEWS - A Slick, Responsive News App Powered by GNews API 🌟

![ACONEWS Screenshot](https://github.com/user-attachments/assets/2feb0351-e5c5-45fb-932a-a44107cbd406)

ACONEWS is a sleek, responsive news aggregator that fetches the latest headlines from around the world. Powered by the GNews API, ACONEWS delivers real-time, relevant news right to your screen, wrapped in a smooth and polished user interface. Built with a React frontend, the app is hosted on Firebase for seamless scalability.

---

## 📑 Table of Contents

1. Features
2. Setup and Installation
3. Deployment
4. GNews API
5. GitHub Repository
6. Note

---

## 🚀 Features

- **GNews API Integration**: Real-time news data fetched from [gnews.io](https://gnews.io/) via their robust API.
- **Slick and Responsive UI**: Designed with a clean, mobile-friendly layout to ensure a smooth user experience on all devices.
- **Backend**: A streamlined backend ensures news delivery feels like it's coming from a seasoned journalist.
- **Hosted on Firebase**: Deployed using Firebase Hosting for blazing-fast load times and simple deployment.
- **GitHub Repository**: [View the source code](https://github.com/abhiramathmika/aconews) to check out the code structure, quality, and approach.

---

## 🛠️ Setup and Installation

### 1. Clone the Repository
```bash
git clone https://github.com/abhiramathmika/aconews-demo.git
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

## 🔑 GNews API

This project uses the GNews API to fetch the latest news. You can sign up and get your API key from [gnews.io](https://gnews.io/).

---

## 🔗 GitHub Repository

You can view the full codebase and history of the project at the following repository:

[https://github.com/abhiramathmika/aconews-demo](https://github.com/abhiramathmika/aconews)


---

## Note

The Gnews API allows 100 request per day. So if you are unable to see news it's because you have reached the daily request limit.
