from playwright.sync_api import sync_playwright, expect

def verify_kron0():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Go to the local dev server
            page.goto("http://localhost:5173")

            # Wait for the projects section to be visible
            # We look for the heading "Featured Projects"
            expect(page.get_by_role("heading", name="Featured Projects")).to_be_visible()

            # Look for the new project "Kron0"
            # It should be a heading or text
            kron0_heading = page.get_by_role("heading", name="Kron0")
            expect(kron0_heading).to_be_visible()

            # Scroll to the element to ensure it's in view for the screenshot
            kron0_heading.scroll_into_view_if_needed()

            # Take a screenshot of the projects section or just the page
            page.screenshot(path="verification/kron0_verification.png", full_page=True)
            print("Verification successful: Kron0 found.")

        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_kron0()
