import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { AuthContext } from "../Auth/auth-context";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import axios from "axios";
import MenuList from "@material-ui/core/MenuList";
import {
	createTheme,
	IconButton,
	MuiThemeProvider,
	Typography,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import DatePicker from "react-datepicker";
import "./navbar.css";

export default function NavBar({ disconnectUser }) {
	const auth = useContext(AuthContext);
	let history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const [openDrawer, setOpen] = React.useState(false);

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const LogoutClickHandler = (event) => {
		auth.logout();
		if (disconnectUser) {
			disconnectUser();
		}
		openDrawer && handleDrawerClose();
		history.push("/");
	};

	return (
		<AppBar className='navbar' position='static'>
			<Toolbar>
				<NavLink
					to='/'
					style={{ textDecoration: "none", color: "black", fontSize: "28px" }}
				>
					Flapped
				</NavLink>
				<Button
					component={NavLink}
					className='nav-link'
					style={{ marginLeft: "auto", color: "black" }}
					exact
					// activeStyle={styles}
					to={"/chat"}
				>
					Chat
				</Button>
				<div className='nav-links'>
					<div className='body-container'>
						<IconButton onClick={handleMenu}>
							<AccountCircle />
						</IconButton>
						<Popper
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							transition
							disablePortal
							placement='bottom'
							style={{
								position: "relative",
								zIndex: "3",
								color: "black",
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList autoFocusItem={Boolean(open)} id='menu-appbar'>
										<MenuItem
											component={NavLink}
											to='/'
											onClick={() => {
												LogoutClickHandler();
												handleClose();
											}}
											style={{ position: "relative", zIndex: "3" }}
										>
											Logout
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Popper>
					</div>
				</div>
			</Toolbar>
		</AppBar>
	);
}
