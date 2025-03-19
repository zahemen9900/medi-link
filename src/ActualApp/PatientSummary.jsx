import React, { useState, useEffect } from 'react';
import { 
  AiOutlineEdit, 
  AiOutlineFileImage, 
  AiOutlineFilePdf,
  AiOutlinePlayCircle,
  AiOutlineDelete,
  AiOutlinePauseCircle,
  AiOutlineFile,
  AiOutlineDownload,
  AiOutlineEye
} from 'react-icons/ai';
import './PatientSummary.css';

const PatientSummary = () => {
  const [reportText, setReportText] = useState('');
  const [prescriptionText, setPrescriptionText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [waveformBars, setWaveformBars] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Handle report text change
  const handleReportChange = (e) => {
    setReportText(e.target.value);
  };

  // Handle prescription text change
  const handlePrescriptionChange = (e) => {
    setPrescriptionText(e.target.value);
  };

  // Toggle recording state
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setRecordingTime(0);
    }
  };

  // Handle file upload
  const handleUpload = (type) => {
    console.log(`Uploading ${type}...`);
    // Implement file upload logic here
  };

  // Simulate recording time and waveform
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
        
        // Generate random waveform bars
        const newBars = Array.from({ length: 30 }, () => 
          Math.floor(Math.random() * 30) + 5
        );
        setWaveformBars(newBars);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRecording]);

  // Format recording time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle document click
  const handleDocumentClick = (docType) => {
    setSelectedDocument(docType);
    console.log(`Viewing document: ${docType}`);
    // In a real app, this would open a preview or download dialog
  };

  // Close document preview
  const closeDocumentPreview = () => {
    setSelectedDocument(null);
  };

  return (
    <div className="patient-summary-container">
      <div className="patient-summary-left">
        <div className="report-section">
          <h2>Write Report</h2>
          <div className="text-input-container">
            <textarea 
              className="text-input" 
              value={reportText} 
              onChange={handleReportChange}
              placeholder="Write your report here..."
            />
            <button className="edit-button">
              <AiOutlineEdit />
            </button>
          </div>
          <div className="upload-buttons">
            <button 
              className="upload-button image"
              onClick={() => handleUpload('image')}
            >
              <AiOutlineFileImage /> Upload Image
            </button>
            <button 
              className="upload-button pdf"
              onClick={() => handleUpload('pdf')}
            >
              <AiOutlineFilePdf /> Upload PDF
            </button>
          </div>
        </div>

        <div className="prescription-section">
          <h2>Write Prescription</h2>
          <div className="text-input-container">
            <textarea 
              className="text-input" 
              value={prescriptionText} 
              onChange={handlePrescriptionChange}
              placeholder="Write prescription details here..."
            />
            <button className="edit-button">
              <AiOutlineEdit />
            </button>
          </div>
        </div>

        <div className="voice-memo-section">
          <h2>Voice Memo</h2>
          <div className="voice-recorder">
            <button 
              className="record-button"
              onClick={toggleRecording}
            >
              {isRecording ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
            </button>
            
            <div className="waveform">
              {waveformBars.map((height, index) => (
                <div 
                  key={index} 
                  className="waveform-bar" 
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            
            <div className="recording-time">
              {formatTime(recordingTime)}
            </div>
            
            <button className="delete-button">
              <AiOutlineDelete />
            </button>
          </div>
        </div>

        <button className="send-button">Send</button>
      </div>

      <div className="patient-summary-right">
        <div className="patient-card">
          <h3>Patient Card</h3>
          
          <div className="patient-info">
            <div className="patient-avatar">
              <img 
                src="https://randomuser.me/api/portraits/women/32.jpg" 
                alt="Jane Deer" 
              />
            </div>
            <div className="patient-details">
              <h4 className="patient-name">Jane Deer</h4>
              <p className="patient-demographics">32 years, Female</p>
            </div>
          </div>
          
          <div className="visit-purpose">
            <h3>Purpose of Visit</h3>
            <p>
              Regular checkup and follow-up on previous medication. 
              Patient reports occasional headaches and mild fatigue.
            </p>
          </div>
          
          <div className="document-items">
            <h3>Documents</h3>
            <div 
              className="document-item"
              onClick={() => handleDocumentClick('xray')}
            >
              <AiOutlineFile className="document-icon" />
              <label>X-Ray</label>
              <div className="document-actions">
                <AiOutlineEye className="document-action-icon" title="View" />
                <AiOutlineDownload className="document-action-icon" title="Download" />
              </div>
            </div>
            <div 
              className="document-item"
              onClick={() => handleDocumentClick('history')}
            >
              <AiOutlineFile className="document-icon" />
              <label>History of Disease</label>
              <div className="document-actions">
                <AiOutlineEye className="document-action-icon" title="View" />
                <AiOutlineDownload className="document-action-icon" title="Download" />
              </div>
            </div>
            <div 
              className="document-item"
              onClick={() => handleDocumentClick('analysis')}
            >
              <AiOutlineFile className="document-icon" />
              <label>Analysis</label>
              <div className="document-actions">
                <AiOutlineEye className="document-action-icon" title="View" />
                <AiOutlineDownload className="document-action-icon" title="Download" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Preview Modal */}
      {selectedDocument && (
        <div className="document-preview-overlay" onClick={closeDocumentPreview}>
          <div className="document-preview-modal" onClick={(e) => e.stopPropagation()}>
            <div className="document-preview-header">
              <h3>{selectedDocument === 'xray' ? 'X-Ray' : 
                   selectedDocument === 'history' ? 'History of Disease' : 'Analysis'}</h3>
              <button className="close-preview-btn" onClick={closeDocumentPreview}>×</button>
            </div>
            <div className="document-preview-content">
              {selectedDocument === 'xray' && (
                <img 
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="X-Ray Sample" 
                  className="document-preview-image"
                />
              )}
              {selectedDocument === 'history' && (
                <div className="document-preview-text">
                  <h4>Patient History</h4>
                  <p>Patient has a history of hypertension diagnosed in January 2023.</p>
                  <p>Type 2 Diabetes diagnosed in March 2022.</p>
                  <p>No known allergies.</p>
                  <p>Family history of cardiovascular disease.</p>
                </div>
              )}
              {selectedDocument === 'analysis' && (
                <div className="document-preview-text">
                  <h4>Lab Analysis Results</h4>
                  <p>Blood Pressure: 130/85 mmHg</p>
                  <p>Blood Glucose: 110 mg/dL</p>
                  <p>Cholesterol: 195 mg/dL</p>
                  <p>HDL: 45 mg/dL</p>
                  <p>LDL: 120 mg/dL</p>
                </div>
              )}
            </div>
            <div className="document-preview-footer">
              <button className="download-btn">
                <AiOutlineDownload /> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientSummary; 