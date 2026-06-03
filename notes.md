Five things I noticed about how the page is built.

1. We can see html, css and js working together. The javascript files are kept seperate and accessed, whereas the CSS comes from three places:
   - one large <style> block in the <head> that acts as the app's main stylesheet and sets the overall design for the whole interface
   - inline style="..." attributes on individual elements for small one-off adjustments;
   - one external file, uPlot.min.css

2. Using the device toolbar in DevTools, I recognized the layout adjusts for different screens and clearly built mobile-first. 
The overall structure stays the same for every device: everything sits in a single narrow column inside one centered container stacked one
on top of another instead of placed beside each other. I interpreted these as the interface is designed mainly for smartphone users.

3. In elements section of DevTools, the branching has 6 main leafes inside the html body, which are:
- Device Information
- Network Manager
- Sensor Settings
- Data Streaming
- File Manager
- Controls
Every design decision - except general guidelines - are made inside these branches, which helps organization.
  
