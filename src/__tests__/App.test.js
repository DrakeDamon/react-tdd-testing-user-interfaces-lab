import { getByTestId, getByText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text", () => {
  // Arrange
   render(<App />);

   // Act & Assert
   const image = screen.getByAltText('picture of myself');

   expect(image.src).toContain('https://placehold.co/600x400');
  });


test("displays a second-level heading with the text `About Me`", () => {
  // Arrange
  render(<App />);

  // Act
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,  // Corrected regular expression
    level: 2,
  });

  // Assert
  expect(secondLevelHeading).toBeInTheDocument();
});


test('it renders a paragraph for you biography', () => {

  //Arrange
  render(<App />);
 // Act
 // Assert
  expect(screen.getByText(`This is a paragraph for your biography`)).toBeInTheDocument()
}) 

test('it renders a link to your GitHub page', () => {

  // Arrange
  render(<App />);

  // Act & Assert
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/your-username');
});

test('it renders a link to your LinkedIn page', () => {

  // Arrange
  render(<App />);

  // Act & Assert
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com/in/your-profile');
});
