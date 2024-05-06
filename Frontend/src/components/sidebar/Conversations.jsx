import Conversation from '..//sidebar/Conversation.jsx'
const Conversations = () => {
  useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}

export default Conversations