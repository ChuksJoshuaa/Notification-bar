## Server

The server is built with MongoDB, Express, and Node. It provides a REST API for managing notifications.

#### Setup

```bash
npm install && npm run dev
```

### Directory Structure

- `/routes`: Contains the routes for the API.
- `/controllers`: Contains the controllers for handling requests.
- `/models`: Contains the data models.
- `/middleware`: Contains middleware functions.
- `/errors`: Contains custom errors class.

## API Design

The API is designed to handle the following endpoints:

- `POST /api/v1/notification/seed`: Insert dummy notifications data
- `GET /api/v1/notification`: Get all notifications data
- `PATCH /api/v1/notification/:id/read`: Mark a notification as read
- `PATCH /api/v1/notification/:id/read-all`: Mark all notification as read

#### Database Connection

1. Import connect.js
2. Invoke in startServer()
3. Setup .env in the root
4. Add MONGO_URI with correct value
5. Add PORT i.e 9000

#### Security

- helmet
- cors
- express-rate-limit

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.
