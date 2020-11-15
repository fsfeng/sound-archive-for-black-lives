const grommettheme = {
  global: {
    font: {
      family: "'Space Mono', monospace;"
    },
    colors: { custom1: "#ff99cc", custom2: "#300080" }
  },
  heading: {
    extend: props => `font-family: 'Sarala', sans-serif;`
  },
  carousel: {
    animation: {
      duration: 10
    }
  },
  text: {
    extend: props => `font-family: 'Assistant', sans-serif;`
  }
};

export default grommettheme;
