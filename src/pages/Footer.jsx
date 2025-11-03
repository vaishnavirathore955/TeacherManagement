import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="bg-[#1A1445] text-white px-4 sm:px-8 md:px-12 lg:px-[100px] pt-[60px] md:pt-[80px] pb-[30px] text-[15px] leading-[26px] font-[400]"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-[50px] lg:gap-[70px] border-b border-[#2C275F] pb-[60px]">
        {/* EduVibe Info */}
        <div className="max-w-full lg:max-w-[320px]">
          <div className="flex items-center gap-2 mb-5">
            <img src="/logo.jpg" alt="EduVibe" className="w-35 h-30 items-center rounded-sm" />
           
          </div>
          <p className="text-[#C3C3C3] font-bold text-[14px] md:text-[15px]">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter].map((Icon, index) => (
              <div
                key={index}
                className="bg-[#2C275F] hover:bg-[#403C80] w-[45px] h-[45px] md:w-[55px] md:h-[55px] flex items-center justify-center rounded-[4px] cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-[17px] md:text-[18px] font-[600] mb-5">Explore</h4>
          <ul className="space-y-3 font-bold text-[#C3C3C3]">
            {[
              { label: 'About Us', path: '/about-us' },
              { label: 'Upcoming Events', path: '/events' },
              { label: 'Blog & News', path: '/blog' },
              { label: 'FAQ Question', path: '/faq' },
              { label: 'Testimonial', path: '/testimonials' },
              { label: 'Privacy Policy', path: '/privacy-policy' },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 hover:text-white">
                <IoIosArrowForward size={16} />
                <Link to={item.path} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-[17px] md:text-[18px] font-[600] mb-5">Useful Links</h4>
          <ul className="space-y-3 font-bold text-[#C3C3C3]">
            {[
              { label: 'Contact Us', path: '/contacts' },
              { label: 'Pricing Plan', path: '/pricing' },
              { label: 'Teacher', path: '/teachers' },
              { label: 'Service', path: '/services' },
              { label: 'Purchase Guide', path: '/purchase-guide' },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 hover:text-white">
                <IoIosArrowForward size={16} />
                <Link to={item.path} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[17px] md:text-[18px] font-[600] mb-5">Contact Info</h4>
          <ul className="space-y-4 font-bold text-[#C3C3C3]">
            <li className="flex items-start gap-3 hover:text-white">
              <HiOutlineLocationMarker size={18} className="mt-1" />
              <span>
               221,xyz, 
                <br />
                Indore, India 012345
              </span>
            </li>
            <li className="flex items-center gap-3 hover:text-white">
              <FaPhoneAlt size={16} /> 0123456789
            </li>
            
            <li className="flex items-center gap-3 hover:text-white">
              <FaEnvelope size={16} /> xyz@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-[13px] md:text-[14px] text-[#C3C3C3] mt-8">
        © 2025 Vaishnavirathore |  All Rights Reserved
      </div>
    </footer>
  );
}
