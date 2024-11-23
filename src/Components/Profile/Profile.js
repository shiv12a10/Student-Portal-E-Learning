import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        studentId: 'STU123',
        program: 'Computer Science',
        semester: '4th'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update logic here
        console.log('Profile updated:', profileData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Profile" 
                    className="profile-avatar"
                />
                <div className="profile-info">
                    <h1 className="profile-name">{profileData.name}</h1>
                    <p className="profile-email">{profileData.email}</p>
                </div>
            </div>

            <div className="profile-section">
                <h2 className="section-title">Personal Information</h2>
                <form className="profile-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profileData.name}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleChange}
                            className="form-input"
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Student ID</label>
                        <input
                            type="text"
                            name="studentId"
                            value={profileData.studentId}
                            onChange={handleChange}
                            className="form-input"
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Program</label>
                        <input
                            type="text"
                            name="program"
                            value={profileData.program}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Semester</label>
                        <input
                            type="text"
                            name="semester"
                            value={profileData.semester}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="save-button">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
