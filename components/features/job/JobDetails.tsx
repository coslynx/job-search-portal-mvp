import React from 'react';
import { Link } from 'react-router-dom';
import { JobDetails } from '../JobDetails.types';
import Button from '../../shared/Button';
import { classNames } from '../../utils/helpers'; 

interface JobDetailsProps {
  job: JobDetails; 
  onSaveJob: () => void; // Function to handle saving a job
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, onSaveJob }) => {
  return (
    <div className="container mx-auto p-4"> 
      <div className="bg-white shadow-md rounded-lg p-6"> 
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h2>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-xl font-bold text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
          </div>
          <div className="text-gray-500">
            {job.salary && <p>Salary: {job.salary}</p>}
          </div>
        </div>

        <p className="text-gray-700 mb-4">{job.description}</p>

        <h3 className="text-lg font-bold text-gray-800 mb-2">Responsibilities:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {job.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-gray-800 mb-2">Qualifications:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {job.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>

        <div className="flex justify-end">
          <Button onClick={onSaveJob} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Save Job
          </Button>
        </div>
      </div> 
    </div>
  );
};

export default JobDetails;