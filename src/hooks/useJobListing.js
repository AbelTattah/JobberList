import { useState, useEffect, useCallback } from 'react';

export const APP_ID = process.env.REACT_APP_ADZUNA_APP_ID;
export const APP_KEY = process.env.REACT_APP_ADZUNA_API_KEY;

/**
 * Custom hook for fetching and managing job listings
 * @param {Object} filters - Current search filters
 * @returns {Object} - Jobs, loading state, and error state
 */
export const useJobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async (filters = {}) => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        app_id: APP_ID,
        app_key: APP_KEY,
        results_per_page: '20',
        ...filters
      });

      const response = await fetch(
        `https://api.adzuna.com/v1/api/jobs/gb/search/1?${params}`
      );
      
      if (!response.ok) throw new Error('Failed to fetch jobs');
      
      const data = await response.json();
      setJobs(data.results);
    } catch (err) {
      setError(err.message || 'Failed to load jobs');
    } finally {
      setLoading(false);
    }
  };

  return { jobs, loading, error, fetchJobs };
};