import React from 'react';
import styled from 'styled-components';
const primary = "linear-gradient(to right,hsl(236, 72%, 79%), hsl(237, 63%, 64%))";
const primaryBG = "linear-gradient(to bottom,hsl(236, 72%, 79%), hsl(237, 63%, 64%))";

const Container = styled.div`
	padding: 2rem 1.5rem;
	background:${props => props.className === "premium" ? primaryBG : "white"};
	border-radius: 8px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;    
	color:${props => props.className === "premium" ? "white" : "hsl(233, 13 %, 49 %)"};
	min-height: ${props => props.className === "premium" ? "450px" : "400px"};
`;
const PriceHeading = styled.h2`
	margin: 1rem 0;
	font-size: 3.5rem;
`;
const Info = styled.p`
	margin: .8rem 4rem;
	font-size: 1rem;
`;
const Hr = styled.hr`
	width: 100%;
	opacity: .3;
`;
const LearnMore = styled.button`
	width: 100%;
	background:${props => props.parent === "premium" ? "white" : primary};
	border: none;
	padding: .8rem 0;
	border-radius: 6px;
	margin-top: 1.5rem;
  font-family: 'Montserrat', sans-serif;
	letter-spacing: .1rem;
	cursor: pointer;
	color:${props => props.parent === "premium" ? "hsl(237, 63%, 64%)" : "white"};
	&:hover{
		background: transparent;
		border: solid ${props => props.parent === "premium" ? "white" : "hsl(237, 63%, 64%)"} 1px;
		color:${props => props.parent === "premium" ? "white" : "hsl(237, 63%, 64%)"};

	}
`;
export default function Price({ data }) {
	const name = data.name === "Professional" ? "premium" : "general";
	return (
		<Container className={name}>
			<Info>{data.name}</Info>
			<PriceHeading>${data.price}</PriceHeading>
			<Hr />
			<Info>{data.storage} Storage</Info>
			<Hr />
			<Info>{data.users} Users Allowed</Info>
			<Hr />
			<Info>Send up to {data.send_upto} GB</Info>
			<Hr />
			<LearnMore parent={name}>Learn More</LearnMore>
		</Container>
	)
}
