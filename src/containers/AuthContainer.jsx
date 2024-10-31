import React, { Component } from "react";
import Swal from "sweetalert2";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";
export default class AuthContainer extends Component {
  state = {
    isLogin: true,
    form: { username: "", password: "" },
    loading: false,
    error: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.setToken(token);
    }
  }

  toggleLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin,
      error: null,
    });
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);
    this.setState({
      loading: true,
      error: null,
    });
    if (this.state.isLogin) {
      login(this.state.form)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Login Berhasil",
            width: 300,
            heightAuto: false,
            showConfirmButton: false,
            timer: 1000,
          });
          localStorage.setItem("token", res.accessToken);
          this.props.setToken(res.accessToken);
          this.setState({
            error: null,
            form: { username: "", password: "" },
          });
        })
        .catch((err) => {
          this.setState({
            error: err.response.data.error,
          });
        })
        .finally(() => {
          this.setState({
            loading: false,
          });
        });
    } else {
      register(this.state.form)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Register berhasil",
            width: 300,
            heightAuto: false,
            showConfirmButton: false,
            timer: 1000,
          });
          this.setState({
            isLogin: true,
            error: null,
            form: { username: "", password: "" },
          });
        })
        .catch((err) => {
          this.setState({
            error: err.response.data.error,
          });
        })
        .finally(() => {
          this.setState({
            loading: false,
          });
        });
    }
  };

  render() {
    return (
      <div>
        <LoginModal
          form={this.state.form}
          loading={this.state.loading}
          error={this.state.error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isLogin={this.state.isLogin}
          toggleLogin={this.toggleLogin}
        />
      </div>
    );
  }
}
