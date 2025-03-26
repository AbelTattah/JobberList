import React from 'react';
import { Colors } from '../../constants/Colors';

/**
 * SearchBar component renders a search input field with an accompanying search icon.
 * @param {Object} props - Component properties
 * @param {string} props.value - Current value of the search input
 * @param {string} props.placeholder - Placeholder text
 * @param {function} props.onChangeText - Callback for input changes
 * @param {function} props.onPress - Callback for search button click
 * @returns {JSX.Element} A styled search bar component
 */

const SearchBar = ({ value, placeholder, onChangeText, onPress, ...props }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onPress()
    }
  };

  const containerWidth = windowWidth < 360 ? '70%' : windowWidth < 768 ? '75%' : '80%';

  return (
    <div 
      style={{ 
        height: '78px',
        margin:"0 auto",
        marginTop:20,
        marginBottom:20,
        backgroundColor: 'white',
        border: '1px solid #B0A5A5',
        borderRadius: '72px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: containerWidth,
        ...props.style
      }}
      {...props}
    >
      <input
        type="text"
        value={value}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)}
        style={{
          width: '90%',
          height: '60%',
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          fontSize: '16px',
          padding: '0 12px'
        }}
      />
      <button 
        onClick={onPress}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="38" 
          height="38" 
          viewBox="0 0 24 24"
          fill={Colors.secondary}
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;