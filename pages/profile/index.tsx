import { Metadata } from 'next';
import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useStore } from '../store'; 
import UserProfile from '../components/features/profile/UserProfile';
import { getUserProfile } from '../lib/api/client'; 

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'View and manage your profile.'
};

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, status } = useSession(); 
  const { userProfile, setUserProfile, isLoading, setIsLoading, error, setError } = useStore();

  useEffect(() => {
    if (session && status === 'authenticated') {
      const fetchProfile = async () => {
        setIsLoading(true); 
        try {
          const response = await getUserProfile(session.user.id); 
          setUserProfile(response.userProfile); 
        } catch (e) {
          setError((e as Error).message);
        } finally {
          setIsLoading(false); 
        }
      };
      fetchProfile();
    }
  }, [session, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>Please log in to access your profile.</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {isLoading && (
        <div className="text-center mt-4">Loading profile...</div>
      )}

      {userProfile && (
        <UserProfile userProfile={userProfile} /> 
      )}
    </div>
  );
}