import Image from "next/image";
import Link from "next/link";

export default function Blivap() {
  return (
  <main className="min-h-screen bg-[#f5f5f5] font-sans px-4 md:px-10 py-6">
      
      {      /* NAV */}
      <nav className="flex justify-between items-center bg-[#960018] rounded-2xl px-8 py-6 mb-10 shadow-sm">
        <a
          href="/projects"
          className="text-white font-semibold hover:opacity-70 transition-opacity"
        >
          ← Back to Projects
        </a>

        <span className="font-bold text-white tracking-wide">
          Blivap
        </span>
      </nav>

      {      /* CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {        /* LEFT CONTENT */}
        <div className="pr-0 lg:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
            Overview
          </h1>

          <p className="text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            Blivap is a digital blood and sperm donation platform designed to connect donors, recipients, 
            healthcare facilities, and fertility clinics through a secure and accessible experience. 
            The platform simplifies the process of finding verified donors, requesting donations, scheduling 
            appointments, and tracking donation status while maintaining privacy and trust throughout the journey.
          </p>

          <p className="mt-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            This project focuses on designing a modern healthcare platform that streamlines the entire donation 
            process—from searching for compatible donors and viewing eligibility information to booking appointments 
            and managing requests. I also designed administrative dashboards for donor verification, request 
            management, appointment scheduling, and platform monitoring.
          </p>

          {          /* CHALLENGE */}
          <h2 className="text-4xl md:text-5xl lg:text-[56px] mt-16 mb-8 font-normal text-[#111111] tracking-tight">
            Challenge
          </h2>

          <div className="space-y-4 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            <p>1. Finding verified and trustworthy blood or sperm donors quickly.</p>
            <p>2. Navigating a complex and often stressful donation process.</p>
            <p>3. Accessing clear eligibility requirements and donor information.</p>
            <p>4. Scheduling appointments and tracking donation requests efficiently.</p>
            <p>5. Building trust while protecting the privacy and security of both donors and recipients.</p>
          </div>

          <p className="mt-8 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            <span className="font-bold text-[#111111]">Main goal:</span> Design a seamless donation 
            platform that enables users to search for verified blood and sperm donors, submit donation 
            requests, schedule appointments, communicate securely, and track the entire process from a 
            single, intuitive platform while ensuring transparency, privacy, and a user-centered experience.
          </p>
        </div>

        {        /* RIGHT IMAGE (MAC LAPTOP MOCKUP) */}
        <div className="flex flex-col justify-center items-center w-full mt-10 lg:mt-0">
          
          {/* Laptop Screen / Bezel */}
          <div className="relative w-full max-w-[700px] aspect-[16/10] bg-white rounded-t-xl rounded-b-sm border-[12px] md:border-[16px] border-[#1e1e1e] shadow-2xl overflow-hidden ring-1 ring-black/10">
            {/* Inner display area */}
            <div className="w-full h-full bg-[#e8e8e8] flex items-center justify-center relative overflow-hidden">
              
              {/* Fallback text if image is missing */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                16:10 Laptop Preview
              </div>

              {/* Standard img tag replaces next/image for previewer compatibility */}
              <img
                 src="/vap2.png"
                alt="Babanawa University UI"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            </div>
            
            {/* Optional: Small camera dot on the top bezel */}
            <div className="absolute top-[-10px] md:top-[-12px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/50 border border-[#111]"></div>
          </div>

          {          /* Laptop Base / Bottom Lip */}
          <div className="relative w-[105%] max-w-[740px] h-3 md:h-4 bg-[#] rounded-b-2xl shadow-xl border-t border-gray-300 flex justify-center z-20">
            {/* Trackpad notch indentation */}
            <div className="w-24 md:w-32 h-1 md:h-1.5 bg-[#a1a1aa] rounded-b-md shadow-inner"></div>
          </div>
          
        </div>

      </div>

{/* PROJECT SECTION */}
<section className="py-8 md:px-12 bg-[] rounded-3xl py-20">
  
  {/* TITLE */}
  <h2 className="text-6xl md:text-[32px] font-semibold text-center text-black mb-20">
    Project
  </h2>

  {/* TOP INFO */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-32">
    
    {/* ITEM 1 */}
    <div className="text-center flex flex-col items-center">
      <div className="text-[#960018] text-4xl mb-4">◎</div>

      <p className="text-gray-400 text-lg mb-4">Project</p>

      <h3 className="md:text-[17px] font-medium leading-tight text-black">
        Design <br />
        University Website & Campus Management Experience
      </h3>
    </div>

    {/* ITEM 2 */}
    <div className="text-center flex flex-col items-center border-x border-orange-200">
      <div className="text-[#960018] text-4xl mb-4">◔</div>

      <p className="text-gray-400 md:text-[17px] mb-4">Role</p>

      <h3 className="md:text-[17px] font-medium text-black">
        UI/UX designer
      </h3>
    </div>

    {/* ITEM 3 */}
    <div className="text-center flex flex-col items-center">
      <div className="text-[#960018] text-4xl mb-4">◷</div>

      <p className="text-gray-400 md:text-[17px] mb-4">Time frame</p>

      <h3 className="md:text-[17px]  font-medium text-black">
        2 month
      </h3>
    </div>
  </div>

  {/* ROLE SECTION */}
  <div className="max-w-6xl mx-auto text-center py-8">
    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
      My Role and Contribution
    </h2>

    <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
      As the UI/UX Designer for Blivap, I led the project from initial research to the final high-fidelity prototype, 
      conducting user research and competitive analysis, defining user personas and information architecture, 
      mapping user flows, creating wireframes, designing intuitive user interfaces, building interactive prototypes, 
      and validating the design to create a secure, accessible, and user-centered platform for blood donors, sperm donors, 
      recipients, healthcare providers, and platform administrators. My focus was on simplifying the donation journey, 
      improving trust through transparent interactions, and ensuring that users could easily find verified donors, submit 
      requests, schedule appointments, and manage the entire process within a seamless digital experience.


    </p>
  </div>
</section>

{/* PRODUCT REQUIREMENTS SECTION */}
<section className="py-8 bg-[#-[#02346D] rounded-3xl">
  
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
        Product Requirements
      </h2>

      <div className="space-y-8">
        
        {/* REQUIREMENT 1 */}
        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Search for verified blood and sperm donors.{" "}
        </p>

        {/* REQUIREMENT 2 */}
        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Find compatible donors based on preferences and eligibility.{" "}
        </p>

        {/* REQUIREMENT 3 */}
        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Submit blood or sperm donation requests.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Schedule donation or consultation appointments.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Track donation request status in real time.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Communicate securely with healthcare providers and support teams.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Access donation history and appointment records.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Receive eligibility updates and health guidelines.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Manage personal profile and verification documents.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Get notifications for appointments, request updates, and platform announcements.{" "}
        </p>


      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-[700px] h-[700px]">
        
        {/* REPLACE THIS IMAGE */}
        <Image
          src="/admis.png"
          alt="coon"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
</section>

{/* PROCESS SECTION */}
      <section className="py-8 md:px-12 bg-white rounded-3xl mb-20 shadow-sm">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
            Process
          </h2>

          <p className= "text-[15px] md:text-[17px] text-gray-800 leading-relaxed mb-32">
          I followed a user-centered design process that ensured every design decision was grounded in the real needs, 
          behaviors, and concerns of donors, recipients, and healthcare providers. Through user research, interviews, 
          competitive analysis, and iterative testing, I identified key pain points surrounding trust, accessibility, 
          privacy, and communication. These insights guided the creation of a secure, intuitive, and transparent 
          platform that simplifies finding verified donors, submitting requests, scheduling appointments, 
          and tracking the donation journey while delivering a seamless experience for all users.

          </p>

          {/* PROCESS VISUALIZATION DIAGRAM */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-16 md:gap-0 md:-space-x-8 px-4">
            
            {/* EMPATHIZE */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="md:absolute md:-top-20 flex flex-col items-center mb-4 md:mb-0">
                <span className="text-gray-700 font-medium tracking-widest text-sm mb-2 uppercase" style={{ fontFamily: 'monospace' }}>Empathize</span>
                <svg className="w-4 h-4 text-gray-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-inner mix-blend-multiply">
                {/* Heart/Person Icon */}
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  <circle cx="12" cy="10" r="2" fill="currentColor"></circle>
                  <path d="M9 14c0-1.5 1.5-2 3-2s3 .5 3 2" strokeLinecap="round"></path>
                </svg>
              </div>
            </div>

            {/* DEFINE */}
            <div className="relative z-20 flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-400 flex items-center justify-center border-4 border-white shadow-inner mix-blend-multiply">
                {/* Pencil Icon */}
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </div>
              <div className="md:absolute md:-bottom-20 flex flex-col items-center mt-4 md:mt-0">
                <svg className="w-4 h-4 text-gray-400 rotate-90 md:rotate-180 mb-2 md:mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                <span className="text-gray-700 font-medium tracking-widest text-sm uppercase" style={{ fontFamily: 'monospace' }}>Define</span>
              </div>
            </div>

            {/* IDEATE */}
            <div className="relative z-30 flex flex-col items-center">
              <div className="md:absolute md:-top-20 flex flex-col items-center mb-4 md:mb-0">
                <span className="text-gray-700 font-medium tracking-widest text-sm mb-2 uppercase" style={{ fontFamily: 'monospace' }}>Ideate</span>
                <svg className="w-4 h-4 text-gray-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white shadow-inner mix-blend-multiply">
                {/* Lightbulb Icon */}
                <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
            </div>

            {/* PROTOTYPE */}
            <div className="relative z-40 flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-inner mix-blend-multiply">
                {/* Wireframe/Browser Icon */}
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16M9 20V9"></path>
                  <circle cx="7" cy="6" r="1" fill="currentColor"></circle>
                  <circle cx="10" cy="6" r="1" fill="currentColor"></circle>
                </svg>
              </div>
              <div className="md:absolute md:-bottom-20 flex flex-col items-center mt-4 md:mt-0">
                <svg className="w-4 h-4 text-gray-400 rotate-90 md:rotate-180 mb-2 md:mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                <span className="text-gray-700 font-medium tracking-widest text-sm uppercase" style={{ fontFamily: 'monospace' }}>Prototype</span>
              </div>
            </div>

            {/* TEST */}
            <div className="relative z-50 flex flex-col items-center">
              <div className="md:absolute md:-top-20 flex flex-col items-center mb-4 md:mb-0">
                <span className="text-gray-700 font-medium tracking-widest text-sm mb-2 uppercase" style={{ fontFamily: 'monospace' }}>Test</span>
                <svg className="w-4 h-4 text-gray-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white shadow-inner mix-blend-multiply">
                {/* Checklist/Test Icon */}
                <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>
      
       <section className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-8">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
            Empathy
          </h1>
          <h2 className="text-2xl md:text-4xl font-normal text-[#111111] mb-8">
            Usability Testing & User Interview
          </h2>
          
          <div className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            <p>
             To understand how users interact with blood and sperm donation platforms, I conducted interviews with 
             potential donors, recipients, and healthcare professionals. The research focused on identifying their needs, concerns, and expectations throughout the donation journey.
            </p>

             <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          Finding verified blood and sperm donors.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
         Understanding donor eligibility and screening requirements.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
         Booking donation or consultation appointments.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
         Privacy, security, and trust throughout the process.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
         Communication between donors, recipients, and healthcare providers.{" "}
        </p>
       
          </div>
        </div>

        {/* Right Column: Insight Bubbles */}
        <div className="w-full lg:w-1/2 relative aspect-square max-w-[600px] mx-auto mt-12 lg:mt-0">
          
          {/* Main Bubble 1 (Top Left) */}
          <div className="absolute top-[3%] object-cover opacity-60 left-[8%] w-[42%] aspect-square rounded-full bg-[#02346D] flex items-center justify-center p-6 text-center text-white shadow-sm z-10 transition-transform hover:scale-105 duration-300">
            <p className="text-sm md:text-base lg:text-lg font-medium leading-snug">
              I don't know which program or course is the best fit for my career goals
            </p>
          </div>

          {/* Main Bubble 2 (Middle Right) */}
          <div className="absolute top-[30%] right-[3%] w-[38%] aspect-square rounded-full bg-[#02346D] flex items-center justify-center p-6 text-center text-white shadow-sm z-20 transition-transform hover:scale-105 duration-300">
            <p className="text-sm md:text-base lg:text-lg font-medium leading-snug">
              When my application status changes, I'm not notified quickly enough to take the next step.
            </p>
          </div>

          {/* Main Bubble 3 (Bottom Left) */}
          <div className="absolute bottom-[20%] object-cover opacity-60 left-[8%] w-[38%] aspect-square rounded-full bg-[#02346D] flex items-center justify-center p-5 text-center text-white shadow-sm z-10 transition-transform hover:scale-105 duration-300">
            <p className="text-xs md:text-sm lg:text-base font-medium leading-snug">
              I want to know the tuition fees, admission requirements, and application deadlines before applying.
            </p>
          </div>

          {/* Main Bubble 4 (Bottom Right) */}
          <div className="absolute bottom-[5%] object-cover opacity-60 right-[18%] w-[34%] aspect-square rounded-full bg-[#02346D] flex items-center justify-center p-5 text-center text-white shadow-sm z-10 transition-transform hover:scale-105 duration-300">
            <p className="text-xs md:text-sm lg:text-sm font-medium leading-snug">
              It's difficult to keep my courses, timetable, fee payments, results, and academic records organized in one place.
            </p>
          </div>

          {/* Decorative Bubbles (Light Peach) */}
          <div className="absolute top-[12%] right-[12%] w-[18%] aspect-square rounded-full bg-[#02346D] opacity-60 z-0"></div>
          <div className="absolute top-[42%] left-[3%] w-[10%] aspect-square rounded-full bg-[#02346D] opacity-60 z-0"></div>
          <div className="absolute bottom-[30%] right-[8%] w-[5%] aspect-square rounded-full bg-[#02346D] opacity-60 z-0"></div>
          
        </div>
        
      </section>

          <section className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 py-8">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 space-y-8 pt-4">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
            #Defining target personas
          </h1>
          
          <div className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            <p>
             The participants for this research were primarily between 18 and 40 years old, representing potential
              blood donors, sperm donors, recipients, and individuals actively seeking reliable healthcare and 
              fertility support services. This audience frequently relies on digital platforms to search 
              for verified donors, access medical information, schedule appointments, and manage 
              sensitive healthcare interactions. Their expectations center around privacy, trust, 
              transparency, accessibility, and a seamless user experience.
            </p>
            <p>
              Based on insights gathered from user interviews, affinity mapping, and behavioral patterns identified 
              throughout the research process, David was developed as the primary user persona for Blivap. He represents 
              the goals, concerns, and expectations of users looking for a secure and intuitive platform to find verified 
              donors, submit donation requests, track appointments, access relevant information, and communicate confidently 
              with healthcare providers while maintaining privacy throughout the entire donation journey.
            </p>
          </div>
        </div>

        {/* Right Column: Persona Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-[#F8F9FA] rounded-[32px] p-8 md:p-10 w-full max-w-[520px]">
            
            {/* Profile Header */}
            <div className="flex items-center gap-5 mb-8">
              <img 
                src="/jenny-profile.jpg" 
                alt="Jenny Pham" 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-sm"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#02346D] mb-1">
                  Amina
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  19 years old | First-year Applicant
                </p>
              </div>
            </div>
            
            <hr className="border-gray-300 mb-6" />

            {/* Needs */}
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-medium text-[#111111] mb-2">
                Needs:
              </h3>
              <p className="text-[#222222] text-sm md:text-[15px] leading-relaxed">
                A simple way to explore programs and apply for admission online.
              </p>

              <p className="text-[#222222] text-sm md:text-[15px] leading-relaxed">
                Easy access to academic resources, course registration, and student information.
              </p>

              <p className="text-[#222222] text-sm md:text-[15px] leading-relaxed">
               A centralized platform for managing schedules, fees, results, and campus updates.
                </p>
            </div>

            {/* Frustrations */}
            <div>
              <h3 className="text-lg md:text-xl font-medium text-[#111111] mb-2">
                Frustrations:
              </h3>
              <div className="space-y-4 text-[#222222] text-sm md:text-[15px] leading-relaxed">
                <p>
                 Difficulty finding accurate course and admission information.
                </p>
                <p>
                  Lengthy and confusing application or registration processes.
                </p>
                <p>
                  Academic records, payments, and announcements spread across multiple systems.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
      </section>

<section className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-16 py-8">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-[45%] space-y-6 pt-4">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
            Define
          </h1>
          
          <div className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            <p>
             Affinity diagrams helped me organize user insights gathered from interviews and research into meaningful themes 
             and pain points. Through this process, I identified the information donors, recipients, and healthcare professionals
             need when navigating blood and sperm donation services, as well as the challenges they face in finding verified donors, 
             understanding eligibility requirements, maintaining privacy, and managing appointments. I also uncovered common concerns 
             around trust, transparency, communication, and the overall complexity of the donation process.
            </p>
            <p>
             Based on the insights gathered during the empathize phase, I translated key findings into How Might We (HMW) questions. 
             These questions transformed user frustrations into design opportunities and guided the creation of solutions that balance 
             user needs with Blivap's mission of providing a secure, accessible, and reliable donation platform.
            </p>
            <p>
             By framing these challenges as How Might We questions, I was able to focus on designing a more 
             intuitive, trustworthy, and user-centered donation experience.
            </p>
            
            <ul className="list-disc pl-5 space-y-2 pt-2">
              <li>How might we make it easier for users to find verified blood and sperm donors?</li>
              <li>How might we simplify the donation request and appointment process from start to finish?</li>
              <li>How might we provide transparent donor information while protecting user privacy?</li>
              <li>How might we improve communication between donors, recipients, and healthcare providers?</li>
              <li>How might we provide real-time updates on donation requests and appointment status?</li>
              <li>How might we reduce confusion and build confidence throughout the donation journey?</li>
              <li>How might we create a donation platform that feels secure, reliable, and easy to use for everyone?</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Affinity Diagram (Sticky Notes) */}
        <div className="w-full lg:w-[55%] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm md:text-[15px] text-center text-[#111111] mb-2">
              Unattractive Look
            </h3>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              The UI is not aligned with the university brand.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              The interface feels outdated and cluttered.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Navigation is inconsistent across pages.
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm md:text-[15px] text-center text-[#111111] mb-2">
              Confusing Flow
            </h3>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Admission requirements are difficult to find.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Users are unsure where to start their application.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
             Fee payment and registration steps are unclear.
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm md:text-[15px] text-center text-[#111111] mb-2">
              Impractical To Use
            </h3>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
            Too many steps are required to complete an application.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Finding courses and academic information takes too much time.
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm md:text-[15px] text-center text-[#111111] mb-2">
              Forced To Use
            </h3>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Enter Personal Information
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Upload Documents
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Pay Application Fee
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
            Submit Application
            </div>
          </div>

        </div>
        
      </section>


       <section className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-8 items-start py-8">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 space-y-8 lg:pr-8 pt-4">
          <div className="space-y-4">
           <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight shrink-0 md:min-w-[200px] lg:min-w-[250px]">
              Prototype
            </h1>
            <p className="text-[17px] md:text-[17px] leading-[1.6] text-[#222222]">
            After validating the low-fidelity wireframes, I transformed the concepts into interactive high-fidelity designs in Figma, focusing on 
            creating a secure, intuitive, and trustworthy experience for donors, recipients, healthcare providers, and platform administrators.
            </p>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-[32px] font-normal text-[#111111] tracking-tight shrink-0 md:min-w-[200px] lg:min-w-[250px]">
              Improvement #1: Donor Discovery & Request Flow
            </h1>
            
            <ol className="list-decimal pl-5 space-y-4 text-[15px] md:text-[17px] text-[#222222] font-medium marker:font-medium">
              <li className="pl-1">
                Donor Discovery
                <ol className="list-[lower-alpha] pl-6 pt-2 space-y-1 font-normal">
                  <li>Browse verified blood and sperm donors by blood type, location, or eligibility criteria.</li>
                  <li>Search for compatible donors quickly and efficiently.</li>
                  <li>View donor profiles, availability, screening status, and essential information.</li>
                  <li>Receive personalized recommendations based on user preferences and requirements.</li>
                </ol>
              </li>
              <li className="pl-1">
                Request Transparency
                <ol className="list-[lower-alpha] pl-6 pt-2 space-y-1 font-normal">
                  <li>Display donor eligibility and availability before submitting a request.</li>
                  <li>Show appointment schedules and request status updates in real time.</li>
                  <li>Notify users of required documents, verification steps, or changes in availability.</li>
                  <li>Clearly indicate the next steps in the donation process, helping users complete 
                    requests with confidence while maintaining privacy and trust.</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>

        {/* Right Column: Bubble Diagram */}
        <div className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/3] w-full max-w-[600px] mx-auto min-h-[400px]">
          
          {/* SVG Layer for Dashed Lines */}
          <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            {/* Phone Number Connections */}
            <line x1="35%" y1="35%" x2="48%" y2="14%" stroke="#C4C4C4" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="35%" y1="35%" x2="18%" y2="38%" stroke="#C4C4C4" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="35%" y1="35%" x2="35%" y2="58%" stroke="#C4C4C4" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* Amount Deposited Connections */}
            <line x1="68%" y1="62%" x2="80%" y2="40%" stroke="#C4C4C4" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="68%" y1="62%" x2="90%" y2="62%" stroke="#C4C4C4" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="68%" y1="62%" x2="80%" y2="82%" stroke="#C4C4C4" strokeWidth="1.5" strokeDasharray="5 5" />
          </svg>

          {/* Group 1: Phone Number Bubbles */}
          <div 
            className="absolute bg-[#006D36] text-white rounded-full flex flex-col items-center justify-center p-2 z-10 shadow-sm transition-transform hover:scale-105 duration-300 w-[26%] aspect-square"
            style={{ left: '35%', top: '35%', transform: 'translate(-50%, -50%)' }}
          >
            <span className="font-semibold text-sm md:text-lg text-center leading-tight">Select<br/>Doctor</span>
          </div>

          <div 
            className="absolute bg-[#E6E6E6] text-[#333333] rounded-full flex items-center justify-center p-3 z-10 shadow-sm w-[18%] aspect-square"
            style={{ left: '48%', top: '14%', transform: 'translate(-50%, -50%)' }}
          >
            <span className="text-[9px] md:text-[11px] text-center leading-tight">Automatically recommends a specialty or doctor based on symptoms.<br/>identified</span>
          </div>

          <div 
            className="absolute bg-[#E6E6E6] text-[#333333] rounded-full flex items-center justify-center p-3 z-10 shadow-sm w-[18%] aspect-square"
            style={{ left: '18%', top: '38%', transform: 'translate(-50%, -50%)' }}
          >
            <span className="text-[9px] md:text-[11px] text-center leading-tight">Quickly book a previous doctor.</span>
          </div>

          <div 
            className="absolute bg-[#E6E6E6] text-[#333333] rounded-full flex items-center justify-center p-3 z-10 shadow-sm w-[18%] aspect-square"
            style={{ left: '35%', top: '58%', transform: 'translate(-50%, -50%)' }}
          >
            <span className="text-[9px] md:text-[11px] text-center leading-tight">Automatically recommends a specialty or doctor based on symptoms.</span>
          </div>

          {/* Group 2: Amount Deposited Bubbles */}
          <div 
            className="absolute bg-[#006D36] text-white rounded-full flex flex-col items-center justify-center p-2 z-10 shadow-sm transition-transform hover:scale-105 duration-300 w-[28%] aspect-square"
            style={{ left: '68%', top: '62%', transform: 'translate(-50%, -50%)' }}
          >
            <span className="font-semibold text-sm md:text-lg text-center leading-tight">Payment & Confirmation</span>
          </div>

          <div 
            className="absolute bg-[#E6E6E6] text-[#333333] rounded-full flex items-center justify-center p-3 z-10 shadow-sm w-[18%] aspect-square"
            style={{ left: '80%', top: '40%', transform: 'translate(-50%, -50%)' }}
          >
            <span className="text-[9px] md:text-[11px] text-center leading-tight">The base fee is determined by how the user wants to conduct the visit.</span>
          </div>

          <div 
            className="absolute bg-[#E6E6E6] text-[#333333] rounded-full flex items-center justify-center p-3 z-10 shadow-sm w-[18%] aspect-square"
            style={{ left: '90%', top: '62%', transform: 'translate(-50%, -50%)' }}
          >
            <span className="text-[9px] md:text-[11px] text-center leading-tight">Checks linked HMO for consultation coverage.</span>
          </div>

          <div 
            className="absolute bg-[#E6E6E6] text-[#333333] rounded-full flex items-center justify-center p-3 z-10 shadow-sm w-[18%] aspect-square"
            style={{ left: '80%', top: '82%', transform: 'translate(-50%, -50%)' }}
          >
            <span className="text-[9px] md:text-[11px] text-center leading-tight">Applied discounts and wallet balance.</span>
          </div>

        </div>
        
      </section>

       <section className="max-w-[1400px] mx-auto w-full flex justify-center items-center">
        <img 
          src="/bil.png" 
          alt="High fidelity prototype flow showing motion container transforms between phone top-up screens" 
          className="w-full max-w-[1200px] h-auto object-contain"
        />
      </section>

      <section className="max-w-[1400px] mx-auto w-full py-8">
        
        {/* Top Header */}
        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-normal text-[#111111] tracking-tight mb-12 lg:mb-20">
          Improvement #2: Donation Request & Appointment Management Flow
        </h1>
        
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[45%] text-[17px] md:text-[21px] text-[#222222] leading-[1.6]">
            <p className="mb-6">
             In this improvement, I combined two essential user flows to create a more seamless donation experience:
            </p>
            
            <ol className="list-decimal pl-6 space-y-6 md:space-y-8">
              <li className="pl-2">
                Submitting and managing blood or sperm donation requests from a single interface.
              </li>
              <li className="pl-2">
                Scheduling appointments, tracking request status, and receiving real-time updates without leaving the platform.
                </li>
                <p className="mb-6">
             This streamlined flow enables users to easily connect with verified donors and healthcare providers, upload required information, 
             receive confirmation notifications, and monitor every stage of the donation process. By centralizing communication, appointment 
             management, and status tracking within Blivap, the experience becomes more transparent, secure, and convenient for both donors
            and recipients.
            </p>
            </ol>
          </div>

          {/* Right Column: Local Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px] bg-white">
              <img 
                src="/let.png" 
                alt="Napas Payment Gateway interface crossed out with an orange X, showing it is no longer used" 
                className="w-full h-auto object-contain shadow-sm border border-gray-100"
              />
            </div>
          </div>
          
        </div>
      </section>

       <section className="max-w-[1400px] mx-auto w-full flex justify-center items-center">
        <img 
          src="/ter.png" 
          alt="High fidelity prototype flow showing payment method selection and adding a new bank account with motion transitions" 
          className="w-full max-w-[1200px] h-auto object-contain"
        />
      </section>

      <section className="max-w-[1400px] mx-auto w-full flex justify-center items-center">
        <img 
          src="/wei.png" 
          alt="High fidelity prototype flow showing payment method selection and adding a new bank account with motion transitions" 
          className="w-full max-w-[1200px] h-auto object-contain"
        />
      </section>

      <section className="max-w-[1400px] mx-auto w-full flex justify-center items-center mb-32">
  <img
    src="/are.png"
    alt="High fidelity prototype flow showing payment method selection and adding a new bank account with motion transitions"
    className="w-full max-w-[1200px] h-auto object-contain"
  />
</section>


<section className="bg-[#f3f3f3] py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
          
          {/* Left Side */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="border-[6px] border-gray-300 rounded-full px-12 py-10">
                <h2
                  className="text-5xl md:text-7xl text-black"
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                  Conclusion
                </h2>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-16">
            {/* Result */}
            <div>
              <h3 className="mb-6 text-4xl font-medium text-black">
                Result
              </h3>

              <p className="max-w-3xl text-xl leading-relaxed text-gray-900">
              The final design delivered a more intuitive, secure, and user-centered donation experience.
              During usability testing, participants were able to complete key tasks—such as finding 
              verified blood and sperm donors, submitting donation requests, scheduling appointments, 
              and tracking request status—more quickly and with greater confidence.
              Users particularly appreciated the simplified donor discovery process, transparent eligibility 
              information, and centralized dashboard, which made it easy to manage requests and appointments 
              from a single platform. They also valued the clear request flow, real-time status updates, 
              secure communication features, and organized access to donation history and appointment 
              details, reducing uncertainty throughout the donation journey.
              
              Overall, the design improved accessibility, strengthened trust between donors and recipients, 
              streamlined the donation process, and received positive feedback for its simplicity, clarity, 
              privacy, and ease of use.
              </p>
            </div>

            {/* Next Plan */}
            <div>
              <h3 className="mb-6 text-4xl font-medium text-black">
                Next plan
              </h3>

              <div className="space-y-6 text-xl leading-relaxed text-gray-900">
                <p>
                 Given more time, I would further refine the end-to-end donation experience by improving error 
                 handling, simplifying the donor matching and appointment scheduling flows, and enhancing 
                 communication between donors, recipients, and healthcare providers.
                </p>

                <p>
                 I would also conduct larger-scale user research using quantitative data and usability testing across a broader 
                 range of users to validate design decisions and uncover additional opportunities for improvement. 
                 Future iterations would explore features such as AI-powered donor matching, digital health records, 
                 automated eligibility reminders, emergency blood request prioritization, donation history analytics, 
                 and integration with hospitals and fertility clinics to create a more comprehensive, trusted, and 
                 connected donation ecosystem.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
  
  <img
    src="/opi.png"
    alt="High fidelity prototype flow showing payment method selection and adding a new bank account with motion transitions"
    className="w-full max-w-[1200px] h-auto object-contain"
  />
</section>
      {/* FOOTER */}
      <p className="text-center opacity-50 text-sm mt-16">
        Thank you for viewing
      </p>
    </main>
  );
}