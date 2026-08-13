MHAC DELIVERY FULL PACKAGE
============================

Included:
- customer/  Customer ordering app (PWA-ready)
- admin/     Admin dashboard: view orders, confirm, assign rider, update status
- rider/     Rider dashboard: assigned orders only, update ON THE WAY / DELIVERED
- shared/    Shared CSS/data
- assets/    MHAC logo + self-contained placeholder food images

TESTING (LOCAL)
1. Extract the ZIP.
2. Serve the package folder with any static web server (GitHub Pages works).
3. Open customer/index.html.
4. Tap Jollibee -> Chickenjoy -> product + -> choose add-on -> cart -> checkout.
5. Open admin/index.html and refresh: the test order is visible in the same browser/local mode.
6. Assign Rider 1.
7. Open rider/index.html and refresh: only assigned orders are shown.
8. Change status to ON THE WAY then DELIVERED.

IMPORTANT ONLINE MODE
This package is fully functional for local browser testing using localStorage. For REAL multi-device online orders (customer phone -> admin phone -> rider phone), connect Firebase Firestore/Auth and replace the localStorage data layer with Firebase. The current package intentionally does not invent your Firebase project credentials.

PWA INSTALL
- Customer, Admin, and Rider each have a manifest.
- On Android Chrome, open the app URL and use browser menu -> Install app / Add to Home screen.
- This produces installable web apps.
- A true APK/AAB can be produced later with Capacitor once the Firebase project and production URLs are finalized.

RATE LOGIC
- First 1 km = P40
- Each succeeding km = +P10
- Maximum 2 stores
- Second store = +P5
- Service fee = 10% of food subtotal
- Grand total = Food Order + Service Fee + Delivery Fee + Additional Store Fee

NOTE
Food images in this test package are placeholders based on the supplied MHAC screenshot logo. Send the actual menu/product photos and we can replace them one-by-one in the final production menu.
