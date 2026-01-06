/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Fuentes personalizadas
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      
      // Sombras personalizadas
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      
      // Bordes personalizados
      borderWidth: {
        '3': '3px',
      },
      
      // Animaciones personalizadas
      animation: {
        'slide-in': 'slideIn 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      
      // Keyframes para las animaciones
      keyframes: {
        slideIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(16, 185, 129, 0.8)' 
          },
        },
      },
      
      // Colores personalizados (opcional, Tailwind ya tiene buenos colores)
      colors: {
        // Puedes agregar colores personalizados aquí si lo necesitas
      },
    },
  },
  plugins: [],
}