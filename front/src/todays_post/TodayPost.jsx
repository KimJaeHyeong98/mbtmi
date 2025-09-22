import BottomNav from "../globaltool/BottomNav";
import Container from "../globaltool/Container";
import PostMain from "./PostMain";
import TopNav from "../globaltool/TopNav";

const TodayPost = ({ currentUser }) => {
  return (
    <Container>
      <TopNav />
      <PostMain />
      <BottomNav currentUser={currentUser} />
    </Container>
  );
};

export default TodayPost;
