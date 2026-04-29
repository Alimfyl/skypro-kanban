import { useState } from "react";
import * as S from "./Header.styled"
import { Container } from "../../../CommonStyles.styled";
function Header ({ togleMenu }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};


    return(
        <S.StyledHeader>
			<Container>
				<S.HeaderBlock>
					<S.HeaderLogo>
						<a href="" target="_self"><img src="/images/logo.png" alt="logo"/></a>
					</S.HeaderLogo>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"/></a>
					</div>
					<S.HeaderNav>
						<S.HeaderBtnMainNew id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></S.HeaderBtnMainNew>
						<S.HeaderUser onClick={toggleMenu}>Ivan Ivanov</S.HeaderUser>
						<div className="header__pop-user-set pop-user-set" id="user-set-target" style={{ display: isOpen ? "block" : "none"}}>
							    <a href="">x</a> 
							<p className="pop-user-set__name">Ivan Ivanov</p>
							<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
							<div className="pop-user-set__theme">
								<p>Темная тема</p>
								<input type="checkbox" className="checkbox" name="checkbox"/>
							</div>
							<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
						</div>
					</S.HeaderNav>					
				</S.HeaderBlock>
			</Container>			
		</S.StyledHeader>
    );
}
export default Header