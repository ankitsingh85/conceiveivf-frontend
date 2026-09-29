import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "../../components/admin/AuthLayout";
import AdminLoader from "../../components/admin/AdminLoader";
import FormField from "../../components/admin/FormField";

export default function AdminSignup() {
  const { admin, loading, signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    signupKey: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (loading) return <AdminLoader />;
  if (admin) return <Navigate to="/admin/dashboard" replace />;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      await signup({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        signupKey: form.signupKey.trim(),
      });
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Create admin account"
      subtitle="You'll need the admin signup key to register."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/admin/login" className="font-semibold text-plum hover:text-plum-deep">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-100">
            {error}
          </div>
        )}

        <FormField
          id="name"
          name="name"
          label="Full name"
          autoComplete="name"
          placeholder="Dr. Jane Doe"
          value={form.name}
          onChange={handleChange}
          required
        />

        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="admin@conceiveivf.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <FormField
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={form.password}
          onChange={handleChange}
          required
        />

        <FormField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          type="password"
          autoComplete="new-password"
          placeholder="Re-enter your password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <FormField
          id="signupKey"
          name="signupKey"
          label="Admin signup key"
          type="password"
          autoComplete="off"
          placeholder="Provided by the site owner"
          hint="Only people with this key can create an admin account."
          value={form.signupKey}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-plum px-4 py-3 font-semibold text-white transition hover:bg-plum-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Creating account..." : "Create account"}
        </button>
      </form>
    </AuthLayout>
  );
}
