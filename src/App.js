import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";

import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </>
    );
};

export default App;
