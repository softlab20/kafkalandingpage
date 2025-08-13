import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <section className="bg-transparent">
      <div className="relative h-screen w-full overflow-hidden bg-[url('/bg-image3.jpg')] bg-no-repeat bg-center bg-cover">
        {/* Background Image */}
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70"></div>
        </div> */}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center max-sm:space-y-15 justify-center sm:justify-between px-6 py-8 text-white">
          {/* Logo Section */}
          <div className="flex flex-col items-center pt-8">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full max-w-34 sm:max-w-64 object-contain"
            />
          </div>

          {/* Main Content */}
          <div
            className="flex flex-col items-center space-y-5 sm:space-y-7 gap-5 sm:gap-9 text-center"
            dir="rtl"
          >
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-bold font-tufuli-arabic text-[#fdfdfd]/80" >
              فوضي منظمة !
            </h1>

            {/* Subheading */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#fdfdfd]/80">
              كتب , أقلام , وأفكار لا تنتهي ،،،
            </p>

            {/* Additional Text */}
            <p className="text-lg md:text-xl lg:text-2xl text-[#fdfdfd]/80">
              ما بقي شي , لا تروحو بعييد
            </p>

            {/* Studio Button */}
            <h2 className="text-lg md:text-xl lg:text-2xl text-[#fdfdfd]/80">
              تابعوووونا,,
            </h2>
          </div>

          {/* Contact Information */}
          <div className="grid gap-4">
            {/* Email */}
            <div className="flex items-center gap-8">
              <HiMail className="size-5 text-[#fdfdfd]/80" />
              <span>hi@kafkabookstore.com</span>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-8">
              <FaInstagram className="size-5 text-[#fdfdfd]/80" />
              <span>@kafkabooks</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-8">
              <FaWhatsapp className="size-5 text-[#fdfdfd]/80" />
              <span>0558560997</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
