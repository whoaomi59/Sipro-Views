import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Management
//MY ROUTES
/****************************************************************************************** */
const Oport = Loader(lazy(() => import('src/content/management/comercial/oportunidades')));
const InfoCLien = Loader(lazy(() => import('src/content/management/comercial/oportunidades/infoClien')));
const Funel = Loader(lazy(() => import('src/content/management/comercial/funel')));
const Cotiza = Loader(lazy(() => import('src/content/management/comercial/cotizacion')));
const Cliente = Loader(lazy(() => import('src/content/management/comercial/cliente')));
const DetaClien = Loader(lazy(() => import('src/content/management/comercial/cliente/detalleCliente')));
const NuevaOporCLie = Loader(lazy(() => import('src/content/management/comercial/cliente/nuevaOport')));
const Dashboard = Loader(lazy(() => import('src/content/management/comercial/Dashboard')));
const ConsultComers = Loader(lazy(() => import('src/content/management/comercial/consulComer')));
const MaquiAlquiler = Loader(lazy(() => import('src/content/management/comercial/maquiAlquiler')));
const Contactos = Loader(lazy(() => import('src/content/management/comercial/contactos')));
const Reactivacion = Loader(lazy(() => import('src/content/management/comercial/reactivacion')));
const Origen = Loader(lazy(() => import('src/content/management/comercial/origen')));
const Negocios = Loader(lazy(() => import('src/content/management/comercial/negocios')));
const Licitacion = Loader(lazy(() => import('src/content/management/comercial/licitaciones')));
const UsuarioLeads = Loader(lazy(() => import('src/content/management/comercial/leads/usuario')));
const UsuarioListaLeads = Loader(lazy(() => import('src/content/management/comercial/leads/usuario/lista')));
/******************************************************************************************** */
const Users = Loader(lazy(() => import('src/content/management/Users')));
const SingleUser = Loader(lazy(() => import('src/content/management/Users/single')));
const Projects = Loader(lazy(() => import('src/content/management/Projects')));
const Invoices = Loader(lazy(() => import('src/content/management/Invoices')));
const SingleInvoice = Loader(
  lazy(() => import('src/content/management/Invoices/single'))
);
const Products = Loader(lazy(() => import('src/content/management/Products')));
const CreateProduct = Loader(
  lazy(() => import('src/content/management/Products/create'))
);
const SingleProduct = Loader(
  lazy(() => import('src/content/management/Products/single'))
);
const Shop = Loader(lazy(() => import('src/content/management/Products/shop')));

const managementRoutes = [
  {
    path: '',
    element: <Navigate to="comer" replace />
  },
  {
    path: 'comer',
    children: [
      {
        path: '',
        element: <Navigate to="oport" replace />
      },
      {
        path: 'oport',
        element: <Oport />
      },{
        path: 'oport',
        children: [
          {
            path: ':oporId',
            element: <InfoCLien/>
          }
        ]
      },
      {
        path: '',
        element: <Navigate to="infoCLie" replace />
      },
      {
        path: '',
        element: <Navigate to="fuel" replace />
      },
      {
        path: 'fuel',
        element: <Funel />
      },
      {
        path: '',
        element: <Navigate to="usuarioLeads" replace />
      },
      {
        path: 'usuarioLeads',
        element: <UsuarioLeads/>
      },
      {
        path: 'usuarioLeads',
        children: [
          {
            path: ':Id',
            element: <UsuarioListaLeads/>
          }
        ]
      },
      {
        path: '',
        element: <Navigate to="cotiza" replace />
      },
      {
        path: 'cotiza',
        element: <Cotiza />
      },
      {
        path: '',
        element: <Navigate to="cliente" replace />
      },
      {
        path: 'cliente',
        element: <Cliente />
      },
      {
        path: '',
        element: <Navigate to="nuevpoli" replace />
      },
      {
        path: 'nuevpoli',
        element: <NuevaOporCLie />
      },{
        path: 'nuevpoli',
        children: [
          {
            path: ':nuevpoliid',
            element: <NuevaOporCLie/>
          }
        ]
      },
      {
        path: '',
        element: <Navigate to="Dashboard" replace />
      },
      {
        path: 'Dashboard',
        element: <Dashboard />
      },
      {
        path: '',
        element: <Navigate to="ConsultComers" replace />
      },
      {
        path: 'ConsultComers',
        element: <ConsultComers />
      },
      {
        path: '',
        element: <Navigate to="maquiAlquiler" replace />
      },
      {
        path: 'maquiAlquiler',
        element: <MaquiAlquiler />
      },
      {
        path: '',
        element: <Navigate to="contactos" replace />
      },
      {
        path: 'contactos',
        element: <Contactos />
      },
      {
        path: '',
        element: <Navigate to="reactivacion" replace />
      },
      {
        path: 'reactivacion',
        element: <Reactivacion />
      },
      {
        path: '',
        element: <Origen to="origen" replace />
      },
      {
        path: 'origen',
        element: <Origen />
      },
      {
        path: '',
        element: <Negocios to="negocios" replace />
      },
      {
        path: 'negocios',
        element: <Negocios />
      },
      {
        path: '',
        element: <Licitacion to="licitacion" replace />
      },
      {
        path: 'licitacion',
        element: <Licitacion />
      },
    ]
  },
  {
    path: 'comer',
    children: [
      {
        path: ':userId',
        element: <DetaClien/>
      }
    ]
  },
  {
    path: '',
    element: <Navigate to="users" replace />
  },
  
  {
    path: 'users',
    children: [
      {
        path: '',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Users />
      },
      {
        path: 'single',
        children: [
          {
            path: ':userId',
            element: <SingleUser />
          }
        ]
      }
    ]
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Projects />
      }
    ]
  },
  {
    path: 'commerce',
    children: [
      {
        path: '',
        element: <Navigate to="shop" replace />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            element: <Navigate to="list" replace />
          },
          {
            path: 'list',
            element: <Products />
          },
          {
            path: 'create',
            element: <CreateProduct />
          },
          {
            path: 'single',
            children: [
              {
                path: ':productId',
                element: <SingleProduct />
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'invoices',
    children: [
      {
        path: '',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Invoices />
      },
      {
        path: 'single',
        children: [
          {
            path: '',
            element: <Navigate to="1" replace />
          },
          {
            path: ':invoiceId',
            element: <SingleInvoice />
          }
        ]
      }
    ]
  }
];

export default managementRoutes;
