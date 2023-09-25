import { Dispatch, SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Switch } from 'antd';
import { Sun, Moon } from "react-bootstrap-icons";
import carlos from "../../assets/carlos.jpeg"
import styled from "styled-components";

type headerProps = {
    isDarkTheme: boolean,
    theme:boolean,
    setTheme:Dispatch<SetStateAction<boolean>>,
}

const StyledHeader = styled.section`
    display: flex;
    z-index:1;
    min-height: 9vh;
    width: 90%;
    justify-content: space-between; 
    padding: 2rem 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    a{
        text-decoration: none;
        color: #444;
        transition: 0.2s ease;
    };
    a:hover{
        color: #ff0080;
    }
`;

const Nav = styled.nav`
    min-height: 9vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;  
    margin-left: 1rem;  
`

const StyledMenu = styled.section`
    display: flex;
    align-items: center;
    column-gap: 2rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavIcon = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    margin-left:1rem;

    @media (min-width: 769px) {
    display: none;
    }
`;

const Line = styled.span`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #444;
    transition: width 0.4s ease-in-out;

    :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
    }
`;

const Overlay = styled.div`
    position: absolute;
    height: ${props => (props.open ? "91vh" : 0)};
    width: 100vw;
    background: #fff;
    transition: height 0.4s ease-in-out;

    @media (min-width: 769px) {
    display: none;
    }
`;

const OverlayMenu = styled.ul`
    list-style: none;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    text-align: center;

    li {
        opacity: ${props => (props.open ? 1 : 0)};
        transition: opacity 0.4s ease-in-out;
    }

    li:nth-child(2) {
        margin: 25px 0px;
    }

    a{
        text-decoration: none;
        color: #444;
        transition: 0.2s ease;
        font-size:2rem;
    };
    a:hover{
        color: #ff0080;
    }
`;

const Header = ({isDarkTheme, theme, setTheme}: headerProps) => {

    const navigate = useNavigate()
    const [toggle, toggleNav] = useState(false);

    const handleTheme = () => {
        setTheme(!theme)
        console.log(`switch to ${isDarkTheme}`);
    };

return (<>
    <StyledHeader>
        <Link to="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} style={{display:'flex', alignItems:'center'}}>
            <img src={carlos} alt="Carlos" width={48} height={48} style={{borderRadius: '50%',marginRight:'0.5rem'}}/>
            <span>
                <h1>Carlos Cordero</h1>
            </span>
        </Link>

            <Nav>
                <StyledMenu>
                    <ul style={{display:'flex', alignItems:'center', columnGap:'2em', marginRight:'1rem'}}>
                        <li>
                            <Link to="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} > Home </Link>
                        </li>

                        <li>
                            <Link to="projects" onClick={(e) => { e.preventDefault(); navigate("projects"); }} > Projects </Link>
                        </li>
                        <li>
                            <Link to="contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }} > Contact </Link>
                        </li>
                    </ul>
                </StyledMenu>
            <Icons>
                <Moon />
                <Switch defaultChecked onChange={handleTheme} style={{backgroundColor:'#ff0080'}}/>
                <Sun />
            </Icons>
            <NavIcon onClick={() => toggleNav(!toggle)}>
                <Line open={toggle} />
                <Line open={toggle} />
                <Line open={toggle} />
            </NavIcon>
            </Nav>
    </StyledHeader>

    <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
            <li>
                <Link to="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} > Home </Link>
            </li>

            <li>
                <Link to="projects" onClick={(e) => { e.preventDefault(); navigate("projects"); }} > Projects </Link>
            </li>

            <li>
                <Link to="contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }} > Contact </Link>
            </li>

        </OverlayMenu>
    </Overlay>
        
</>)
}
export default Header