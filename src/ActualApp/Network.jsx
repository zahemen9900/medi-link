import React, { useState } from 'react';
import './Network.css';
import { AiOutlineCheck, AiOutlinePlus, AiOutlineUser, AiOutlineTeam, AiOutlineHeart, AiOutlineUsergroupAdd } from 'react-icons/ai';
import ProfileModal from './ProfileModal';

const Network = () => {
  const [activeCategory, setActiveCategory] = useState('All connections');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  // Network categories with counts
  const [networkCategories, setNetworkCategories] = useState([
    { id: 1, name: 'All connections', count: 56, icon: <AiOutlineUser /> },
    { id: 2, name: 'Alumni', count: 56, icon: <AiOutlineUser /> },
    { id: 3, name: 'My colleagues', count: 42, icon: <AiOutlineTeam /> },
    { id: 4, name: 'My Patients', count: 78, icon: <AiOutlineHeart /> },
    { id: 5, name: 'People I follow', count: 35, icon: <AiOutlineUser /> },
    { id: 6, name: 'Groups', count: 12, icon: <AiOutlineUsergroupAdd /> },
  ]);
  
  // Sample connections data (All connections)
  const [connections, setConnections] = useState([
    {
      id: 1,
      name: 'Dr Aaron Jacobs',
      title: 'MD, Neurology',
      specialty: 'Neurologist',
      experience: '+5 years experience',
      hospital: 'Penn Hospital,Ohio',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Dr Jade Jacobs',
      title: 'MD, Cardiology',
      specialty: 'Cardiologist',
      experience: '+9 years experience',
      hospital: 'Glenn Hospital,Ohio',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      id: 3,
      name: 'Dr Aaron Jacobs',
      title: 'MD, Oncology',
      specialty: 'Oncologist',
      experience: '+5 years experience',
      hospital: 'Penn Hospital,Ohio',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg'
    }
  ]);
  
  // Alumni connections (more experienced doctors)
  const [alumniConnections, setAlumniConnections] = useState([
    {
      id: 11,
      name: 'Dr. Elizabeth Taylor',
      title: 'MD, Neurology',
      specialty: 'Neurologist',
      experience: '+15 years experience',
      hospital: 'Mayo Clinic',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      id: 12,
      name: 'Dr. William Johnson',
      title: 'MD, Neurosurgery',
      specialty: 'Neurosurgeon',
      experience: '+20 years experience',
      hospital: 'Johns Hopkins',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      id: 13,
      name: 'Dr. Margaret Brown',
      title: 'MD, Neuropsychiatry',
      specialty: 'Neuropsychiatrist',
      experience: '+18 years experience',
      hospital: 'Cleveland Clinic',
      avatar: 'https://randomuser.me/api/portraits/women/46.jpg'
    }
  ]);
  
  // Colleagues connections
  const [colleaguesConnections, setColleaguesConnections] = useState([
    {
      id: 21,
      name: 'Dr. John Smith',
      title: 'MD, Neurology',
      specialty: 'Neurologist',
      department: 'Neurology Department',
      position: 'Department Head',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
      id: 22,
      name: 'Dr. Emily Johnson',
      title: 'MD, Neurology',
      specialty: 'Neurologist',
      department: 'Neurology Department',
      position: 'Senior Resident',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
      id: 23,
      name: 'Dr. Thomas Harris',
      title: 'MD, Radiology',
      specialty: 'Radiologist',
      department: 'Radiology Department',
      position: 'Attending Physician',
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg'
    }
  ]);
  
  // Patients connections
  const [patientsConnections, setPatientsConnections] = useState([
    {
      id: 31,
      name: 'John Smith',
      age: '45 years',
      condition: 'Parkinson\'s Disease',
      lastVisit: 'March 15, 2023',
      nextAppointment: 'June 18, 2023',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
      id: 32,
      name: 'Mary Johnson',
      age: '62 years',
      condition: 'Alzheimer\'s Disease',
      lastVisit: 'April 3, 2023',
      nextAppointment: 'July 5, 2023',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      id: 33,
      name: 'Robert Davis',
      age: '38 years',
      condition: 'Multiple Sclerosis',
      lastVisit: 'May 10, 2023',
      nextAppointment: 'August 12, 2023',
      avatar: 'https://randomuser.me/api/portraits/men/66.jpg'
    }
  ]);
  
  // People I follow connections
  const [followingConnections, setFollowingConnections] = useState([
    {
      id: 1,
      name: 'Dr. Jennifer Lee',
      title: 'MD, Neuroscience Research',
      specialty: 'Neuroscientist',
      publications: '45 research papers',
      institution: 'Harvard Medical School',
      avatar: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
      id: 2,
      name: 'Dr. David Wilson',
      title: 'MD, Neurogenetics',
      specialty: 'Neurogenetics Researcher',
      publications: '32 research papers',
      institution: 'Stanford University',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 3,
      name: 'Dr. Maria Rodriguez',
      title: 'MD, Neuropharmacology',
      specialty: 'Neuropharmacologist',
      publications: '28 research papers',
      institution: 'Johns Hopkins University',
      avatar: 'https://randomuser.me/api/portraits/women/76.jpg'
    }
  ]);
  
  // Groups connections (groups I follow)
  const [groupsConnections, setGroupsConnections] = useState([
    {
      id: 1,
      name: 'Neurology Research Group',
      members: '1,245 members',
      type: 'Research',
      activity: 'Very Active',
      lastPost: 'Today',
      avatar: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      joined: 'Joined 2 years ago'
    },
    {
      id: 2,
      name: 'Neurological Disorders Forum',
      members: '3,567 members',
      type: 'Discussion',
      activity: 'Active',
      lastPost: 'Yesterday',
      avatar: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      joined: 'Joined 1 year ago'
    },
    {
      id: 3,
      name: 'Neurosurgery Techniques',
      members: '982 members',
      type: 'Educational',
      activity: 'Moderately Active',
      lastPost: '3 days ago',
      avatar: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      joined: 'Joined 6 months ago'
    }
  ]);
  
  // Convert the suggested connections arrays to state variables
  const [suggestedConnections, setSuggestedConnections] = useState([
    {
      id: 101,
      name: 'Dr. Michael Chen',
      title: 'MD, Neurosurgery',
      hospital: 'Mayo Clinic',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
      id: 102,
      name: 'Dr. Sarah Johnson',
      title: 'MD, Neurology',
      hospital: 'Cleveland Clinic',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg'
    },
    {
      id: 103,
      name: 'Dr. Robert Williams',
      title: 'MD, Psychiatry',
      hospital: 'Johns Hopkins',
      avatar: 'https://randomuser.me/api/portraits/men/43.jpg'
    },
    {
      id: 104,
      name: 'Dr. Emily Davis',
      title: 'MD, Neuropsychology',
      hospital: 'UCSF Medical Center',
      avatar: 'https://randomuser.me/api/portraits/women/43.jpg'
    },
    {
      id: 105,
      name: 'Dr. James Wilson',
      title: 'MD, Neuroradiology',
      hospital: 'Massachusetts General',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg'
    }
  ]);

  const [experiencedDoctorSuggestions, setExperiencedDoctorSuggestions] = useState([
    {
      id: 201,
      name: 'Dr. Richard Johnson',
      title: 'MD, Neurosurgery',
      hospital: 'Mayo Clinic',
      experience: '+25 years',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
      id: 202,
      name: 'Dr. Patricia Miller',
      title: 'MD, Cardiology',
      hospital: 'Massachusetts General',
      experience: '+22 years',
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg'
    },
    {
      id: 203,
      name: 'Dr. James Wilson',
      title: 'MD, Oncology',
      hospital: 'Memorial Sloan Kettering',
      experience: '+30 years',
      avatar: 'https://randomuser.me/api/portraits/men/53.jpg'
    },
    {
      id: 204,
      name: 'Dr. Linda Garcia',
      title: 'MD, Pediatrics',
      hospital: 'Boston Children\'s',
      experience: '+18 years',
      avatar: 'https://randomuser.me/api/portraits/women/53.jpg'
    },
    {
      id: 205,
      name: 'Dr. Thomas Brown',
      title: 'MD, Orthopedics',
      hospital: 'Hospital for Special Surgery',
      experience: '+27 years',
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
    }
  ]);

  const [suggestedGroups, setSuggestedGroups] = useState([
    {
      id: 301,
      name: 'Medical Ethics Discussion',
      members: '2,345 members',
      type: 'Discussion',
      activity: 'Very Active',
      avatar: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 302,
      name: 'Neurology Journal Club',
      members: '1,567 members',
      type: 'Educational',
      activity: 'Active',
      avatar: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 303,
      name: 'Brain Imaging Specialists',
      members: '3,890 members',
      type: 'Professional',
      activity: 'Very Active',
      avatar: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 304,
      name: 'Medical Technology Innovations',
      members: '4,210 members',
      type: 'Research',
      activity: 'Moderately Active',
      avatar: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 305,
      name: 'Neurological Case Studies',
      members: '2,780 members',
      type: 'Educational',
      activity: 'Active',
      avatar: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]);
  
  // Get the appropriate connections based on active category
  const getActiveConnections = () => {
    switch(activeCategory) {
      case 'Alumni':
        return alumniConnections;
      case 'My colleagues':
        return colleaguesConnections;
      case 'My Patients':
        return patientsConnections;
      case 'People I follow':
        return followingConnections;
      case 'Groups':
        return groupsConnections;
      default:
        return connections;
    }
  };
  
  // Get the appropriate suggested connections based on active category
  const getActiveSuggestions = () => {
    if (activeCategory === 'Alumni') {
      return experiencedDoctorSuggestions;
    }
    if (activeCategory === 'Groups') {
      return suggestedGroups;
    }
    return suggestedConnections;
  };
  
  // Get the appropriate title for the suggestions section
  const getSuggestionsTitle = () => {
    switch(activeCategory) {
      case 'Alumni':
        return 'Recommended Senior Doctors';
      case 'My colleagues':
        return 'People You May Work With';
      case 'My Patients':
        return 'Potential Patients';
      case 'People I follow':
        return 'Recommended Researchers';
      case 'Groups':
        return 'Suggested Groups';
      default:
        return 'Suggested Connections';
    }
  };
  
  // Function to open profile modal
  const openProfileModal = (profile) => {
    setSelectedProfile(profile);
    setIsProfileModalOpen(true);
  };

  // Function to close profile modal
  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };
  
  // Handle unfollowing a connection
  const handleUnfollow = (connectionId) => {
    switch(activeCategory) {
      case 'People I follow':
        // Remove from following connections
        const updatedFollowing = followingConnections.filter(conn => conn.id !== connectionId);
        setFollowingConnections(updatedFollowing);
        
        // Update the count in network categories
        updateCategoryCount('People I follow', -1);
        break;
        
      case 'Groups':
        // Remove from groups connections
        const updatedGroups = groupsConnections.filter(group => group.id !== connectionId);
        setGroupsConnections(updatedGroups);
        
        // Update the count in network categories
        updateCategoryCount('Groups', -1);
        break;
        
      case 'My colleagues':
        // Remove from colleagues connections
        const updatedColleagues = colleaguesConnections.filter(conn => conn.id !== connectionId);
        setColleaguesConnections(updatedColleagues);
        
        // Update the count in network categories
        updateCategoryCount('My colleagues', -1);
        break;
        
      case 'My Patients':
        // Remove from patients connections
        const updatedPatients = patientsConnections.filter(conn => conn.id !== connectionId);
        setPatientsConnections(updatedPatients);
        
        // Update the count in network categories
        updateCategoryCount('My Patients', -1);
        break;
        
      case 'Alumni':
        // Remove from alumni connections
        const updatedAlumni = alumniConnections.filter(conn => conn.id !== connectionId);
        setAlumniConnections(updatedAlumni);
        
        // Update the count in network categories
        updateCategoryCount('Alumni', -1);
        break;
        
      default:
        // Remove from all connections
        const updatedConnections = connections.filter(conn => conn.id !== connectionId);
        setConnections(updatedConnections);
        
        // Update the count in network categories
        updateCategoryCount('All connections', -1);
        break;
    }
  };
  
  // Helper function to update category counts
  const updateCategoryCount = (categoryName, change) => {
    const updatedCategories = networkCategories.map(category => {
      if (category.name === categoryName) {
        return { ...category, count: category.count + change };
      }
      return category;
    });
    setNetworkCategories(updatedCategories);
  };
  
  // Add a new function to handle adding a suggested connection
  const handleAddConnection = (connection) => {
    // Clone the connection to avoid reference issues
    const connectionToAdd = { ...connection };
    
    switch(activeCategory) {
      case 'Groups':
        // Add to groups connections
        // Add a joined field to the connection
        connectionToAdd.joined = 'Joined just now';
        setGroupsConnections([...groupsConnections, connectionToAdd]);
        
        // Remove from suggested groups
        const updatedSuggestedGroups = suggestedGroups.filter(group => group.id !== connection.id);
        setSuggestedGroups(updatedSuggestedGroups);
        
        // Update the count in network categories
        updateCategoryCount('Groups', 1);
        break;
        
      case 'People I follow':
        // Add to following connections
        setFollowingConnections([...followingConnections, connectionToAdd]);
        
        // Remove from suggested connections
        const updatedSuggestions = suggestedConnections.filter(conn => conn.id !== connection.id);
        setSuggestedConnections(updatedSuggestions);
        
        // Update the count in network categories
        updateCategoryCount('People I follow', 1);
        break;
        
      case 'My colleagues':
        // Add to colleagues connections
        setColleaguesConnections([...colleaguesConnections, connectionToAdd]);
        
        // Remove from suggested connections
        const updatedColleagueSuggestions = suggestedConnections.filter(conn => conn.id !== connection.id);
        setSuggestedConnections(updatedColleagueSuggestions);
        
        // Update the count in network categories
        updateCategoryCount('My colleagues', 1);
        break;
        
      case 'My Patients':
        // Add to patients connections
        setPatientsConnections([...patientsConnections, connectionToAdd]);
        
        // Remove from suggested connections
        const updatedPatientSuggestions = suggestedConnections.filter(conn => conn.id !== connection.id);
        setSuggestedConnections(updatedPatientSuggestions);
        
        // Update the count in network categories
        updateCategoryCount('My Patients', 1);
        break;
        
      case 'Alumni':
        // Add to alumni connections
        setAlumniConnections([...alumniConnections, connectionToAdd]);
        
        // Remove from experienced doctor suggestions
        const updatedExperiencedSuggestions = experiencedDoctorSuggestions.filter(conn => conn.id !== connection.id);
        setExperiencedDoctorSuggestions(updatedExperiencedSuggestions);
        
        // Update the count in network categories
        updateCategoryCount('Alumni', 1);
        break;
        
      default:
        // Add to all connections
        setConnections([...connections, connectionToAdd]);
        
        // Remove from suggested connections
        const updatedDefaultSuggestions = suggestedConnections.filter(conn => conn.id !== connection.id);
        setSuggestedConnections(updatedDefaultSuggestions);
        
        // Update the count in network categories
        updateCategoryCount('All connections', 1);
        break;
    }
  };
  
  // Render connection card based on category
  const renderConnectionCard = (connection) => {
    switch(activeCategory) {
      case 'My colleagues':
        return (
          <div className="connection-card">
            <div className="connection-avatar">
              <img src={connection.avatar} alt={connection.name} />
            </div>
            <div className="connection-info">
              <h3 className="connection-name">{connection.name}</h3>
              <p className="connection-title">{connection.title}</p>
              <p className="connection-specialty">{connection.specialty}</p>
              <p className="connection-department"><strong>Department:</strong> {connection.department}</p>
              <p className="connection-position"><strong>Position:</strong> {connection.position}</p>
            </div>
            <div className="connection-actions">
              <button className="view-profile-btn" onClick={() => openProfileModal(connection)}>View profile</button>
              <button className="unfollow-btn" onClick={() => handleUnfollow(connection.id)}>Message</button>
            </div>
          </div>
        );
      
      case 'My Patients':
        return (
          <div className="connection-card">
            <div className="connection-avatar">
              <img src={connection.avatar} alt={connection.name} />
            </div>
            <div className="connection-info">
              <h3 className="connection-name">{connection.name}</h3>
              <p className="connection-age"><strong>Age:</strong> {connection.age}</p>
              <p className="connection-condition"><strong>Condition:</strong> {connection.condition}</p>
              <p className="connection-last-visit"><strong>Last Visit:</strong> {connection.lastVisit}</p>
              <p className="connection-next-appointment"><strong>Next Appointment:</strong> {connection.nextAppointment}</p>
            </div>
            <div className="connection-actions">
              <button className="view-profile-btn" onClick={() => openProfileModal(connection)}>View Records</button>
              <button className="unfollow-btn" onClick={() => handleUnfollow(connection.id)}>Schedule</button>
            </div>
          </div>
        );
      
      case 'Alumni':
        return (
          <div className="connection-card">
            <div className="connection-avatar">
              <img src={connection.avatar} alt={connection.name} />
            </div>
            <div className="connection-info">
              <h3 className="connection-name">{connection.name}</h3>
              <p className="connection-title">{connection.title}</p>
              <p className="connection-specialty">{connection.specialty}</p>
              <p className="connection-experience"><strong>Experience:</strong> {connection.experience}</p>
              <p className="connection-hospital"><strong>Hospital:</strong> {connection.hospital}</p>
            </div>
            <div className="connection-actions">
              <button className="view-profile-btn" onClick={() => openProfileModal(connection)}>View profile</button>
              <button className="unfollow-btn" onClick={() => handleUnfollow(connection.id)}>Unfollow</button>
            </div>
          </div>
        );
      
      case 'People I follow':
        return (
          <div className="connection-card">
            <div className="connection-avatar">
              <img src={connection.avatar} alt={connection.name} />
            </div>
            <div className="connection-info">
              <h3 className="connection-name">{connection.name}</h3>
              <p className="connection-title">{connection.title}</p>
              <p className="connection-specialty">{connection.specialty}</p>
              <p className="connection-publications"><strong>Publications:</strong> {connection.publications}</p>
              <p className="connection-institution"><strong>Institution:</strong> {connection.institution}</p>
            </div>
            <div className="connection-actions">
              <button className="view-profile-btn" onClick={() => openProfileModal(connection)}>View Research</button>
              <button className="unfollow-btn" onClick={() => handleUnfollow(connection.id)}>Unfollow</button>
            </div>
          </div>
        );
      
      case 'Groups':
        return (
          <div className="connection-card group-card">
            <div className="connection-avatar group-avatar">
              <img src={connection.avatar} alt={connection.name} />
            </div>
            <div className="connection-info">
              <h3 className="connection-name">{connection.name}</h3>
              <p className="connection-members">{connection.members}</p>
              <p className="connection-type"><strong>Type:</strong> {connection.type}</p>
              <p className="connection-activity"><strong>Activity:</strong> {connection.activity}</p>
              <p className="connection-last-post"><strong>Last Post:</strong> {connection.lastPost}</p>
              <p className="connection-joined">{connection.joined}</p>
            </div>
            <div className="connection-actions">
              <button className="view-profile-btn" onClick={() => openProfileModal(connection)}>View Group</button>
              <button className="unfollow-btn" onClick={() => handleUnfollow(connection.id)}>Leave Group</button>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="connection-card">
            <div className="connection-avatar">
              <img src={connection.avatar} alt={connection.name} />
            </div>
            <div className="connection-info">
              <h3 className="connection-name">{connection.name}</h3>
              <p className="connection-title">{connection.title}</p>
              <p className="connection-experience"><strong>Experience:</strong> {connection.experience}</p>
              <p className="connection-specialty">{connection.specialty}</p>
              <p className="connection-hospital">{connection.hospital}</p>
            </div>
            <div className="connection-actions">
              <button className="view-profile-btn" onClick={() => openProfileModal(connection)}>View profile</button>
              <button className="unfollow-btn" onClick={() => handleUnfollow(connection.id)}>Unfollow</button>
            </div>
          </div>
        );
    }
  };
  
  // Render suggested item based on category
  const renderSuggestedItem = (connection, index, array) => {
    if (activeCategory === 'Groups') {
      return (
        <React.Fragment key={connection.id}>
          <div className="suggested-item">
            <div className="suggested-avatar group-avatar">
              <img src={connection.avatar} alt={connection.name} />
            </div>
            <div className="suggested-info">
              <h4 className="suggested-name">{connection.name}</h4>
              <p className="suggested-title-hospital">
                {connection.members}<br />
                <span className="group-type">{connection.type}</span>
                <span className="group-activity">{connection.activity}</span>
              </p>
            </div>
            <button className="add-connection-btn" onClick={() => handleAddConnection(connection)}>
              <AiOutlinePlus />
            </button>
          </div>
          {index < array.length - 1 && <div className="suggested-divider"></div>}
        </React.Fragment>
      );
    }
    
    return (
      <React.Fragment key={connection.id}>
        <div className="suggested-item">
          <div className="suggested-avatar">
            <img src={connection.avatar} alt={connection.name} />
          </div>
          <div className="suggested-info">
            <h4 className="suggested-name">{connection.name}</h4>
            <p className="suggested-title-hospital">
              {connection.title}<br />
              {connection.hospital}
              {connection.experience && <span className="experience-tag">{connection.experience}</span>}
            </p>
          </div>
          <button className="add-connection-btn" onClick={() => handleAddConnection(connection)}>
            <AiOutlinePlus />
          </button>
        </div>
        {index < array.length - 1 && <div className="suggested-divider"></div>}
      </React.Fragment>
    );
  };

  return (
    <div className="network-page">
      {/* Network Categories */}
      <div className="network-sidebar">
        <div className="network-header">
          <div className="network-icon">
            <AiOutlineCheck />
          </div>
          <h2 className="network-title">Network</h2>
        </div>
        
        <div className="network-card">
          {networkCategories.map(category => (
            <div 
              key={category.id} 
              className={`network-item ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div className="network-item-left">
                <span className="network-item-icon">{category.icon}</span>
                <span className="network-item-name">{category.name}</span>
              </div>
              <span className="network-item-count">{category.count}</span>
            </div>
          ))}
        </div>
        
        {/* Suggested Connections Card */}
        <div className="suggested-connections-container">
          <h3 className="suggested-title">
            {getSuggestionsTitle()}
          </h3>
          <div className="suggested-card">
            {getActiveSuggestions().map((connection, index, array) => 
              renderSuggestedItem(connection, index, array)
            )}
          </div>
        </div>
      </div>
      
      {/* Connections List */}
      <div className="connections-list-container">
        <h2 className="connections-title">
          {activeCategory === 'Groups' ? 'Groups You Follow' : activeCategory}
        </h2>
        
        <div className="connections-list">
          {getActiveConnections().map(connection => renderConnectionCard(connection))}
        </div>
      </div>
      
      {/* Profile Modal */}
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={closeProfileModal} 
        profile={selectedProfile} 
        profileType={activeCategory}
      />
    </div>
  );
};

export default Network;