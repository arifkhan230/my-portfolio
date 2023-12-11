import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">This is main</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;