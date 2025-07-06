'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Source_Sans_3 } from 'next/font/google';
import Image from "next/image";
import { Merriweather } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
// import { Source_Sans_3 } from 'next/font/google';


const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
});


const sourceSans = Source_Sans_3({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

// const sourceSans = Source_Sans_Pro({
//   weight: ['400', '600', '700'],
//   subsets: ['latin'],
// });



export default function Home() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'No, but a superbill is provided for self-submission.',
    },
    {
      question: 'Are online sessions available?',
      answer: 'Yes—all virtual sessions via Zoom.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: '24-hour notice required.',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen w-screen bg-[#f3f0e7] flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full px-[4.3rem] py-11 flex justify-between items-center bg-[#f3f0e7] z-20">
        <img src="/image/Logo.png" alt="" className='w-[20%]' />
      </nav>

      {/* Hero section */}
      <div className="relative w-[91%] ml-2 h-screen px-8 py-8 flex items-center justify-center mt-0 mb-20">

        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover z-[-1]"
          >
            <source src="/vid/HomeVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white w-full">
          <h1 className={`${playfair.className} text-4xl md:text-6xl font-bold mb-4`} style={{ color: '#FEFEFE' }}>
            Psychological Care for
          </h1>
          <h1 className={`${playfair.className} text-2xl md:text-4xl font-semibold mb-6`} style={{ color: '#FEFEFE' }}>
            Change, Insight, and Well-Being
          </h1>

          <p className={`${playfair.className} max-w-xl mb-6 mx-auto`} style={{ color: '#FEFEFE' }}>
            Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation.
          </p>

          <a href="#about">
            <button className="px-6 py-3 bg-[#94b0b1] hover:bg-[#9abbbc9e] rounded-full text-white font-semibold transition-all duration-200 ease-in-out">
              Book a Free Consult
            </button>
          </a>
        </div>
      </div>

      <br></br>

      {/* About us */}
      <section
        id="about"
        className="flex items-center flex-col justify-center bg-white px-4 py-32 w-full h-fit"
      >
        <div className="bg-white justify-center max-w-auto w-auto p-8 flex flex-col md:flex-row md:space-x-25">
          {/* Left: Text (on large screens) */}
          <div className="w-full md:w-[40%] order-2 md:order-none flex flex-col justify-center md:order-1">
            <h1
              className={playfair.className}
              style={{
                fontSize: '28.96px',
                color: '#000000',
                margin: '0px 0px 32px',
              }}
            >
              About Dr. Jennifer Hahm
            </h1>
            <div style={{ fontFamily: 'Libre Franklin', color: '#7E7E6B' }}>
              <p className="mb-4">
                Dr. Serena Blake, PsyD, is a licensed clinical psychologist practicing in Los Angeles, California. With over eight years of experience and more than 500 client sessions, she specializes in helping individuals and couples navigate anxiety, heal from trauma, and build stronger, more fulfilling relationships. Combining evidence-based techniques such as cognitive-behavioral therapy and mindfulness with a warm, client-centered approach, Dr. Blake tailors each session to meet your unique needs and goals.
              </p>
              <p className="mb-4">
                Located at 1287 Maplewood Drive in the heart of Los Angeles, Dr. Blake offers both in-person and virtual therapy to accommodate your lifestyle. In-person appointments are available on Tuesdays and Thursdays from 10 AM to 6 PM, while virtual sessions via Zoom are offered Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Whether you prefer the privacy of her welcoming office or the convenience of meeting from home, you can expect a safe, nonjudgmental environment designed to support your growth and well-being.
              </p>
              <p>
                Dr. Blake believes therapy is a collaborative journey toward greater insight, balance, and resilience. Her practice reflects a deep commitment to helping you feel heard, understood, and empowered as you work through life’s challenges. Individual sessions are offered at $200 each, and couples sessions at $240, with the goal of providing accessible, high-quality psychological care. To schedule an appointment or learn more, reach out at (323) 555-0192 or email serena@blakepsychology.com today.
              </p>
            </div>
          </div>
          {/* Right: Image (on large screens) */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center order-1 md:order-2">
            <img
              src="/dr.jpg"
              alt="Dr. Jennifer Hahm"
              className="rounded-md shadow-md w-full max-w-xs md:max-w-none"
              style={{ height: 'auto', maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <hr className='mb-2 mt-20 w-[88%] border text-[#7E7E6B] border-[#7E7E6B] justify-self-center' />
      </section>
      <section className="border-stone-200 py-20 px-4 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className={`${playfair.className} text-4xl mb-12`}
            style={{ color: '#41413F' }}
          >
            Areas of Focus
          </h1>
          <div className="grid md:grid-cols-3 gap-16">

            {/* Service 1 */}
            <div className="flex flex-col gap-2 items-center text-center">
              <img
                src="/ser1.jpg"
                alt="Healthcare Providers and Students"
                className="w-72 h-72 object-cover rounded-full mb-6"
              />
              <h2
                className={`${playfair.className} text-xl md:text-2xl font-semibold mb-2`}
                style={{ color: '#41413F', fontSize: '22.48px' }}
              >
                Anxiety & Stress Management
              </h2>
              <p className={`${sourceSans.className} text-base`} style={{ color: '#41413F', fontSize: '15px' }}>
                Anxiety and stress can feel overwhelming, but therapy offers a path toward greater calm and clarity. Together, we can identify the sources of your worry, address unhelpful thought patterns, and develop effective coping strategies to help you feel more grounded in daily life. Whether you’re facing constant pressure, panic, or simply feeling unable to relax, this work can help you regain a sense of balance, resilience, and confidence as you navigate life’s demands.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <img
                src="/ser 2.jpg"
                alt="Trauma and Grief"
                className="w-72 h-72 object-cover rounded-full mb-6"
              />
              <h2
                className={`${playfair.className} text-xl md:text-2xl font-semibold mb-2`}
                style={{ color: '#41413F', fontSize: '22.48px' }}
              >
                Relationship Counseling
              </h2>
              <p className={`${sourceSans.className} text-base`} style={{ color: '#41413F', fontSize: '15px' }}>
                Every relationship faces challenges, and therapy can help you and your partner navigate those difficulties with understanding and care. Whether you’re struggling with communication, rebuilding trust, managing conflict, or feeling disconnected, we can work together to strengthen your bond and foster greater intimacy. In a supportive, nonjudgmental space, we’ll explore the patterns that may be keeping you stuck and develop healthier ways of relating, so you can move toward a more fulfilling and resilient partnership.
              </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col gap-2 items-center text-center">
              <img
                src="/ser 3.jpg"
                alt="Second Generation Immigrant Families"
                className="w-72 h-72 object-cover rounded-full mb-6"
              />
              <h2
                className={`${playfair.className} text-xl md:text-2xl font-semibold mb-2`}
                style={{ color: '#41413F', fontSize: '22.48px' }}
              >
                Trauma Recovery
              </h2>
              <p className={`${sourceSans.className} text-base`} style={{ color: '#41413F', fontSize: '15px' }}>
                Healing from trauma is a deeply personal journey, and therapy can provide the support and tools you need to move forward at your own pace. Whether your experience stems from childhood adversity, relationship wounds, loss, or a sudden, life-altering event, we can work together to process what you’ve endured and begin to restore a sense of safety, trust, and resilience. My approach is compassionate and evidence-based, helping you reclaim your narrative and create a life that feels more whole and grounded.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Rates and insurance */}
      <section className="bg-[#89a6a6] py-16 px-4 w-full">
        <div className="max-w-3xl mx-auto text-center text-black">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Rates and Insurance
          </h2>

          <div className={`${sourceSans.className}`}>
            <p
              style={{ fontSize: '18.96px', color: '#000000', margin: '16px 0' }}
            >
              Individual session - <strong>$200</strong>
            </p>

            <p
              style={{ fontSize: '18.96px', color: '#000000', margin: '16px 0' }}
            >
              Couples sessions - <strong>$225</strong>
            </p>

            <p
              style={{ fontSize: '18.96px', color: '#000000', margin: '16px 0' }}
            >
              I accept both private pay and insurance. I am in-network with BCBS and Aetna.
            </p>

            <p
              style={{ fontSize: '18.96px', color: '#000000', margin: '16px 0' }}
            >
              For out-of-network plans, I’ve partnered with Mentaya using{' '}
              <a
                href="https://www.mentaya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-800"
              >
                this tool
              </a>{' '}
              to help you check your eligibility for reimbursement for my services.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-16 bg-gray-50 w-full">
        <div className="max-w-3xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-950">Frequently Asked Questions</h2>

          <div className={`${sourceSans.className} space-y-4`}>
            {faqs.map((faq, index) => (
              <>
                <div key={index} onClick={() => toggle(index)} className='flex flex-col cursor-pointer gap-3 justify-center items-center w-full text-black'>
                  <div className='flex gap-2 justify-center items-center w-full'>
                    <IoIosArrowForward className={`border rounded-full h-[100%] w-auto transition-all duration-200 ease-in-out ${openIndex === index ? "rotate-90" : ""}`} />
                    <p className='w-full'>{faq.question}</p>
                  </div>

                  {openIndex === index && (
                    <p className="text-left w-full">{faq.answer}</p>
                  )}
                </div>
                <hr className='mb-2 mt-1 w-full border text-black border-black justify-self-center' />
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className='flex justify-center items-center py-10' id="contact">
        <form action="" className='text-[#000000] flex flex-col px-10 py-8 rounded-xl gap-6 w-[50%] border'>
          <h2 className='text-center text-3xl'>Get In Touch</h2>
          <p className='text-center text-sm mb-3'>Simply fill out he brief fields below and Dr. Serena will be in touch with you soon, usually within one business day. This form is safe, private and completely free.</p>

          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='px-1'>Name</label>
            <input type="text" name="name" id="name" className='border px-3 py-[0.35rem] rounded-lg' placeholder='Name' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='px-1'>Email</label>
            <input type="text" name="email" id="email" className='border px-2 py-[0.35rem] rounded-lg' placeholder='you@example.com' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="phone" className='px-1'>Phone</label>
            <input type="text" name="phone" id="phone" className='border px-2 py-[0.35rem] rounded-lg' placeholder='(555) 234-5678' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="message" className='px-1'>Message</label>
            <textarea name="message" id="message" className='border px-2 py-[0.35rem] rounded-lg' placeholder='How can I help you?'></textarea>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='px-1'>Preferred Contact Time</label>
            <input type="text" name="" id="" className='border px-2 py-[0.35rem] rounded-lg' placeholder='e.g, Mornings, Afternoons, Evenings, Weekends' />
            <p className='text-xs'>Let us know when you&apos;re typically available for a call or consultation</p>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="">Preferred Contact Method</label>
            <select name="" id="" className='border p-3 rounded-lg'>
              <option value="" className='border px-2 py-[0.35rem] rounded-lg'>Select preferred method</option>
            </select>
          </div>

          <button className='w-full px-auto py-2 border mt-3 rounded-lg'>Submit</button>

          <p className='flex gap-1 justify-center text-sm'><span><IoIosInformationCircleOutline className='text-xl' /> </span>By clicking submit you consent to receive texts and emails from Dr. Serena Blake</p>
        </form>
      </section>
    </main>
  );
}
