import { signIn } from "next-auth/react";
import Image from "next/image";
import GoogleButton from "react-google-button";
import styled, { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import loginLogo from "../../static/img/loginLogo.png";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primaryBg};
  border-radius: 30px;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.colors.priaryBg};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: start;
  width: 70%;
  margin-bottom: 50px;
`;
const StyledInput = styled(Input)`
  margin: 15px;
  width: 70%;
`;
const Title = styled(Text)`
  font-size: 50px;
`;

const LoginButton = styled(Button)`
  border-radius: 10px;
  width: 50%;
  padding: 15px;
  margin: 0;
  font-size: 20px;
  margin-top: 10px;
`;

const Divider = styled.div`
  width: 60%;
  background: ${(props) => props.theme.colors.secondaryText};
  height: 1px;
  margin: 20px;
`;

const LoginImage = styled(Image)`
  border-radius: 20px;
  object-fit: contain;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
`;

export const LoginView = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <LeftWrapper>
        <ImageWrapper>
          <LoginImage src={loginLogo} />
        </ImageWrapper>
      </LeftWrapper>
      <RightWrapper>
        <TextWrapper>
          <Title color={theme.colors.primaryText}>Sign in</Title>
          <Text color={theme.colors.primaryText}>
            Sign in to continue to this application
          </Text>
        </TextWrapper>
        <StyledInput placeholder="email" />
        <StyledInput placeholder="password" />
        <LoginButton>Log in</LoginButton>
        <Divider />
        <GoogleButton onClick={() => signIn()} />
      </RightWrapper>
    </Wrapper>
  );
};
