const Hero = () => {
  return (
    <div className="relative -mx-5 -mt-[90px] pt-[90px]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://res.cloudinary.com/dudwjf2pu/video/upload/v1732805721/7020045_Abstract_Background_1920x1080_wfhrkz.mp4"
          type="video/mp4"
        />
      </video>

      {/* Header Content */}
      <section className=" relative px-5 py-10 flex flex-col items-center space-y-10 text-center h-[560px] pt-[80px]">
        <div className="space-y-8">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl box-content font-extrabold text-transparent text-center select-none">
            A Digital Product Studio <br /> that will work
          </span>
          <h1
            className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center text-white bg-clip-text text-3xl font-extrabold text-center ">
            A Digital Product Studio <br /> that will work
          </h1>
          {/* <p className="p-5">For startups, enterprise leaders, media & publishers, and social good. </p> */}
        </div>
        <div className="space-x-3">
          <div className="relative inline-flex  group">
            <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href="#" title="Contact Us"
              className="relative inline-flex items-center justify-center px-6 py-3 text- font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button">Contact Us
            </a>
          </div>
          <div className="relative inline-flex  group">
            <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href="#" title="Contact Us"
              className="relative inline-flex items-center justify-center px-6 py-3 text- font-bold text-gray-900 transition-all duration-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button">Our Works
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero