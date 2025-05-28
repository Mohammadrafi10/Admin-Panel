import {
  FaExchangeAlt,
  FaChartLine,
  FaShoppingCart,
  FaDollarSign,
  FaBoxes,
} from "react-icons/fa";

function Cards({ id, title, count }) {
  const getCardStyle = (id) => {
    switch (id) {
      case 1:
        return {
          gradient: "from-emerald-400 via-emerald-500 to-emerald-600",
          hoverGradient:
            "hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700",
          shadowColor: "shadow-emerald-500/20",
          iconBg: "bg-emerald-400/20",
          borderGlow: "group-hover:ring-emerald-500/50",
          icon: FaExchangeAlt,
        };
      case 2:
        return {
          gradient: "from-orange-400 via-orange-500 to-orange-600",
          hoverGradient:
            "hover:from-orange-500 hover:via-orange-600 hover:to-orange-700",
          shadowColor: "shadow-orange-500/20",
          iconBg: "bg-orange-400/20",
          borderGlow: "group-hover:ring-orange-500/50",
          icon: FaChartLine,
        };
      case 3:
        return {
          gradient: "from-pink-400 via-pink-500 to-pink-600",
          hoverGradient:
            "hover:from-pink-500 hover:via-pink-600 hover:to-pink-700",
          shadowColor: "shadow-pink-500/20",
          iconBg: "bg-pink-400/20",
          borderGlow: "group-hover:ring-pink-500/50",
          icon: FaShoppingCart,
        };
      case 4:
        return {
          gradient: "from-blue-400 via-blue-500 to-blue-600",
          hoverGradient:
            "hover:from-blue-500 hover:via-blue-600 hover:to-blue-700",
          shadowColor: "shadow-blue-500/20",
          iconBg: "bg-blue-400/20",
          borderGlow: "group-hover:ring-blue-500/50",
          icon: FaDollarSign,
        };
      case 5:
        return {
          gradient: "from-purple-400 via-purple-500 to-purple-600",
          hoverGradient:
            "hover:from-purple-500 hover:via-purple-600 hover:to-purple-700",
          shadowColor: "shadow-purple-500/20",
          iconBg: "bg-purple-400/20",
          borderGlow: "group-hover:ring-purple-500/50",
          icon: FaBoxes,
        };
      default:
        return {
          gradient: "from-gray-400 via-gray-500 to-gray-600",
          hoverGradient:
            "hover:from-gray-500 hover:via-gray-600 hover:to-gray-700",
          shadowColor: "shadow-gray-500/20",
          iconBg: "bg-gray-400/20",
          borderGlow: "group-hover:ring-gray-500/50",
          icon: FaExchangeAlt,
        };
    }
  };

  const {
    gradient,
    hoverGradient,
    shadowColor,
    iconBg,
    borderGlow,
    icon: Icon,
  } = getCardStyle(id);

  return (
    <div className="p-3">
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${hoverGradient} rounded-xl p-6 ${shadowColor} shadow-2xl text-white backdrop-blur-xl max-w-xs transition-all duration-500 hover:shadow-2xl hover:scale-105 group ring-1 ring-white/10 hover:ring-2 ${borderGlow}`}
      >
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

        {/* Background Icon */}
        <div className="absolute -right-4 -bottom-4 text-white/[0.09] transform transition-transform duration-500 ease-out group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-y-2 group-hover:text-white/[0.12]">
          <Icon className="w-28 h-28 filter blur-[1px]" />
        </div>

        {/* Card Content */}
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <div
              className={`p-3 ${iconBg} backdrop-blur-xl rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/25 ring-1 ring-white/25`}
            >
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-500">
              {title}
            </h3>
          </div>
          <div className="text-4xl font-bold mb-3 text-right transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110">
            {count}
          </div>
          <div className="flex justify-between items-center">
            <div className="h-1 w-16 bg-white/20 rounded-full overflow-hidden">
              <div className="h-1 w-1/2 bg-white rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
            <p className="text-xs text-white/80 text-right transition-all duration-500 group-hover:text-white group-hover:translate-x-2">
              بالاتر بهتر است
            </p>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Subtle Radial Gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default Cards;
