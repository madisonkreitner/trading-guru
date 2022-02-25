import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #1E1D1D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.span`
    color: #E8E8E8;
    font-size: 30px;
    padding: 0px 20px;
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const Input = styled.input`
    background-color: #303036;
    border: none;
    color: white;
    padding: 7px 26px;
`;

const Right = styled.div`

`;

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Logo>Trading Guru</Logo>
                <SearchBox>
                    <Input placeholder="Find a ticker..."></Input>
                    <SearchIcon sx={{
                        position: 'fixed',
                        color: '#aaa',
                        margin: '2px'
                    }}/>
                </SearchBox>
            </Left>
            <Right>

            </Right>
        </Container>
    )
}

export default Navbar