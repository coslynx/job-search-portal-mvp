import { Metadata } from 'next';
import { useState } from 'react';
import { useStore } from '../store';
import SearchForm from '../components/features/search/SearchForm';
import JobCard from '../components/features/search/JobCard';
import { getJobs } from '../lib/api/client'; 

export const metadata: Metadata = {
  title: 'Job Search Portal - Find Your Dream Job',
  description: 'The easiest way to find your next career opportunity.'
};

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const { jobs, isLoading, error } = useStore(); 

  const handleSearch = async () => {
    try {
      useStore.setState({ isLoading: true });
      const fetchedJobs = await getJobs(searchQuery, filters);
      useStore.setState({ jobs: fetchedJobs, isLoading: false }); 
    } catch (error) {
      useStore.setState({ error: error.message, isLoading: false });
    }
  };

  const handleFilterChange = (newFilters: any) => { 
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800">Job Search</h1>
      <SearchForm 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch} 
      />

      {isLoading && (
        <div className="text-center mt-4">Loading...</div> 
      )}

      {error && (
        <div className="text-center mt-4 text-red-500">Error: {error}</div> 
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div> 
    </div>
  );
}