import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Home.css'; // If you have additional styles in Home.css

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section bg-cover bg-center h-screen flex items-center justify-center">
        <div className="hero-content text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome to Pet Care</h1>
          <p className="text-xl mb-4">
            Every Pet Deserves <br />
            <strong className="text-xl">Celebrity Care</strong>
          </p>
          <p className="text-gray-200 mb-4"> {/* Adjusted text color for better readability */}
            At Pet Wellness and Grooming, we are dedicated to the holistic care
            and happiness of your beloved pets. Our services encompass a
            comprehensive approach to pet well-being, focusing not only on
            grooming but also on nurturing their overall health and vitality...
          </p>
          <Link to="/ulogin" className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section bg-gray-100 py-12">
        <div className="about-content max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-gray-700">
            At Pet Wellness and Groom, we&apos;re passionate about providing
            top-notch care for your furry companions. Our dedicated team of
            professionals is committed to ensuring that your pet receives the
            highest quality grooming and wellness services in a safe and
            comfortable environment. With years of experience in the pet care
            industry, we understand the importance of holistic pet care. That&apos;s
            why we offer a wide range of services designed to cater to your
            pet&apos;s unique needs, from grooming and wellness to boarding and
            daycare.
          </p>
          <Link to="/services" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 inline-block">
            Learn More
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-gray-200 py-12">
        <div className="testimonials-content max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="testimonial bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">&quot;The grooming services here are top-notch. My dog always looks amazing after a visit.&quot;</p>
              <p className="text-gray-500 text-sm mt-2">- Jane Doe</p>
            </div>
            <div className="testimonial bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">&quot;I bring my pets here for regular checkups and the staff is always so caring and attentive.&quot;</p>
              <p className="text-gray-500 text-sm mt-2">- John Smith</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
