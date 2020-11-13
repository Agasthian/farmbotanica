// #66BB6A
//#f8b400
// #28cc9e
//#196b69

export default {
  fonts: {
    main: "Poppins, sans-serif",
    para: "Open Sans, sans-serif",
  },
  colors: {
    main1: "#66BB6A",
    main2: "#f8b400",
    dark1: "#303030",
    dark2: "#757575",
    dark3: "#BDBDBD",
    light1: "hsl(0,0%,97%)",
    light2: "hsl(0,0%,99%)",
  },
  mediaQueries: {
    micro: `only screen and (max-width:20em)`, // 20 *16 = 320px
    smallest: `only screen and (max-width: 25em)`, // 25*16 = 400px
    smaller: "only screen and (max-width: 34.37em)", // 550px
    small: "only screen and (max-width: 48em)", //768px
    medium: "only screen and (max-width: 56.25em)", //900px
    large: "only screen and (max-width: 62.5em)", //1000px
    larger: "only screen and (max-width: 80em)",
    largest: "only screen and (max-width: 90em)",
  },
  spacings: {
    xxSmall: ".25em",
    xSmall: ".5em",
    Small: "1em",
    medium: "2em",
    large: "3em",
    xLarge: "4em",
    xxLarge: "6em",
  },
  animation: {
    button: "box-shadow 0.3 ease",
    link: "color 0.2s ease",
  },
  shadows: {
    shadow1: "0px 5px 20px rgba(30,30,31,0.5)",
  },
}


