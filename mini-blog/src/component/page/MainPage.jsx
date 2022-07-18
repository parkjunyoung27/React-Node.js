import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from '../../date.json';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-itemsL center;
    justify-content: cenerl
`;

const Container = styled.div`
    width:100%;
    max-width: 720px;
    & > * {
        :not(:last-child){
            margin-bottom:16px;
        }
    }   
`;

function MainPage(props){
    const {} = props;

    const navigate = useNavigate();

    return(
        <Wrapper>
            <Container>
                <button
                    title="글 작성하기"
                    onAbort={(item) => {
                        navigate("/post-write");
                    }}
                />
                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>

    );
}

export default MainPage;



















