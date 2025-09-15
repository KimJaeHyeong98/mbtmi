import BottomNav from "../globaltool/BottomNav";
import Container from "../globaltool/Container";
import PostMain from "./PostMain";
import TopNav from "../globaltool/TopNav";

const TodayPost = () => {
  return (
    <Container>
      <TopNav />
      <PostMain />
      <BottomNav />
    </Container>
  );
};

export default TodayPost;
