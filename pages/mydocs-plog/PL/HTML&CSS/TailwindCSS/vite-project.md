# TailwindCSS Notes

##  Installation of TailwindCSS for Vite Framework

[Framework Guides](https://tailwindcss.com/docs/installation/framework-guides)

[Vite Guide](https://tailwindcss.com/docs/guides/vite)

```shell title="Create your project"
export PRJ_NAME="react-samples"
npm create vite@latest ${PRJ_NAME} -- --template react
cd ${PRJ_NAME}  
```

```shell title="Install Tailwind CSS"
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```javascript title="Configure your template paths"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css title="Add the Tailwind directives to your CSS"
# Delete everything in index.css and add the lines below
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```javascript title="app.jsx"
export default function App() {
  return (
    <h1>
      Hello world!
    </h1>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

[TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

```shell title="Automatic class sorting with Prettier"
npm install -D prettier prettier-plugin-tailwindcss
```

##  UI Component Libraries

Flowbite is a UI component library built on top of Tailwind CSS. It provides a collection of pre-designed components like buttons, forms, modals, and navigation elements, which are styled using Tailwind CSS utilities. Flowbite is particularly popular among developers who use Tailwind CSS, as it offers a quick way to implement UI components without having to design them from scratch.

### Popularity of Flowbite

- **GitHub**: Flowbite has a good number of stars and is actively maintained, which shows a healthy level of popularity in the developer community.
- **Documentation and Community**: It has comprehensive documentation and a growing community. Developers appreciate its simplicity and how it integrates seamlessly with Tailwind CSS.
- **Usage**: It's commonly used in projects where Tailwind CSS is the primary styling solution, especially for those who want a simple, utility-first CSS framework with ready-made components.

### Similar Frameworks

If you are looking for alternatives to Flowbite that offer similar utility and component-based approaches, here are some popular options:

1. **DaisyUI**: <https://daisyui.com/docs/install/> <https://nexus.daisyui.com/>
   - A Tailwind CSS component library that provides customizable components with a built-in theme system.
   - Easy to use and has a rapidly growing community.
   - Integrates well with Tailwind CSS, similar to Flowbite.

2. **Headless UI**:
   - Developed by the creators of Tailwind CSS, it provides unstyled, fully accessible UI components.
   - It allows developers to style components with Tailwind or any other CSS framework.

3. **Chakra UI**:
   - A popular component library that provides accessible, reusable, and composable components for React.
   - It can be integrated with Tailwind CSS, making it a flexible choice.

4. **Material Tailwind**:
   - A component library that combines the design principles of Material Design with the utility classes of Tailwind CSS.
   - Popular among developers looking for a Material Design aesthetic.

5. **Mantine**:
   - A comprehensive React component library with support for theming, dark mode, and hundreds of customizable components.
   - Offers a more robust set of features compared to Flowbite and is suitable for more complex applications.

6. **Windmill**:
   - Offers a collection of Tailwind CSS templates and components.
   - Similar in spirit to Flowbite, focusing on simplicity and ease of use.

### Conclusion

Flowbite is quite popular among developers who prefer Tailwind CSS and are looking for pre-built UI components to speed up development. However, other libraries like DaisyUI, Headless UI, Chakra UI, and Mantine offer similar or even more comprehensive features, depending on the needs of the project. Your choice will depend on your specific requirements, such as design system preferences, customization needs, and the level of community support you desire.
