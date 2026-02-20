export default function MobileApp() {
  return (
    <div className="flex justify-center gap-10 w-full">
      <img src="/images/envelope.svg" alt="image" className="h-180 w-1/3"/>
      <div className="w-1/3 flex flex-col justify-center h-180 gap-5">
        <div
          style={{ backgroundColor: "#d4e3fa", color: "blue" }}
          className="w-25 h-5 text-xs text-center rounded"
        >
          Mobile App
        </div>
        <p className="text-4xl font-medium">
          Available for your Smartphones
        </p>
        <p className="bg-grey-400">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 30000+ companies worldwide.
        </p>
        <div className="flex gap-5">
            <img src="/images/app.webp" alt="app store" className="w-15"/>
            <img src="/images/playstore.webp" alt="play store" className="w-15"/>
        </div>
        <hr className="w-1/2"/>
        <p>Install app now on your cellphones</p>
        <p className="text-purple-400">Learn More &gt;</p>
      </div>
    </div>
  );
}
