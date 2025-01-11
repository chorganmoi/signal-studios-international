const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <img
          src="/lovable-uploads/2e911e29-4426-4849-8fa7-320ce216b473.png"
          alt="Landscape view"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif">Signal Studios</h1>
            <p className="text-lg md:text-xl font-light">Capturing moments in time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;