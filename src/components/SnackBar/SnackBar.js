import { IconButton, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import InfoIcon from "@mui/icons-material/Info";
import { SnackBarClose } from "../../redux/action";
import WarningIcon from "@mui/icons-material/Warning";
import ReportOffIcon from "@mui/icons-material/ReportOff";

const useStyles = (props) =>
	makeStyles((theme) => ({
		root: {
			background: `${
				props == "info"
					? "#2196f3"
					: props === "warning"
					? "#ff980"
					: props === "error"
					? "#f44336"
					: "#4caf50"
			} !important`,
			fontSize: "18px",
			display: "flex",
			alignItems: "center",
		},
		marginRight: {
			marginRight: ".4rem",
		},
	}));

const AlertBox = ({ open = false, content = "", type = "info" }) => {
	const { root, marginRight } = useStyles(type)();
	const dispatch = useDispatch();

	const handleClose = () => {
		setTimeout(() => dispatch(SnackBarClose("")), 2000);
	};

	const messageType = () => {
		let snackContainer = null;
		switch (type) {
			case "success":
				snackContainer = (
					<>
						<CheckIcon color={"#fff"} className={marginRight} />
						{content}
					</>
				);
				break;
			case "info":
				snackContainer = (
					<>
						<InfoIcon color={"#fff"} />
						{content}
					</>
				);
				break;
			case "warning":
				snackContainer = (
					<>
						<WarningIcon color={"#fff"} />
						{content}
					</>
				);
				break;
			case "error":
				snackContainer = (
					<>
						<ReportOffIcon color={"#fff"} />
						{content}
					</>
				);
				break;
			default:
				break;
		}
		return snackContainer;
	};

	return (
		<div>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={open}
				autoHideDuration={2000}
				ContentProps={{
					classes: {
						root: root,
					},
				}}
				onClose={handleClose}
				message={messageType()}
				action={
					<React.Fragment>
						<IconButton
							size='small'
							aria-label='close'
							color='inherit'
							onClick={handleClose}
						>
							<CloseIcon fontSize='small' />
						</IconButton>
					</React.Fragment>
				}
			/>
		</div>
	);
};

export default AlertBox;
