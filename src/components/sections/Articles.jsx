import React from "react";
import styled from "styled-components";
import { articles } from "../../myData";
import ArticleCard from "../cards/ArticleCard";

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
padding: 0 16px;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Articles = () => {
  return (
    <Container id="Articles">
      <Wrapper>
        <Title>Articles</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I create various articles/blogs across a diverse range of topics. Here are a few articles.
        </Desc>
        <CardContainer>
          {articles.map((article) => (
              <ArticleCard article={article}/>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Articles;
