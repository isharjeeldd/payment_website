import { container } from "../styles"
import Footer from "./footer/Foooter"
import Navbar from "./header/Navbar"

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="bg-primary w-full overflow-hidden">
                <Navbar />
                <div className={`${container}`}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout