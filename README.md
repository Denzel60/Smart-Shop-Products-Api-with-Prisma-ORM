# Prisma and Express

This file demonstrates how to implement a REST API using Express, and Prisma Client. The project uses an postgreSQL database file.

# Getting Started

Download and install dependencies:

## To install express run the command:

`npm i express`

### Install npm dependencies:

What is Nodemon?

- The nodemon Module is a module that develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Nodemon does not require any change in the original code and method of development. To install run the following commands:
- `npm i nodemon -d` alternatively install nodemon globally `npm nodemon i nodemon -g`
- `npm i prisma -d`

## Create and seed the database:

### Initializing prisma

Run the following commad in your terminal `npx prisma init` which comes with .env file and prisma folder

Run the following command to create your PostgreSQL database file. This also creates the User and Post tables defined in prisma/schema.prisma:
npx prisma migrate dev --name init

### Connecting to your database

To connect to your database open .env file, you will find a pre-written code, e.g, `DATABASE_URL="postgresql://username:password@localhost:5432/databaseName?schema=public` where username: your username, password is your password, databaseName is the name of your database

### Migrate

- Migrate your database using Prisma Migrate:
  `npx prisma migrate dev --name <migraton name>` where migration name is the name of your migration i.e. products_table

## Running your API

### Using the API

#### Testing with Postman/Insomnia

Open Postman/Insomnia and create a new request.
Select the HTTP method (GET, POST, PUT, DELETE) and enter the endpoint URL.
For POST and PUT requests, go to the Body tab, select raw, and choose JSON format.
Enter the request body as shown in the examples.
Send the request and review the response.

The server will run at http://localhost:3005. You can now make API requests, e.g., http://localhost:3000/feed.
Using the REST API
You can access the REST API using the following endpoints:

### 1 - Get a single product

Method GET `/products/:id` Fetch a single product by its ID.

i.e. `localhost:3005/products/3`

### 2 - Get all products

Method GET `/products` Fetch all products in the table.

i.e. `localhost:3005/products`

### 3 - Create a single product

Method POST `/products` Create a new product.

i.e `localhost:3005/products`

**Request body:**

```json
{
  "productthumbnail": "http://dummyImage",
  "producttitle": "Oil",
  "productdescription": "This is the first product",
  "productcost": 4,
  "onoffer": true
}
```

### 4 - Updating a product

Method PATCH `/products/:id`: Toggle the publish value of a post by its ID.

i.e `localhost:3005/products/4`

**Request body:**

```json
{
  "productthumbnail": "http://dummyImage4",
  "producttitle": "Backing Floor",
  "productdescription": "This is the second product",
  "productcost": 50,
  "onoffer": false
}
```

### 5 - Deleting a product

Method DELETE `/products/:id`: Toggle the publish value of a post by its ID.

i.e `localhost:3005/products/4`
