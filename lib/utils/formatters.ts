import { JobListing, JobDetails, UserProfile } from '../api/client';

export function formatJob(job: JobListing): JobListing {
  return {
    ...job,
    // Add any custom formatting for job data here
    // e.g., format dates, convert currencies, etc.
  };
}

export function formatJobDetails(job: JobDetails): JobDetails {
  return {
    ...job,
    // Add any custom formatting for job details here
    // e.g., format salary ranges, etc.
  };
}

export function formatUserProfile(userProfile: UserProfile): UserProfile {
  return {
    ...userProfile,
    // Add any custom formatting for user profile data here
    // e.g., format dates, etc.
  };
}