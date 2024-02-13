import { useState } from 'react';
import { tokens } from '../../theme';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import {Link } from 'react-router-dom';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Slidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        // "& .ps-sidebar-container": {
        // backgroundColor: "transparent !important",
        // },
        "& .ps-menu-root": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-root:hover": {
          color: "#868dfb !important",
        },
        "& .ps-active": {
          color: "#6870fa !important",
        },
      }}>
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}>
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/flenex.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                  Flenex.io
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin DashBoard
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Link to="/">
              <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Link to="/team">
              <Item title="Team Members" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
            <Link to="/contacts">
              <Item title="Contact Info" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
            <Link to="/invoices">
              <Item title="Salaries" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Pages
            </Typography>
            <Link to="/form">
              <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
            <Link to="/calendar">
              <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
            <Link to="/faq">
              <Item title="FAQ" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Charts
            </Typography>
            <Link to="/bar">
              <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
            <Link to="/pie">
              <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
            <Link to="/line">
              <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
            <Link to="/geography">
              <Item title="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Link>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Slidebar