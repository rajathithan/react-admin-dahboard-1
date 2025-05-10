import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    );
}

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSelected, setIsSelected] = useState("Dashboard");

return (
    <Box>
        <Sidebar
            collapsed={isCollapsed}
            backgroundColor={colors.primary[400]}
            style={{
                height: "100vh",
                position: "relative",
                top: 0,
                left: 0,
                width: isCollapsed ? "80px" : "300px", // Adjust width to accommodate longer labels
            }}
            transitionDuration={300}
            transitionTimingFunction="ease-in-out"
        >           
            <Menu 
            iconShape="square" 
            style={{ height: "100%" }}
            menuItemStyles={{
                button: {
                    "&:hover": {
                        backgroundColor: colors.blueAccent[400],
                    },
                    "&:focus": {
                        backgroundColor: colors.blueAccent[600],
                    },
                    "&:active": {
                        backgroundColor: colors.blueAccent[500],
                    },              
                    "&:selected": {
                        backgroundColor: colors.primary[400],
                    },
                },  
                label: {    
                    whiteSpace: "nowrap", // Prevent text wrapping
                    overflow: "hidden", // Ensure text doesn't overflow visibly
                    textOverflow: "ellipsis", // Add ellipsis if text overflows
                },
            }}>
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
                >
                    {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}>
                                ADMIN
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>
                { !isCollapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={`../../assets/user.png`}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                            />
                        </Box>
                        <Box textAlign="center">
                            <Typography
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                            >
                                Admin Name
                            </Typography>
                            <Typography variant="h5" color={colors.greenAccent[500]}>
                                VP Fancy Admin
                            </Typography>
                        </Box>
                    </Box>
                )}

                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}                    
                    />
                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        Data
                    </Typography>
                    <Item
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}                    
                    />
                    <Item
                        title="Contacts Information"
                        to="/contacts"
                        icon={<ContactsOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}
                    />
                    <Item
                        title="Invoices Balances"
                        to="/invoices"
                        icon={<ReceiptOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}
                    />
                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        Pages
                    </Typography>
                    <Item
                        title="Profile Form"
                        to="/form"
                        icon={<PersonOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}
                    />
                    <Item
                        title="Calendar"
                        to="/calendar"
                        icon={<CalendarTodayOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}
                    />
                    <Item
                        title="FAQ Page"
                        to="/faq"
                        icon={<HelpOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}
                    />
                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        Charts
                    </Typography>
                    <Item
                        title="Bar Chart"
                        to="/bar"
                        icon={<BarChartOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}
                    />
                    <Item
                        title="Pie Chart"
                        to="/pie"
                        icon={<PieChartOutlineOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}
                    />
                    <Item
                        title="Line Chart"
                        to="/line"
                        icon={<TimelineOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}
                    />  
                    <Item
                        title="Geography Chart"
                        to="/geography"
                        icon={<MapOutlinedIcon />}
                        selected={isSelected}
                        setSelected={setIsSelected}
                    />  
                </Box>    
            </Menu>
        </Sidebar>
    </Box>
);
};

export default SideBar;
