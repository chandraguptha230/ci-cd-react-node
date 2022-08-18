import React, { useContext, useMemo, useEffect } from 'react';

import { IntlProvider } from 'react-intl';
import MomentUtils from '@date-io/moment';
import { create } from 'jss';
import rtl from 'jss-rtl';

import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createTheme, jssPreset, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppContext from '../contextProvider/AppContextProvider/AppContext';
import AppLocale from '../../../i18n';
import AppLayout from '../AppLayout';

//THeme
import { THEME_TYPES } from '../../constants/ThemeOptions';


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const AppWrapper = ({ children }) => {
  const { locale, theme, setTheme } = useContext(AppContext);
  const { themeType, setThemeType } = useContext(AppContext);
  const dt = localStorage.getItem('defaultTheme');


  const muiTheme = useMemo(() => {
    return createTheme(theme);
  }, [theme]);




  useEffect(() => {
    let def = {}
    


    if(themeType){
      def["theme_type"] = themeType;
    }

    if(theme && theme.palette){
      let { primary, secondary } = theme.palette
      console.log(primary)
      console.log(secondary)
      def.theme = {
        primary: primary.main,
        secondary: secondary.main
      }
    }
    localStorage.setItem('defaultTheme', JSON.stringify(def))

  }, [themeType, theme])


  useEffect(() => {
    if(dt){
      let df = JSON.parse(dt);
      if(df.theme_type){
        setThemeType(df.theme_type);
      }

      console.log(df.theme)

      if(df.theme && df.theme.primary && df.theme.secondary){
        setTheme(theme => ({
          ...theme,
          palette: {
            ...theme.palette,
            primary: {
              ...theme.palette.primary,
              main: df.theme.primary,
            },
            secondary: {
              ...theme.palette.secondary,
              main: df.theme.secondary,
            },
          },
        }));

      }


    }

  }, [])
  

 
  





  return (
    <IntlProvider locale={AppLocale[locale.locale].locale} messages={AppLocale[locale.locale].messages}>
      <ThemeProvider theme={muiTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <StylesProvider jss={jss}>
            <CssBaseline />
            <AppLayout>{children}</AppLayout>
          </StylesProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default AppWrapper;
