import { useNavigate, useParams } from 'react-router-dom';
import service from '../../appwrite/config'
import { useEffect, useState } from 'react';
import { PostForm, Container } from '../index'

function EditPost() {

    const navigate = useNavigate()
    const { slug } = useParams
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        }
        else {
            navigate('/')
        }
    }, [slug])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}
export default EditPost