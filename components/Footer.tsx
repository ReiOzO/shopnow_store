import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-footer-bg text-footer-text py-footer">
            <div className="container mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="flex items-center space-x-3">
                        <img src="/logo.png" alt="Logo" className="w-40 h-auto" /> {/* Tăng kích thước logo ở đây */}
                    </div>
                    <div className="footer-section">
                        <h4 className="text-heading3-bold mb-4">Liên Kết</h4>
                        <ul>
                            <li><Link href="/" className="text-base-medium hover:text-red-1">Trang Chủ</Link></li>
                            <li><Link href="/services" className="text-base-medium hover:text-red-1">Dịch Vụ</Link></li>
                            <li><Link href="/blog" className="text-base-medium hover:text-red-1">Blog</Link></li>
                            <li><Link href="/contact" className="text-base-medium hover:text-red-1">Liên Hệ</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="text-heading3-bold mb-4">Kết Nối Với Chúng Tôi</h4>
                        <ul>
                            <li><Link href="" className="text-base-medium hover:text-red-1">Facebook</Link></li>
                            <li><Link href="#" className="text-base-medium hover:text-red-1">Twitter</Link></li>
                            <li><Link href="#" className="text-base-medium hover:text-red-1">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="text-heading3-bold mb-4">Địa Chỉ</h4>
                        <p className="text-body-medium">1234 Main St, Thái Nguyên, Việt Nam</p>
                    </div>
                </div>
                <div className="text-center mt-8 border-t border-footer-text pt-4">
                    <div className="flex justify-center space-x-6">
                        <Link href="https://www.facebook.com/Zin2102/" aria-label="Facebook">
                            <Facebook className="w-6 h-6 text-footer-text hover:text-red-1" />
                        </Link>
                        <Link href="https://www.facebook.com/Zin2102/" aria-label="Instagram">
                            <Instagram className="w-6 h-6 text-footer-text hover:text-red-1" />
                        </Link>
                        <Link href="https://www.facebook.com/Zin2102/" aria-label="Twitter">
                            <Twitter className="w-6 h-6 text-footer-text hover:text-red-1" />
                        </Link>
                        <Link href="https://www.facebook.com/Zin2102/" aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6 text-footer-text hover:text-red-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
