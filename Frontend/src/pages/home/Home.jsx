import MessageContainer from "../../components/messagebox/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
      <Sidebar />
      <MessageContainer />

    </div>
  );
};
export default Home;