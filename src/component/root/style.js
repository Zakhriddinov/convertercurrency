import styled from "styled-components";

const Container = styled.div``
const Converter = styled.div`
max-width: 900px;
min-height: 300px;
border-radius: 10px;
padding: 50px;
box-sizing: border-box;
box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 0.1);

display: flex;
justify-content: space-between;
align-items: center;

@media(max-width: 900px) {
        flex-direction: column;
        margin: 100px;
    }

    @media(max-width: 700px) {
        flex-direction: column;
        margin: 50px;
    }

    @media(max-width: 550px) {
        flex-direction: column;
        margin: 25px;
    }

    @media(max-width: 500px) {
        padding: 25px;
        margin: 15px;
    }
`
export { Container, Converter }