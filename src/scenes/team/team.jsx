import { Box, Typography, useTheme} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from '../../components/Header';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", flex: 0.5},
        {field: "phone", headerName: "Phone Number", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box
                        flex="1"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            row.access === "admin"
                                ? colors.greenAccent[600]
                                : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {row.access === "admin" && (
                            <AdminPanelSettingsOutlinedIcon />
                        )}
                        {row.access === "manager" && (
                            <SecurityOutlinedIcon />
                        )}
                        {row.access === "user" && (
                            <LockOpenOutlinedIcon />
                        )}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {row.access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header title={"TEAM"} subtitle="Managing the Team Members" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[600],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                }}>
                <DataGrid rows={mockDataTeam} columns={columns}/>
            </Box>
        </Box>
    )

}

export default Team;
