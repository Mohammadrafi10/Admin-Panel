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
          gradient:
            "from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700",
          icon: FaExchangeAlt,
        };
      case 2:
        return {
          gradient:
            "from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700",
          icon: FaChartLine,
        };
      case 3:
        return {
          gradient:
            "from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700",
          icon: FaShoppingCart,
        };
      case 4:
        return {
          gradient:
            "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700",
          icon: FaDollarSign,
        };
      case 5:
        return {
          gradient:
            "from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700",
          icon: FaBoxes,
        };
      default:
        return {
          gradient:
            "from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700",
          icon: FaExchangeAlt,
        };
    }
  };

  const { gradient, icon: Icon } = getCardStyle(id);

  return (
    <div className="p-4">
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${gradient} rounded-xl p-6 shadow-lg text-white max-w-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 group`}
      >
        {/* Background Icon */}
        <div className="absolute -right-6 -bottom-6 text-white/[0.07] transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          <Icon className="w-32 h-32" />
        </div>

        {/* Card Content */}
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <div className="p-3 bg-white/20 rounded-lg transition-all duration-300 group-hover:bg-white/25">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className="text-4xl font-bold mb-3 text-right transition-all duration-300 group-hover:translate-x-2">
            {count}
          </div>
          <p className="text-sm text-white/80 text-right transition-all duration-300 group-hover:text-white">
            بالاتر بهتر است
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
    </div>
  );
}

export default Cards;
