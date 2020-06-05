const colors = {
    primary: '#9F2520',
    acent: '#39BD98',
    errorText: '#FA3256',
    headerText: '#444444',
    buttonBackground: '#6b6179',
    appBackground: '#FAFAFA',
    gold: '#f7a941',
    purple: '#6b6179',
    white: '#FFFFFF',
    grey: '#7a8996',
    open: '#95989A',
    progress: '#FAC245',
    completed: '#78C16E',
    canceled: '#E07676',
    pending: '#9385A7',
    high: '#C77B7B',
    medium: '#78B4BC',
    low: '#7E8D97',
    poi:'#887c9a',
    hyperlink:'#4d9ce5',
    favBackground:'#7190A8',
    fieldText:'#59636b',
    notes:'#f2f2f2',
    borderGray:'#E2E3E3',
    homeBackground:'#152438',
    checkIn:'#78C16E',
    checkOut:'#D17272',
    menuHeader:'#2A3A43',
    msgReceive:'#f2f2f2',
    msgSent:'#ADCBE3',
    checkBox:'#A453A5',
    switch:'#A453A5',
    msgReceive:'#f2f2f2',
    inputBackground: '#FFFFFF',
    barGray: '#D9DDE0',
    inputDivider: '#E4E2E5',
    underLay: 'rgba(73,182,77,1,0.9)',

    txtInputBackground:'#E3E3E3',
    txtBoldBackground:'#8D6E63'
  };
  
  const ButtonStyle = {
    RoundedPurple: {
      backgroundColor: colors.buttonBackground,
      textColor: colors.white,
      borderRadius: 10,
      padding: 15,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 5,
      marginTop: 5
    },
    fab: {
      position: 'absolute',
      margin: 30,
      right: 0,
      bottom: 0,
      backgroundColor: colors.menuHeader
    }
  }
  
  const InputStyle = {
    RoundedWhite: {
      backgroundColor: colors.white,
      borderRadius: 10,
      textColor: colors.gold,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 5,
      marginTop: 5
    }
  }
  
  const dimensions = {
    appPadding: 16
  }
  
  const container = {
    flex: 1,  
    flexDirection: "column",
    padding: dimensions.appPadding
  }
  
  const Theme = {
    container,
    colors,
    ButtonStyle,
    InputStyle
  };
  
  export default Theme;