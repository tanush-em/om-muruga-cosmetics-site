import React, { useEffect } from 'react';
import InfiniteScrollBanner from '../components/InfiniteScrollBanner';
import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, UserCircle, PhoneCall } from 'lucide-react';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const practitioner = {
    name: "Dr R. Kowsalya",
    title: "Permanent Makeup Artist",
    experience: "4+ years of experience",
    qualifications: [
      "BDS, PMU, FMC"
    ]
  };


  const treatments = [
    {
      name: "Hydra Facial Treatment",
      description: "Hydration boost<br/>Reduce acne issues<br/>Smooth's out the skin",
      imageUrl: "/hydrafacial.jpeg"
    },
    {
      name: "Lip Pigmentation - Lip Blush - Lip Tattooing",
      description: "Enhance lip definition and fullness<br/>Enhance natural lip shape<br/>Reshaped and redefines the lip",
      imageUrl: "/lip pegmentation.jpeg"
    },
    {
      name: "Eyebrow Microblading",
      description: "Natural looking results<br/>Enhance appearance<br/>Your brow color will not fade or change color",
      imageUrl: "/eyebrowmicrobalding.jpeg"
    },
    {
      name: "Eyebrow Micropigmentation",
      description: "Customizable<br/>Natural looking and long lasting results<br/>Low maintenance",
      imageUrl: "/eyebrowpigmentation.jpeg"
    },
    {
      name: "Korean Glass Skin Facial",
      description: "Deep Hydration<br/>Safe for sensitive skin types<br/>Detoxifies and purifies the skin",
      imageUrl: "/koreanfacialtreatment.jpeg"
    },
    {
      name: "BB Glow Treatment",
      description: "Visual reduction in acne, blemishes and acne scars<br/>Improves collagen production<br/>Nourishing and hydrating the skin",
      imageUrl: "/bbglowtreatment.jpeg"
    },
    {
      name: "Face and Neck Cupping Therapy",
      description: "Relax muscle tension<br/>Tone chin, jawline, neck<br/>Increase oxygen-rich blood circulation",
      imageUrl: "/faceandneckcupping.jpeg"
    },
    {
      name: "Wart Removal - Skin Tag Removal Treatment",
      description: "Painless treatment<br/>No scarring<br/>Reduce risk of spreading wart",
      imageUrl: "/wartremoval.jpeg"
    },
    {
      name: "Microdermabrasion",
      description: "Improves the skin texture<br/>Reduce scars<br/>Reduces pigmentation",
      imageUrl: "/icrodermabrasion.jpeg"
    },
    {
      name: "Facial Treatment",
      description: "Helps to improve your skin texture<br/>Reduce acne<br/>Reduces the signs of aging",
      imageUrl: "/facialtreatment.jpeg"
    },
    {
      name: "Face, Lips, Under Eye Pigmentation",
      description: "It provides a dramatic improvement in hyperpigmentation<br/>The treatment imparts the radiant glow<br/>Safe and cost-effective procedure",
      imageUrl: "/facelipundereeypigmentation.jpeg"
    },
    {
      name: "Beauty Spot Creation",
      description: "Beauty spot creation areas<br/>Enhancement of appearance<br/>Classic touch to your appearance",
      imageUrl: "/beautyspotcreation.jpeg"
    },
    {
      name: "Laser Hair Removal",
      description: "Smoother skin, reduces hair<br/>Long lasting results<br/>Non-invasive and easily tolerated procedure with no burning",
      imageUrl: "/laserhairremoval.jpeg"
    },
    {
      name: "Photo Facial",
      description: "Having regular photo facials can prevent premature skin aging<br/>Best ways to treat sun-damaged skin<br/>Photo facial can treat stubborn acne",
      imageUrl: "/photofacial.jpeg"
    },
    {
      name: "Laser Tattoo Removal",
      description: "Laser can help fade and remove tattoos<br/>Laser energy breaks down melanin in the skin, which can help reduce the pigments",
      imageUrl: "/lasertatooremoval.jpeg"
    },
    {
      name: "Laser Skin Rejuvenation and Pigmentation",
      description: "Reduce the appearance of scars by promoting skin healing and regeneration<br/>Minimal downtime, long-lasting results",
      imageUrl: "/skinrejuvention.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://isyaderm.com/storage/2023/12/Laser-Hair-Removal-by-Isya-Aesthetics-in-Delhi-1024x683.webp"
            alt="Spa background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-900/40"></div>
        </div>

        <div className="relative text-center text-white px-4 max-w-[90%] md:max-w-none">
          <h1 className="text-2xl sm:text-3xl md:text-7xl mb-4 md:mb-6 font-medium leading-tight">
            OM MURUGA COSMETICS PERMANENT MAKEUP STUDIO
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 md:mb-8">
            Discover your natural beauty
          </p>
          <a href="https://wa.me/message/2M2RUNHV3UVDO1">
            <button className="bg-blue-700 hover:bg-sky-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full backdrop-blur-sm transition-all text-sm md:text-base">
              Book Now
            </button>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-on-scroll opacity-0">
            <div className="flex justify-center mb-4 md:mb-6">
              <Sparkles className="w-16 md:w-24 h-16 md:h-24 animate-pulse" />
            </div>
            <h2 className="text-3xl font-medium md:text-4xl mb-6 md:mb-8 leading-tight">
              WELCOME TO OM MURUGA COSMETICS PERMANENT MAKEUP STUDIO
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Premium permanent makeup studio .
              We offer professional skincare treatment which provides optimal results.
            </p>
          </div>
        </div>
      </section>


      <div className='bg-red-500'>
        <InfiniteScrollBanner />
      </div>

      {/* Contact Us Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-sky-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl text-center mb-8 md:mb-16">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <a
              href="https://www.instagram.com/om__muruga_cosmetics_pmustudio?igsh=MTAwNncxNmtlMmV6eg=="
              className="group flex flex-col items-center p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <Instagram className="w-12 h-12 md:w-16 md:h-16 text-sky-400 group-hover:text-sky-600 transition-colors mb-4" />
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Follow Us</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">Stay Updated With Our Latest Treatments And Offers</p>
            </a>
            <a
              href="https://g.co/kgs/DT8jP9i"
              className="group flex flex-col items-center p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <MapPin className="w-12 h-12 md:w-16 md:h-16 text-sky-400 group-hover:text-sky-600 transition-colors mb-4" />
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Visit Us</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">25A, 2nd Floor, SVS Nagar, 2nd Street, Valasaravakkam, Chennai 600087( NEAR HOLY CROSS SCHOOL )</p>
            </a>
            <a
              href="https://wa.me/message/2M2RUNHV3UVDO1"
              className="group flex flex-col items-center p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
            >
              <PhoneCall className="w-12 h-12 md:w-16 md:h-16 text-sky-400 group-hover:text-sky-600 transition-colors mb-4" />
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">JOIN US ON WHATSAPP</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">Book Apppintment On WhatsApp</p>
            </a>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-sky-900" />
              <span className="text-sm md:text-base text-gray-800">+91 86100 90040</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-sky-900" />
              <span className="text-sm md:text-base text-gray-800">Mon-Sun: 11AM-9PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Section */}
      <section className="py-4 md:py-12 px-4 md:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-2 md:mb-2 animate-on-scroll opacity-0">
            <UserCircle className="w-12 h-12 md:w-12 md:h-12 mx-auto mb-2 md:mb-2 text-sky-900" />
            <h2 className="text-3xl font-bold md:text-4xl mb-2">Meet Our Expert</h2>
          </div>
          <div className="animate-on-scroll opacity-0 max-w-2xl mx-auto text-center px-4">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-sky-900">{practitioner.name}</h3>
              <p className="text-xl md:text-xl text-sky-700">{practitioner.title}</p>
              <p className="text-black text-lg">{practitioner.experience}</p>
              <div className="space-y-">
                <h3 className="list-none lext-lg text-gray-600">
                  {practitioner.qualifications.map((qual, index) => (
                    <div key={index} className="text-sm md:text-base">{qual}</div>
                  ))}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='bg-red-500'>
        <InfiniteScrollBanner />
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="group h-96 [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="h-full w-full rounded-lg shadow-lg overflow-hidden bg-white">
                    <img
                      src={treatment.imageUrl}
                      alt={treatment.name}
                      className="w-full h-2/3 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold">{treatment.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="h-full w-full rounded-lg shadow-lg bg-sky-50 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{treatment.name}</h3>
                      <ul className="text-gray-600 mb-4 list-disc list-inside">
                        {treatment.description.split("<br/>").map((item, index) => (
                          <li key={index}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                    <a href="https://wa.me/message/2M2RUNHV3UVDO1">
                      <button
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md transition-colors duration-200"
                      >
                        Book Now
                      </button>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-red-500'>
        <InfiniteScrollBanner />
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 bg-sky-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-black mr-2" />
            <span className="text-sm font-bold md:text-base text-gray-600">Om Muruga Cosmetics Permanent Makeup Studio</span>
          </div>
          <div className="flex space-x-6 md:space-x-4 text-black">
            <a href="https://wa.me/message/2M2RUNHV3UVDO1" className="text-gray-600 hover:text-sky-600">
              <PhoneCall className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/om__muruga_cosmetics_pmustudio?igsh=MTAwNncxNmtlMmV6eg==" className="text-gray-600 hover:text-sky-600">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:ommurugabeautyclinic@gmail.com" className="text-gray-600 hover:text-sky-600">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://g.co/kgs/DT8jP9i" className="text-gray-600 hover:text-sky-400">
              <MapPin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
