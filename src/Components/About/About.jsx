import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../../pages/Shared/Navbar/Navbar';
function About() {
  return (
    
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Navbar></Navbar>
      <header className="bg-blue-600 py-8 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">Discover our story and mission.</p>
        </div>
      </header>
       
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Company Name: EducationHub</h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Summary:</h2>
        <p className="text-gray-700">
          EducationHub is a leading educational service company dedicated to empowering individuals of all ages and backgrounds to achieve their educational and career goals. With a commitment to excellence in education, [Company Name] offers a wide range of services and programs designed to foster learning, personal development, and career advancement.
        </p>
      </div>

      <div className="bg-white mt-4 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Our Services:</h2>
        <ul className="list-disc list-inside text-gray-700 pl-4">
          <li>
            <strong>Tutoring Services:</strong> We provide personalized, one-on-one tutoring in various subjects, catering to students from elementary to college levels. Our experienced tutors help students build strong academic foundations and boost their confidence.
          </li>
          <li>
            <strong>Test Preparation:</strong> [Company Name] offers comprehensive test preparation programs for standardized exams such as SAT, ACT, GRE, and more. Our test prep courses are designed to help students excel and gain admission to their desired educational institutions.
          </li>
          <li>
            <strong>Online Learning:</strong> We understand the importance of flexible learning options. Our online courses and resources make education accessible to anyone, anywhere. Whether you're looking to acquire new skills or complete a degree, we have a program for you.
          </li>
          <li>
            <strong>Career Development:</strong> We provide guidance and support for individuals looking to enhance their career prospects. From resume writing workshops to interview coaching, we help you stand out in today's competitive job market.
          </li>
          <li>
            <strong>Language Training:</strong> [Company Name] offers language courses to help individuals become fluent in a new language or improve their language skills for travel, work, or personal enrichment.
          </li>
        </ul>
      </div>

      <div className="bg-white mt-4 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Why Choose [Company Name]?</h2>
        <ul className="list-disc list-inside text-gray-700 pl-4">
          <li>
            <strong>Expert Instructors:</strong> Our team of experienced educators and subject matter experts are passionate about teaching and dedicated to your success.
          </li>
          <li>
            <strong>Personalized Approach:</strong> We recognize that every learner is unique. Our customized programs cater to individual needs, ensuring maximum learning effectiveness.
          </li>
          <li>
            <strong>Proven Results:</strong> [Company Name] has a track record of helping students achieve their academic and career goals. Many of our students have gained admission to top universities and secured dream jobs.
          </li>
          <li>
            <strong>Flexible Learning:</strong> Whether you prefer in-person or online learning, our flexible options accommodate your schedule and preferences.
          </li>
          <li>
            <strong>Affordable Pricing:</strong> We believe that quality education should be accessible to all. We offer competitive pricing and various payment plans.
          </li>
        </ul>
      </div>

      <div className="bg-white mt-4 p-4 rounded-lg shadow-md">
        <p className="text-gray-700">
          At [Company Name], education is more than just a service; it's a transformative journey. We are committed to making a positive impact on the lives of our students, empowering them to reach their full potential and achieve their dreams.
        </p>
      </div>

      <p className="mt-4 text-gray-700">
        Join us on your educational journey today and experience the [Company Name] difference.
      </p>
    </div>
   
      {/* Main Content */}
      <main className="container mx-auto py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo justo.
            ...
          </p>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
            ...
          </p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default About;
