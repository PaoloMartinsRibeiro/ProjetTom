import { StyledButton, StyledButtonContainer } from "./styles";


const Button = () => {
  const onClick = () => {
    console.log('Button clicked');
    // window.location.href = 'https://www.exemple.com';
  }
    return (
      <StyledButtonContainer>
        <StyledButton onClick={onClick}>Ceci est un Button</StyledButton>
      </StyledButtonContainer>
    )
}

export default Button;