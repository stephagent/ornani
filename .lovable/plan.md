

## Move the Hamburger Menu (3 Lines) Behind the Logo

**What's happening:** The hamburger menu icon (3 horizontal lines) is sitting to the right of the nav links and overlapping with the Village Properties logo, causing the "A" to get cut off.

**Fix:** Move the hamburger menu button to the left side of the navigation (or position it so it sits visually behind/below the main Ani Estate Group logo area) so it no longer conflicts with the VP logo.

### Changes

**File: `src/components/Navbar.tsx`**
- Move the hamburger menu button from the right side of the nav links to the left side of the navigation bar
- Position it using `absolute left-0` so it sits on the far left, away from the VP logo on the right
- This keeps the nav links centered and the VP logo on the right without overlap

