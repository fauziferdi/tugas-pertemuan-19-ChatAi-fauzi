import React from "react";

export default function LoginModal({
  isLogin,
  toggleLogin,
  handleChange,
  handleSubmit,
  loading,
  error,
  form,
}) {
  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{isLogin ? "Login" : "Register"}</h5>
          </div>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={form.username}
                  required
                  disabled={loading}
                  minLength={6}
                  maxLength={30}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
              <button
                disabled={loading}
                className="btn btn-primary w-100 mt-2 fw-bold"
              >
                <i className="bi bi-shield-lock"></i>
                {isLogin ? " Login" : " Register"}
              </button>
              <button
                disabled={loading}
                onClick={toggleLogin}
                className="btn btn-link w-100 mt-3 text-decoration-none"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
