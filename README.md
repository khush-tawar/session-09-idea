# Startup Idea Generator 🚀

A web application that generates 9 unique startup ideas and visualizes them in a desirability vs feasibility matrix to help you identify the best opportunities.

## Features

- **Generate Ideas**: Click a button to instantly generate 9 unique startup ideas
- **Visual Matrix**: See ideas plotted on a 3x3 grid (desirability vs feasibility)
- **Color-coded Quadrants**: Easily identify high-value opportunities
- **Interactive**: Hover over numbered dots to see idea details
- **Detailed Cards**: View complete descriptions with scores below the matrix
- **Responsive Design**: Works on desktop and mobile devices

## How to Use

1. Open `index.html` in your web browser
2. Click the "Generate Ideas" button
3. Review the ideas on the matrix:
   - **Top-right (Green)**: High desirability & high feasibility - best opportunities!
   - **Bottom-left (Red)**: Low on both - avoid these
   - **Middle zones (Yellow)**: Mixed potential
4. Click "Generate Ideas" again for a fresh set of 9 ideas

## Running Locally

Simply open the `index.html` file in any modern web browser. No build process or dependencies required!

Alternatively, use a local server:
```bash
python3 -m http.server 8080
# Then open http://localhost:8080
```

## Technology Stack

- Pure HTML5
- CSS3 (with gradients and modern styling)
- Vanilla JavaScript (no frameworks or dependencies)
