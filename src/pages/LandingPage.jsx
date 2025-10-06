import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaUsers,
  FaBriefcase,
  FaHandshake,
} from "react-icons/fa";
import {
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import heroImg from "../Images/hero.avif";
import about from "../Images/about.jpg";
import partner2 from "../Images/Group1.png";
import partner3 from "../Images/Group2.png";
import partner4 from "../Images/Group3.png";
import partner1 from "../Images/Group4.png";
import { Link } from "react-router-dom";

const LandingPage = () => {

  return (
    <div className="font-sans text-gray-800 bg-white relative">
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-white shadow-sm fixed w-full top-0 z-50">
        <h1 className="sm:text-2xl text-xl font-bold text-blue-700">YOU Hire</h1>

        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#about" className="hover:text-blue-600 cursor-pointer transition">About</a>
          <a href="#how_it_works" className="hover:text-blue-600 cursor-pointer transition">How It Works</a>
          <a href="#features" className="hover:text-blue-600 cursor-pointer transition">Features</a>
          <a href="#testimonial" className="hover:text-blue-600 cursor-pointer transition">Testimonials</a>
        </ul>

        <div className="flex items-center gap-4">
          <Link to='/login'>
            <button className="text-blue-700 font-medium hover:text-blue-800 transition">
              Log In
            </button>
          </Link>
          <Link to='/register'>
            <button className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br pt-36 from-blue-50 via-white to-blue-100 overflow-hidden py-24 px-6 md:px-16">
        {/* Soft moving aurora background */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#bae6fd,transparent_60%),radial-gradient(circle_at_80%_60%,#c7d2fe,transparent_60%)]"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="sm:max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
          {/* LEFT SIDE - Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block bg-blue-100 text-blue-800 font-semibold sm:px-4 px-3 py-1 rounded-full sm:text-sm text-xs mb-6">
              Empowering Recruiters • Empowering Students
            </div>

            <h1 className="sm:text-4xl text-3xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Find <span className="text-blue-700">top graduates</span> who fit your team
              fast, verified, and ready to work.
            </h1>

            <p className="text-gray-600 sm:sm:text-lg max-w-xl mb-8">
              YOU Hire bridges the gap between education and employment helping
              recruiters connect with pre-screened, high-performing students from
              trusted institutions across various disciplines.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to='/register'>
                <button className="flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-full sm:text-lg font-semibold hover:bg-blue-800 transition-all">
                  <FaUsers /> Request Students
                </button>
              </Link>
              <Link to='/register'>
                <button className="flex items-center gap-2 border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-full sm:text-lg font-semibold hover:bg-blue-700 hover:text-white transition-all">
                  <FaBriefcase /> Post a Job
                </button>
              </Link>
            </div>

            {/* Micro stats */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start">
              <div>
                <div className="text-3xl font-bold text-blue-700">500+</div>
                <p className="text-gray-500 text-sm">Verified Students</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700">60+</div>
                <p className="text-gray-500 text-sm">Partner Companies</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700">98%</div>
                <p className="text-gray-500 text-sm">Match Accuracy</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Image / Visual */}
          <motion.div
            className="flex-1 relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Main image */}
            <img
              src={heroImg}
              alt="Recruiter interviewing students"
              className="rounded-3xl w-[90%] md:w-[85%] shadow-2xl border-4 border-white object-cover"
            />

            {/* Floating glass cards */}
            <motion.div
              className="absolute top-[8%] left-0 bg-white/70 backdrop-blur-md rounded-xl sm:p-4 p-2 shadow-md w-48"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaHandshake className="text-blue-600 sm:text-2xl text-xl mb-2" />
              <p className="text-sm font-semibold text-gray-800">120+ Hires Completed</p>
              <p className="text-xs text-gray-500">This month</p>
            </motion.div>

            <motion.div
              className="absolute bottom-[10%] right-[5%] bg-white/70 backdrop-blur-md rounded-xl sm:p-4 p-2 shadow-md w-44"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  ME
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Maya E.</p>
                  <p className="text-xs text-gray-500">Frontend Intern</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom curve accent */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#curve)"
            fillOpacity="0.5"
            d="M0,128L48,112C96,96,192,64,288,74.7C384,85,480,139,576,144C672,149,768,107,864,80C960,53,1056,43,1152,64C1248,85,1344,139,1392,165.3L1440,192L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          ></path>
          <defs>
            <linearGradient id="curve" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bfdbfe" />
            </linearGradient>
          </defs>
        </svg>
      </header>

      {/* How It Works Section  */}
      <section id="how_it_works" className="relative py-28 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        {/* Decorative blob background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-yellow-100 rounded-full blur-3xl opacity-40 -z-10"></div>

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How <span className="text-blue-700">YOU Hire</span> Works
          </h2>
          <p className="text-gray-600 sm:text-lg">
            A simple, powerful 3-step process designed to help recruiters connect with
            outstanding students from discovery to hiring.
          </p>
        </div>

        {/* Step Timeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-blue-200"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-blue-700 text-white flex items-center justify-center rounded-full text-3xl mb-6 shadow-lg">
                <FaUsers />
              </div>
              <h3 className="sm:text-2xl text-xl font-semibold mb-3 text-gray-900">1. Discover Students</h3>
              <p className="text-gray-600 max-w-xs">
                Explore verified student profiles complete with skills, experience,
                and academic records all in one place.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-3xl mb-6 shadow-lg">
                <FaBriefcase />
              </div>
              <h3 className="sm:text-2xl text-xl font-semibold mb-3 text-gray-900">2. Post Job Roles</h3>
              <p className="text-gray-600 max-w-xs">
                Share your internship or job opportunities and get matched with
                qualified candidates instantly.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-20 h-20 bg-blue-900 text-white flex items-center justify-center rounded-full text-3xl mb-6 shadow-lg">
                <FaHandshake />
              </div>
              <h3 className="sm:text-2xl text-xl font-semibold mb-3 text-gray-900">3. Connect & Hire</h3>
              <p className="text-gray-600 max-w-xs">
                Chat, interview, and hire seamlessly using our integrated communication tools.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-20">
          <Link to='/register'>
            <button className="bg-blue-700 text-white px-10 py-4 rounded-full sm:text-lg font-semibold hover:bg-blue-800 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-28 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50">
        <div className="text-center mb-16">
          <h2 className="sm:text-4xl text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-700">YOU Hire</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto sm:text-lg">
            Connecting top student talent with forward-thinking companies —
            empowering both sides to grow, innovate, and succeed.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image or Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={about}
              alt="Recruitment collaboration"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 sm:text-lg mb-6 leading-relaxed">
              At <span className="font-semibold text-blue-700">YOU Hire</span>, we’re reshaping recruitment by bridging
              the gap between academic learning and professional success.
              We help recruiters connect with exceptional students — equipped with practical
              skills, enthusiasm, and the drive to make an impact from day one.
            </p>

            <h3 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 sm:text-lg mb-8 leading-relaxed">
              We envision a future where every graduate begins their career with confidence,
              and every employer finds the right fit faster. YOU Hire is building that bridge —
              where education meets opportunity, and potential meets purpose.
            </p>

            {/* Core Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                <h4 className="text-blue-700 font-semibold mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">
                  We harness modern tech and data-driven insights to simplify recruitment.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                <h4 className="text-blue-700 font-semibold mb-2">Empowerment</h4>
                <p className="text-gray-600 text-sm">
                  We give students real-world visibility while enabling recruiters to hire smarter.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                <h4 className="text-blue-700 font-semibold mb-2">Growth</h4>
                <p className="text-gray-600 text-sm">
                  Every connection built through YOU Hire contributes to professional growth and success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-28 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-40 -z-10"></div>

        {/* Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Features Built for <span className="text-blue-700">Recruiters</span>
          </h2>
          <p className="text-gray-600 sm:text-lg">
            From AI-driven student recommendations to smart communication tools,
            YOU Hire gives recruiters everything they need and more.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <motion.div
            className="relative bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 text-white text-3xl mb-6 shadow-md">
              <MdOutlineDashboardCustomize />
            </div>
            <h3 className="sm:text-2xl text-xl font-semibold mb-3 text-gray-900">Recruiter Dashboard</h3>
            <p className="text-gray-600 leading-relaxed">
              Control your entire hiring process from one intuitive dashboard manage job posts, applications, and team activity effortlessly.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="relative bg-white/70 backdrop-blur-md border border-yellow-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500 text-white text-3xl mb-6 shadow-md">
              🎯
            </div>
            <h3 className="sm:text-2xl text-xl font-semibold mb-3 text-gray-900">AI-Powered Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              Let our smart algorithm suggest top student candidates that match your
              company’s job criteria saving you hours of manual search.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="relative bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-900 text-white text-3xl mb-6 shadow-md">
              💬
            </div>
            <h3 className="sm:text-2xl text-xl font-semibold mb-3 text-gray-900">Instant Messaging</h3>
            <p className="text-gray-600 leading-relaxed">
              Communicate directly with students, schedule interviews, and make offers all without leaving the platform.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            className="relative bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 md:col-span-3 md:flex md:items-center md:justify-between md:gap-12"
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl mb-6 shadow-md">
              📊
            </div>
            <div>
              <h3 className="sm:text-2xl text-xl font-semibold mb-2 text-gray-900">Analytics & Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Track engagement, application trends, and performance analytics get data-backed insights to optimize your recruitment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talent Pool Preview Section */}
      <section id="talent" className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-16">
          <h2 className="sm:text-3xl text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the Next Generation of Talent
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the diverse pool of students trained across tech, business, and creative fields
            ready to bring innovation, energy, and skill to your organization.
          </p>
        </div>

        {/* Sample Student Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { name: 'Frontend Developer', tag: 'React • JavaScript • UI/UX' },
            { name: 'Data Analyst', tag: 'Python • Excel • Power BI' },
            { name: 'Digital Marketer', tag: 'SEO • Social Media • Content Strategy' },
            { name: 'Product Designer', tag: 'Figma • UX Research • Prototyping' },
            { name: 'Backend Engineer', tag: 'Node.js • Express • MongoDB' },
            { name: 'Project Coordinator', tag: 'Agile • Communication • Teamwork' },
          ].map((student, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition"
            >
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="sm:text-2xl text-xl font-semibold text-blue-700">
                  {student.name.charAt(0)}
                </span>
              </div>
              <h4 className="sm:text-lg font-semibold text-gray-800 mb-2 text-center">
                {student.name}
              </h4>
              <p className="text-sm text-gray-600 text-center">{student.tag}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-4">
            Over <span className="font-semibold text-blue-700">500+</span> verified students across multiple disciplines.
          </p>
          <Link to='/register'>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
              Join Our Recruiter Network
            </button>
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="sm:text-3xl text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies & Institutions
          </h2>
          <p className="text-gray-600 sm:max-w-2xl mx-auto">
            YOU Hire collaborates with forward-thinking organizations that believe in
            empowering young professionals and fostering the future of work.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center opacity-90">
          <img src={partner1} alt="Partner 1" className="mx-auto h-10 md:h-12 grayscale hover:grayscale-0 transition" />
          <img src={partner2} alt="Partner 2" className="mx-auto h-10 md:h-12 grayscale hover:grayscale-0 transition" />
          <img src={partner3} alt="Partner 3" className="mx-auto h-10 md:h-12 grayscale hover:grayscale-0 transition" />
          <img src={partner4} alt="Partner 4" className="mx-auto h-10 md:h-12 grayscale hover:grayscale-0 transition" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-sky-50 via-white to-sky-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-20 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-10 right-24 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Voices of <span className="text-sky-700">Recruiter Success</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            See how real recruiters are hiring smarter and faster with YOU Hire connecting directly with our verified graduates.
          </motion.p>
        </div>

        {/* Centerpiece Impact Quote */}
        <motion.div
          className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm border border-sky-100 rounded-3xl p-10 shadow-lg mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="sm:text-lg md:text-xl text-gray-700 font-medium italic mb-6">
            “YOU Hire has transformed how we source early talent. Our average recruitment cycle went from 21 days to just 5!”
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Recruiter"
              className="w-12 h-12 rounded-full object-cover border-2 border-sky-500"
            />
            <div>
              <div className="font-semibold text-gray-900">Marcus Rowe</div>
              <div className="text-sm text-gray-500">Head of HR, Innovate Labs</div>
            </div>
          </div>
        </motion.div>

        {/* Floating testimonial cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 relative">
          {[
            {
              quote:
                "“We filled 3 internship roles within a week YOU Hire is a recruiter’s dream!”",
              name: "Sophia Malik",
              role: "Talent Acquisition, BlueStone",
              img: "https://randomuser.me/api/portraits/women/45.jpg",
            },
            {
              quote:
                "“The student profiles are incredibly detailed. It saves our team hours every week.”",
              name: "Daniel Harper",
              role: "HR Director, Quantum Digital",
              img: "https://randomuser.me/api/portraits/men/23.jpg",
            },
            {
              quote:
                "“YOU Hire delivers quality candidates who are truly ready for the workplace.”",
              name: "Elena Brooks",
              role: "Recruiter, Apex Global",
              img: "https://randomuser.me/api/portraits/women/58.jpg",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-lg border border-sky-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">{t.quote}</p>
            </motion.div>
          ))}
        </div>

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50 to-transparent pointer-events-none"></div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-6 md:px-24 bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white overflow-hidden">
        {/* Background Glow + Subtle Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-24 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
          <svg
            className="absolute opacity-10 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT: Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="sm:text-4xl text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Start Recruiting <br className="hidden md:block" />
              <span className="text-sky-200">Top Students</span> Today
            </h2>
            <p className="text-blue-100 max-w-lg mb-8">
              Access a pool of verified, ready-to-work students across multiple fields.
              Post jobs, connect instantly, and fill roles faster, all in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="/register">
                <motion.button
                  className="flex items-center gap-3 bg-white text-blue-800 px-8 py-3 rounded-full font-semibold sm:text-lg shadow hover:bg-sky-100 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  🚀 Get Started
                </motion.button>
              </a>
              <a href="#talent">
                <motion.button
                  className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full font-semibold sm:text-lg hover:bg-white/20 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  👥 View Talent Pool
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Glass Card Mockup */}
          <motion.div
            className="relative flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
              {/* Glass Card */}
              <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center p-6">
                <img
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="Recruiter"
                  className="w-20 h-20 rounded-full mb-4 border-4 border-sky-200 shadow-lg object-cover"
                />
                <p className="text-sky-100 sm:text-lg italic mb-3">
                  “YOU Hire cut our hiring time by 70%. It’s a game changer.”
                </p>
                <h4 className="font-semibold text-white">HR Lead, NextWave</h4>
              </div>

              {/* Animated glow rings */}
              <div className="absolute inset-0 rounded-full border-2 border-sky-300/40 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-blue-200/30 blur-md animate-spin-slow"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact / Footer Section */}
      <footer className="bg-blue-900 text-blue-100 py-16 pb-6 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="sm:text-2xl text-xl font-bold text-white mb-4">YOU Hire</h3>
            <p className="text-blue-200 leading-relaxed mb-4">
              Connecting recruiters with exceptional student talent  making hiring simple, fast, and meaningful.
            </p>
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} YOU Hire. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="sm:text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition cursor-pointer">About</a>
              </li>
              <li>
                <a href="#how_it_works" className="hover:text-white transition cursor-pointer">How It Works</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition cursor-pointer">Features</a>
              </li>
              <li>
                <a href="#testimonial" className="hover:text-white transition cursor-pointer">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="sm:text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <p className="text-blue-200 mb-2">Email: <a href="mailto:support@youhire.com" className="hover:underline">support@youhire.com</a></p>
            <p className="text-blue-200 mb-2">Phone: +1 (234) 567-890</p>
            <div className="flex space-x-4 mt-4">
              <a href="/" className="hover:text-white"><i className="fab fa-linkedin fa-lg"></i></a>
              <a href="/" className="hover:text-white"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="/" className="hover:text-white"><i className="fab fa-facebook fa-lg"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
          Designed with ❤️ by the YOU Hire Team
        </div>
      </footer>

      {/* Socials */}
      <div className="bg-blue-950 text-gray-300 py-4 text-center">
        <div className="flex items-center justify-center gap-6">
          <a href="/" className="hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="/" className="hover:text-white transition">
            <FaYoutube size={22} />
          </a>
          <a href="/" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
        </div>
        <p className="mt-2 text-sm mx-2">
          © {new Date().getFullYear()} YOU Hire Connecting Recruiters with Future Talent
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
