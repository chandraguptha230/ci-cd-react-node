
import CottageIcon from '@mui/icons-material/Cottage';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SummarizeIcon from '@mui/icons-material/Summarize';

import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import { mdiAccountTie } from '@mdi/js';
import { mdiMonitorDashboard } from '@mdi/js';
import { mdiClipboardListOutline } from '@mdi/js';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import Dashboard  from "./DashBoard"
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import FormatAlignCenterRoundedIcon from '@mui/icons-material/FormatAlignCenterRounded';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <DashboardCustomizeRoundedIcon />,
        label: 'Dashboard',
        route: 'dashboard',
    },
    {
        id: 1,
        icon: <FormatAlignCenterRoundedIcon />,
        label: 'Menu List',
        route: 'menulist',
    },
    {
        id: 2,
        icon: <FactCheckRoundedIcon />,
        label: 'Daily Inventory',
        route: 'inventory',
    },
    {
        id: 3,
        icon: <ManageAccountsOutlinedIcon />,
        label: 'User Management',
        route: 'UserManagement',
    },
    {
        id: 4,
        icon: <ReceiptLongRoundedIcon />,
        label: 'Generate Reports',
        route: 'reports',
    },
]