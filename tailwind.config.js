/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./loginform/**/*.html",    // Sửa lại cho đúng tên thư mục của bạn
    "./layoutpage/**/*.html",
    "./index.html",             // Nếu bạn có file index ở gốc
    "./src/**/*.{html,js}"      // Quét thêm thư mục src nếu có chứa code
  ],
  theme: {
    extend: {
      colors: {
        'black-dark': '#00000050',
        'dull-white': '#FFFFFFB3',
        'white-light': '#FFFFFF30',
        'white-medium': '#FFFFFF40',
        'neon-blue': '#2FB8FF',
      }
    },
  },
  plugins: [],
}

