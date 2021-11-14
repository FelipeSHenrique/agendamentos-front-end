import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" children={<h1>HOME</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;