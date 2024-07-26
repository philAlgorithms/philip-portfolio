import { contactAxiosClient } from '../axios/axios';
import ContactService from './ContactService';
import QueryService from './QueryService';

// SERVICE CONTAINERS
export const queryService = new QueryService(contactAxiosClient);
export const contactService = new ContactService(queryService);
