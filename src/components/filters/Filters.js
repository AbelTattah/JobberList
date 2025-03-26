import React, { useState } from 'react';

const FilterBar = ({
  onFilterPress = () => {},
  onCategoryPress = () => {},
  onLocationPress = () => {},
  onSearchPress = () => {},
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'featured', label: 'Featured' },
    { id: 'remote', label: 'Remote' },
    { id: 'fulltime', label: 'Full-Time' },
    { id: 'contract', label: 'Contract' },
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    onFilterPress(filterId);
  };

  return (
    <div style={styles.container}>
      <div style={styles.scrollContainer}>
        {/* Job Type Filters */}
        <div style={styles.filterGroup}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              style={{
                ...styles.filterButton,
                ...(activeFilter === filter.id && styles.activeFilter)
              }}
            >
              <span style={activeFilter === filter.id ? styles.activeFilterText : styles.filterText}>
                {filter.label}
              </span>
            </button>
          ))}
        </div>

        {/* Category Dropdown */}
        <div style={styles.filterGroup}>
          <button
            onClick={onCategoryPress}
            style={styles.categoryButton}
          >
            <span style={styles.categoryText}>
              {selectedCategory || 'Select Category'}
            </span>
            <span style={styles.dropdownIcon}>▼</span>
          </button>
        </div>

        {/* Location Filter */}
        <div style={styles.filterGroup}>
          <button
            onClick={onLocationPress}
            style={styles.locationButton}
          >
            <span style={styles.locationText}>📍 Anywhere</span>
          </button>
        </div>
      </div>

      {/* Search Button */}
      {/* <button
        onClick={onSearchPress}
        style={styles.searchButton}
      >
        <span style={styles.searchText}>Search</span>
      </button> */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '12px 24px',
    borderBottom: '1px solid #e0e0e0',
    gap: '16px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '16px'
    }
  },
  scrollContainer: {
    display: 'flex',
    gap: '24px',
    overflowX: 'auto',
    width: '100%',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '12px'
    }
  },
  filterGroup: {
    display: 'flex',
    gap: '8px',
    flexShrink: 0
  },
  filterButton: {
    padding: '8px 16px',
    borderRadius: '20px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#e0e0e0'
    }
  },
  activeFilter: {
    backgroundColor: '#2d2d2d'
  },
  filterText: {
    color: '#666',
    fontSize: '14px'
  },
  activeFilterText: {
    color: '#ffffff',
    fontWeight: '600'
  },
  categoryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#e0e0e0'
    }
  },
  categoryText: {
    color: '#444',
    fontSize: '14px'
  },
  dropdownIcon: {
    color: '#666',
    fontSize: '12px'
  },
  locationButton: {
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#e0e0e0'
    }
  },
  locationText: {
    color: '#444',
    fontSize: '14px'
  },
  searchButton: {
    backgroundColor: '#2d2d2d',
    borderRadius: '8px',
    padding: '10px 24px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      opacity: 0.9
    },
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  searchText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '14px'
  }
};

export default FilterBar;