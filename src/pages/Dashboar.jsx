import React from 'react';
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery từ react-responsive
import PostCard from '../components/ui/PostCard';
import PostCard2 from '../components/ui/PostCard2';

function Dashboar() {
  const post = {
    user: {
      name: 'Nguyễn Văn A',
      date: '28/08/2024',
      avatar: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_58.jpg',
    },
    tripInfo: {
      destination: 'Paris, Pháp',
      startDate: '01/09/2024',
      endDate: '10/09/2024',
      days: 10,
      people: 4,
    },
    description: 'Chuyến đi này là một kỳ nghỉ đáng nhớ ở Paris. Chúng tôi sẽ tham quan Tháp Eiffel, bảo tàng Louvre, và tận hưởng ẩm thực Pháp tuyệt vời. Rất mong chờ được khám phá vẻ đẹp lãng mạn của thành phố này!',
    images: [
      'https://i.ytimg.com/vi/SVyYEwjK9oE/maxresdefault.jpg',
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',
      'https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg',
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_58.jpg',
    ],
  };

  // Sử dụng useMediaQuery để kiểm tra kích thước màn hình
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  // Chọn component PostCard dựa trên kích thước màn hình
  const PostComponent = isMobile ? PostCard2 : PostCard;

  // Tạo mảng các bài viết (ở đây chỉ có một bài viết mẫu)
  const posts = [post, post, post, post, post, post, post, post, post, post, post, post, post, post, post, post]; // Có thể thay đổi số lượng bài viết tùy ý

  return (
    <>
      {posts.map((post, index) => (
        <PostComponent key={index} post={post} />
      ))}
    </>
  );
}

export default Dashboar;
