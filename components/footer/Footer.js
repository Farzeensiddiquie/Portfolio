const Footer = () => {
  const socialImgs = [
    { name: "insta", imgPath: "/images/social-1.png ",link: "https://www.instagram.com/farzeen_siddiquie/" },
    { name: "fb", imgPath: "/images/fb.png",link: "https://www.facebook.com/profile.php?id=61563782512766" },
    { name: "x", imgPath: "/images/x.png",link: "https://x.com/Farzeen3284" },
    { name: "linkedin", imgPath: "/images/linkedin.png", link: "https://www.linkedin.com/in/farzeen-wasif" },
  ];

  return (
      <footer className="mt-10 md:mt-20 z-10 min-h-[10vh] text-white/50 px-5 md:px-20 flex items-center justify-center">

    <div className="grid grid-cols-1 z-10 md:grid-cols-3 gap-5 md:gap-y-0 w-full">
        
        {/* Left column */}
        <div className="flex md:flex-col justify-center">
           <p>Terms & Conditions</p>
        </div>

        {/* Middle column - social icons */}
        <div className="flex items-center justify-center gap-5">
          {socialImgs.map((socialImg, index) => (
            <div
              key={index}
              className="border border-neutral-700 bg-neutral-800 flex justify-center items-center rounded-xl size-10 md:size-12 cursor-pointer transition-all duration-300 hover:bg-neutral-700"
            >
              <a
                key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="inline-block w-5 h-5 object-contain"
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
              />
              </a>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Farzeen <span className="text-[#14827ec1]">Siddiqui</span> . All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
