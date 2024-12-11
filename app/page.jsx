import { getSession } from "@auth0/nextjs-auth0"
import { ModeToggle } from "@/components/ThemeToggleButton"

export default async function Page() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-semibold mb-4 text-foreground">Welcome to Notes App</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your personal space for organizing thoughts and ideas
          </p>
        </div>

        <div className="flex gap-4">
          {(await getSession())?.user ? (
            <>
              <a
                href="/api/auth/logout"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors duration-200 shadow-md"
              >
                Log Out
              </a>
              <a
                href="/profile"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors duration-200 shadow-md"
              >
                Profile
              </a>
            </>
          ) : (
            <a
              href="/api/auth/login"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors duration-200 shadow-md"
            >
              Log In
            </a>
          )}
        </div>
      </div>
    </main>
  )
}