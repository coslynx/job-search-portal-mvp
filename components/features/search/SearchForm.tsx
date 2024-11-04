import React, { useState, FormEvent } from 'react';
import { useStore } from '../../../store';
import { useRouter } from 'next/navigation';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import { classNames } from '../../utils/helpers';

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: { [key: string]: string | number | boolean };
  onFilterChange: (filters: { [key: string]: string | number | boolean }) => void;
  onSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchQuery,
  setSearchQuery,
  filters,
  onFilterChange,
  onSearch,
}) => {
  const [location, setLocation] = useState(filters.location || '');
  const [salary, setSalary] = useState(filters.salary || '');
  const [experience, setExperience] = useState(filters.experience || '');
  const [industry, setIndustry] = useState(filters.industry || '');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  const handleFilterChange = () => {
    const newFilters = {
      location,
      salary,
      experience,
      industry,
    };
    onFilterChange(newFilters);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Keywords"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="e.g., Software Engineer"
        className="w-full"
      />
      <Input
        label="Location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="e.g., San Francisco, CA"
        className="w-full"
      />
      <div className="flex gap-4">
        <Input
          label="Salary"
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="e.g., 100000"
          className="w-full"
        />
        <Input
          label="Experience"
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="e.g., 3+ years"
          className="w-full"
        />
      </div>
      <Input
        label="Industry"
        type="text"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        placeholder="e.g., Technology"
        className="w-full"
      />
      <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Search Jobs
      </Button>
    </form>
  );
};

export default SearchForm;