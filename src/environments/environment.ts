// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_login: 'http://40.76.39.221:3000/signin',
  url_health: 'http://40.76.39.221:3000/health',
  url_roles: 'http://40.76.39.221:3000/roles',
  url_projects_by_users: 'http://40.76.39.221:3000/users/',
  url_projects: 'http://40.76.39.221:3000/projects/',
  url_task_by_projects: 'http://40.76.39.221:3000/user_projects/',
  url_task: 'http://40.76.39.221:3000/tasks/',
  url_user: 'http://40.76.39.221:3000/users/',
  url_concepts: 'http://40.76.39.221:3000/user_info_level_concepts/',
  url_register: 'http://40.76.39.221:3000/signup',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
