import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Register from '../pages/Register';
import AccountPage from '../pages/AccountPage/AccountPage';
import Projects from '../pages/Projects';
import ProjectPage from '../pages/ProjectPage';
import UserPage from '../pages/admin/UsersPage';
import NotFoundPage from '../pages/NotFoundPage';
import Monitorias from '../pages/Monitorias';
import EscuelasDeFormacion from '../pages/EscuelasDeFormacion';
import AtencionMedica from '../pages/AtencionMedica';
import SeguimientoTAE from '../pages/SeguimientoTAE';
import PrivateRouter from './PrivateRouter';
import AtencionPsicologica from '../pages/AtencionPsciologica';
import PublicRouter from './PublicRouter';
import roles from '../helpers/roles';
import routes from '../helpers/routes';

export default function AppRouter() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path={routes.home} element={<PublicRouter element={<HomePage />} />} />
            <Route path={routes.login} element={<PublicRouter element={<LoginPage />} />} />
            <Route path={routes.register} element={<PublicRouter element={<Register />} />} />

            {/* Private Routes */}
            <Route path={routes.account} element={<PrivateRouter element={<AccountPage />} />} />
            <Route path={routes.projects} element={<PrivateRouter element={<Projects />} />} />
            <Route path={routes.monitorias} element={<PrivateRouter element={<Monitorias />} />} />
            <Route path={routes.escuelas_de_formacion} element={<PrivateRouter element={<EscuelasDeFormacion />} />} />
            <Route path={routes.atencion_medica} element={<PrivateRouter element={<AtencionMedica />} />} />
            <Route path={routes.atencion_psicologica} element={<PrivateRouter element={<AtencionPsicologica />} />} />
            <Route path={routes.seguimiento_tae} element={<PrivateRouter element={<SeguimientoTAE />} />} />
            <Route path={routes.project()} element={<PrivateRouter element={<ProjectPage />} />} />
            <Route path={routes.admin.users} element={<PrivateRouter rolesAllowed={[roles.admin]} element={<UserPage />} />} />
            
            {/* Not Found Route */}
            <Route path="*" element={<PrivateRouter element={<NotFoundPage />} />} />
        </Routes>
    );
}
