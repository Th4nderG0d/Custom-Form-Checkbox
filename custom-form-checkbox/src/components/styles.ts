import styled from "styled-components";

export const FormCheckboxContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 200px;
	width: 200px;
`;

export const CustomCheckbox = styled.label`
	display: flex;
	align-items: center;
	border-radius: 8px;
	height: 30px;
	font-size: 14px;
	color: #050505;

	&focus: {
		border: 2px solid #2a81fe;
	}
`;

export const Label = styled.label`
	color: #0f54b8;
	font-size: 14px;
	font-weight: 500;
	margin-right: 5px;
`;

export const LabelContainer = styled.div`
	display: flex;
	margin-bottom: 1px;
`;

export const Asterisk = styled.span`
	color: red;
`;

export const ErrorContainer = styled.span`
	color: red;
	margin-top: 2px;
	font-size: 12px;
`;
