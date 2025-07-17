import { useEffect, useState } from 'react';

// Real estate mock data
const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80',
    date: 'Apr 10, 2024',
    type: 'Apartment',
    title: 'Modern 2BHK Flat in City Center',
    description: 'Spacious 2-bedroom apartment with balcony, close to metro and shopping. Ideal for families or professionals.',
    agent: {
      name: 'Amit Sharma',
      role: 'Senior Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    date: 'Mar 28, 2024',
    type: 'Villa',
    title: 'Luxury Villa with Private Pool',
    description: 'Experience luxury living in this 4BHK villa with a private pool and garden. Located in a gated community.',
    agent: {
      name: 'Priya Verma',
      role: 'Villa Specialist',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    date: 'Mar 15, 2024',
    type: 'Penthouse',
    title: 'Skyline Penthouse with City View',
    description: 'Top-floor penthouse with panoramic city views, modern interiors, and private terrace. Rare opportunity!',
    agent: {
      name: 'Rahul Mehra',
      role: 'Luxury Consultant',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
  },
];

const skeletonArray = [1, 2, 3];

function SkeletonBlogCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col animate-pulse">
      <div className="h-48 bg-neutral-200 rounded-xl mb-4" />
      <div className="flex-1 flex flex-col">
        <div className="h-4 w-1/3 bg-neutral-200 rounded mb-2" />
        <div className="h-4 w-1/2 bg-neutral-200 rounded mb-4" />
        <div className="h-6 w-2/3 bg-neutral-200 rounded mb-2" />
        <div className="h-4 w-full bg-neutral-200 rounded mb-1" />
        <div className="h-4 w-5/6 bg-neutral-200 rounded mb-4" />
        <div className="flex items-center mt-auto gap-3">
          <div className="w-10 h-10 bg-neutral-200 rounded-full" />
          <div>
            <div className="h-3 w-20 bg-neutral-200 rounded mb-1" />
            <div className="h-3 w-16 bg-neutral-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterButton({ onClick, loading, success }) {
  return (
    <div className="mt-4">
      {loading ? (
        <button className="w-full py-2 rounded-lg bg-indigo-500 text-white font-semibold flex items-center justify-center" disabled>
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
          Registering...
        </button>
      ) : success ? (
        <div className="w-full flex flex-col items-center justify-center py-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 mb-1">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-green-700 font-semibold">Registered</span>
        </div>
      ) : (
        <button
          className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors shadow"
          onClick={onClick}
        >
          Register
        </button>
      )}
    </div>
  );
}

const LoadingStates = () => {
  const [loading, setLoading] = useState(true);
  const [registerState, setRegisterState] = useState({}); // { [propertyId]: 'idle' | 'loading' | 'success' }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleRegister = (id) => {
    setRegisterState((prev) => ({ ...prev, [id]: 'loading' }));
    setTimeout(() => {
      setRegisterState((prev) => ({ ...prev, [id]: 'success' }));
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutral-900 mb-2">Featured Properties</h2>
        <p className="text-neutral-500 text-lg">Find your dream home or investment with our expert agents.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading
          ? skeletonArray.map((i) => <SkeletonBlogCard key={i} />)
          : properties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow p-4 flex flex-col">
                <div className="h-48 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                    <span>{property.date}</span>
                    <span className="px-2 py-0.5 bg-neutral-100 rounded text-xs font-medium ml-2">{property.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">{property.title}</h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">{property.description}</p>
                  <div className="flex items-center mt-auto gap-3 pt-2">
                    <img
                      src={property.agent.avatar}
                      alt={property.agent.name}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm">{property.agent.name}</div>
                      <div className="text-xs text-neutral-500">{property.agent.role}</div>
                    </div>
                  </div>
                  <RegisterButton
                    onClick={() => handleRegister(property.id)}
                    loading={registerState[property.id] === 'loading'}
                    success={registerState[property.id] === 'success'}
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default LoadingStates;