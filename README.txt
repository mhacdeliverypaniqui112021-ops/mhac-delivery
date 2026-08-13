MHAC DELIVERY V9 - FULL TEST PACKAGE
=========================================
IMPORTANT STRUCTURE
- index.html = CUSTOMER APP (root)
- admin/index.html = ADMIN APP
- rider/index.html = RIDER APP
- shared/style.css + shared/data.js
- assets/ = logo/menu images

WHY V9
The previous package used customer/index.html. If the ZIP was uploaded with a different folder level, the Rider page could load without its CSS/assets. V9 keeps the Customer App at the repository root and uses clean relative paths for Admin/Rider.

TEST FLOW
1. Upload the CONTENTS of this ZIP to the root of the GitHub Pages repository.
2. Open /mhac-delivery/
3. Tap Jollibee -> Chickenjoy -> +.
4. Choose the drink/add-on.
5. Add items and CHECKOUT.
6. Open /mhac-delivery/admin/
7. Confirm and assign Rider 1.
8. Open /mhac-delivery/rider/
9. Refresh. Only assigned orders appear.
10. Tap ON THE WAY then DELIVERED.

LOCAL TEST LIMITATION
This version uses browser localStorage. Customer/Admin/Rider can share the same test order when opened on the SAME browser/device/origin. It is NOT yet a real multi-device online database.

NEXT PRODUCTION STEP
Connect Firebase Firestore/Auth so Customer phone -> Admin phone -> assigned Rider phone works online in real time. Do not replace the Firebase config until the project's actual credentials are available.
