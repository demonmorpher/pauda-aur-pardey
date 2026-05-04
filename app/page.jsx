export default function PardaAurPaudayWebsite() {
  const plants = [
    {
      title: "Indoor Greens",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80",
      text: "Bring calm and freshness into your home with carefully chosen indoor plants.",
    },
    {
      title: "Statement Corners",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
      text: "Style your favorite corners with lush green accents and natural textures.",
    },
  ];

  const curtains = [
    {
      title: "Soft Linen Drapes",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      text: "Elegant curtain styles that add warmth, privacy, and softness to every room.",
    },
    {
      title: "Modern Window Styling",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      text: "Designed to complement modern homes with graceful folds and refined finishes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f0e6] text-[#24170f]">
      <header className="sticky top-0 z-20 border-b border-[#d8c4a8]/60 bg-[#fffaf2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/Logo.jpeg" alt="Parda Aur Pauday logo" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Parda Aur Pauday</h1>
                <p className="text-sm text-[#6f5b45]">Curtains, plants, and beautiful home styling</p>
              </div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-semibold tracking-wide text-[#4f3a28] md:flex">
            <a href="#home" className="hover:text-neutral-600">Home</a>
            <a href="#plants" className="hover:text-neutral-600">Plants</a>
            <a href="#curtains" className="hover:text-neutral-600">Curtains</a>
            <a href="#origin" className="hover:text-neutral-600">Origin</a>
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/Cover Photo.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl items-center px-6 py-20">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/85 backdrop-blur">Perth Lifestyle Studio</p>
            <h2 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Privacy with Beauty.
            </h2>
            <p className="mt-6 max-w-xl text-xl leading-9 text-white/90">
              Parda Aur Pauday brings together graceful curtains, rare greenery, and Indian-inspired warmth for spaces that feel private, alive, and beautifully lived in.
            </p>
            <p className="mt-4 text-base font-medium italic text-white/85">
              it&apos;s not a paap if you do pap!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#d6a84f] px-7 py-4 text-sm font-bold text-[#24170f] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Start Styling Your Space
              </a>
              <a
                href="#origin"
                className="rounded-full border border-white/60 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Discover Our Story
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden max-w-xs rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur md:block">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">Signature</p>
            <p className="mt-3 text-2xl font-bold">Fabric. Foliage. Feeling.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#24170f] px-6 py-10 text-center text-white">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d6a84f]">Where fabric meets foliage</p>
        <h3 className="mx-auto mt-3 max-w-4xl text-3xl font-bold md:text-5xl">A home should soften light, hold privacy, and breathe life.</h3>
      </section>

      <section id="plants" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Plants</p>
          <h3 className="mt-2 text-3xl font-bold">Fresh greenery for every room</h3>
          <p className="mt-4 text-neutral-600">
            From compact indoor pots to leafy decor statements, our plant styling ideas help transform ordinary spaces into calming corners.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {plants.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="mt-3 text-neutral-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="curtains" className="bg-[#fffaf2] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Curtains</p>
            <h3 className="mt-2 text-3xl font-bold">Elegant curtains that frame your home</h3>
            <p className="mt-4 text-neutral-600">
              Explore soft textures, flowing fabrics, and timeless looks designed to bring beauty and comfort to your windows.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {curtains.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-3xl bg-neutral-50 shadow-sm ring-1 ring-neutral-200">
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="mt-3 text-neutral-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="origin" className="bg-[#efe1cf] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Origin Story</p>
            <h3 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">From embarrassment to inspiration</h3>
            <p className="mt-4 text-neutral-600 leading-8">
              A playful spark, a late-night conversation, and a belief that beautiful spaces can feel both private and alive.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1">
              <div className="mb-5 text-4xl">🏕️</div>
              <h4 className="text-xl font-semibold">The Camping Trip</h4>
              <p className="mt-3 text-neutral-600 leading-7">
                What started as a simple idea during a camping trip slowly turned into a bigger vision.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1">
              <div className="mb-5 text-4xl">✨</div>
              <h4 className="text-xl font-semibold">The Unexpected Spark</h4>
              <p className="mt-3 text-neutral-600 leading-7">
                An unexpected moment — sparked by a passing remark from a stranger — turned embarrassment into inspiration.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1">
              <div className="mb-5 text-4xl">💡</div>
              <h4 className="text-xl font-semibold">The Idea</h4>
              <p className="mt-3 text-neutral-600 leading-7">
                A late-night conversation became a belief: spaces can be shaped by fabric, greenery, privacy, and life.
              </p>
            </div>

            <div className="rounded-3xl bg-neutral-900 p-6 text-white shadow-sm transition hover:-translate-y-1">
              <div className="mb-5 text-4xl">🌿</div>
              <h4 className="text-xl font-semibold">The Brand</h4>
              <p className="mt-3 leading-7 text-white/80">
                That moment became Parda Aur Pauday — curtains, plants, and privacy with beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">About</p>
            <h3 className="mt-2 text-3xl font-bold">Where nature meets home decor</h3>
            <p className="mt-4 leading-8 text-neutral-600">
              Parda Aur Pauday is a concept for people who love homes that feel soft, natural, and welcoming. By combining plant styling with elegant curtain ideas, this brand celebrates comfort, beauty, and everyday living.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#24170f] p-10 text-white shadow-2xl">
            <p className="text-2xl font-semibold leading-10 text-white">
              "Thoughtful interiors are made of details — the way light falls through curtains, and the way greenery brings a room to life."
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#24170f] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Contact</p>
            <h3 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Let’s style your space beautifully</h3>
            <p className="mt-4 text-white/80">
              Reach out to learn more about plant styling, curtain inspiration, and creating a home that feels uniquely yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/90">
              <a href="mailto:hello@pardaaupauday.com" className="rounded-full bg-[#d6a84f] px-5 py-3 font-bold text-[#24170f]">Email Us</a>
              <span className="rounded-full border border-white/20 px-5 py-3">Instagram: @pardaaupauday</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
