import { useParams } from 'react-router-dom';

const Article = () => {
    const {id} = useParams(); //값 가져오는 부분
    return (
        <div>
            <h2>게시글 {id}</h2>
        </div>
    );
};

export default Article;