# NY Times App

This is a simple React application that displays the most popular articles from the NY Times. Users can view a list of articles and see details for each article when clicked.

## Features

- Fetches and displays a list of the most popular articles from the NY Times API.
- Displays article details when an article is clicked.
- Includes unit tests with Jest and React Testing Library.
- Includes end-to-end tests with Cypress.

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mtachaudhary/ny-times.git
   cd ny-times-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file and add variable:

   ```bash
   REACT_APP_NY_API_KEY="YOUR_API_KEY"
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm start
   ```

## Running Tests

### Unit Tests

Unit tests are written using Jest and React Testing Library.

To run the unit tests:

```bash
npm start
```

To generate a coverage report:

```bash
npm test -- --coverage
```
Coverage reports will be available in the coverage directory.

### End-to-End Tests

End-to-end tests are written using Cypress.

1. Start the development server:

   ```bash
   npm start
   ```

2. Open Cypress in a new terminal:

   ```bash
   npx cypress open
   ```

3. Run the tests by selecting `articles.cy.js` in the Cypress Test Runner.

## Project Structure

- `src/`: Contains the source code for the React application.
  - `components/`: Contains React components.
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.
  - `context/`: Contains app context to manage states.
- `cypress/`: Contains Cypress end-to-end tests.
  - `fixtures/`: Contains fixture data for tests.
  - `e2e/`: Contains test specifications.
  - `support/`: Contains support files and custom commands.
- `public/`: Contains the public assets for the application.
- `package.json`: Contains the project configuration and dependencies.
- `cypress.config.json`: Contains Cypress configuration.
- `.gitignore`: Contains files and directories to be ignored while commiting.
- `README.md`: This file.

## API Key

Replace `YOUR_API_KEY` for `REACT_APP_NY_API_KEY` in `.env` file with your actual NY Times API key. You can obtain an API key by signing up on the [NY Times Developer site](https://developer.nytimes.com/).

## Notes

- This project is intended for educational purposes and development use. Do not use the public CORS proxy in production.
- Ensure that your API key is kept secure and not exposed in a public repository.

