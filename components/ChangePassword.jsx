import styled from "@emotion/styled"
export default function ChangePassword(){
    return(
        <StyledForm>
            <input type="password" name="old-password" id="old-password"/>
            <input type="password" name="new-password" id="new-password"/>
            <input type="password" name="confirm" id="confirm"/>
        </StyledForm>
    )
}

const StyledForm = styled.form`

`