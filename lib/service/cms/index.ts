import BlogPostService from './BlogPostService';
import CategoryService from './CategoryService';
import EventService from './EventService';
import ExperienceService from './ExperienceService';
import PageService from './PageService';
import PostService from './PostService';
import ProjectService from './ProjectService';
import SkillService from './SkillService';

// SERVICE CONTAINERS
export const categoryService = new CategoryService();
export const projectService = new ProjectService();
export const blogPostService = new BlogPostService();
export const experienceService = new ExperienceService();
export const eventService = new EventService();
export const pageService = new PageService();
export const postService = new PostService();
export const skillService = new SkillService();
