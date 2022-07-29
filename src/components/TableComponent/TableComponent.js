import React, { Fragment, useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import {
	SelectComponent,
	TextComponent,
} from "../FormComponents/FormComponents";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SnackBarOpen } from "../../redux/action";

const COL_TEXT_CHAR = 20;

const hierarchyColor = {
	0: "trasparent",
	1: "#151B8D",
	2: "#FFA62F",
	3: "#F62217",
	4: "#4AA02C",
};

const genderArray = [
	{
		label: "Male",
		value: "M",
	},
	{
		label: "Female",
		value: "F",
	},
	{
		label: "Other",
		value: "O",
	},
];

const useStyles = makeStyles((theme) => ({
	nameContainer: {
		display: "flex",
		alignItems: "center",
		"& img": {
			marginRight: ".5rem",
		},
	},

	tableBorders: {
		border: "1px solid rgba(224, 224, 224, 1)",
	},

	table: {
		"& .MuiTableCell-root": {
			borderLeft: "1px solid rgba(224, 224, 224, 1)",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			overflow: "hidden",
			"&:first-child": {
				borderLeft: "none",
			},
		},
	},
}));

const RenderedComponent = ({ data, onChange, path, rowData }) => {
	// const dispatch = useDispatch();
	const classes = useStyles();

	const [isEditable, setIsEditable] = useState(false);
	const inputRef = useRef(null);
	const onFocus = () => {
		setIsEditable(true);
	};

	useEffect(() => {
		isEditable && inputRef.current.focus();
	}, [isEditable]);

	const onBlur = () => {
		setIsEditable(false);

		// dispatch(
		// 	SnackBarOpen('Changes have been saved!', 'success', 2000
		// 	)
		// );
	};

	return !isEditable ? (
		<TableCell
			onClick={() => (path === "parentsSiblings" ? null : onFocus())}
			className={classes.tableCell}
			style={{
				borderLeft:
					path === "parentsSiblings"
						? `${rowData.parentLevel * 0.5}rem solid ${
								hierarchyColor[rowData.parentLevel]
						  }`
						: "",
			}}
		>
			<span
				className={classes.nameContainer}
				style={{
					marginLeft:
						path === "parentsSiblings"
							? `${rowData.parentLevel * 0.5}rem`
							: null,
				}}
			>
				{path === "parentsSiblings" ? (
					<img
						height={30}
						width={30}
						src={rowData["image"]}
						alt={rowData.parentsSiblings}
					/>
				) : null}
				{rowData[path].toString().length < COL_TEXT_CHAR ? (
					rowData[path]
				) : (
					<Tooltip
						placement='bottom'
						arrow
						title={
							<h3
								style={{
									color: "white",
									cursor: "pointer",
								}}
							>
								{rowData[path]}
							</h3>
						}
					>
						<p>
							{rowData[path].toString().substring(0, COL_TEXT_CHAR) +
								"..."}
						</p>
					</Tooltip>
				)}
			</span>
		</TableCell>
	) : (
		<TableCell className={classes.tableCell}>
			{path === "gender" ? (
				<SelectComponent
					ref={inputRef}
					value={data}
					items={genderArray}
					onBlur={(e) => onBlur()}
					onChange={(e) => onChange(e.target.value, rowData, path)}
				/>
			) : path === "birth" || path === "death" ? (
				<TextComponent
					type='date'
					value={data}
					ref={inputRef}
					onBlur={(e) => onBlur()}
					onChange={(e) => onChange(e.target.value, rowData, path)}
				/>
			) : (
				<TextComponent
					value={data}
					ref={inputRef}
					onBlur={(e) => onBlur()}
					onChange={(e) => onChange(e.target.value, rowData, path)}
				/>
			)}
		</TableCell>
	);
};

const TableComponent = ({ headers, tableData, onChange }) => {
	const classes = useStyles();

	return (
		<TableContainer className={classes.tableBorders}>
			<Table
				className={classes.table}
				size='small'
				aria-label='a dense table'
			>
				<TableHead>
					<TableRow>
						{headers.map(({ path, name, width }) => (
							<TableCell key={path} width={`${width}%`}>
								{name}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{tableData.map((rowData) => (
						<TableRow key={rowData.id}>
							{headers.map(({ path }) => (
								<RenderedComponent
									key={path}
									rowData={rowData}
									path={path}
									data={rowData[path]}
									onChange={onChange}
								/>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableComponent;
