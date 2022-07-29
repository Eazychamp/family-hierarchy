import { MenuItem, Select, TextField } from "@mui/material";
import { forwardRef } from "react";

const SelectComponent = forwardRef(
	(
		{ items = [], label = 'Somwthing',  value = "", onBlur = null, onChange = null, ...props },
		ref
	) => {
		return (
			<Select
				size='small'
				autoFocus
				ref={ref}
				value={value}
				label={label}
				onBlur={onBlur}
				onChange={onChange}
				{...props}
			>
				{items.map((item) => (
					<MenuItem key={item.label} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		);
	}
);

const TextComponent = forwardRef((props, ref) => {
    return (<TextField
        style={{ width: "100%" }}
        ref={ref}
        hiddenLabel
        autoFocus
        value={props.value}
        size='small'
        // onChange={}
        // onBlur={(e) => onBlur()}
        variant='outlined'
        {...props}
    />)
})

export { SelectComponent, TextComponent };
