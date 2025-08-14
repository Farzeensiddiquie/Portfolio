const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex justify-center items-center h-full">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="max-h-full w-[15vw] object-contain"
        draggable="false"
      />
    </div>
  );
};

export default function LogoShowcase() {
  return (
    <div className="md:my-20 my-10 relative overflow-hidden">
      <div className="relative h-24 md:h-32 w-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center gap-5 md:gap-12 w-[200%] h-full animate-[marquee_60s_linear_infinite] will-change-transform">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`first-${index}`} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`second-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
