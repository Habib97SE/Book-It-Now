BookItNow - A Service booking platform
=======================================

BookItNow is a service booking platform that allows users to book services from a variety of service providers. The platform is designed to be user-friendly and easy to use, with a focus on providing a seamless booking experience for both users and service providers.

Features
--------
- User registration and login
- Service provider registration and login
- Service booking
- Service provider management
- User management
- Payment processing
- Reviews and ratings
- Notifications

Technologies
------------
- Frontend: 
    - React
    - Next.js
    - Tailwind CSS
    - Axios
    - useSWR
    - TypeScript
- Backend:
    - Java
    - Spring Boot
    - Hibernate
    - PostgreSQL
    - Google Cloud Storage
    - Neon.tech (for database migrations)
    - Lombok
    - SendGrid (for email notifications)
- DevOps:
    - Docker
    - Docker Compose
    - GitHub Actions
    - Google Cloud Platform
    - Google Kubernetes Engine
    - Helm
    - Nginx
    - Certbot
- Cron jobs

Getting Started
---------------
To get started with BookItNow, follow these steps: 

1. Clone the repository:
    ```bash
    git clone https://github.com/Habib97SE/Book-It-Now.git
    cd Book-It-Now
    ```
2. Set up the backend:
    - Navigate to the `backend` directory:
        ```bash
        cd backend
        ```
    - Create a `.env` file in the `backend` directory and add the following environment variables:
        ```bash
        SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/bookitnow
        SPRING_DATASOURCE_USERNAME=your_username
        SPRING_DATASOURCE_PASSWORD=your_password
        SPRING_JPA_HIBERNATE_DDL_AUTO=update
        SPRING_MAIL_USERNAME=your_email
        SPRING_MAIL_PASSWORD=your_email_password
        ```
    - Start the backend server:
        ```bash
        ./mvnw spring-boot:run
        ```
3. Set up the frontend:
    - Navigate to the `frontend` directory:
        ```bash
        cd frontend
        ```
    - Create a `.env.local` file in the `frontend` directory and add the following environment variables:
        ```bash
        NEXT_PUBLIC_API_URL=http://localhost:8080
        ```
    - Start the frontend server:
        ```bash
        npm install
        npm run dev
        ```

Contributing
------------
Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems.

License
-------
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
