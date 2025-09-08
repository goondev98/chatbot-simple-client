import { useEffect, useState } from "react";
import axios from "axios";

var data = [
    { id: 1, name: "Conversation 1", from: "A", to: "B" },
    { id: 2, name: "Conversation 2", from: "A", to: "B" },
    { id: 3, name: "Conversation 3", from: "A", to: "B" }
]

function Conversation(){
    const [conversations, setConversations] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getConversation = async() => {
            const response = await axios.get("http://localhost:2025/api/conversations")
            const convs = response.data
            setConversations(convs)
        }
        getConversation()
    },[])

    return (
        <ul className="list-disc pl-6 text-gray-700">
            { conversations.map(cv => <li key={cv.id}>ID: {cv.id}, Name: {cv.name}, From: {cv.from}, To: {cv.to}</li>) }
        </ul>
  );
}

export default Conversation