import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormCheckboxPropsTypes } from "./types";
import {
	Asterisk,
	CustomCheckbox,
	ErrorContainer,
	FormCheckboxContainer,
	Label,
	LabelContainer,
} from "./styles";

const FormCheckbox = ({
	name,
	label,
	asterisk,
	option,
}: FormCheckboxPropsTypes) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	const errorMessage = String(errors?.[name]?.message ?? "");
	return (
		<FormCheckboxContainer>
			<LabelContainer>
				{label && <Label>{label}</Label>}
				{asterisk && <Asterisk> * </Asterisk>}
			</LabelContainer>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<CustomCheckbox>
						<input
							type={"checkbox"}
							checked={value}
							onChange={onChange}
						/>
						{option.label}
					</CustomCheckbox>
				)}
			/>
			{errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>}
		</FormCheckboxContainer>
	);
};

export default FormCheckbox;
