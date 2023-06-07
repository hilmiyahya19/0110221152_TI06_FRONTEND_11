import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout(props) {
    return (
        <div>
            <Navbar></Navbar>
            <main>{props.children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout;