import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Manage Events"
            description="Add, edit, or remove meditation and yoga events"
            link="/admin/events"
          />
          <DashboardCard
            title="Manage Videos"
            description="Upload and manage meditation and yoga videos"
            link="/admin/videos"
          />
          <DashboardCard
            title="User Management"
            description="View and manage user accounts"
            link="/admin/users"
          />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, description, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Dashboard;
