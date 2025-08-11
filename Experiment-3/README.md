Admin Dashboard with CSS-Only Dark Mode

 Overview
This project is a **responsive admin dashboard** with a **light/dark mode toggle** built entirely with HTML and CSS — no JavaScript required.  
The theme switch uses **CSS custom properties (variables)** and the `:has()` selector to dynamically update colors.
 Features
- **Responsive Layout**: Uses CSS Grid for a structured, adaptive design.
- **Dark Mode Toggle**: Pure CSS solution using `:has()` and custom properties.
- **Clean UI**: Minimalistic style for easy customization.
- **No JavaScript**: Entirely HTML & CSS based.

 Layout Sections
- **Header**: Displays the title and dark mode toggle.
- **Sidebar (Navigation)**: Links to dashboard sections.
- **Main Content**: Placeholder for charts, tables, or reports.
- **Footer**: Displays copyright.

 How Dark Mode Works
- **CSS Variables** are defined in `:root` for light mode.
- When the checkbox with `id="switchtheme"` is checked,  
  `.dashboard:has(#switchtheme:checked)` updates the variables to dark mode values.

