import React from 'react';
import { Card } from 'react-bootstrap';
import '../../assets/css/Shortcut.css'; // Đảm bảo bạn đã tạo file CSS này

const Shortcut = ({ icon, title }) => {
  return (
    <Card className="mb-3 shortcut-card">
      <Card.Body className="d-flex align-items-center">
        <h4 className='fw-bold'>
          <i className={`bi bi-${icon} me-2 shortcut-icon`}></i>
        </h4>
        <h4 className='fw-bold shortcut-title'>{title}</h4>
      </Card.Body>
    </Card>
  );
};

export default Shortcut;
