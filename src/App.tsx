import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, FileText, Trophy, Star, Check, ArrowRight, Target, Users, ChevronDown, ChevronUp } from 'lucide-react';

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
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Rahul',
    exam: 'IBPS PO',
    rank: '45th',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Priya',
    exam: 'RRB NTPC',
    rank: '12th',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Arjun',
    exam: 'SBI Clerk',
    rank: '67th',
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
    answer: "After the trial period, your subscription will automatically continue at ₹249/month. You can cancel before the trial ends to avoid charges."
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pb-20">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm px-4 py-3 border-b border-white/10">
        <div className="flex justify-between items-center">
          <ChevronLeft className="text-white w-6 h-6" />
          <div className="flex items-center justify-center">
            <img 
              src="/image.png" 
              alt="TestBook" 
              className="h-8 object-contain"
            />
          </div>
          <div className="w-6 h-6"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 py-12 text-white">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <div className="flex items-baseline justify-center space-x-2 mb-2">
              <span className="text-6xl font-black bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">₹</span>
              <span className="text-8xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5</span>
            </div>
            <h2 className="text-4xl font-black mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              DAYS
            </h2>
            <h3 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">ALL </span>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">ACCESS</span>
            </h3>
          </div>
          
          <p className="text-xl font-bold text-blue-400 mb-2">₹249/MONTH</p>
          <p className="text-lg font-semibold mb-8">CANCEL ANYTIME</p>
          
          {/* Statistics Cards */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 gap-6 text-center">
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 border border-blue-400/30">
                    <BookOpen className="w-6 h-6 text-blue-300" />
                  </div>
                  <span className="text-sm font-bold">MOCKS</span>
                </div>
                <span className="text-2xl font-black text-blue-300">150000+</span>
              </div>
              
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-3 border border-emerald-400/30">
                    <FileText className="w-6 h-6 text-emerald-300" />
                  </div>
                  <span className="text-sm font-bold">PYQS</span>
                </div>
                <span className="text-2xl font-black text-emerald-300">30000+</span>
              </div>
              
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-3 border border-purple-400/30">
                    <Trophy className="w-6 h-6 text-purple-300" />
                  </div>
                  <span className="text-sm font-bold">STUDY NOTES</span>
                </div>
                <span className="text-2xl font-black text-purple-300">10000+</span>
              </div>
            </div>
            
            {/* Bottom text */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-blue-200 font-medium">Test Series | PYQs | Notes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Carousel */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Your Exams</h3>
        
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 mb-6 border border-white/20 shadow-2xl">
            <div className="flex justify-center items-center mb-6">
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={exams[currentExam].logo} 
                  alt={exams[currentExam].name}
                  className="w-16 h-16 rounded-xl border-2 border-white/30 shadow-lg object-contain bg-white/10 p-2"
                />
                <h4 className="text-3xl font-black text-white">{exams[currentExam].name}</h4>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/80 to-indigo-700/80 backdrop-blur-sm rounded-2xl p-6 text-white border border-blue-400/30 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 border border-white/30">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-black">{exams[currentExam].mocks}</p>
                    <p className="text-sm font-semibold opacity-90">Mocks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 border border-white/30">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-black">{exams[currentExam].pyqs}</p>
                    <p className="text-sm font-semibold opacity-90">PYQs</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Check className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Complete Study Notes</span>
              </div>
            </div>
          </div>

          {/* Exam Indicators */}
          <div className="flex justify-center space-x-3 mb-8">
            {exams.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentExam(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentExam 
                    ? 'bg-blue-400 shadow-lg shadow-blue-400/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Success Stories</h3>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentStory * 100}%)` }}
          >
            {successStories.map((story, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-gradient-to-br from-emerald-500/80 to-blue-600/80 backdrop-blur-xl rounded-3xl p-8 text-white text-center border border-white/20 shadow-2xl">
                  <div className="relative inline-block mb-6">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-24 h-24 rounded-full border-4 border-white/40 shadow-xl"
                    />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2 border-2 border-white/30 shadow-lg">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-black mb-2">{story.name}</h4>
                  <p className="text-xl font-bold mb-2">Rank {story.rank}</p>
                  <p className="text-sm font-semibold opacity-90 mb-4">{story.exam}</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300 drop-shadow-lg" />
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStory 
                  ? 'bg-blue-400 shadow-lg shadow-blue-400/50' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Total Selections */}
      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-green-500/80 to-emerald-600/80 backdrop-blur-xl rounded-3xl p-8 text-white text-center border border-white/20 shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <Trophy className="w-8 h-8 text-yellow-300" />
            </div>
          </div>
          <h3 className="text-4xl font-black mb-2 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            423109+
          </h3>
          <p className="text-xl font-bold">Total Selections</p>
          <p className="text-sm font-semibold opacity-90 mt-2">Students selected through TestBook</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-xl">
            <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 mb-4 w-fit border border-blue-400/30">
              <Users className="w-7 h-7 text-blue-300" />
            </div>
            <h4 className="font-bold text-white mb-2">Live Tests</h4>
            <p className="text-sm text-blue-200">Real-time assessment</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-xl">
            <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-4 mb-4 w-fit border border-emerald-400/30">
              <Trophy className="w-7 h-7 text-emerald-300" />
            </div>
            <h4 className="font-bold text-white mb-2">Analytics</h4>
            <p className="text-sm text-blue-200">Track your progress</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-xl">
            <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-4 mb-4 w-fit border border-purple-400/30">
              <FileText className="w-7 h-7 text-purple-300" />
            </div>
            <h4 className="font-bold text-white mb-2">PDF Notes</h4>
            <p className="text-sm text-blue-200">Download & study offline</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-xl">
            <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-4 mb-4 w-fit border border-orange-400/30">
              <Star className="w-7 h-7 text-orange-300" />
            </div>
            <h4 className="font-bold text-white mb-2">Doubt Solving</h4>
            <p className="text-sm text-blue-200">Get instant help</p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-white font-semibold">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-300 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-300 flex-shrink-0 ml-4" />
                )}
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-4 border-t border-white/10">
                  <p className="text-blue-200 text-sm leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-t border-white/10 p-4">
        <div className="flex items-center justify-between">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black py-5 rounded-2xl text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 border border-blue-400/30 backdrop-blur-sm flex items-center justify-center space-x-2">
            <span>START TRIAL NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="ml-4 text-right">
            <p className="text-white font-black text-5xl">₹5</p>
          </div>
        </div>
        <p className="text-center text-xs text-blue-200 mt-3 font-medium">
          Secure payment • Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default App;