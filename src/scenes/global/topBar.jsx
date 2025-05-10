import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext , tokens} from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";



const TopBar  = () => { 
    const theme = useTheme();   
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return (
            <Box display="flex" justifyContent="space-between" p={2} position={"relative"} top={0} backgroundColor={colors.primary[400]} zIndex={1}>               
                <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Box display="flex">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlinedIcon sx={{ fontSize: 25 }} />
                        ) : (
                            <LightModeOutlinedIcon sx={{ fontSize: 25 }} />
                        )}
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneOutlinedIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton>
                        <PersonOutlinedIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                </Box>
            </Box>

        );
    }
    
export default TopBar;