import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/LocalShipping';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/PeopleAlt';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import AccountBox from '@mui/icons-material/AccountBox';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import StorageIcon from '@mui/icons-material/Storage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TuneIcon from '@mui/icons-material/Tune';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const menuItems = [
  {
    heading: 'General',
    items: [
      {
        name: 'Planos',
        icon: BackupTableTwoToneIcon,
        link: '',
        items: [
          {
            name: 'Extended sidebar',
            link: '/extended-sidebar/dashboards',
            badge: 'v3.0',
            badgeTooltip: 'Added in version 3.0'
          },
          {
            name: 'Accent header',
            link: '/accent-header/dashboards',
            badge: '',
            badgeTooltip: 'Updated'
          },
          {
            name: 'Accent sidebar',
            link: '/accent-sidebar/dashboards'
          },
          {
            name: 'Boxed sidebar',
            link: '/boxed-sidebar/dashboards'
          },
          {
            name: 'Collapsed sidebar',
            link: '/collapsed-sidebar/dashboards'
          },
          {
            name: 'Bottom navigation',
            link: '/bottom-navigation/dashboards'
          },
          {
            name: 'Top navigation',
            link: '/top-navigation/dashboards'
          }
        ]
      },
      {
        name: 'Tableros',
        icon: SmartToyTwoToneIcon,
        link: '/extended-sidebar/dashboards',
        items: [
          {
            name: 'Analytics',
            link: 'dashboards/analytics'
          },
          {
            name: 'Fitness',
            link: 'dashboards/fitness'
          },
          {
            name: 'Learning',
            link: 'dashboards/learning'
          }
        ]
      },
      {
        name: 'Visualización de datos',
        icon: HealthAndSafetyTwoToneIcon,
        badge: '',
        badgeTooltip: 'Sipro contains over 250 data display blocks',
        link: '/extended-sidebar/blocks',
        items: [
          {
            name: 'Charts large',
            link: 'blocks/charts-large'
          },
          {
            name: 'Charts small',
            link: 'blocks/charts-small'
          },
          {
            name: 'Composed cards',
            link: 'blocks/composed-cards'
          },
          {
            name: 'Grids',
            link: 'blocks/grids'
          },
          {
            name: 'Icon cards',
            link: 'blocks/icon-cards'
          },
          {
            name: 'Image cards',
            link: 'blocks/image-cards'
          },
          {
            name: 'Lists large',
            link: 'blocks/lists-large'
          },
          {
            name: 'Lists small',
            link: 'blocks/lists-small'
          },
          {
            name: 'Navigation',
            link: 'blocks/navigation'
          },
          {
            name: 'Profile cards',
            link: 'blocks/profile-cards'
          },
          {
            name: 'Progress circular',
            link: 'blocks/progress-circular'
          },
          {
            name: 'Progress horizontal',
            link: 'blocks/progress-horizontal'
          },
          {
            name: 'Sparklines large',
            link: 'blocks/sparklines-large'
          },
          {
            name: 'Sparklines small',
            link: 'blocks/sparklines-small'
          },
          {
            name: 'Statistics',
            link: 'blocks/statistics'
          }
        ]
      },
      {
        name: 'Aplicaciones',
        icon: AnalyticsTwoToneIcon,
        link: '/extended-sidebar/applications',
        items: [
          {
            name: 'Calendario',
            link: 'applications/calendar'
          },
          {
            name: 'File Manager',
            link: 'applications/file-manager'
          },
          {
            name: 'Jobs Platform',
            link: 'applications/jobs-platform'
          },
          {
            name: 'Mailbox',
            link: 'applications/mailbox/inbox'
          },
          {
            name: 'Messenger',
            link: 'applications/messenger'
          },
          {
            name: 'Proyectos Board',
            link: 'applications/projects-board'
          }
        ]
      }
    ]
  },
  {
    heading: 'Management',
    items: [
      {
        name: 'Comercial',
        icon: MonetizationOnIcon,
        link: '/extended-sidebar/management/oport',
        items: [
          {
            name: ' Maquinas en Alquiler',
            icon: TuneIcon,
            link: 'management/comer/maquiAlquiler'
          },
          {
            name: 'Contactos',
            icon: PhoneForwardedIcon,
            link: 'management/comer/contactos'
          },
          {
            name: 'Reactivación',
            icon: LocalActivityIcon,
            link: 'management/comer/reactivacion'
          },
          {
            name: 'Origen',
            icon: TripOriginIcon,
            link: 'management/comer/origen'
          },
          {
            name: 'Funnel',
            icon: AssignmentTurnedInIcon,
            link: 'management/comer/fuel'
          },
          {
            name: 'Oportunidades',
            icon: EmojiEventsIcon,
            link: 'management/comer/oport'
          },
          {
            name: 'Cotizaciones',
            icon: LocalAtmIcon,
            link: 'management/comer/cotiza'
          },
          {
            name: 'Negocios',
            icon: AttachMoneyIcon,
            link: 'management/comer/negocios'
          },
          {
            name: 'Clientes',
            icon: StorageIcon,
            link: 'management/comer/cliente'
          },
          {
            name: 'Dashboard',
            icon: DashboardIcon,
            link: 'management/comer/Dashboard'
          },
          {
            name: 'Consltar Comercial',
            icon: ManageAccountsIcon,
            link: 'management/comer/ConsultComers'
          },
          {
            name: 'licitacion',
            icon: OfflinePinIcon,
            link: 'management/comer/licitacion'
          },
          {
            name: 'Leads',
            icon:LocalLibraryIcon,
            items: [
              {
                name: 'Usuario',
                icon: TrackChangesIcon,
                link: 'management/comer/usuarioLeads'
              },
              {
                name: 'Leads Ingeal',
                icon: TrackChangesIcon,
                link: 'management/comer/oport'
              }
            ]
          },
        ]
      },
      {
        name: 'Logistica',
        icon: AssignmentIndTwoToneIcon,
        link: '/extended-sidebar/management/users',
        items: [
          {
            name: 'Usuario',
            icon: AccountCircleIcon,
            link: 'management/users/list'
          }
        ]
      },
      {
        name: 'Proyectos',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/management/projects/list'
      },
      {
        name: 'Solicitudes',
        icon: StorefrontTwoToneIcon,
        link: '/extended-sidebar/management/commerce',
        items: [
          {
            name: 'Permiso y Vacaciones',
            icon: AccountBox,
            link: 'management/commerce/products/list'
          },
          {
            name: 'Shop',
            link: 'management/commerce/shop'
          },
          {
            name: 'Details',
            link: 'management/commerce/products/single/1'
          },
          {
            name: 'Create',
            link: 'management/commerce/products/create'
          }
        ]
      },
      {
        name: 'Invoices',
        icon: ReceiptTwoToneIcon,
        link: '/extended-sidebar/management/invoices',
        items: [
          {
            name: 'List',
            link: 'management/invoices/list'
          },
          {
            name: 'Details',
            link: 'management/invoices/single'
          }
        ]
      }
    ]
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        name: 'Auth Pages',
        icon: VpnKeyTwoToneIcon,
        link: '/auth',
        items: [
          {
            name: 'Login',
            items: [
              {
                name: 'Basic',
                link: '/account/login-basic'
              },
              {
                name: 'Cover',
                link: '/account/login-cover'
              }
            ]
          },
          {
            name: 'Register',
            items: [
              {
                name: 'Basic',
                link: '/account/register-basic'
              },
              {
                name: 'Cover',
                link: '/account/register-cover'
              },
              {
                name: 'Wizard',
                link: '/account/register-wizard'
              }
            ]
          },
          {
            name: 'Recover Password',
            link: '/account/recover-password'
          }
        ]
      },
    ]
  },
];

export default menuItems;
