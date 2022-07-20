import axios from 'axios';
import NoResults from '../components/NoResults';
import VideoCard from '../components/VideoCard';
import { Video } from '../types';
import { NextPage } from 'next';
import { BASE_URL } from '../utils';

interface IProps {
  videos: Video[];
}

const Home: NextPage<IProps> = ({ videos }) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={'No Videos'} />
      )}
    </div>
  );
};

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let respons;
  if (topic) {
    respons = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    respons = await axios.get(`${BASE_URL}/api/post`);
  }

  return {
    props: {
      videos: respons.data,
    },
  };
};

export default Home;
