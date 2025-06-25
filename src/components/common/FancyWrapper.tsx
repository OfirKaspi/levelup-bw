"use client"

interface FancyWrapperProps {
  children: React.ReactNode;
  isDark?: boolean;
  className?: string;
}

const FancyWrapper = ({ children, isDark = true, className = "" }: FancyWrapperProps) => {
  const style = isDark ? "text-white bg-gray-900" : "text-gray-900 bg-white";
  return (
    <div className={`relative inline-flex group`}>
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-purple-400 via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
      <div className={`relative z-20 h-10 px-4 transition-all duration-200 rounded-md flex items-center justify-center font-bold ${style} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default FancyWrapper;