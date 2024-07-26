import QueryService from '../../QueryService';
import CurrencyService from './CurrencyService';
import EventAttendeeService from './EventAttendeeService';
import ExhibitorService from './ExhibitorService';
import ExhibitorWorkService from './ExhibitorWorkService';
import LoginService from './LoginService';
import PasswordService from './PasswordService';
import PermissionService from './PermissionService';
import PhotographyGenreService from './PhotographyGenreService';
import RegistrationService from './RegistrationService';
import RoleService from './RoleService';
import SanityDocumentService from './SanityDocumentService';
import StatService from './StatService';
import UserService from './UserService';

// SERVICES CONTAINER
const queryService = new QueryService();
export const currencyService = new CurrencyService(queryService);
export const eventAttendeeService = new EventAttendeeService(queryService);
export const exhibitorService = new ExhibitorService(queryService);
export const exhibitorWorkService = new ExhibitorWorkService(queryService);
export const roleService = new RoleService(queryService);
export const registrationService = new RegistrationService(queryService);
export const loginService = new LoginService(queryService);
export const passwordService = new PasswordService(queryService);
export const permissionService = new PermissionService(queryService);
export const photographyGenreService = new PhotographyGenreService(
  queryService
);
export const sanityDocumentService = new SanityDocumentService(queryService);
export const statService = new StatService(queryService);
export const userService = new UserService(queryService);
