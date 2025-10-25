import Navbar from "./Navbar";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
	return (
		<div className='min-h-screen bg-base-100 flex flex-col'>
			<Navbar />
			<main className='flex-grow max-w-7xl w-full mx-auto px-4 py-6'>{children}</main>
            <Footer />
		</div>
	);
};
export default Layout;
