import { Injectable } from '@angular/core';
// import * as employeeList from './employee-list.json';
// import employeeList from '../../../../assets/employee-list.json';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn = false;
  constructor() {}

  isAuthenticated() {
    return this.isLoggedIn;
  }

  getEmployeeList() {
    return {
      list: [
        {
          id: 1,
          name: 'Appu',
          age: 30,
          gender: 'M',
          address: 'BR Hills Road, Nalluru,Hondarabalu',
        },

        {
          id: 2,
          name: 'Hemesh',
          age: 25,
          gender: 'M',
          address: 'Koramanagala , Bengaluru',
        },
      ],
    };
    // fetch('./employee-list.json')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }
}
