// tailwind.config.js

module.exports = {
    content: [
      './**/*.html',  // Ajoutez ici les fichiers HTML
      './**/*.js',    // Si vous avez des fichiers JS, ajoutez-les aussi
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  // tailwind.config.js

module.exports = {
    theme: {
      extend: {
        borderWidth: {
          '3': '3px',  // Ajoute la classe `border-3` avec une largeur de 3px
        },
      },
    },
  }
  