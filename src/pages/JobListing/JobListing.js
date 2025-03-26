import React, { useEffect, useState } from 'react';
import { useJobListings } from '../../hooks/useJobListing';
import JobCard from '../../components/jobCard/JobCard';
import ResponsiveFooter from '../../components/footer/Footer';
import ResponsiveHeader from '../../components/header/Header';
import FilterBar from '../../components/filters/Filters';
import SearchBar from '../../components/searchBar/SearchBar';
import Loader from '../../components/loader/Loader';
import { Colors } from '../../constants/Colors';
import "./JobListing.css"

const JobListingPage = () => {
  const [filters, setFilters] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const { jobs, loading, error, fetchJobs } = useJobListings({
    ...filters,
  });

  const handleSearch = () => {
    // Trigger search implementation
  };

  // const handleFilterChange = (filterId) => {
  //   setFilters(prev => ({
  //     ...prev,
  //     employment_type: filterId === 'all' ? undefined : filterId
  //   }));
  // };

  useEffect(()=>{
    fetchJobs()
  },[])

  if (error) {
    return (
      <div className='error-container'>
        <p className='error-text'>{error}</p>
      </div>
    );
  }

  return (
    <div className='jobContainer'>
      <ResponsiveHeader />
      
      <main className='jobContent'>

        
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSearch={handleSearch}
          placeholder="Search jobs..."
        />
        <FilterBar 
          onFilterPress={()=>{}}
          onSearchPress={handleSearch}
        />
        {loading ? (
          <Loader />
        ) : (
          <div className='jobs-grid'>
            {jobs.length > 0 ? (
              jobs.map((item) => (
               <JobCard 
                job={item}
               />
              ))
            ) : (
              <p className='empty-text'>No jobs found</p>
            )}
          </div>
        )}
      </main>

      <ResponsiveFooter />
    </div>
  );
};

const styles = {

};

export default JobListingPage;