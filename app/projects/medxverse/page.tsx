import Image from "next/image";
import Link from "next/link";

export default function MedxverseCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] font-sans px-4 md:px-10 py-6">
      
      {/* NAV */}
      <nav className="flex justify-between items-center bg-[#1D2264] rounded-2xl px-8 py-6 mb-10">
        <Link
          href="/projects"
          className="text-white font-semibold hover:opacity-70"
        >
          ← Back to Projects
        </Link>

        <span className="font-bold text-white">MEDXVERSE</span>
      </nav>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
            Overview
          </h1>

          <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            MedxVerse is a digital healthcare platform that connects patients with licensed healthcare 
            professionals through virtual consultations, appointment scheduling, electronic prescriptions, 
            and health record management. The platform aims to make quality healthcare more accessible, 
            affordable, and convenient for users regardless of their location.
          </p>

          <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            
          </p>
           
          {/* CHALLENGE */}
          <h2 className="text-4xl md:text-5xl lg:text-[56px] mt-16 font-normal text-[#111111] tracking-tight mb-8">
            Challenge
          </h2>

          <div className="space-y-4 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            <p>
              1. Simplify access to healthcare services through a digital platform..{" "}
              
            </p>

            <p>
              2. Reduce the friction involved in booking appointments and consulting healthcare professionals.{" "}
             
            </p>

            <p>
              3. Build trust when sharing sensitive health information online.{" "}
              
            </p>

            <p>
              4. Create an intuitive experience for managing consultations, prescriptions, and medical records.{" "}
              
            </p>

          </div>

          <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
            <span className="font-bold">Main goal:</span> Design a seamless healthcare experience 
            that enables users to find doctors, book appointments, attend consultations, receive 
            prescriptions, and manage their health information in one platform.
            
          </p>
        </div>

        {/* RIGHT PHONE MOCKUP */}
        <div className="relative flex justify-center">
          
          {/* BACKGROUND MOCKUPS */}
          <div className="absolute left-0 top-16 w-[250px] h-[520px] bg-white/50 rounded-[30px] blur-[1px]" />
            <Image
              src="/med.png"
              alt="med UI"
              fill
              className="object-cover"
            />
          <div className="absolute right-0 bottom-10 w-[250px] h-[520px] bg-white/50 rounded-[30px] blur-[1px]" />

          {/* MAIN PHONE */}
          <div className="relative w-[355px] h-[740px] rounded-[0px] overflow-hidden shadow-2xl bg-white z-10">
            <Image
              src="/homem.png"
              alt="homem UI"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

{/* PROJECT SECTION */}
<section className="py-8 md:px-12 bg-[#f5f5f5] rounded-3xl py-20">
  
  {/* TITLE */}
  <h2 className="text-6xl md:text-[32px] font-semibold text-center text-black mb-20">
    Project
  </h2>

  {/* TOP INFO */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-32">
    
    {/* ITEM 1 */}
    <div className="text-center flex flex-col items-center">
      <div className="text-[#006D36] text-4xl mb-4">◎</div>

      <p className="text-gray-400 text-lg mb-4">Project</p>

      <h3 className="md:text-[17px] font-medium leading-tight text-black">
        Design <br />
        Telemedicine & Healthcare Management<br />
        Experience
      </h3>
    </div>

    {/* ITEM 2 */}
    <div className="text-center flex flex-col items-center border-x border-orange-200">
      <div className="text-[#006D36] text-4xl mb-4">◔</div>

      <p className="text-gray-400 md:text-[17px] mb-4">Role</p>

      <h3 className="md:text-[17px] font-medium text-black">
        UI/UX designer
      </h3>
    </div>

    {/* ITEM 3 */}
    <div className="text-center flex flex-col items-center">
      <div className="text-[#006D36] text-4xl mb-4">◷</div>

      <p className="text-gray-400 md:text-[17px] mb-4">Time frame</p>

      <h3 className="md:text-[17px]  font-medium text-black">
        1 month
      </h3>
    </div>
  </div>

  {/* ROLE SECTION */}
  <div className="max-w-6xl mx-auto text-center py-8">
    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
      My Role and Contribution
    </h2>

    <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
      My role in this project was as a UI/UX Designer, responsible for designing MedxVerse 
      from the ground up. Starting with user research and problem discovery, I worked 
      through the entire design process, including user interviews, persona creation, user flows, wireframing, prototyping, and iterative testing.
      My goal was to create an accessible and user friendly digital healthcare platform that 
      enables patients to easily find healthcare professionals, book appointments, attend virtual 
      consultations, access medical records, and manage prescriptions in one place.
      The result is a user centered healthcare solution that addresses key challenges in accessing
      medical care while providing a seamless, trustworthy, and efficient healthcare experience
      for both patients and healthcare providers.


    </p>
  </div>
</section>

{/* PRODUCT REQUIREMENTS SECTION */}
<section className="py-8 bg-[#f5f5f5] rounded-3xl">
  
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight mb-8">
        Product Requirements
      </h2>

      <div className="space-y-8">
        
        {/* REQUIREMENT 1 */}
        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          As a patient, I want to find healthcare professionals based on specialty so that 
          I can receive appropriate medical care.{" "}
        </p>

        {/* REQUIREMENT 2 */}
        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          As a patient, I want to book appointments online so that I can consult a doctor
          conveniently.{" "}
        </p>

        {/* REQUIREMENT 3 */}
        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          As a patient, I want to attend virtual consultations so that I can receive care
          without visiting a hospital.{" "}
        </p>

        <p className="space-y-6 text-[15px] md:text-[17px] leading-[1.6] text-[#222222]">
          As a patient, I want to access my prescriptions and medical history so that I 
          can manage my healthcare records easily.{" "}
        </p>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-[700px] h-[700px]">
        
        {/* REPLACE THIS IMAGE */}
        <Image
          src="/book.png"
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
            Given the project's timeline, I adopted a simple and user-centered design process. 
            My approach focused on understanding how patients access healthcare services, 
            the challenges they face when booking appointments or consulting healthcare professionals, 
            and the barriers that prevent them from receiving timely medical care.
            Through user research, interviews, and analysis of healthcare-seeking behaviors, I identified
             key pain points around finding the right healthcare provider, scheduling appointments, 
             managing medical records, and accessing care remotely. By grounding design decisions in users' 
             needs, motivations, and frustrations, I was able to create a healthcare experience that is accessible, 
             trustworthy, and easy to use. The process below illustrates the approach I followed to design MedxVerse 
             from concept to prototype.

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
             To understand the challenges people face when accessing healthcare services, I conducted
             user interviews and research sessions with potential patients. The goal was to learn about their 
             healthcare journeys, frustrations, expectations, and experiences with existing telemedicine and healthcare platforms.
             Through these conversations, I discovered several recurring pain points. Many users found 
             it difficult to quickly find the right healthcare professional, book appointments without 
             unnecessary delays, and access their medical information in one place. Others expressed concerns 
             about the lack of transparency during consultations, confusing navigation, and limited communication 
             channels with healthcare providers. I also spoke with users who regularly manage chronic conditions and
            require frequent consultations and prescription renewals. These users highlighted the importance of having a 
            centralized platform where they could schedule appointments, access medical records, receive digital prescriptions, 
            and communicate with healthcare professionals seamlessly. These insights helped identify key opportunities for MedxVerse 
            and guided the design process toward creating an accessible, trustworthy, and user-centered healthcare experience that connects patients with healthcare providers while simplifying every step of their care journey.

            </p>
          </div>
        </div>

        {/* Right Column: Insight Bubbles */}
        <div className="w-full lg:w-1/2 relative aspect-square max-w-[600px] mx-auto mt-12 lg:mt-0">
          
          {/* Main Bubble 1 (Top Left) */}
          <div className="absolute top-[3%] object-cover opacity-60 left-[8%] w-[42%] aspect-square rounded-full bg-[#006D36] flex items-center justify-center p-6 text-center text-white shadow-sm z-10 transition-transform hover:scale-105 duration-300">
            <p className="text-sm md:text-base lg:text-lg font-medium leading-snug">
              I don't know which doctor or specialist is the right fit for my condition.
            </p>
          </div>

          {/* Main Bubble 2 (Middle Right) */}
          <div className="absolute top-[30%] right-[3%] w-[38%] aspect-square rounded-full bg-[#006D36] flex items-center justify-center p-6 text-center text-white shadow-sm z-20 transition-transform hover:scale-105 duration-300">
            <p className="text-sm md:text-base lg:text-lg font-medium leading-snug">
              When my appointment changes, I'm not notified quickly enough to reschedule or prepare.
            </p>
          </div>

          {/* Main Bubble 3 (Bottom Left) */}
          <div className="absolute bottom-[20%] object-cover opacity-60 left-[8%] w-[38%] aspect-square rounded-full bg-[#006D36] flex items-center justify-center p-5 text-center text-white shadow-sm z-10 transition-transform hover:scale-105 duration-300">
            <p className="text-xs md:text-sm lg:text-base font-medium leading-snug">
              I want to know the consultation fee, available time slots, and expected waiting time before booking.
            </p>
          </div>

          {/* Main Bubble 4 (Bottom Right) */}
          <div className="absolute bottom-[5%] object-cover opacity-60 right-[18%] w-[34%] aspect-square rounded-full bg-[#006D36] flex items-center justify-center p-5 text-center text-white shadow-sm z-10 transition-transform hover:scale-105 duration-300">
            <p className="text-xs md:text-sm lg:text-sm font-medium leading-snug">
              It is difficult to keep all my appointments, prescriptions, and medical records organized in one place.
            </p>
          </div>

          {/* Decorative Bubbles (Light Peach) */}
          <div className="absolute top-[12%] right-[12%] w-[18%] aspect-square rounded-full bg-[#006D36] opacity-60 z-0"></div>
          <div className="absolute top-[42%] left-[3%] w-[10%] aspect-square rounded-full bg-[#006D36] opacity-60 z-0"></div>
          <div className="absolute bottom-[30%] right-[8%] w-[5%] aspect-square rounded-full bg-[#006D36] opacity-60 z-0"></div>
          
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
              The participants for this research were aged between 18 and 35 years, selected based on the demographic group most actively adopting digital healthcare and telemedicine services. This audience is highly familiar with mobile applications and values convenient, accessible, and efficient healthcare experiences.

Based on insights gathered from user interviews, affinity mapping, and behavioral patterns identified during the research process, Jenny was developed as the primary user persona for MedxVerse. She represents the goals, concerns, and expectations of patients seeking a simple way to book appointments, consult healthcare professionals remotely, access medical records, and manage their healthcare journey from a single platform.
            </p>
            <p>
              Jenny is the best-fit representative based on the research findings and affinity diagram created from the interview data, making her an ideal reference point for guiding design decisions throughout the MedxVerse product development process.
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
                <h2 className="text-2xl md:text-3xl font-semibold text-[#006D36] mb-1">
                  Deborah Albert
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  28 years old | Office staff
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
                A convenient way to consult doctors without visiting a clinic.
              </p>

              <p className="text-[#222222] text-sm md:text-[15px] leading-relaxed">
                Easy access to prescriptions and medical records.
              </p>

              <p className="text-[#222222] text-sm md:text-[15px] leading-relaxed">
               Reliable healthcare information and professional advice.
                </p>
            </div>

            {/* Frustrations */}
            <div>
              <h3 className="text-lg md:text-xl font-medium text-[#111111] mb-2">
                Frustrations:
              </h3>
              <div className="space-y-4 text-[#222222] text-sm md:text-[15px] leading-relaxed">
                <p>
                 Spending hours waiting for appointments.
                </p>
                <p>
                  Difficulty finding specialists.
                </p>
                <p>
                  Having medical records scattered across different hospitals.
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
             Affinity diagrams helped me organize user insights collected during interviews and 
             research into meaningful groups of themes and pain points. Through this process, 
             I identified the information patients need when accessing healthcare services, the 
             challenges they face when booking appointments and consulting healthcare professionals, 
             and the expectations they have for a seamless, secure, and trustworthy digital healthcare 
             experience.
            </p>
            <p>
              Based on the insights gathered during the empathize phase, I translated key findings into 
              How Might We (HMW) questions. These questions transformed user frustrations into design 
              opportunities and guided the creation of solutions that balance patient needs with MedxVerse's 
              healthcare goals.
            </p>
            <p>
             By framing the challenges as How Might We questions, I was able to focus on designing 
             a more accessible, intuitive, and patient-centered healthcare platform.
            </p>
            
            <ul className="list-disc pl-5 space-y-2 pt-2">
              <li>How might we make it easier for patients to find the right healthcare professional?</li>
              <li>How might we simplify appointment booking and reduce waiting time?</li>
              <li>How might we help patients access their medical records and prescriptions in one secure place?</li>
              <li>How might we improve communication between patients and healthcare providers before and after consultations?</li>
              <li>How might we build trust and transparency throughout the digital healthcare journey?</li>
              <li>How might we reduce confusion and errors when scheduling appointments or selecting healthcare services?</li>
              <li>How might we create a healthcare experience that feels reliable, secure, and easy to use for everyone?</li>
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
              The interface is not consistent across different screens.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              The UI feels empty and difficult to scan.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Navigation patterns are inconsistent throughout the app.
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm md:text-[15px] text-center text-[#111111] mb-2">
              Confusing Flow
            </h3>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Doctor availability is not confirmed before booking.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Users are unsure whether consultation fees include additional charges.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Appointment details are not clearly communicated before confirmation.
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm md:text-[15px] text-center text-[#111111] mb-2">
              Impractical To Use
            </h3>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
            Too many steps are required to book an appointment.
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Finding the right doctor or specialist takes too much time.
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm md:text-[15px] text-center text-[#111111] mb-2">
              Forced To Use
            </h3>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Search for Doctor
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Select Date & Time
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
              Enter Patient Details
            </div>
            <div className="bg-[#FDF288] p-4 text-center text-[13px] text-[#222222] leading-snug shadow-sm">
            Confirm Appointment
            </div>
          </div>

        </div>
        
      </section>

       <section className="max-w-7xl mx-auto w-full flex flex-col gap-10 lg:gap-14 py-8">
        
        {/* Top Row: Text Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start pt-4">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight shrink-0 md:min-w-[200px] lg:min-w-[250px]">
            Ideate
          </h1>
          
          <div className="space-y-2 md:pt-4">
            <h2 className="text-2xl md:text-[17px] font-normal text-[#111111]">
              Lo-fi sketch
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[1.6] text-[#222222] max-w-4xl">
              This is my favorite part! After gathering multiple insights, brainstorm, and prioritizing ideas, this is the final result of the lo-fi wireframe that I worked on.
            </p>
          </div>
        </div>

        {/* Bottom Row: Local Image */}
        <div className="w-full flex justify-center">
          <img 
            src="/lo-fi-sketches.png" 
            alt="Lo-fi wireframe sketches showing prepaid top-up flow, secure payment, choosing payment method, and transaction successful screens" 
            className="w-full max-w-6xl h-auto object-contain"
          />
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
             After completing the wireframes, I transformed them into high-fidelity designs and interactive 
             prototypes using Figma. The goal was to validate the healthcare experience and ensure that users 
             could easily find healthcare providers, book appointments, access medical services, and manage 
             their healthcare journey with confidence.
            </p>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-[32px] font-normal text-[#111111] tracking-tight shrink-0 md:min-w-[200px] lg:min-w-[250px]">
              Improvement #1: Appointment Booking & Healthcare Discovery
            </h1>
            
            <ol className="list-decimal pl-5 space-y-4 text-[15px] md:text-[17px] text-[#222222] font-medium marker:font-medium">
              <li className="pl-1">
                Healthcare Provider Selection
                <ol className="list-[lower-alpha] pl-6 pt-2 space-y-1 font-normal">
                  <li>Browse healthcare providers by specialty or service category.</li>
                  <li>Search for doctors, clinics, or hospitals quickly.</li>
                  <li>View provider profiles, ratings, availability, and consultation fees.</li>
                   <li>Receive personalized recommendations based on health needs and previous interactions.</li>
                </ol>
              </li>
              <li className="pl-1">
                Appointment Transparency
                <ol className="list-[lower-alpha] pl-6 pt-2 space-y-1 font-normal">
                  <li>Display consultation fees before confirming a booking</li>
                  <li>Show available time slots and estimated waiting times.</li>
                  <li>Notify users of any schedule changes or provider availability updates.</li>
                  <li>Clearly indicate whether appointments are virtual or in-person, allowing patients to choose the option that best suits their needs.</li>
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
          src="/firsts.png" 
          alt="High fidelity prototype flow showing motion container transforms between phone top-up screens" 
          className="w-full max-w-[1200px] h-auto object-contain"
        />
      </section>

      <section className="max-w-[1400px] mx-auto w-full py-8">
        
        {/* Top Header */}
        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-normal text-[#111111] tracking-tight mb-12 lg:mb-20">
          Improvement #2: Patient Provider Communication & Appointment Confirmation Flow
        </h1>
        
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[45%] text-[17px] md:text-[21px] text-[#222222] leading-[1.6]">
            <p className="mb-6">
             In this improvement, I combined two essential user flows to create a more seamless healthcare experience:
            </p>
            
            <ol className="list-decimal pl-6 space-y-6 md:space-y-8">
              <li className="pl-2">
                Communicating with healthcare providers before and after appointments through secure in-app messaging.
              </li>
              <li className="pl-2">
                Confirming appointment details, consultation type, schedules, and payment information without requiring users to leave the platform. 
                </li>
                <p className="mb-6">
             This streamlined flow allows patients to ask questions, receive instructions, share relevant information, and stay updated on any appointment 
             changes in real time. By keeping all communication and confirmations within MedxVerse, the experience becomes more transparent, convenient, and 
             trustworthy for both patients and healthcare providers.
            </p>
            </ol>
          </div>

          {/* Right Column: Local Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px] bg-white">
              <img 
                src="/33 .png" 
                alt="Napas Payment Gateway interface crossed out with an orange X, showing it is no longer used" 
                className="w-full h-auto object-contain shadow-sm border border-gray-100"
              />
            </div>
          </div>
          
        </div>
      </section>

       <section className="max-w-[1400px] mx-auto w-full flex justify-center items-center">
        <img 
          src="/op.png" 
          alt="High fidelity prototype flow showing payment method selection and adding a new bank account with motion transitions" 
          className="w-full max-w-[1200px] h-auto object-contain"
        />
      </section>

      <section className="max-w-[1400px] mx-auto w-full flex justify-center items-center">
        <img 
          src="/nty.png" 
          alt="High fidelity prototype flow showing payment method selection and adding a new bank account with motion transitions" 
          className="w-full max-w-[1200px] h-auto object-contain"
        />
      </section>

      <section className="max-w-[1400px] mx-auto w-full flex justify-center items-center mb-32">
  <img
    src="/vid.png"
    alt="High fidelity prototype flow showing payment method selection and adding a new bank account with motion transitions"
    className="w-full max-w-[1200px] h-auto object-contain"
  />
</section>

<section className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
  
  <img
    src="/wal.png"
    alt="High fidelity prototype flow showing payment method selection and adding a new bank account with motion transitions"
    className="w-full max-w-[1200px] h-auto object-contain"
  />
</section>

<section className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
  
  <img
    src="/red.png"
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

              {/* Hand holding pen image */}
              <img
                src="/images/hand.png"
                alt="Hand writing"
                className="absolute -bottom-8 right-0 w-32 md:w-40"
              />
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
              The final design delivered a more intuitive and patient-centered healthcare experience. During usability testing, participants were able to complete key tasks—such as finding the right healthcare provider, booking appointments, using the AI symptom checker, and accessing consultation details—more quickly and with greater confidence.

Users particularly appreciated the AI-powered doctor recommendations, which simplified the process of finding the appropriate specialist for their symptoms. They also valued the transparent appointment flow, clear pricing information, and integrated HMO verification, all of which reduced uncertainty before booking a consultation.

Overall, the design improved accessibility, streamlined the patient journey, and received positive feedback for its simplicity, clarity, and ease of use.
              </p>
            </div>

            {/* Next Plan */}
            <div>
              <h3 className="mb-6 text-4xl font-medium text-black">
                Next plan
              </h3>

              <div className="space-y-6 text-xl leading-relaxed text-gray-900">
                <p>
                 Given more time, I would further refine the end-to-end patient experience
                 by improving error handling, simplifying appointment management, and enhancing communication between patients and healthcare providers.
                </p>

                <p>
                 I would also conduct larger-scale user research using quantitative data and usability testing across a broader range of users to validate
                design decisions and uncover additional opportunities for improvement. Future iterations would explore features such as digital prescriptions, 
                appointment reminders, health record sharing, and post-consultation follow-ups to create a more comprehensive and connected healthcare ecosystem.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
  
  <img
    src="/footer2.png"
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