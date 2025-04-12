
import React from 'react';
import Layout from '@/components/Layout';

const Profile = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg mb-4">Manage your profile information and preferences</p>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
              <p className="text-gray-500">Update your basic information</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Financial Profile</h2>
              <p className="text-gray-500">Manage your financial details and preferences</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Notification Settings</h2>
              <p className="text-gray-500">Control how you receive updates and alerts</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
