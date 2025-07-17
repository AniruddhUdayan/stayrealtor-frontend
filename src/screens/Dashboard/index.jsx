import { useState } from 'react';

const sidebarLinks = [
  { name: 'Projects', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4H8V3" /></svg>
  ) },
  { name: 'Deployments', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7a4 4 0 100 8 4 4 0 000-8z" /></svg>
  ), active: true },
  { name: 'Activity', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3m6 0h3m6 0h-3" /></svg>
  ) },
  { name: 'Domains', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
  ) },
  { name: 'Usage', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" /></svg>
  ) },
  { name: 'Settings', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
  ) },
];

const teams = [
  { name: 'StayRealtor', initial: 'S' },
  { name: 'Flats', initial: 'F' },
  { name: 'Villas', initial: 'V' },
];

const deployments = [
  {
    id: 1,
    team: 'StayRealtor',
    name: 'Luxury Flats',
    status: 'Production',
    statusColor: 'bg-green-500',
    desc: 'Deployed from Admin Panel · 2 min ago',
    pill: 'Production',
    pillColor: 'bg-indigo-700/30 text-indigo-300',
  },
  {
    id: 2,
    team: 'Flats',
    name: 'Downtown Apartments',
    status: 'Preview',
    statusColor: 'bg-gray-400',
    desc: 'Deployed from API · 10 min ago',
    pill: 'Preview',
    pillColor: 'bg-neutral-700/40 text-neutral-200',
  },
  {
    id: 3,
    team: 'Villas',
    name: 'Beachside Villas',
    status: 'Production',
    statusColor: 'bg-green-500',
    desc: 'Deployed from Admin Panel · 1h ago',
    pill: 'Production',
    pillColor: 'bg-indigo-700/30 text-indigo-300',
  },
  {
    id: 4,
    team: 'StayRealtor',
    name: 'Suburban Homes',
    status: 'Preview',
    statusColor: 'bg-gray-400',
    desc: 'Deployed from API · 2h ago',
    pill: 'Preview',
    pillColor: 'bg-neutral-700/40 text-neutral-200',
  },
  {
    id: 5,
    team: 'Flats',
    name: 'City Center Lofts',
    status: 'Production',
    statusColor: 'bg-green-500',
    desc: 'Deployed from Admin Panel · 1d ago',
    pill: 'Production',
    pillColor: 'bg-indigo-700/30 text-indigo-300',
  },
  {
    id: 6,
    team: 'Villas',
    name: 'Mountain Retreats',
    status: 'Preview',
    statusColor: 'bg-gray-400',
    desc: 'Deployed from API · 2d ago',
    pill: 'Preview',
    pillColor: 'bg-neutral-700/40 text-neutral-200',
  },
];

const activityFeed = [
  { id: 1, name: 'Amit Sharma', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', action: 'Added new flat listing', time: '1h' },
  { id: 2, name: 'Priya Verma', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', action: 'Updated villa details', time: '3h' },
  { id: 3, name: 'Rahul Mehra', avatar: 'https://randomuser.me/api/portraits/men/65.jpg', action: 'Closed deal on penthouse', time: '12h' },
  { id: 4, name: 'Sarah Johnson', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', action: 'Added new client', time: '2d' },
  { id: 5, name: 'System', avatar: '', action: 'Monthly report generated', time: '3d' },
];

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Real estate overview stats
  const overviewStats = [
    {
      label: 'Total Properties',
      value: '1,247',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4H8V3" /></svg>
      ),
    },
    {
      label: 'Active Listings',
      value: '312',
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 21V8a2 2 0 012-2h2a2 2 0 012 2v13" /></svg>
      ),
    },
    {
      label: 'Clients',
      value: '892',
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
    },
    {
      label: 'Deals Closed',
      value: '156',
      icon: (
        <svg className="w-6 h-6 text-success-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#101728] flex flex-col lg:flex-row">
      {/* Responsive Topbar/Sidebar */}
      <header className="lg:hidden w-full bg-[#181f36] border-b border-[#232b45] flex items-center justify-between px-4 py-3 z-30">
        <div className="flex items-center gap-3">
          <button onClick={() => setMenuOpen((v) => !v)} className="text-white focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-white font-bold text-lg">Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Tom Cook" className="w-8 h-8 rounded-full object-cover border border-[#2d3657]" />
        </div>
      </header>
      {/* Sidebar for desktop, overlay for mobile */}
      <aside className={`fixed lg:static top-0 left-0 h-full w-64 bg-[#181f36] flex flex-col justify-between py-8 px-4 border-r border-[#232b45] z-40 transition-transform duration-200 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:flex min-h-screen`}>        
        <div>
          <nav className="space-y-1 mb-8">
            {sidebarLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base transition-colors ${link.active ? 'bg-[#232b45] text-white' : 'text-neutral-300 hover:bg-[#232b45] hover:text-white'}`}
              >
                <span className={link.active ? 'text-indigo-300' : 'text-neutral-300'}>{link.icon}</span>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mb-8">
            <div className="text-xs text-neutral-500 mb-2 ml-2">Your teams</div>
            <div className="flex flex-col gap-2">
              {teams.map((team) => (
                <div key={team.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#232b45] text-white/80">
                  <span className="w-6 h-6 rounded-full bg-[#232b45] border border-[#2d3657] flex items-center justify-center font-bold text-xs uppercase">
                    {team.initial}
                  </span>
                  <span className="text-sm font-medium">{team.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#232b45]">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Tom Cook" className="w-8 h-8 rounded-full object-cover border border-[#2d3657]" />
          <div>
            <div className="text-white font-semibold text-sm">Tom Cook</div>
            <div className="text-xs text-indigo-300">Admin</div>
          </div>
        </div>
      </aside>
      {/* Overlay for mobile menu */}
      {menuOpen && <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setMenuOpen(false)} />}

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row bg-[#101728]">
        {/* Overview Content */}
        <section className="flex-1 border-r border-[#232b45] p-4 sm:p-6 md:p-8 min-w-0">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Real Estate Overview</h1>
            <p className="text-neutral-300 mb-6 max-w-2xl">Track your properties, clients, and deals in one place. Stay updated on your listings, monitor client activity, and close more deals with StayRealtor’s modern dashboard.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {overviewStats.map((stat) => (
                <div key={stat.label} className="bg-[#181f36] rounded-2xl p-6 flex flex-col items-center shadow border border-[#232b45]">
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-neutral-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Deployments List */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold text-white">Deployments</h2>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-sm">Sort by</span>
              <button className="text-neutral-300 hover:text-white px-2 py-1 rounded transition-colors">
                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
          </div>
          <div className="divide-y divide-[#232b45]">
            {deployments.map((d) => (
              <div key={d.id} className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <span className={`w-3 h-3 rounded-full ${d.statusColor} mr-2`} />
                  <div className="min-w-0">
                    <div className="font-semibold text-white text-base truncate">
                      <span className="text-indigo-300">{d.team}</span> <span className="mx-1 text-neutral-500">/</span> {d.name}
                    </div>
                    <div className="text-neutral-400 text-sm truncate">{d.desc}</div>
                  </div>
                </div>
                <div>
                  <span className={`px-4 py-1 rounded-full text-xs font-semibold ${d.pillColor}`}>{d.pill}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Feed */}
        <aside className="w-full lg:w-96 p-4 sm:p-6 md:p-8 bg-[#181f36] border-l border-[#232b45] min-w-0">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Activity feed</h3>
            <a href="#" className="text-indigo-300 text-sm font-medium hover:underline">View all</a>
          </div>
          <div className="space-y-6">
            {activityFeed.map((a) => (
              <div key={a.id} className="flex items-center gap-4">
                {a.avatar ? (
                  <img src={a.avatar} alt={a.name} className="w-9 h-9 rounded-full object-cover border border-[#2d3657]" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#232b45] flex items-center justify-center text-neutral-400 font-bold text-lg">S</div>
                )}
                <div className="min-w-0">
                  <div className="text-white font-medium text-sm truncate">{a.name}</div>
                  <div className="text-neutral-300 text-xs truncate">{a.action}</div>
                </div>
                <div className="ml-auto text-neutral-500 text-xs whitespace-nowrap">{a.time}</div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}