import React, { Component } from "react";
import Swal from "sweetalert2";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Navbar";
import { queryAI, logout } from "../utils/api";

export default class ChatContainer extends Component {
  state = {
    messages: [],
    loading: false,
    error: null,
    query: "",
  };

  handleQuery = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({ loading: true, error: null });

    queryAI({ query }, this.props.token)
      .then((res) => {
        this.setState({
          messages: [...this.state.messages, { query, data: res }],
          query: "",
        });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleLogout = () => {
    try {
      logout(this.props.token);
      localStorage.removeItem("token");
      this.props.setToken(null);
      Swal.fire({
        icon: "success",
        title: "Logout berhasil",
        width: 300,
        heightAuto: false,
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Logout gagal!",
        width: 300,
        heightAuto: false,
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar onLogout={this.handleLogout} />
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.data.data}
            query={message.query}
          />
        ))}
        <ChatInput
          onSubmit={this.handleQuery}
          loading={this.state.loading}
          onChange={this.handleChange}
          query={this.state.query}
        />
      </div>
    );
  }
}
