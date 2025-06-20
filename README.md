# Front-End Engineering Skill Test

This project is presented as a front-end engineering skill test for Chicks Group. It's an attempt to build a responsive and visually consistent web application, drawing inspiration from the design principles observed on `chicksgold.com`. The focus here is on a product listing page, aiming to showcase capabilities in UI/UX implementation, pure CSS styling, and responsive design.

## Overview

This application is a mock front-end implementation of a product listing page. It's inspired by the general aesthetic and functionality found on `chicksgold.com`. While it's not connected to a live API, the goal was to carefully recreate the visual design and interactive elements to demonstrate front-end development skills that I believe are relevant to the kinds of challenges Chicks Group faces with its web properties in the video games and crypto space.

## Technical Requirements

- **Technology Stack**: Developed using **ReactJS** and **TypeScript** with **Next.js (App Router)**. This choice showcases modern React development practices, component-based architecture, and server-side rendering concepts, which I believe are valuable and transferable skills across various front-end frameworks, including Svelte and Aurelia.
- **Pure CSS**: All styling has been implemented using custom CSS files (`src/styles/*.css` and `src/app/globals.css`). This approach was taken to showcase a foundational understanding of web styling, layout techniques (Flexbox, Grid), and the ability to craft designs without relying on external CSS frameworks. It was a deliberate choice to highlight control over the visual output.
- **Responsive Design**: The application was built with responsiveness in mind, aiming to adapt gracefully across different screen sizes, from smaller mobile devices to larger desktop views. Efforts were made to adjust layout, typography, and interactive elements to maintain usability and visual integrity on every device.
- **Card Proportions**: Particular attention was given to trying to maintain consistent proportions and visual balance of the product cards across different screen sizes, which was an interesting aspect of the design to implement.

## Features

- **Responsive Product Grid**: Products are displayed in a grid layout that attempts to adjust the number of columns and card sizes based on the viewport width.
- **Dynamic Pagination**: A functional pagination system is included, allowing navigation through product pages. The number of products displayed per page is adjusted for smaller screens to try and optimize the mobile experience.
- **Interactive Filtering & Sorting**: The application includes interactive dropdowns for filtering products by "Game", "Price", and "Item Type", along with a "Sort By" option. These elements were designed to visually align with the `chicksgold.com` style.
- **Product Cards**: Each card is a component designed to display a product image, name, current price, an "old price" for "on sale" items, a brief description, "On Sale" and "In Stock" badges, and quantity control buttons.
- **Custom "On Sale" Logic**: Custom logic was implemented for marking products as "on sale," ensuring the first few items are highlighted, and then applying a less regular pattern to subsequent items to add some visual variety.
- **Immersive Background**: The main content area features a looping video background with a subtle, site-themed gradient overlay, intended to enhance the visual appeal and demonstrate layering techniques in CSS.

## Design Choices & Implementation Details

The design of this application is an interpretation of the `chicksgold.com` product listing page. The styling was done using pure CSS to demonstrate a solid understanding of styling fundamentals.

- **Visual Fidelity**: Efforts were made to match the specific colors, gradients, shadows, and typography observed on `chicksgold.com`. This includes the distinct styling of the header, footer, filter bar, and product cards.
- **Complex Layouts with Pure CSS**: CSS Flexbox and Grid were extensively used to build the various layouts, such as the product grid, the filter bar, and the header/footer. This was an opportunity to show how complex UIs can be constructed without relying on framework-specific components or utility classes.
- **Responsive Adaptations**:
  - **Filter Bar**: On smaller screens, the horizontal filter bar transitions to a vertical stack, and the search input expands, aiming for better usability.
  - **Product Grid**: The grid dynamically adjusts its column count (e.g., from 5 columns on desktop to fewer on mobile) to try and ensure optimal viewing and interaction.
  - **Component Scaling**: Elements like product card images, text, and interactive controls are scaled using `clamp()` and relative units (`vw`) in conjunction with media queries to help maintain visual harmony and readability across diverse screen sizes.
  - **Background Video**: The background video is implemented to cover the entire main content area, with a semi-transparent overlay designed to preserve the site's dark, vibrant aesthetic while keeping content legible.
- **Asset Integration**: Placeholder images and the provided `.webm` video are integrated, aiming to demonstrate proper asset management and optimization for web delivery. Icons from `react-icons` are used, which compile to SVG, aligning with the pure CSS philosophy by avoiding image-based icons where possible.

## Instructions on How to Run Your Application

To get this application up and running on your local machine, please follow these steps:

1.  **Clone the repository**:
    First, clone this GitHub repository to your local machine using the following command:
    \`\`\`bash
    git clone [YOUR_REPOSITORY_URL_HERE]
    \`\`\`
    Then navigate into the project directory:
    \`\`\`bash
    cd [your-project-folder-name]
    \`\`\`

2.  **Install dependencies**:
    This project uses `npm` (Node Package Manager) for dependency management. Install all required packages by running:
    \`\`\`bash

    # npm install

    # or if you prefer yarn

    # yarn install

    \`\`\`

3.  **Run the development server**:
    Once the dependencies are installed, you can start the development server. This will compile the application and make it accessible in your browser.
    \`\`\`bash

    # npm run dev

    # or

    # yarn dev

    \`\`\`

4.  **Open in your browser**:
    After the development server starts, open your web browser and navigate to `http://localhost:3000`. You should see the application running.

## Usage

- **Navigation**: The header contains navigation links (e.g., "CURRENCY", "ITEMS") that are visually implemented but serve as placeholders for a full application.
- **Filters**: Interact with the "Select a game", "Price", and "Item Type" dropdowns to see their visual behavior.
- **Search**: Type into the "Search" bar to simulate searching for products.
- **Sorting**: Use the "Sort By" dropdown to observe the styling and interaction of sorting options.
- **Pagination**: Click the page numbers or the "Previous"/"Next" arrows to navigate through the dummy product pages.
- **Product Cards**: Each product card includes quantity controls and "DETAILS"/"ADD" buttons, demonstrating interactive elements.

## Evaluation Criteria (Self-Assessment)

This project was an opportunity to demonstrate capabilities that I believe align with the requirements for a Senior Front-End Engineer at Chicks Group.

- **Adherence to Technical Requirements**: I've aimed for close adherence to ReactJS, TypeScript, Next.js (App Router), and pure CSS for all styling. Full responsiveness and consistent card proportions were key goals.
- **Code Quality and Organization**: The codebase is structured with component separation (`Header.tsx`, `MainContent.tsx`, `Footer.tsx`, `ProductCard.tsx`) and dedicated CSS modules, with an aim towards maintainability and readability.
- **Problem-Solving & Attention to Detail**: Recreating complex UI elements and responsive behaviors using pure CSS, including custom "on sale" logic and the background video overlay, presented interesting challenges and allowed me to focus on detail.
- **Cross-Framework Applicability**: While implemented in React, I believe the core principles of component design, state management (local to components), responsive styling, and performance considerations are fundamental and should be transferable to other modern front-end frameworks like Svelte and Aurelia.
- **Documentation**: This README attempts to provide a clear guide to the project's setup, functionality, and the rationale behind some of the design and technical choices.

## Live Demo

A live demo of this application can be found [here](https://chicksgold-test-frontend.vercel.app/).
