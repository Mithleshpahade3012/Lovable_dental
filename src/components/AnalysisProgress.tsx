
import { Loader2, Brain, Camera, Sparkles } from 'lucide-react';

interface AnalysisProgressProps {
  currentStep: string;
  isAnalyzing: boolean;
}

const AnalysisProgress = ({ currentStep, isAnalyzing }: AnalysisProgressProps) => {
  const steps = [
    { name: 'Preparing image...', icon: Camera },
    { name: 'Loading AI model...', icon: Brain },
    { name: 'Analyzing dental features...', icon: Sparkles },
    { name: 'Generating report...', icon: Loader2 }
  ];

  const currentStepIndex = steps.findIndex(step => currentStep.includes(step.name.split('...')[0]));

  if (!isAnalyzing) return null;

  return (
    <div className="mt-6 bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-blue-200">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
        <h3 className="text-lg font-semibold text-blue-800">AI Analysis in Progress</h3>
      </div>
      
      <div className="space-y-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;
          
          return (
            <div 
              key={step.name}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                isActive ? 'bg-blue-100 border border-blue-300' :
                isCompleted ? 'bg-green-50 border border-green-200' :
                'bg-gray-50 border border-gray-200'
              }`}
            >
              <Icon className={`w-5 h-5 ${
                isActive ? 'text-blue-600 animate-pulse' :
                isCompleted ? 'text-green-600' :
                'text-gray-400'
              }`} />
              <span className={`font-medium ${
                isActive ? 'text-blue-800' :
                isCompleted ? 'text-green-700' :
                'text-gray-500'
              }`}>
                {step.name}
              </span>
              {isCompleted && (
                <div className="ml-auto w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 text-center">
        <div className="text-sm text-blue-600 font-medium">{currentStep}</div>
        <div className="text-xs text-gray-500 mt-1">This may take a few moments...</div>
      </div>
    </div>
  );
};

export default AnalysisProgress;
