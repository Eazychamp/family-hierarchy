import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import TableComponent from "./components/TableComponent/TableComponent";
import { HEADER_DATA,  TABLE_DATA } from "./mockData";


const useStyles = makeStyles((theme) => ({
	containerHome: {
		display: "flex",
		justifyContent: "center",
	},
	containerTable: {
		width: "80vw",
	},
}));

const Home = () => {
	const classes = useStyles();
    const [ header, setHeader ] = useState(HEADER_DATA)
    const [ tableData, setTableData ] = useState(TABLE_DATA)

    const handleTableDataChange = (value, row, col) => {
        let newTableData = [...tableData]
        let currentIndex = newTableData.findIndex(rowItem => rowItem.id === row.id)
        newTableData[currentIndex][col] = value
        setTableData(newTableData)
    }

	return (
		<div className={classes.containerHome}>
			<div className={classes.containerTable}>
                <h3>Family members:</h3>
				<TableComponent headers={header} tableData={tableData} onChange={handleTableDataChange} />
			</div>
		</div>
	);
};

export default Home;
