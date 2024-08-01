module.exports = {
  plugins: {
    "postcss-import": {}, // Allows you to use @import in your CSS files
    tailwindcss: {}, // Your Tailwind CSS configuration
    autoprefixer: {}, // Adds vendor prefixes to CSS rules
    "postcss-flexbugs-fixes": {}, // Fixes some known flexbox bugs
    "postcss-preset-env": {
      // Converts modern CSS into something browsers understand
      stage: 3,
      features: {
        "nesting-rules": true, // Enables CSS nesting
      },
      autoprefixer: {
        flexbox: "no-2009", // Disable flexbox 2009 spec
      },
    },
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}), // Minifies CSS in production
  },
};
