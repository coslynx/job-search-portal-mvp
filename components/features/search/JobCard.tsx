import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '../../../store';
import { classNames } from '../../utils/helpers';
import { JobListing } from '../JobCard.types'; 

interface JobCardProps {
  job: JobListing;
}

const JobCard: FC<JobCardProps> = ({ job }) => {
  const router = useRouter();
  const { userProfile, setUserProfile, isLoading, setIsLoading, error, setError } = useStore();

  const handleJobClick = () => {
    router.push(`/job/${job.id}`); 
  };

  return (
    <div 
      className={classNames(
        'bg-white shadow-md rounded-lg p-4 cursor-pointer',
        'hover:shadow-lg transition duration-300 ease-in-out',
      )}
      onClick={handleJobClick}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h2>
      <p className="text-gray-700 mb-2">{job.company}</p>
      <p className="text-gray-600 mb-2">{job.location}</p>
      {job.salary && <p className="text-gray-600">{job.salary}</p>}
    </div>
  );
};

export default JobCard;