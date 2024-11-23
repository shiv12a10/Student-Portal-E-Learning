import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Assignments.css';

const Assignments = () => {
    // Mock data for course assignments
    const assignments = [
        {
            id: 1,
            courseId: 1,
            courseName: "Introduction to React",
            title: 'Build a React Component',
            dueDate: '2024-03-25',
            status: 'pending',
            description: 'Create a reusable React component with props and state management.',
            points: 100
        },
        {
            id: 2,
            courseId: 1,
            courseName: "Introduction to React",
            title: 'React Router Implementation',
            dueDate: '2024-03-20',
            status: 'submitted',
            description: 'Implement routing in a React application using React Router.',
            points: 80
        },
        {
            id: 3,
            courseId: 2,
            courseName: "Advanced JavaScript",
            title: 'Async Programming Exercise',
            dueDate: '2024-03-15',
            status: 'graded',
            grade: 90,
            description: 'Create a program demonstrating async/await and Promise usage.',
            points: 120
        },
        {
            id: 4,
            courseId: 3,
            courseName: "Python for Data Science",
            title: 'Data Analysis Project',
            dueDate: '2024-03-30',
            status: 'pending',
            description: 'Analyze a dataset using Pandas and create visualizations.',
            points: 150
        }
    ];

    const [filter, setFilter] = useState('all'); // all, pending, submitted, graded

    const filteredAssignments = filter === 'all' 
        ? assignments 
        : assignments.filter(assignment => assignment.status === filter);

    const getStatusBadgeClass = (status) => {
        const statusClasses = {
            pending: 'status-pending',
            submitted: 'status-submitted',
            graded: 'status-graded',
            late: 'status-late'
        };
        return `status-badge ${statusClasses[status]}`;
    };

    return (
        <div className="assignments-container">
            <div className="assignments-header">
                <h1>My Assignments</h1>
                <div className="filter-buttons">
                    <button 
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
                        onClick={() => setFilter('pending')}
                    >
                        Pending
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'submitted' ? 'active' : ''}`}
                        onClick={() => setFilter('submitted')}
                    >
                        Submitted
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'graded' ? 'active' : ''}`}
                        onClick={() => setFilter('graded')}
                    >
                        Graded
                    </button>
                </div>
            </div>
            
            <div className="assignment-list">
                {filteredAssignments.map(assignment => (
                    <div key={assignment.id} className="assignment-card">
                        <div className="assignment-info">
                            <div className="assignment-header">
                                <h3 className="assignment-title">{assignment.title}</h3>
                                <span className={getStatusBadgeClass(assignment.status)}>
                                    {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                                </span>
                            </div>
                            <div className="assignment-course">
                                <Link to={`/course/${assignment.courseId}`}>
                                    {assignment.courseName}
                                </Link>
                            </div>
                            <p className="assignment-description">{assignment.description}</p>
                            <div className="assignment-details">
                                <div className="detail-item">
                                    <span className="detail-label">Due Date:</span>
                                    <span className="due-date">{assignment.dueDate}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Points:</span>
                                    <span>{assignment.points}</span>
                                </div>
                                {assignment.grade && (
                                    <div className="detail-item">
                                        <span className="detail-label">Grade:</span>
                                        <span className="grade">{assignment.grade}/100</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="assignment-actions">
                            {assignment.status === 'pending' && (
                                <button className="submit-button">
                                    Submit Assignment
                                </button>
                            )}
                            {assignment.status === 'submitted' && (
                                <button className="view-submission-button">
                                    View Submission
                                </button>
                            )}
                            {assignment.status === 'graded' && (
                                <button className="view-feedback-button">
                                    View Feedback
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Assignments;
