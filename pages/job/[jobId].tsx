import { Metadata } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '../store'; 
import JobDetails from '../components/features/job/JobDetails';
import { getJobById } from '../lib/api/client';

export const metadata: Metadata = {
  title: 'Job Details',
  description: 'Detailed information about the selected job.',
};

export default function JobPage() {
  const router = useRouter(); 
  const { jobId } = router.query;
  const { job, isLoading, error, setJob, setIsLoading, setError } = useStore();

  useEffect(() => {
    if (jobId) { 
      const fetchJob = async () => {
        setIsLoading(true); 
        try {
          const response = await getJobById(jobId as string); 
          setJob(response.job); 
        } catch (e) {
          setError((e as Error).message);
        } finally {
          setIsLoading(false); 
        }
      };
      fetchJob();
    }
  }, [jobId]); 

  const handleSaveJob = async () => {
    // Implement logic to save the job to the user's profile
    // (This assumes user authentication is in place).
    // 1. Fetch current user's profile
    // 2. Update profile with the current job ID
    // 3. Update the user profile state
    // 4. Show a success message or redirect to the user profile page
    // ...
    router.push('/profile'); // Navigate to the user profile page 
  }; 

  return (
    <div className="container mx-auto p-4">
      {isLoading && (
        <div className="text-center mt-4">Loading job details...</div>
      )}

      {error && (
        <div className="text-center mt-4 text-red-500">Error: {error}</div>
      )}

      {job && (
        <>
          <JobDetails job={job} onSaveJob={handleSaveJob} /> 
        </>
      )}
    </div>
  );
}