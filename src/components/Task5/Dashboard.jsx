import { useState } from 'react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [showGridOverlay, setShowGridOverlay] = useState(false);

  // Mock data for dashboard
  const stats = {
    properties: { value: '1,247', change: '+12%', trend: 'up' },
    revenue: { value: '$2.4M', change: '+8%', trend: 'up' },
    clients: { value: '892', change: '-3%', trend: 'down' },
    deals: { value: '156', change: '+15%', trend: 'up' }
  };

  const recentProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "San Francisco, CA",
      price: "$3,200/month",
      status: "Available",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=80&h=80&fit=crop"
    },
    {
      id: 2,
      title: "Luxury Penthouse Suite",
      location: "New York, NY", 
      price: "$8,500/month",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=80&h=80&fit=crop"
    },
    {
      id: 3,
      title: "Cozy Suburban House",
      location: "Austin, TX",
      price: "$2,800/month", 
      status: "Rented",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=80&h=80&fit=crop"
    }
  ];

  const recentActivity = [
    { id: 1, action: "New property listing created", user: "Sarah Johnson", time: "2 min ago", type: "create" },
    { id: 2, action: "Contract signed for Downtown Loft", user: "Mike Chen", time: "15 min ago", type: "contract" },
    { id: 3, action: "Property inspection scheduled", user: "Emma Davis", time: "1 hour ago", type: "schedule" },
    { id: 4, action: "Client inquiry received", user: "James Wilson", time: "2 hours ago", type: "inquiry" },
    { id: 5, action: "Monthly report generated", user: "System", time: "3 hours ago", type: "system" }
  ];

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

  const GridOverlay = () => (
    showGridOverlay && (
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="w-full h-full opacity-20">
          {/* 8px grid overlay */}
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: 'linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }}
          />
        </div>
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <GridOverlay />
      
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 px-lg py-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">StayRealtor Dashboard</h1>
            <p className="text-neutral-600 mt-xs">Welcome back, Sarah Johnson</p>
          </div>
          <div className="flex items-center space-x-md">
            <button
              onClick={() => setShowGridOverlay(!showGridOverlay)}
              className={`px-sm py-xs text-xs font-medium rounded border transition-colors ${
                showGridOverlay 
                  ? 'bg-primary-600 text-white border-primary-600' 
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
              }`}
            >
              {showGridOverlay ? 'Hide Grid' : 'Show 8px Grid'}
            </button>
            <div className="flex bg-neutral-100 rounded-lg p-xs">
              {['week', 'month', 'quarter'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-sm py-xs text-sm font-medium rounded transition-colors capitalize ${
                    selectedPeriod === period
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
            <button className="p-sm rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-lg space-y-lg">
        
        {/* Stats Grid */}
        <section>
          <h2 className="text-lg font-semibold text-neutral-900 mb-md">Key Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            <StatCard
              title="Total Properties"
              value={stats.properties.value}
              change={stats.properties.change}
              trend={stats.properties.trend}
              icon={
                <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <StatCard
              title="Revenue"
              value={stats.revenue.value}
              change={stats.revenue.change}
              trend={stats.revenue.trend}
              icon={
                <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              }
            />
            <StatCard
              title="Active Clients"
              value={stats.clients.value}
              change={stats.clients.change}
              trend={stats.clients.trend}
              icon={
                <svg className="w-5 h-5 text-error-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            <StatCard
              title="Deals Closed"
              value={stats.deals.value}
              change={stats.deals.change}
              trend={stats.deals.trend}
              icon={
                <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          
          {/* Recent Properties */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-neutral-200">
              <div className="p-lg border-b border-neutral-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-neutral-900">Recent Properties</h2>
                  <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    View All
                  </button>
                </div>
              </div>
              <div className="divide-y divide-neutral-200">
                {recentProperties.map((property) => (
                  <div key={property.id} className="p-lg hover:bg-neutral-50 transition-colors">
                    <div className="flex items-center space-x-md">
                      <div className="w-16 h-16 bg-neutral-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={property.image} 
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-neutral-900 truncate">{property.title}</h3>
                        <p className="text-sm text-neutral-600 mt-xs">{property.location}</p>
                        <div className="flex items-center justify-between mt-sm">
                          <span className="font-semibold text-primary-600">{property.price}</span>
                          <span className={`px-sm py-xs rounded-full text-xs font-medium ${
                            property.status === 'Available' ? 'bg-success-100 text-success-700' :
                            property.status === 'Pending' ? 'bg-warning-100 text-warning-700' :
                            'bg-neutral-100 text-neutral-700'
                          }`}>
                            {property.status}
                          </span>
                        </div>
                      </div>
                      <button className="p-sm rounded-lg hover:bg-neutral-200 transition-colors">
                        <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-xl border border-neutral-200">
            <div className="p-lg border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">Recent Activity</h2>
            </div>
            <div className="p-lg space-y-md max-h-96 overflow-y-auto">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-sm">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === 'create' ? 'bg-success-500' :
                    activity.type === 'contract' ? 'bg-primary-500' :
                    activity.type === 'schedule' ? 'bg-warning-500' :
                    activity.type === 'inquiry' ? 'bg-accent-500' :
                    'bg-neutral-400'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-neutral-900">{activity.action}</p>
                    <div className="flex items-center justify-between mt-xs">
                      <span className="text-xs text-neutral-600">{activity.user}</span>
                      <span className="text-xs text-neutral-500">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <section>
          <h2 className="text-lg font-semibold text-neutral-900 mb-md">Performance Analytics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
            
            {/* Revenue Chart */}
            <div className="bg-white rounded-xl p-lg border border-neutral-200">
              <div className="flex items-center justify-between mb-lg">
                <h3 className="font-semibold text-neutral-900">Revenue Trend</h3>
                <div className="flex items-center space-x-xs text-xs text-neutral-600">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span>Revenue</span>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-t from-primary-50 to-transparent rounded-lg flex items-end justify-between px-md pb-md">
                {/* Mock chart bars */}
                {[60, 45, 80, 65, 90, 75, 85].map((height, index) => (
                  <div 
                    key={index}
                    className="bg-primary-600 rounded-t w-8 transition-all hover:bg-primary-700"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-neutral-600 mt-sm">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>

            {/* Property Types */}
            <div className="bg-white rounded-xl p-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-lg">Property Distribution</h3>
              <div className="space-y-md">
                {[
                  { name: 'Apartments', count: 487, percentage: 65, color: 'bg-primary-600' },
                  { name: 'Houses', count: 298, percentage: 40, color: 'bg-secondary-600' },
                  { name: 'Condos', count: 186, percentage: 25, color: 'bg-accent-600' },
                  { name: 'Commercial', count: 89, percentage: 12, color: 'bg-success-600' }
                ].map((type) => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-sm">
                      <div className={`w-3 h-3 rounded-full ${type.color}`} />
                      <span className="text-sm font-medium text-neutral-900">{type.name}</span>
                    </div>
                    <div className="flex items-center space-x-sm">
                      <div className="w-24 h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${type.color}`}
                          style={{ width: `${type.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-neutral-600 w-8 text-right">{type.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Grid System Documentation */}
      <div className="max-w-7xl mx-auto p-lg">
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl p-lg text-white">
          <h2 className="text-xl font-semibold mb-lg">4/8pt Grid System Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg text-sm">
            <div>
              <h3 className="font-semibold mb-sm text-neutral-200">Spacing Scale</h3>
              <ul className="space-y-xs text-neutral-300">
                <li>• xs: 4px (xs spacing)</li>
                <li>• sm: 8px (sm spacing)</li>
                <li>• md: 16px (md spacing)</li>
                <li>• lg: 24px (lg spacing)</li>
                <li>• xl: 32px (xl spacing)</li>
                <li>• 2xl: 48px (2xl spacing)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-sm text-neutral-200">Visual Hierarchy</h3>
              <ul className="space-y-xs text-neutral-300">
                <li>• Consistent 8px baseline grid</li>
                <li>• Typography follows line-height multiples</li>
                <li>• Component padding uses 4/8pt increments</li>
                <li>• Margins create logical content flow</li>
                <li>• Border radius follows 4px increments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;