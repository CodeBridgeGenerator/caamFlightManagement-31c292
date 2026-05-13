import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import CaamFlightManagementSampleDPage from "./CaamFlightManagementSampleDPage";

const CaamFlightManagementSampleDProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <CaamFlightManagementSampleDPage />
    </ProjectLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(CaamFlightManagementSampleDProjectLayoutPage);