/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
     colors:{
      cans:'#2699fb',
      clifford: '#D1CAA1',
     },
    //  backgroundImage:{
    //   'box_circle':'url(../images\box_circles.svg)'
    //  },
    screens:{
      'xs':{'min':'300px' ,'max':'639px'}
    }

      },
    },
  }
 


