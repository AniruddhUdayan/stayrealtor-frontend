const StatCard = ({ title, value, change, trend, icon }) => (
  <div className="bg-white rounded-xl p-lg border border-neutral-200 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-md">
      <div className="flex items-center space-x-sm">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          trend === 'up' ? 'bg-success-100' : trend === 'down' ? 'bg-error-100' : 'bg-neutral-100'
        }`}>
          {icon}
        </div>
        <h3 className="font-medium text-neutral-700">{title}</h3>
      </div>
      <span className={`text-sm font-medium px-sm py-xs rounded-full ${
        trend === 'up' ? 'bg-success-100 text-success-700' : 
        trend === 'down' ? 'bg-error-100 text-error-700' : 
        'bg-neutral-100 text-neutral-700'
      }`}>
        {change}
      </span>
    </div>
    <div className="text-2xl font-bold text-neutral-900">{value}</div>
  </div>
);

export default StatCard; 