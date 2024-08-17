# Express Server Project

## Project Overview

This project is an Express server that serves product data from a JSON file. The server provides endpoints to fetch product details, including product name, image, description, price, category, ratings, creation date, and brand name.

## Features

- **Product Listing**: Fetch a list of all products.
- **Product Details**: Fetch detailed information about a specific product.
- **Search**: Search for products by name, category, or brand.
- **Filtering**: Filter products based on price, ratings, and other attributes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a Mac machine (or adjust the commands accordingly for your OS).

## Project Setup

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the server**:
    ```sh
    npm start
    ```

4. **Run tests** (if applicable):
    ```sh
    npm test
    ```

## Project Structure

- `server.js`: The main entry point of the server.
- `routes/`: Directory containing route definitions.
- `controllers/`: Directory containing controller logic.
- `models/`: Directory containing data models.
- `fakedata.json`: JSON file containing product data.

## API Endpoints

- **GET /products**: Fetch all products.
- **GET /products/:id**: Fetch a specific product by ID.
- **GET /search**: Search for products by query parameters (e.g., name, category, brand).
- **GET /filter**: Filter products based on criteria (e.g., price, ratings).

## Running the Project Locally

1. **Ensure all dependencies are installed**:
    ```sh
    npm install
    ```

2. **Start the server**:
    ```sh
    npm start
    ```

3. **Access the server**:
    Open your browser and navigate to `http://localhost:3000`.

## Example Requests

- **Fetch all products**:
    ```sh
    curl http://localhost:3000/products
    ```

- **Fetch a specific product**:
    ```sh
    curl http://localhost:3000/products/1
    ```

- **Search for products**:
    ```sh
    curl http://localhost:3000/search?name=Headphones
    ```

- **Filter products**:
    ```sh
    curl http://localhost:3000/filter?price=100&ratings=4
    ```

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.
