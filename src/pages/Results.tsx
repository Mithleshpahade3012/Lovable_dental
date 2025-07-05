
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, CheckCircle, MapPin, BarChart3, Download, Share2, Calendar, Sparkles, Brain, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import { AnalysisResult } from '../services/dentalAnalysis';

const Results = () => {
  const location = useLocation();
  const { imageData, fileName, analysisResult } = location.state || {};
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!imageData || !analysisResult) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No analysis data found</h1>
          <Link to="/analysis" className="text-blue-600 hover:text-blue-700">
            Go back to analysis page
          </Link>
        </div>
      </div>
    );
  }

  const results: AnalysisResult = analysisResult;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-4 mb-8">
              <Link
                to="/analysis"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Upload</span>
              </Link>
            </div>

            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-green-500 animate-pulse" />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  AI Analysis Complete
                </h1>
                <Target className="w-8 h-8 text-emerald-500 animate-bounce" />
              </div>
              <p className="text-xl text-gray-600">
                Your dental health analysis powered by advanced machine learning
              </p>
              <div className="mt-2 text-sm text-blue-600 flex items-center justify-center space-x-1">
                <Sparkles className="w-4 h-4" />
                <span>Analyzed with real-time AI detection</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Preview with ML Annotations */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <span>AI-Annotated Analysis</span>
                </h2>
                <div className="relative">
                  <img
                    src={results.processedImageUrl || imageData}
                    alt="AI analyzed dental image"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Brain className="w-3 h-3" />
                    <span>AI Processed</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>File:</strong> {fileName}</p>
                  <p><strong>Analysis Date:</strong> {new Date().toLocaleDateString()}</p>
                  <p><strong>Detected Issues:</strong> {results.issues.length}</p>
                </div>
              </div>
            </div>

            {/* Overall Health Score */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/20 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>AI Health Score</span>
                </h2>
                
                <div className="text-center space-y-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={results.overallHealth.score >= 80 ? "#10b981" : results.overallHealth.score >= 60 ? "#f59e0b" : "#ef4444"}
                        strokeWidth="2"
                        strokeDasharray={`${results.overallHealth.score}, 100`}
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-3xl font-bold ${results.overallHealth.score >= 80 ? "text-green-600" : results.overallHealth.score >= 60 ? "text-yellow-600" : "text-red-600"}`}>
                        {results.overallHealth.score}%
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{results.overallHealth.status}</p>
                    <p className="text-gray-600">AI-Assessed Health Status</p>
                  </div>
                  
                  <div className={`rounded-xl p-4 ${results.overallHealth.score >= 80 ? "bg-green-50" : results.overallHealth.score >= 60 ? "bg-yellow-50" : "bg-red-50"}`}>
                    <div className={`flex items-center space-x-2 ${results.overallHealth.score >= 80 ? "text-green-700" : results.overallHealth.score >= 60 ? "text-yellow-700" : "text-red-700"}`}>
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">Next Checkup: {results.overallHealth.nextCheckup}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
                  <Download className="w-5 h-5" />
                  <span>Download Report</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300">
                  <Share2 className="w-5 h-5" />
                  <span>Share Results</span>
                </button>
              </div>
            </div>
          </div>

          {/* AI-Detected Results */}
          <div className={`mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center space-x-2">
              <Brain className="w-8 h-8 text-blue-500" />
              <span>AI-Detected Analysis Results</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.issues.map((result, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-4 h-4 rounded-full ${result.color}`} />
                    <h3 className="text-xl font-bold text-gray-800">{result.disease}</h3>
                    <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold">
                      AI
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{result.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Severity:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        result.severity === 'High' ? 'bg-red-100 text-red-700' :
                        result.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {result.severity}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Affected Area:</span>
                      <span className="font-semibold">{result.affectedArea}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">AI Confidence:</span>
                      <span className="font-semibold text-blue-600">{result.confidence}%</span>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center space-x-1">
                        <Brain className="w-4 h-4 text-blue-500" />
                        <span>AI Recommendations:</span>
                      </h4>
                      <ul className="space-y-1">
                        {result.recommendations.map((rec, recIndex) => (
                          <li key={recIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className={`mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center space-x-2">
              <Target className="w-6 h-6" />
              <span>AI-Recommended Next Steps</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Follow AI Insights</h3>
                <p className="text-blue-100">Implement machine learning-recommended care practices</p>
              </div>
              <div>
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Schedule Professional Review</h3>
                <p className="text-blue-100">Confirm AI findings with your dentist</p>
              </div>
              <div>
                <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Monitor with AI</h3>
                <p className="text-blue-100">Track improvements using regular AI analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
