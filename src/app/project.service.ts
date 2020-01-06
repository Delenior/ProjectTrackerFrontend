import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './models/project';
import { Endpoints } from './util/endpoints';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {
  }


  getAllProjects(): Observable<Array<Project>> {
    return this.httpClient.get<Array<Project>>(Endpoints.GET_ALL);
  }


  delete(id: string): Observable<Array<Project>> {
    return this.httpClient.delete<Array<Project>>(Endpoints.DELETE_ONE + id);
  }


  updateProject(project: Project): Observable<Project> {
    return this.httpClient.put<Project>(Endpoints.UPDATE_ONE, project);
  }


  createProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(Endpoints.CREATE_ONE, project);
  }


  getProjectById(id: string): Observable<Project> {
    return this.httpClient.get<Project>(Endpoints.GET_ONE + id);
  }
}
