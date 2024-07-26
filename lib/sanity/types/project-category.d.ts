import { IProject } from './project';

export interface IProjectCategory {
  _id: string;
  name: string;
  key: string;
  projects: IProject[];
}

export interface IProjectCategoryWithoutProjects
  extends Omit<IProjectCategory, 'projects'> {}
