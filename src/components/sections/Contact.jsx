import React from "react";
import styled from "styled-components";
import { Bio } from "../../myData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
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
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  // const form = useRef();

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.medium} target="display">
            <FontAwesomeIcon icon={faMedium} />
          </SocialMediaIcon>
        </SocialMediaIcons>
      </Wrapper>
    </Container>
  );
};

export default Contact;
