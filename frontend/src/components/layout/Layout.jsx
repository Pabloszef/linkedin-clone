import Navbar from "./Navbar";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
	return (
		<div className='min-h-screen bg-base-100'>
			<Navbar />
			<main className='max-w-7xl mx-auto px-4 py-6'>{children}</main>
            <Footer />
		</div>
	);
};
export default Layout;
