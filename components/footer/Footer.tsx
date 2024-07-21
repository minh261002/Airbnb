import Image from "next/image";

// components/Footer.js
const Footer = () => {
    return (
        <footer className="bg-muted text-gray-700 mt-16">
            <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Column 1 - Logo, Description, Social Icons */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="mb-4">
                        <Image alt="logo" src='/logo.png' width={120} height={120} className="object-cover" />
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-4.786 13.536a5.5 5.5 0 01-3.919-3.919M15 10a5 5 0 10-10 0 5 5 0 0010 0z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 2 - Links */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Links</h2>
                    <ul className="text-sm text-gray-500">
                        <li><a href="#" className="hover:text-gray-600">Home</a></li>
                        <li><a href="#" className="hover:text-gray-600">About</a></li>
                        <li><a href="#" className="hover:text-gray-600">Services</a></li>
                        <li><a href="#" className="hover:text-gray-600">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3 - Links */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Resources</h2>
                    <ul className="text-sm text-gray-500">
                        <li><a href="#" className="hover:text-gray-600">FAQ</a></li>
                        <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-600">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-gray-600">Support</a></li>
                    </ul>
                </div>

                {/* Column 4 - Links */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Legal</h2>
                    <ul className="text-sm text-gray-500">
                        <li><a href="#" className="hover:text-gray-600">Copyright</a></li>
                        <li><a href="#" className="hover:text-gray-600">Disclaimer</a></li>
                        <li><a href="#" className="hover:text-gray-600">Refund Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="bg-primary text-white text-sm py-2">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024   All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
