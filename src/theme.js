'use client';
import { extendTheme} from "@chakra-ui/react";
const breakpoints = {
  sm: "30em", 
  md: "48em", 
  lg: "80em", 
  xl: "120em",
};
export const theme = extendTheme({
  breakpoints:breakpoints
});