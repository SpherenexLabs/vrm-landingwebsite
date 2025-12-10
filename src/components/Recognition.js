import React from 'react';
import './Recognition.css';

// Import PDF files
import udyamCertificate from '../assets/Print _ Udyam Registration Certificate.pdf';
import rcDocument from '../assets/AA2902240767141_RC23022024 (1).pdf';

const Recognition = () => {
  const documents = [
    {
      id: 1,
      title: 'Udyam Registration Certificate',
      description: 'Official registration certificate for MSME',
      file: udyamCertificate,
      icon: '📄'
    },
    {
      id: 2,
      title: 'RC Document',
      description: 'Registration Certificate',
      file: rcDocument,
      icon: '📋'
    }
  ];

  const handleDownload = (file, title) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = title;
    link.click();
  };

  const handleView = (file) => {
    window.open(file, '_blank');
  };

  return (
    <section id="recognition" className="recognition">
      <div className="recognition-header">
        <h2>Our <span className="highlight">Recognition</span></h2>
        <p className="section-subtitle">
          Official certifications and documents validating our business credentials
        </p>
      </div>
      
      <div className="recognition-grid">
        {documents.map((doc) => (
          <div key={doc.id} className="recognition-card">
            <div className="document-icon">
              <span>{doc.icon}</span>
            </div>
            <div className="document-info">
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </div>
            <div className="document-actions">
              <button 
                className="btn-view"
                onClick={() => handleView(doc.file)}
              >
                View Document
              </button>
              <button 
                className="btn-download"
                onClick={() => handleDownload(doc.file, doc.title)}
              >
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recognition;
