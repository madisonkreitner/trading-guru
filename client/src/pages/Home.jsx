import styled from 'styled-components'
import Navbar from '../components/Navbar';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #303036;
`;

const Home = () => {
    return (
        <Container>
            <Navbar />

        </Container>
    )
}

export default Home