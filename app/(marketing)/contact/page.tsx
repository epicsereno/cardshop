export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <form className="mt-8 grid gap-4 rounded-lg border border-line bg-white p-6">
        <input className="rounded-md border border-line px-3 py-3" placeholder="Name" />
        <input className="rounded-md border border-line px-3 py-3" placeholder="Email" />
        <textarea
          className="min-h-36 rounded-md border border-line px-3 py-3"
          placeholder="Collection or order details"
        />
        <button className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white">
          Send inquiry
        </button>
      </form>
    </section>
  );
}
