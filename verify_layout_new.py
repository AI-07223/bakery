import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        # Launch browser
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Start a local static file server using python's http.server in a background process
        # For simplicity in this script, we'll assume we are serving dist on port 3000
        # In a real CI env, we might need to start the server.
        # Here we will try to use the `preview` command or just serve `dist`
        # Since we can't easily spawn a background process here that outlives this function cleanly without more code,
        # We will assume the user has run `npm run preview` or similar.
        # BUT, the sandbox tool `run_in_bash_session` allows background processes.
        # Let's try to serve the file directly via file:// protocol if possible, or just assume localhost:4173 (vite preview default)

        # Actually, let's just serve it locally in this script for a moment if we can, or rely on the agent to have started it.
        # To be robust, let's use the file protocol for the built 'dist/index.html'
        import os
        cwd = os.getcwd()
        file_url = f"file://{cwd}/dist/index.html"

        # Note: React Router might need a real server for pushState, but for the homepage (/) it should render initial state.
        # However, file:// often has CORS issues.
        # Better approach: The agent should have started a server.
        # Let's try to connect to localhost:4173 (default vite preview port)
        # If that fails, we fail.

        try:
             await page.goto("http://localhost:4173", timeout=5000)
        except:
             print("Could not connect to localhost:4173. Trying http://localhost:3000")
             try:
                await page.goto("http://localhost:3000", timeout=5000)
             except:
                print("Could not connect to localhost:3000 either.")
                await browser.close()
                return

        # 1. Desktop View (1280x800)
        await page.set_viewport_size({"width": 1280, "height": 800})
        await page.wait_for_timeout(2000) # Wait for animations/react hydration
        await page.screenshot(path="desktop_hero_verify.png")
        print("Captured desktop_hero_verify.png")

        # Scroll down
        await page.evaluate("window.scrollTo(0, 1000)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="desktop_scroll_verify.png")
        print("Captured desktop_scroll_verify.png")

        # 2. Mobile View (iPhone 12/13/14 width approx 390px)
        await page.set_viewport_size({"width": 390, "height": 844})
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="mobile_home_verify.png")
        print("Captured mobile_home_verify.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
