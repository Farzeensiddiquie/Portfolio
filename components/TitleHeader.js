const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-neutral-800 py-2 px-4 rounded-full w-fit text-white text-sm md:text-base whitespace-nowrap">
        <p>{sub}</p>
      </div>
      <div>
        <p className="font-semibold text-5xl md:text-6xl text-white text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

export default TitleHeader;
