

function Projects() {
  return (
    <div className="bg-[url('/assets/third.jpg')] bg-cover overflow-hidden w-full py-20">
      <div className="text-center text-white text-5xl font-bold mb-12">
        Projects
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Project 1 */}
        <div className="cursor-pointer relative group w-[600px] h-[500px] bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/assets/one.png"
            alt="Project 1"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-95"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl transition-opacity duration-300">
            <a
              href="https://chatfrontend-icbn.vercel.app/"
              className="underline"
            >
              Visit video chat app?
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className=" cursor-pointer relative group w-[600px] h-[500px] bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <img
            src='/assets/one.png'
            alt="Project 2"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-95"
          />

          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl transition-opacity duration-300">
            <a
              href="https://www.itechcare.com.au/"
              target="_blank"
              className="underline"
            >
              Visit itechCare?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
