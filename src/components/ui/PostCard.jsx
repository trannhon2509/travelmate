import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import '../../assets/css/PostCard.css'; // Đảm bảo bạn đã tạo file CSS này với các quy tắc CSS

const PostCard = ({ post }) => {
    const { user, tripInfo, description, images } = post;
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 40) {
            return words.slice(0, 40).join(' ') + '...';
        }
        return description;
    };

    return (
        <div className="card">
            <div className="card-header">
                <img src={user.avatar} alt="Avatar" style={{ width: '60px', height: '60px' }} />
                <div className="user-info">
                    <h4 className="mb-0">{user.name}</h4>
                    <small className="text-muted">{user.date}</small>
                </div>
            </div>
            <div className="card-body">
                <div className="info-section">
                    <div className="info-item">
                        <p><strong><i className="bi bi-geo-alt-fill"></i> Điểm đến:</strong> {tripInfo.destination}</p>
                    </div>
                    <div className="info-item">
                        <p><strong><i className="bi bi-calendar2-week-fill"></i> Ngày khởi hành:</strong> {tripInfo.startDate}</p>
                    </div>
                    <div className="info-item">
                        <p><strong><i className="bi bi-calendar-check-fill"></i> Ngày kết thúc:</strong> {tripInfo.endDate}</p>
                    </div>
                    <div className="info-item">
                        <p><strong><i className="bi bi-clock-fill"></i> Số ngày:</strong> {tripInfo.days}</p>
                    </div>
                    <div className="info-item">
                        <p><strong><i className="bi bi-people-fill"></i> Số người:</strong> {tripInfo.people}</p>
                    </div>
                </div>
                <div className="trip-description">
                    <p><strong><i className="bi bi-text-left"></i> Mô tả:</strong> 
                        {isExpanded ? description : truncateDescription(description)}
                        {description.split(' ').length > 40 && (
                            <Button variant="link" onClick={handleReadMore}>
                                {isExpanded ? 'Xem ít hơn' : 'Xem thêm'}
                            </Button>
                        )}
                    </p>
                </div>
                <div className="trip-images">
                    {images.map((src, index) => (
                        <div className="img-container" key={index}>
                            <img src={src} alt={`Ảnh đi du lịch ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="card-footer">
                <Button variant="primary" className="me-2"><i className="bi bi-hand-thumbs-up"></i> Ứng tuyển</Button>
                <Button variant="secondary" className="me-2"><i className="bi bi-chat-dots"></i> Thảo luận</Button>
                <Button variant="secondary"><i className="bi bi-share"></i> Chia sẻ</Button>
            </div>
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        }).isRequired,
        tripInfo: PropTypes.shape({
            destination: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            days: PropTypes.number.isRequired,
            people: PropTypes.number.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default PostCard;
