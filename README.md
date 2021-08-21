# Kasa | Develop a Web App with React and React Router

## Developed Skills

- Create React class components
- Develop the routes of an application with React Router
- Initialize a React web app

## Description

Kasa is one of the leading rental companies in Europe. They have been in the apartment rental business for almost ten years.

Aim of the project was to **migrate to an exclusively JavaScript stack with React on the frontend** (and Node.js on the backend).

As no backend was available for this project, a basic JSON file with 20 sample apartment listings was supplied. The interface design was also supplied in form of mock-ups on Figma.

## Objectives

Develop an entire React application, including the React components and the React Router routes.

## Functional Requirements

- Photo scrolling functionality in the gallery (gallery component):
  - If the user is on the first image of the gallery and clicks on Previous Image, it displays the last image.
  - Conversely, if the user is on the last image in the gallery and clicks on Next Image, it displays the first image.
  - If there is only one image, the Next and Previous buttons do not appear.
  - The gallery must always remain at the same height (the one indicated on the Figma model). The images must be cut and centered to fit within the image frame.
- Collapse: By default, Collapse is closed at page initialization.

  - If the Collapse is open, the user clicks to close it.
  - Conversely, if the Collapse is closed, a click opens it.

## Design Requirements

- realize the interface design according to the mock-ups on Figma
- take all design ressources directly from the mock-ups (logo, icons, etc).

## Technical constraints

### React

- It is imperative to use these elements of React for quality code:
- Split code into modular and reusable components.
- One component per file.
- Logical structure of the different files.
- Use of props between components.
- Use of state in components when necessary.
- Event management.
- Class-based components, no function components.
- Lists: React lists should be used as much as possible (ex. for iterating,
  maps, etc).

### React Router

- The route parameters are managed by React Router in the URL to
  retrieve the information for each listing.
- One page per route.
- The page 404 is returned for each non-existent route, or if a value in
  the URL is not part of the data filled in.
- The logic of the router is gathered in a single file

### General

- no backend available, instead basic JSON file with 20 sample apartment listings was supplied.
- The code must not produce errors or warnings in the console.

### Tools

- [Create React App](https://create-react-app.dev/docs/getting-started/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- Styling: The use of SASS is optional. CSS is to be used by default.
- No React external libraries

## Challenges & Achievements

n/A

## Demo

Link to page: [Kasa](https://christinebogdan.github.io/p8_HotelBooking/)
