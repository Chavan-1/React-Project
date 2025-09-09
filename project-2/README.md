Project 2:

📩 Contact Page

The Contact Page is designed to allow users to connect easily via multiple communication methods. It includes a responsive form, styled buttons, and clear UI for better usability. The page is divided into three main components:

🔹 Components
Navigation (Navigation.jsx)
Displays the site navigation bar with a logo and menu items: Home, About, Contact.
Uses a separate CSS module (Navigation.module.css) for styling.
Contact Header (ContactHeader.jsx)
Contains the page title ("CONTACT US") and a short description encouraging users to reach out.
Styled using ContactHeader.module.css to keep the layout clean and centered.
Reusable Button (Button.jsx)
A reusable button component that supports:
Primary and Outline button styles (controlled via isOutline prop).
Icons using react-icons (like chat, phone, and email).
Custom text and onClick handlers.
Contact Form (ContactForm.jsx)
Provides three contact methods:

📩 Email form (with fields for Name, Email, Text).
💬 Support Chat button.
📞 Call button.

Uses useState hooks to manage input values dynamically.
onSubmit event prevents page reload and updates the state with user inputs.
Displays submitted form values below the form for instant feedback.
Styled with ContactForm.module.css.
Includes an illustration (contact.svg) for visual appeal.

🔹 Features
Form Handling: Input values are managed using React’s useState.
Reusable Components: Button component is used across the page to keep UI consistent.
Responsive Layout: Flexbox & CSS modules are used to maintain alignment across different screen sizes.
React Icons: Used for professional-looking button icons.
User Feedback: Entered form data is displayed on submit for verification.

🔹 Technologies Used
React.js (Functional Components + Hooks)
CSS Modules for scoped styling
React Icons for UI enhancements


<img width="1901" height="903" alt="ContactPage" src="https://github.com/user-attachments/assets/e5885f98-4e11-4ad7-9a88-dd5d5ae3d028" />
