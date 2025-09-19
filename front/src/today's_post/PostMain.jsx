import styled from "styled-components";
import { useState, useEffect } from "react";
import AvatarImg from "../assets/img/postsample.jpeg";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../today's_post/ProfileModal";
import axios from "axios";
import { useAuth } from "../main/AuthContext";
import PlusImg from "../assets/img/plus.png";

const PostMain = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const currentUserId = user?.user_id;
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [profileUser, setProfileUser] = useState(null);
  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";
  console.log(API_BASE);

  // 서버에서 게시글 가져오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API_BASE}/posts/postsmain`, {
          withCredentials: true,
        });
        setPosts(res.data);
      } catch (err) {
        console.error("게시글 불러오기 실패:", err);
      }
    };
    fetchPosts();
  }, []);

  // 좋아요 토글 (DB 반영 + 화면 업데이트)
  const toggleLike = async (postId) => {
    if (!user) return alert("로그인이 필요합니다!");

    try {
      // 1️⃣ 서버 요청
      const res = await axios.post(
        `${API_BASE}/posts/toggleLike`,
        null, // POST body는 없음
        { params: { postId, userId: user.user_id }, withCredentials: true }
      );

      // 2️⃣ 응답 반영
      const { liked, likeCount } = res.data;
      setPosts((prev) =>
        prev.map((p) =>
          p.post_id === postId
            ? { ...p, liked: liked, like_count: likeCount }
            : p
        )
      );
    } catch (err) {
      console.error("좋아요 실패:", err);
    }
  };

  // "더보기" 메뉴 토글
  const toggleMenu = (id) => setOpenMenuId((prev) => (prev === id ? null : id));

  // 게시글 삭제
  const handleDelete = async (postId) => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;

    try {
      await axios.delete(`${API_BASE}/posts/${postId}`, {
        withCredentials: true,
      });
      setPosts((prev) => prev.filter((p) => p.post_id !== postId));
    } catch (err) {
      console.error("삭제 실패:", err);
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <Post>
      {posts.length === 0 ? (
        <p>게시글이 아직 없습니다.</p>
      ) : (
        posts.map((p) => (
          <PostCard key={p.post_id}>
            <Header>
              <User>
                <Avatar
                  src={
                    p.photo_url
                      ? `${API_BASE}/uploads/${p.photo_url}`
                      : AvatarImg
                  }
                  alt="프로필"
                  onClick={() => {
                    setProfileUser(p);
                    setOpenProfile(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
                <Meta>
                  <div className="name">
                    <strong>{p.name}</strong>{" "}
                    <span className="mbti">{p.mbti}</span>
                  </div>
                  <span className="time">
                    {new Date(p.created_at).toLocaleString()}
                  </span>
                </Meta>
              </User>
              <MoreWrapper>
                <More onClick={() => toggleMenu(p.post_id)}>⋯</More>
                {openMenuId === p.post_id && (
                  <Menu>
                    {p.user_id === currentUserId ? (
                      <>
                        <MenuItem onClick={() => alert("글 수정하기 클릭")}>
                          글 수정하기
                        </MenuItem>
                        <MenuItem onClick={() => handleDelete(p.post_id)}>
                          글 삭제하기
                        </MenuItem>
                      </>
                    ) : (
                      <>
                        <MenuItem onClick={() => alert("글 신고")}>
                          글 신고하기
                        </MenuItem>
                        <MenuItem onClick={() => alert("사용자 신고")}>
                          사용자 신고하기
                        </MenuItem>
                      </>
                    )}
                  </Menu>
                )}
              </MoreWrapper>
            </Header>

            {p.image_url && (
              <Photo
                src={`${API_BASE}/uploads/${p.image_url}`}
                alt="게시글 이미지"
              />
            )}
            {p.text && <Caption>{p.text}</Caption>}

            <Actions>
              <HeartBtn filled={p.liked} onClick={() => toggleLike(p.post_id)}>
                ♥
              </HeartBtn>
              <span>{p.like_count}</span>
            </Actions>

            <Divider />
          </PostCard>
        ))
      )}

      {openProfile && (
        <ProfileModal
          onClose={() => setOpenProfile(false)}
          profileUser={profileUser}
        />
      )}

      <PostBtn onClick={() => navigate("/addpost")}>
        <Plus src={PlusImg} alt="pluspng" />
      </PostBtn>
    </Post>
  );
};

/* ===== 스타일 ===== */
const Post = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 12px calc(12px + env(safe-area-inset-left, 0))
    calc(88px + env(safe-area-inset-bottom, 0))
    calc(12px + env(safe-area-inset-right, 0));
`;

const PostCard = styled.article`
  background: #ffffff77;
  border-radius: 16px;
  box-shadow: 2px 6px rgba(0, 0, 0, 0.05);
  padding: 16px 14px 12px;
  margin: 0 auto 18px;
`;

const PostBtn = styled.div`
  position: fixed;
  top: 77%;
  left: 82%;
  display: flex;
  width: 44px;
  height: 45px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Plus = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const User = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

const Meta = styled.div`
  line-height: 1.2;
  .name {
    font-size: 20px;
    color: black;
  }
  .mbti {
    color: #4f5a60;
    font-weight: 600;
  }
  .time {
    display: block;
    margin-top: 4px;
    color: #646666;
    font-size: 15px;
  }
`;

const More = styled.button`
  appearance: none;
  border: 0;
  padding: 0;
  background: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: black;
`;

const MoreWrapper = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 100;
`;

const MenuItem = styled.button`
  display: block;
  width: 140px;
  padding: 10px 14px;
  border: none;
  background: white;
  text-align: left;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background: #f3f3f3;
  }
`;

const Photo = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
  margin: 8px 0 12px;
  object-fit: cover;
`;

const Caption = styled.p`
  margin: 6px 0 12px;
  font-size: 18px;
  line-height: 1.45;
  color: black;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: #050505;
`;

const HeartBtn = styled.button`
  background: transparent;
  font-size: 28px;
  line-height: 1;
  color: ${(props) => (props.filled ? "#f23737" : "#ccc")};
  padding: 2%;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #cfe8ee;
  margin: 18px 0 6px;
`;

export default PostMain;
