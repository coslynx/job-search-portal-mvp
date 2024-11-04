import React from 'react';
import { useStore } from '../../../store';
import { classNames } from '../../utils/helpers';
import { UserProfile } from '../UserProfile.types';
import Card from '../../shared/Card';
import Button from '../../shared/Button';

const UserProfile: React.FC<{ userProfile: UserProfile }> = ({ userProfile }) => {
  const { isLoading, error } = useStore();

  if (isLoading) {
    return <div className="text-center mt-4">Loading profile...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">Error: {error}</div>;
  }

  return (
    <Card title="User Profile">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {userProfile.name}
        </h2>
        <p className="text-gray-700">{userProfile.email}</p>
      </div>

      {userProfile.profilePicture && (
        <img
          src={userProfile.profilePicture}
          alt="Profile Picture"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
      )}

      {userProfile.savedJobs && userProfile.savedJobs.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Saved Jobs
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {userProfile.savedJobs.map((jobId) => (
              <li key={jobId}>
                {/* ... (render JobCard or other representation of the saved job) */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Potentially add a button for saving jobs (if implemented) */}
      {/* ... (Add a "Save Job" button if necessary) */}
    </Card>
  );
};

export default UserProfile;