import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
 

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {/* routing */}
        <RouterProvider router={routes}/>
      </ThemeProvider>
    </>
  )
}

export default App
