export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-field px-6">
      <form className="w-full max-w-md rounded-lg border border-line bg-white p-6">
        <h1 className="text-2xl font-semibold">Log in</h1>
        <div className="mt-6 grid gap-4">
          <input className="rounded-md border border-line px-3 py-3" placeholder="Email" />
          <input
            className="rounded-md border border-line px-3 py-3"
            placeholder="Password"
            type="password"
          />
          <button className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white">
            Continue
          </button>
        </div>
      </form>
    </main>
  );
}
