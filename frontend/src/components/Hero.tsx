const Hero = () => {
  return (
    <main className="text-center px-6 mt-16">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Solve Problems Faster with Deepcode</h1>
      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        The platform developers trust, on a serverless platform designed to help you solve problems and scalable applications faster.
      </p>
      <div className="flex justify-center gap-6 mb-16">
        <button className="bg-green-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-green-500">Start for Free</button>
        <a href="#" className="text-white flex items-center gap-2 hover:underline">Talk to Us →</a>
      </div>
    </main>
  );
};

export default Hero;
