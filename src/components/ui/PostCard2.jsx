import React, { useState } from 'react';
import { Card, Carousel, Button, Row, Col } from 'react-bootstrap';
import '../../assets/css/PostCard2.css'

const PostCard2 = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 20) {
            return words.slice(0, 20).join(' ') + '...';
        }
        return description;
    };

    return (
        <Card className="shadow-sm rounded">
            <Card.Header>
                <div className="d-flex align-items-center">
                    <img
                        src={post.user.avatar}
                        alt="Avatar"
                        className="rounded-circle"
                        style={{ width: '50px', height: '50px', marginRight: '15px' }}
                    />
                    <div>
                        <h6 className="mb-0 fw-bold">{post.user.name}</h6>
                        <small className="text-muted">{post.user.date}</small>
                    </div>
                </div>
            </Card.Header>
            <Card.Body className='pb-0'>
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <Carousel>
                            {post.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={image}
                                        alt={`Ảnh đi du lịch ${index + 1}`}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="mb-3">
                            <p><strong className='content-post'><i className="bi bi-pin-map"></i> Điểm đến:</strong> {post.tripInfo.destination}</p>
                            <p><strong><i className="bi bi-calendar"></i> Ngày khởi hành:</strong> {post.tripInfo.startDate}</p>
                            <p><strong><i className="bi bi-calendar-check"></i> Ngày kết thúc:</strong> {post.tripInfo.endDate}</p>
                            <p><strong><i className="bi bi-clock"></i> Số ngày:</strong> {post.tripInfo.days} ngày</p>
                            <p><strong><i className="bi bi-people"></i> Số người:</strong> {post.tripInfo.people} người</p>
                        </div>
                        <div>
                            <p className='mb-0'><strong><i className="bi bi-text-left"></i> Mô tả:</strong> 
                                {isExpanded ? post.description : truncateDescription(post.description)}
                                {post.description.split(' ').length > 20 && (
                                    <Button variant="link" onClick={handleReadMore}>
                                        {isExpanded ? 'Xem ít hơn' : 'Xem thêm'}
                                    </Button>
                                )}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
            <Card className="rounded m-0">
            {/* Các phần khác của Card */}
            <Card.Footer className="bg-light border-top-0 rounded-bottom footer-buttons">
                <Button variant="primary"><i className="bi bi-hand-thumbs-up"></i></Button>
                <Button variant="secondary"><i className="bi bi-chat-dots"></i></Button>
                <Button variant="secondary"><i className="bi bi-share"></i></Button>
            </Card.Footer>
        </Card>
        </Card>
    );
};

export default PostCard2;
