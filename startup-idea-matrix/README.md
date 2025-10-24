# Startup Idea Matrix

This project is a web application that generates startup ideas and displays them in a matrix format based on their desirability and feasibility. The application aims to assist users in decision-making by visualizing the potential of various startup concepts.

## Features

- Generate 9 random startup ideas with a click of a button.
- Display ideas in a matrix format to evaluate desirability versus feasibility.
- Interactive user interface built with React.

## Project Structure

```
startup-idea-matrix
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── index.js            # Entry point of the React application
│   ├── App.js              # Main application component
│   ├── components
│   │   ├── IdeaGenerator.js # Component for generating ideas
│   │   ├── IdeaGrid.js      # Component for displaying ideas in a matrix
│   │   ├── IdeaCard.js      # Component for individual idea representation
│   │   └── MatrixLegend.js   # Component for matrix legend
│   ├── styles
│   │   └── main.css         # CSS styles for the application
│   └── utils
│       └── ideas.js         # Utility for generating startup ideas
├── package.json             # NPM configuration file
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd startup-idea-matrix
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.