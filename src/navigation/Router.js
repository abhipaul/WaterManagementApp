import React from 'react';
import { Stack, Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';
import EmployeeEdit from '../components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Login" initial/>
          </Scene>
          <Scene key="main">
            <Scene 
              rightTitle="Add"
              onRight={() => { Actions.employeecreate() }}
              key="EmployeeList" component={EmployeeList} title="Employee List" initial/>
            <Scene key="employeecreate" title= "Create Employee" component={EmployeeCreate} />
            <Scene key="employeeedit" title= "Edit Employee" component={EmployeeEdit} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;