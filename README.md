# LRNR App

The **LRNR App** is a full-stack web application that provides a guided quiz-generation experience. The app uses the OpenAI API to create custom quizzes based on user preferences. This repository contains the production code for the application. RV’s AI team has designed this application originally, the application was written using jQuery, and GO.  However, this application has been rewritten in Node.js, and React.  

## Features

- **Dynamic Quiz Generation:**  
  Users can generate personalized quizzes by selecting a topic, expertise level, number of questions, and a preferred question style.

- **Interactive Quiz Experience:**  
  The app displays one question at a time, allowing users to submit their answers and view detailed evaluations.

- **Static Pages:**  
  Includes static Home and Account pages to provide additional context and navigation.

## Technology Stack

- **Frontend:**  
  - React (built with Vite)
  - Tailwind CSS

- **Backend:**  
  - Express.js
  - Node.js
  - OpenAI API (gpt-4o)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/efr-en/LRNR-App.git
   cd LRNR-App
   ```
2. **Install all dependencies:**

   ```bash
   npm install
   ```
3. **Configure environment variables:**

   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   ```

## Running the application (Developers)

1. **Frontend:**

   ```bash
   npm run dev
   ```
2. **Backend:**

   ```bash
   node src/backend/server.js
   ```

## Running the application (Users)

1. **Frontend & Backend:**

   ```bash
   npm run build && node src/backend/server.js
   ```

## Usage

1. Upon launching the application, users are sent to the Homepage, they're greeted with an understanding of LRNR and given a button to send them to the Quiz Generation page.

<img width="1920" alt="Screenshot 2025-02-27 at 11 13 15 AM" src="https://github.com/user-attachments/assets/e214b67d-efbc-4063-9ca9-8148d3274d44" />

2. The Quiz Generation page is where users have a choice of question topic, expertise level, number of questions, and style of questions.
- Topic: Golang, AWS, Javascript, CI/CD, Home Gardens, Coffee, Finger Foods
- Expertise: Novice, Intermediate, Expert
- Number of questions: 5, 10, 15
- Style of questions: Master Oogway, 1940's Gangster, like I'm an 8 year old, Normal, Jedi, Captain Jack Sparrow, Matthew Mcconaughey

<img width="1920" alt="Screenshot 2025-02-27 at 12 25 08 PM" src="https://github.com/user-attachments/assets/570b5b63-fc18-4e6e-bfe7-bef17573a726" />

3. After selecting the configurations for the quiz, users will be sent to a 1 question per page form, where they must submit and answer, and recieve an explanation and evaluation upon submission. The user is graded either incorrect (0-29%), semi-correct (30-79%), or correct (80-100%). Evaluation is given on how their response was graded, and what the correct answer is.

<img width="1920" alt="Screenshot 2025-02-27 at 12 26 28 PM" src="https://github.com/user-attachments/assets/12804e5b-94f2-479a-81d7-4897c5b7dfc4" />

4. After completion of the quiz, users are notified of completion, and a button pops up directing them to the results page if they choose so. On the Quiz Results page, they have the choice to take another quiz and view their tests results. DISCLAIMER: This page is purely static, there is no logic currently to accurately track the users results.

<img width="1483" alt="Screenshot 2025-02-27 at 11 19 06 AM" src="https://github.com/user-attachments/assets/885df81e-4c83-46d7-a853-24cc6095b15e" />

6. This is the users Account page, this page shows users their information such as their streak, quiz level, and lrnr level. DISCLAIMER: This page is purely static as well, there is no logic currently to accurately track the users information.

<img width="1483" alt="Screenshot 2025-02-27 at 11 19 25 AM" src="https://github.com/user-attachments/assets/2526f1f1-b0eb-481c-bca2-ececc04b3de0" />

## Collaborators:

1. Efren Laris
2. Jennifer Guzman
3. Cierra Gaddy
4. Andrea Merlos
5. Darrell Cooper

readme inspo: Carmani Harris 



