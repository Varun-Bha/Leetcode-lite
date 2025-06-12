const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Skills */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
          <div className="w-16 h-16 bg-white/20 rounded-full blur-xl -ml-6 mt-10"></div>
        </div>
      </div>

      {/* Performance */}
      <div className="bg-gradient-to-br from-green-700 to-teal-500 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Performance</h2>
        <div className="space-y-4">
          <div className="h-4 bg-white/20 rounded-full w-3/4"></div>
          <div className="h-4 bg-white/20 rounded-full w-2/3"></div>
          <div className="h-4 bg-white/20 rounded-full w-5/6"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
