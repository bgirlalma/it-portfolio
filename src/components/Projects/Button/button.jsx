
import { ButtonContainer, ButtonTeam, ButtonOwn } from "./button.styled";
const Button = () => {
    return (
        <ButtonContainer>
            <ButtonTeam type="button">Team</ButtonTeam>
            <ButtonOwn type="button">Own</ButtonOwn>
        </ButtonContainer>
    )
}

export default Button;