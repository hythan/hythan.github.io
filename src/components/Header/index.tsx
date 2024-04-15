import { useEffect, useState } from "react";
import { HeaderMobile } from "./mobile";
import { HeaderDesktop } from "./desktop";

const departaments: Department[] = [
	{title:'Novidades',icon: '/icons/icon-dress.png'},
	{title:'Vestidos'},
	{title:'Roupas'},
	{title:'Sapatos'},
	{title:'Lingerie'},
	{title:'Acessórios'},
	{title: 'OUTLET'}
]

export const Header = () => {
	const [isMobile, setIsMobile] = useState(true)

	const handleResize = () => {
		if(window.innerWidth >= 1025) {
			return setIsMobile(false);
		}

		setIsMobile(true);
	}

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		  };
	},[])

	return <>
		<header>
			{isMobile ? <HeaderMobile /> : <HeaderDesktop departaments={departaments}/>}
		</header>
	</>
}