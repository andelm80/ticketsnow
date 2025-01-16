import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Helmet>
        <title>About Us - TicketMelody</title>
        <meta name="description" content="Learn about our expertise in bringing you the best musical theater experiences" />
      </Helmet>

      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-ticket-purple">Your Trusted Source for Musical Theater</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With decades of experience in the musical theater industry, we bring you unparalleled access to the world's most celebrated shows.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-ticket-blue">Our Expertise</h2>
            <p className="text-gray-700 leading-relaxed">
              At TicketMelody, we live and breathe musical theater. Our team of industry veterans and passionate experts work tirelessly to curate the finest selection of shows, ensuring you have access to both timeless classics and groundbreaking new productions.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Our team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-ticket-gold">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              We understand that attending a musical is more than just entertainment—it's an experience that creates lasting memories. That's why we're committed to providing you with seamless access to the best seats, exclusive previews, and insider knowledge about upcoming shows.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Team discussing upcoming shows" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 py-12">
          <div className="text-center space-y-4">
            <div className="text-5xl font-bold text-ticket-purple">30+</div>
            <h3 className="text-xl font-semibold">Years of Experience</h3>
            <p className="text-gray-600">Combined expertise in musical theater</p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-5xl font-bold text-ticket-blue">1000+</div>
            <h3 className="text-xl font-semibold">Shows Curated</h3>
            <p className="text-gray-600">Carefully selected productions</p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-5xl font-bold text-ticket-gold">5M+</div>
            <h3 className="text-xl font-semibold">Happy Customers</h3>
            <p className="text-gray-600">Memorable experiences delivered</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Experience the Magic?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join millions of theater enthusiasts who trust us to deliver exceptional musical experiences. From Broadway classics to contemporary masterpieces, we're here to help you find your perfect show.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;