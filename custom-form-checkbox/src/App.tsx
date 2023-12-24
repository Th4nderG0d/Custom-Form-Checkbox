import React from "react";

import FormCheckbox from "./components/FormCheckbox";
import { FormProvider, useForm } from "react-hook-form";

function App() {
	const methods = useForm({
		defaultValues: { customCheckbox: false },
	});

	const option = { value: false, label: "Option 1" };
	return (
		<FormProvider {...methods}>
			<FormCheckbox
				name={"customCheckbox"}
				label={"Custom Checkbox"}
				option={option}
				asterisk
			/>
		</FormProvider>
	);
}

export default App;
