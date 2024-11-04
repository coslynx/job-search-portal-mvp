import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

// Supabase configuration (replace with your actual values from .env.local)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Axios configuration (set a default base URL)
const apiClient = axios.create({
  baseURL: process.env.API_URL
});

interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  // ... other relevant properties
}

interface JobDetails {
  // ... properties specific to job details
}

interface UserProfile {
  // ... properties specific to user profile
}

async function getJobs(query: string, filters?: any): Promise<JobListing[]> {
  try {
    const response = await apiClient.get('/jobs', {
      params: {
        q: query,
        ...filters
      }
    });

    return response.data.map((job: any) => {
      return formatJob(job); // Use a formatting function from lib/utils/formatters.ts
    });

  } catch (error) {
    // Handle errors appropriately (see Error Handling section)
    throw error;
  }
}

async function getJobById(jobId: string): Promise<JobDetails> {
  try {
    const response = await apiClient.get(`/jobs/${jobId}`);
    return formatJobDetails(response.data); // Use a formatting function from lib/utils/formatters.ts
  } catch (error) {
    // Handle errors appropriately (see Error Handling section)
    throw error;
  }
}

async function getUserProfile(userId: string): Promise<UserProfile> {
  try {
    const response = await apiClient.get(`/profile/${userId}`);
    return formatUserProfile(response.data); // Use a formatting function from lib/utils/formatters.ts
  } catch (error) {
    // Handle errors appropriately (see Error Handling section)
    throw error;
  }
}

export {
  getJobs,
  getJobById,
  getUserProfile
};