const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
  {
    imgPath: "/images/extra.png",
    title: "Extra Value",
    desc: "Adding more than promised, going beyond expectations.",
  },
];

const FeatureCards = () => (
  <div className="relative w-full px-6 py-12">
    <div className="flex flex-wrap justify-center gap-8  mx-auto">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="w-[280px] h-[280px] border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-8 flex flex-col gap-4 hover:border-white/30 transition-colors duration-300"
        >
          <div className="size-14 flex items-center justify-center rounded-full bg-white/5">
            <img src={imgPath} alt={title} className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white/70 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
