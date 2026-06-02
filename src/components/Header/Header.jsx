import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import * as S from "./Header.styled";
import { Container } from "../../CommonStyles.styled";

function Header() {
	
	const { user } = useAuth();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

    return (
        <S.StyledHeader>
			<Container>
				<S.HeaderBlock>
					<S.HeaderLogo>
						<a href="" target="_self"><img src="/images/logo.png" alt="logo"/></a>
					</S.HeaderLogo>
					<div className="header__logo _dark">
						<Link to="/"><img src="/images/logo_dark.png" alt="logo"/></Link>
					</div>
					<S.HeaderNav>
						<S.HeaderBtnMainNew id="btnMainNew">
							<Link to="/new-card">Создать новую задачу</Link>
						</S.HeaderBtnMainNew>
						
						
						<S.HeaderUser href="#" onClick={toggleMenu}>
							{user?.name || "Пользователь"}
						</S.HeaderUser>

						<div className="header__pop-user-set pop-user-set" id="user-set-target" style={{ display: isOpen ? "block" : "none"}}>
							<a onClick={toggleMenu} style={{cursor: "pointer"}}>x</a> 
							
							
							<p className="pop-user-set__name">{user?.name || "Имя не указано"}</p>
							<p className="pop-user-set__mail">{user?.login || "Email не указан"}</p>
							
							<div className="pop-user-set__theme">
								<p>Темная тема</p>
								<input type="checkbox" className="checkbox" name="checkbox"/>
							</div>
							<button type="button" className="_hover03">
								<Link to="/exit">Выйти</Link>
							</button>
						</div>
					</S.HeaderNav>					
				</S.HeaderBlock>
			</Container>			
		</S.StyledHeader>
    );
}

export default Header;
