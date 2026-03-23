# Document Seva Kendra

## Current State
- Full-featured DSK website with hero, services, testimonials, client logos, and contact form.
- Backend stores contact form enquiries with name, email, phone, message, timestamp.
- No admin panel exists yet.

## Requested Changes (Diff)

### Add
- Admin panel page (route `/admin`) that displays all submitted enquiries in a table/card layout.
- Login protection for the admin panel using the authorization component (Internet Identity).
- Navigation link or button to access the admin panel.

### Modify
- Router to include the `/admin` route.

### Remove
- Nothing removed.

## Implementation Plan
1. Select `authorization` component for login-gated admin access.
2. Add `/admin` route in the frontend router.
3. Create `AdminPanel` page component that:
   - Shows a login prompt if user is not authenticated.
   - Fetches and displays all enquiries from `getAllEnquiries()` in a sortable table.
   - Shows name, email, phone, message, and formatted date for each enquiry.
4. Add a small "Admin" link in the footer or nav.
