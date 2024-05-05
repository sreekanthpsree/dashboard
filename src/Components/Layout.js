import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header";
import SideBar from "./SideBar/Sidebar";



export default function Layout() {
    return (
        <div className="bg-slate-200">
            <Header />
            <SideBar />
            <main className="md:ml-24  p-1 h-full">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
}
