import React, { useState, useEffect } from 'react';
import { ChevronLeft, BookOpen, FileText, Trophy, Star, Check, ArrowRight, Target, Users, ChevronDown, ChevronUp, ClipboardList, BookMarked, GraduationCap } from 'lucide-react';

const exams = [
  {
    name: 'SSC CGL',
    mocks: 300,
    pyqs: 109,
    studyNotes: 'Complete',
    logo: '/image copy 2.png'
  },
  {
    name: 'IBPS PO',
    mocks: 400,
    pyqs: 140,
    studyNotes: 'Complete',
    logo: '/image copy.png'
  },
  {
    name: 'RRB NTPC',
    mocks: 250,
    pyqs: 130,
    studyNotes: 'Complete',
    logo: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    name: 'SBI Clerk',
    mocks: 200,
    pyqs: 95,
    studyNotes: 'Complete',
    logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    name: 'CTET',
    mocks: 180,
    pyqs: 120,
    studyNotes: 'Complete',
    logo: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

const successStories = [
  {
    name: 'Ankita',
    exam: 'SSC CGL',
    rank: '23rd',
    testimonial: 'TestBook helped me crack SSC CGL with confidence!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Rahul',
    exam: 'IBPS PO',
    rank: '45th',
    testimonial: 'The mock tests were exactly like the real exam.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Priya',
    exam: 'RRB NTPC',
    rank: '12th',
    testimonial: 'Amazing study material and excellent support.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Arjun',
    exam: 'SBI Clerk',
    rank: '67th',
    testimonial: 'Best platform for government exam preparation.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

const faqs = [
  {
    question: "What is included in the ₹5 trial?",
    answer: "The ₹5 trial gives you complete access to all features for 5 days including 150,000+ mock tests, 30,000+ previous year questions, 10,000+ study notes, live tests, analytics, PDF downloads, and doubt solving support."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription anytime without any hassle. There are no long-term commitments or cancellation fees."
  },
  {
    question: "What happens after the 5-day trial?",
    answer: "After the trial period, your subscription will automatically continue at ₹249 for 3 months. You can cancel before the trial ends to avoid charges."
  },
  {
    question: "Which exams are covered?",
    answer: "We cover 100+ government exams including SSC CGL, IBPS PO, RRB NTPC, SBI Clerk, CTET, UPSC, Banking, Railways, Teaching, and many more competitive exams."
  },
  {
    question: "Are the mock tests updated regularly?",
    answer: "Yes, our mock tests are regularly updated based on the latest exam patterns and syllabus changes. We add new tests every week."
  },
  {
    question: "Can I download study materials?",
    answer: "Yes, you can download PDF notes and study materials for offline studying. All materials are available in multiple languages."
  }
];

function App() {
  const [currentExam, setCurrentExam] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const storyInterval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 3000);
    return () => clearInterval(storyInterval);
  }, []);

  useEffect(() => {
    const examInterval = setInterval(() => {
      setCurrentExam((prev) => (prev + 1) % exams.length);
    }, 4000);
    return () => clearInterval(examInterval);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="bg-black px-5 py-4 shadow-2xl">
        <div className="flex justify-between items-center">
          <ChevronLeft className="text-white w-6 h-6 hover:text-cyan-400 transition-colors cursor-pointer drop-shadow-lg" />
          <div className="flex items-center justify-center">
            <img 
              src="/image copy copy.png" 
              alt="TestBook" 
              className="h-8 object-contain drop-shadow-2xl"
            />
          </div>
          <div className="w-6 h-6"></div>
        </div>
      </div>

      {/* Hero Section - Card-based design with enhanced 3D shadows */}
      <div className="px-5 py-6">
        <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform hover:scale-[1.02] transition-all duration-300">
          <div className="text-center">
            {/* Large Rupee and Number with text shadows */}
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl font-black text-black leading-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]">₹</span>
              <span className="text-8xl font-black text-black leading-none ml-2 drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]">5</span>
            </div>
            
            {/* Days Text with shadow */}
            <h1 className="text-3xl font-black text-black mb-2 tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">DAYS</h1>
            
            {/* Access to Everything Text with shadow */}
            <div className="mb-8">
              <span className="text-2xl font-black text-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">ACCESS TO </span>
              <span className="text-2xl font-black text-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">EVERYTHING</span>
            </div>
            
            {/* Pricing Info with enhanced shadow */}
            <div className="bg-black rounded-2xl px-6 py-4 inline-block mb-4 shadow-[0_12px_24px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-all duration-300">
              <p className="text-lg font-bold text-cyan-400 drop-shadow-lg">After that ₹249 for 3 months</p>
            </div>
            <p className="text-base font-semibold text-gray-600 mb-8 drop-shadow-sm">Cancel anytime</p>
          </div>
        </div>
      </div>

      {/* Features Cards with dramatic 3D shadows */}
      <div className="px-5 pb-6">
        <div className="space-y-4">
          <div className="bg-black rounded-2xl p-6 shadow-[0_16px_32px_rgba(0,0,0,0.6)] hover:bg-cyan-500 transition-all duration-300 cursor-pointer group transform hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(6,182,212,0.4)]">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm group-hover:bg-white/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] transform group-hover:scale-110 transition-all duration-300">
                  <ClipboardList className="w-6 h-6 drop-shadow-lg" />
                </div>
                <span className="text-2xl font-black drop-shadow-lg">150,000+</span>
                <span className="font-bold text-lg drop-shadow-lg">Mock Tests</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black rounded-2xl p-6 shadow-[0_16px_32px_rgba(0,0,0,0.6)] hover:bg-cyan-500 transition-all duration-300 cursor-pointer group transform hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(6,182,212,0.4)]">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm group-hover:bg-white/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] transform group-hover:scale-110 transition-all duration-300">
                  <BookMarked className="w-6 h-6 drop-shadow-lg" />
                </div>
                <span className="text-2xl font-black drop-shadow-lg">30,000+</span>
                <span className="font-bold text-lg drop-shadow-lg">Previous Year Questions</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black rounded-2xl p-6 shadow-[0_16px_32px_rgba(0,0,0,0.6)] hover:bg-cyan-500 transition-all duration-300 cursor-pointer group transform hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(6,182,212,0.4)]">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm group-hover:bg-white/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] transform group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 drop-shadow-lg" />
                </div>
                <span className="text-2xl font-black drop-shadow-lg">10,000+</span>
                <span className="font-bold text-lg drop-shadow-lg">Study Notes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Carousel with enhanced shadows */}
      <div className="px-5 py-6">
        <h3 className="text-xl font-black text-white mb-6 text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">Your Exams</h3>
        
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={exams[currentExam].logo} 
                  alt={exams[currentExam].name}
                  className="w-16 h-16 rounded-xl border-2 border-gray-200 object-contain bg-gray-50 p-2 shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
                />
                <div className="absolute -top-2 -right-2 bg-cyan-500 rounded-full p-1 shadow-[0_4px_8px_rgba(6,182,212,0.5)]">
                  <Check className="w-3 h-3 text-white drop-shadow-sm" />
                </div>
              </div>
              <h4 className="text-2xl font-black text-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">{exams[currentExam].name}</h4>
            </div>
          </div>
          
          <div className="bg-black rounded-xl p-5 text-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)]">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-cyan-500 rounded-lg p-2 shadow-[0_4px_8px_rgba(6,182,212,0.4)]">
                  <Target className="w-5 h-5 drop-shadow-sm" />
                </div>
                <div>
                  <p className="text-xl font-black drop-shadow-lg">{exams[currentExam].mocks}</p>
                  <p className="text-sm text-gray-300 drop-shadow-sm">Mocks</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-cyan-500 rounded-lg p-2 shadow-[0_4px_8px_rgba(6,182,212,0.4)]">
                  <FileText className="w-5 h-5 drop-shadow-sm" />
                </div>
                <div>
                  <p className="text-xl font-black drop-shadow-lg">{exams[currentExam].pyqs}</p>
                  <p className="text-sm text-gray-300 drop-shadow-sm">PYQs</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-cyan-500 rounded-lg p-3 shadow-[0_4px_8px_rgba(6,182,212,0.4)]">
              <Check className="w-5 h-5 mr-2 drop-shadow-sm" />
              <span className="font-bold drop-shadow-sm">Complete Study Notes</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3">
          {exams.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentExam(index)}
              className={`w-3 h-3 rounded-full transition-all shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${
                index === currentExam ? 'bg-cyan-500 scale-125 shadow-[0_4px_8px_rgba(6,182,212,0.5)]' : 'bg-gray-500 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Success Stories with enhanced 3D effects */}
      <div className="px-5 py-6">
        <h3 className="text-xl font-black text-white mb-6 text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">Success Stories</h3>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentStory * 100}%)` }}
          >
            {successStories.map((story, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-white rounded-2xl p-8 text-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform hover:scale-[1.02] transition-all duration-300">
                  <div className="relative inline-block mb-6">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-[0_8px_16px_rgba(6,182,212,0.3)]"
                    />
                    <div className="absolute -top-2 -right-2 bg-black rounded-full p-2 shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
                      <Trophy className="w-4 h-4 text-cyan-400 drop-shadow-sm" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-black mb-2 text-cyan-500 drop-shadow-[0_4px_8px_rgba(6,182,212,0.3)]">{story.name}</h4>
                  <p className="text-xl font-black mb-2 text-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">Rank {story.rank}</p>
                  <p className="text-base text-gray-600 mb-4 drop-shadow-sm">{story.exam}</p>
                  <p className="text-sm text-gray-700 italic mb-4 font-medium drop-shadow-sm">"{story.testimonial}"</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400 drop-shadow-[0_2px_4px_rgba(6,182,212,0.3)]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-3 mt-6">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-3 h-3 rounded-full transition-all shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${
                index === currentStory ? 'bg-cyan-500 scale-125 shadow-[0_4px_8px_rgba(6,182,212,0.5)]' : 'bg-gray-500 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Total Selections with dramatic shadow */}
      <div className="px-5 py-6">
        <div className="bg-white rounded-2xl p-8 text-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-cyan-500 rounded-2xl p-4 shadow-[0_8px_16px_rgba(6,182,212,0.4)]">
              <Trophy className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
          </div>
          <h3 className="text-5xl font-black mb-3 text-black drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]">423,109+</h3>
          <p className="text-xl font-bold text-cyan-500 drop-shadow-[0_4px_8px_rgba(6,182,212,0.3)]">Total Selections</p>
        </div>
      </div>

      {/* Features Grid with enhanced 3D shadows */}
      <div className="px-5 py-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-[0_16px_32px_rgba(8,_112,_184,_0.6)] transform hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.8)]">
            <div className="bg-cyan-500 rounded-xl p-3 mb-4 w-fit shadow-[0_6px_12px_rgba(6,182,212,0.4)]">
              <Users className="w-6 h-6 text-white drop-shadow-sm" />
            </div>
            <h4 className="font-black text-black mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">Live Tests</h4>
            <p className="text-sm text-gray-600 drop-shadow-sm">Real-time assessment</p>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-[0_16px_32px_rgba(8,_112,_184,_0.6)] transform hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.8)]">
            <div className="bg-cyan-500 rounded-xl p-3 mb-4 w-fit shadow-[0_6px_12px_rgba(6,182,212,0.4)]">
              <Trophy className="w-6 h-6 text-white drop-shadow-sm" />
            </div>
            <h4 className="font-black text-black mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">Analytics</h4>
            <p className="text-sm text-gray-600 drop-shadow-sm">Track progress</p>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-[0_16px_32px_rgba(8,_112,_184,_0.6)] transform hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.8)]">
            <div className="bg-cyan-500 rounded-xl p-3 mb-4 w-fit shadow-[0_6px_12px_rgba(6,182,212,0.4)]">
              <FileText className="w-6 h-6 text-white drop-shadow-sm" />
            </div>
            <h4 className="font-black text-black mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">PDF Notes</h4>
            <p className="text-sm text-gray-600 drop-shadow-sm">Download & study</p>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-[0_16px_32px_rgba(8,_112,_184,_0.6)] transform hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.8)]">
            <div className="bg-cyan-500 rounded-xl p-3 mb-4 w-fit shadow-[0_6px_12px_rgba(6,182,212,0.4)]">
              <Star className="w-6 h-6 text-white drop-shadow-sm" />
            </div>
            <h4 className="font-black text-black mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">Doubt Solving</h4>
            <p className="text-sm text-gray-600 drop-shadow-sm">Get instant help</p>
          </div>
        </div>
      </div>

      {/* FAQs Section with enhanced shadows */}
      <div className="px-5 py-6">
        <h3 className="text-xl font-black text-white mb-6 text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">Frequently Asked Questions</h3>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-[0_12px_24px_rgba(8,_112,_184,_0.5)] overflow-hidden transform hover:scale-[1.01] transition-all duration-300 hover:shadow-[0_16px_32px_rgba(8,_112,_184,_0.7)]">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-black font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-500 flex-shrink-0 ml-3 drop-shadow-sm" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyan-500 flex-shrink-0 ml-3 drop-shadow-sm" />
                )}
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-4 border-t border-gray-100 bg-gray-50">
                  <p className="text-gray-700 text-sm leading-relaxed pt-4 drop-shadow-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sticky CTA with dramatic 3D shadow */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-cyan-500 p-5 shadow-[0_-20px_50px_rgba(8,_112,_184,_0.8)]">
        <div className="flex items-center justify-between">
          <button className="flex-1 bg-cyan-500 text-white font-black py-4 rounded-2xl text-lg hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-[0_12px_24px_rgba(6,182,212,0.5)] transform hover:scale-[1.02] hover:shadow-[0_16px_32px_rgba(6,182,212,0.6)]">
            <span className="drop-shadow-lg">START TRIAL NOW</span>
            <ArrowRight className="w-5 h-5 drop-shadow-lg" />
          </button>
          <div className="ml-4 text-right">
            <p className="text-black font-black text-4xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">₹5</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-3 font-medium drop-shadow-sm">
          Secure payment • Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default App;