import { useState } from 'react';

// Skeleton Components
const SkeletonCard = () => (
  <div className="bg-white rounded-xl p-lg border border-neutral-200 animate-pulse">
    <div className="flex items-start space-x-md">
      <div className="w-16 h-16 bg-neutral-200 rounded-lg"></div>
      <div className="flex-1 space-y-sm">
        <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
        <div className="h-3 bg-neutral-200 rounded w-1/2"></div>
        <div className="space-y-xs">
          <div className="h-3 bg-neutral-200 rounded"></div>
          <div className="h-3 bg-neutral-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
    <div className="mt-lg pt-lg border-t border-neutral-200 flex justify-between items-center">
      <div className="h-4 bg-neutral-200 rounded w-24"></div>
      <div className="h-8 bg-neutral-200 rounded w-20"></div>
    </div>
  </div>
);

const SkeletonTable = () => (
  <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
    <div className="p-lg border-b border-neutral-200">
      <div className="h-6 bg-neutral-200 rounded w-48 animate-pulse"></div>
    </div>
    <div className="divide-y divide-neutral-200">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-lg animate-pulse">
          <div className="flex items-center space-x-md">
            <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
            <div className="flex-1 space-y-xs">
              <div className="h-4 bg-neutral-200 rounded w-1/3"></div>
              <div className="h-3 bg-neutral-200 rounded w-1/4"></div>
            </div>
            <div className="h-4 bg-neutral-200 rounded w-20"></div>
            <div className="h-3 bg-neutral-200 rounded w-16"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Loading Spinner Component
const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center py-2xl">
      <div className={`${sizeClasses[size]} border-2 border-neutral-200 border-t-primary-600 rounded-full animate-spin`}></div>
      <p className="mt-md text-neutral-600 text-sm font-medium">{text}</p>
    </div>
  );
};

// Mock data and API simulation
const mockProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "San Francisco, CA",
    price: "$3,200/month",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Cozy Suburban House",
    location: "Austin, TX",
    price: "$2,800/month",
    bedrooms: 3,
    bathrooms: 2.5,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Luxury Penthouse Suite",
    location: "New York, NY",
    price: "$8,500/month",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=300&h=200&fit=crop"
  }
];

const mockUsers = [
  { id: 1, name: "Sarah Johnson", email: "sarah@example.com", status: "Active", role: "Agent" },
  { id: 2, name: "Mike Chen", email: "mike@example.com", status: "Pending", role: "Client" },
  { id: 3, name: "Emma Davis", email: "emma@example.com", status: "Active", role: "Agent" },
  { id: 4, name: "James Wilson", email: "james@example.com", status: "Inactive", role: "Client" },
  { id: 5, name: "Lisa Thompson", email: "lisa@example.com", status: "Active", role: "Admin" }
];

// Fake fetch simulation
const fetchData = (type, delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(type === 'properties' ? mockProperties : mockUsers);
    }, delay);
  });
};

const LoadingStates = () => {
  const [propertiesLoading, setPropertiesLoading] = useState(false);
  const [usersLoading, setUsersLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);

  const loadProperties = async () => {
    setPropertiesLoading(true);
    setProperties([]);
    try {
      const data = await fetchData('properties', 3000);
      setProperties(data);
    } catch (error) {
      console.error('Failed to load properties:', error);
    } finally {
      setPropertiesLoading(false);
    }
  };

  const loadUsers = async () => {
    setUsersLoading(true);
    setUsers([]);
    try {
      const data = await fetchData('users', 2500);
      setUsers(data);
    } catch (error) {
      console.error('Failed to load users:', error);
    } finally {
      setUsersLoading(false);
    }
  };

  const handleButtonAction = async () => {
    setButtonLoading(true);
    try {
      // Simulate some action
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Action completed successfully!');
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-lg space-y-2xl">
      <div className="text-center mb-2xl">
        <h1 className="text-3xl font-bold text-neutral-900 mb-sm">Loading States Demo</h1>
        <p className="text-neutral-600">Demonstrating skeleton loaders, spinners, and loading states for better UX</p>
      </div>

      {/* Control Panel */}
      <div className="bg-white rounded-xl p-lg border border-neutral-200 mb-2xl">
        <h2 className="text-xl font-semibold text-neutral-900 mb-lg">Controls</h2>
        <div className="flex flex-wrap gap-md">
          <button
            onClick={loadProperties}
            disabled={propertiesLoading}
            className="px-lg py-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {propertiesLoading ? 'Loading Properties...' : 'Load Properties'}
          </button>
          <button
            onClick={loadUsers}
            disabled={usersLoading}
            className="px-lg py-sm bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {usersLoading ? 'Loading Users...' : 'Load Users'}
          </button>
          <button
            onClick={handleButtonAction}
            disabled={buttonLoading}
            className="px-lg py-sm bg-accent-600 text-white rounded-lg hover:bg-accent-700 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors font-medium flex items-center"
          >
            {buttonLoading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-xs"></div>
            )}
            {buttonLoading ? 'Processing...' : 'Action Button'}
          </button>
        </div>
      </div>

      {/* Properties Section */}
      <div>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-lg">Featured Properties</h2>
        {propertiesLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {[...Array(3)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl p-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-neutral-200 rounded-lg mb-md overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-xs">{property.title}</h3>
                <p className="text-neutral-600 text-sm mb-sm">{property.location}</p>
                <div className="flex justify-between items-center mb-md">
                  <span className="text-lg font-bold text-primary-600">{property.price}</span>
                  <span className="text-sm text-neutral-500">{property.bedrooms}bd • {property.bathrooms}ba</span>
                </div>
                <button className="w-full py-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-2xl">
            <p className="text-neutral-500">Click "Load Properties" to see the skeleton loading effect</p>
          </div>
        )}
      </div>

      {/* Users Table Section */}
      <div>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-lg">User Management</h2>
        {usersLoading ? (
          <SkeletonTable />
        ) : users.length > 0 ? (
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="p-lg border-b border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900">Users</h3>
            </div>
            <div className="divide-y divide-neutral-200">
              {users.map((user) => (
                <div key={user.id} className="p-lg hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-md">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">{user.name}</p>
                        <p className="text-sm text-neutral-600">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-lg">
                      <span className={`px-sm py-xs rounded-full text-xs font-medium ${
                        user.status === 'Active' ? 'bg-success-100 text-success-700' :
                        user.status === 'Pending' ? 'bg-warning-100 text-warning-700' :
                        'bg-neutral-100 text-neutral-700'
                      }`}>
                        {user.status}
                      </span>
                      <span className="text-sm text-neutral-600 w-16">{user.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-2xl">
            <p className="text-neutral-500">Click "Load Users" to see the skeleton table loading effect</p>
          </div>
        )}
      </div>

      {/* Loading Spinner Examples */}
      <div className="bg-white rounded-xl p-lg border border-neutral-200">
        <h2 className="text-xl font-semibold text-neutral-900 mb-lg">Loading Spinner Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="text-center p-md border border-neutral-200 rounded-lg">
            <LoadingSpinner size="sm" text="Small" />
          </div>
          <div className="text-center p-md border border-neutral-200 rounded-lg">
            <LoadingSpinner size="md" text="Medium" />
          </div>
          <div className="text-center p-md border border-neutral-200 rounded-lg">
            <LoadingSpinner size="lg" text="Large" />
          </div>
          <div className="text-center p-md border border-neutral-200 rounded-lg">
            <LoadingSpinner size="xl" text="Extra Large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingStates;