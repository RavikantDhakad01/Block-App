import { useEffect, useState } from "react";
import { Container, PostCard } from '../index'
import service from "../../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
    const userData =useSelector((state)=>state.auth.user)
    const [Posts, setPosts] = useState([])

    useEffect(() => {
        if(!userData){
            return
        }
        service.getPosts(userData.$id)
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }

            })
    }, [userData])
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        Posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}
export default AllPosts 