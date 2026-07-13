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

4. When I opened the page directly from my laptop instead of from the sensor, the Console tab in DevTools filled up with red errors. The concept of this page being the client side then sticked with me. It is built to ask the sensor's chip (the server) for everything it shows. I noticed that the labels "Device Name:" and "Firmware:" are written into the HTML, but the value right next to each one is just an empty <span> with an id or data attribute and nothing inside it - <span data-hostname></span> and <span id='firmware-version'></span>. I figured out that the page does not know those values on its own, so it has to ask the chip and fill them in once the chip responds.
  
