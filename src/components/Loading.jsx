const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFF7F7]">
      <div className="relative flex items-center justify-center">
        <span className="loading loading-bars loading-lg text-[#FF8F8F]"></span>
        <div className="absolute w-16 h-16 rounded-full bg-[#FF8F8F]/10 blur-xl animate-pulse"></div>
      </div>
      <p className="mt-6 text-[#FF8F8F] font-semibold text-lg animate-pulse tracking-wide">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
