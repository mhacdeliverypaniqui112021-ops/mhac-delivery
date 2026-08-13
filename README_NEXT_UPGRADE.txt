MHAC DELIVERY - CUSTOMER MENU FLOW NEXT UPGRADE

Version: Customer Menu Flow V3

CUSTOMER FLOW
1. Choose Store
2. Choose Menu Category
3. Choose Food
4. Product Details / Add-ons / Quantity
5. Add to Cart
6. Cart / Order Summary
7. Checkout / GPS / Delivery Fee

CHANGES
- Customer store screen kept clean.
- Clicking a store now opens CATEGORY LIST first instead of dumping all foods.
- Clicking a category opens the food list for that category.
- Food list has a clearer mobile ordering layout and + button.
- Product modal now supports quantity +/-, add-ons and live item total.
- Optional Food Image URL field added to Menu Manager.
- Existing maximum 2 stores + P5 second-store fee is preserved.
- Existing GPS/road-distance delivery fee flow is preserved.
- Existing Admin and Rider pages are included.

DEPLOY
Upload all files in this ZIP to the GitHub Pages repository. Replace the old files with these files. Keep firebase-config.js with your current Firebase configuration.

IMPORTANT
Menu data is stored in browser localStorage in the current customer prototype. Existing menu data should remain under MHAC_MENU_V8_5. If testing on a device that has old data, use the Menu Manager's test menu reset if needed.
