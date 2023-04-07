Readme file
Introduction
This file README.txt contains the purpose of code, different parts of the code, references and citations used and code structures for each part of the code.
Code Structure
The code is written in HTML and the website presents a portfolio of myself and my love for Aerospace and Artificial Intelligence. The code has the following elements:-
* Meta tag that places the character set to UTF-8
* Title tag which names the webpage as index
* Link tag which sets the favicon for the webpage
* A header tag that places the heading of the page as MY PERSONAL BOLG
* A navigation bar that links the subparts of the webpage: index, introduction, education,  experience, hobbies and interests, achievements and contact me.
* Division tags to divide and refer the parts of the webpage to the navigation bar
* <hr> tags to create partitions between each part of the webpage
*  Header tag(h2) to set the heading for each part of the webpage( index, introduction, education,  experience, hobbies and interests, achievements and contact me.
* Unordered list under INDEX heading in order to display the index
* Image tag to display different images on the webpage
* Paragraph tag to display the writeup content of the website
* Nested lists for displaying educational accomplishments, hobbies(unordered inside ordered), and achievements.
* Anchor tag to link to other webpages internally and externally.
* <center> tag used for aligning the text to the centre of the webpage
* Video tag to display a video present in the assignment 1 folder.
* Audio tag to display an audio clip present in the assignment 1 folder.
* Table tag to create a table to store contact information.
* Iframe tag used for displaying a video from youtube.
* <br> tag for breaking the line and starting the text from next line.
* <em> tag used for emphasising the text.
* <b> tag to bold the text required.

Description of Functioning

The main webpage is titled as index.html. This webpage serves as a portfolio for me and talks about my education, experience, achievemnets etc. The index.html webpage I slinked to two other webpages:-
* Aerospace.html
* Artificial_intelligence.html

Content of the Webpage
The index.html webpage serves as a portfolio for me and showcases my education, experience, hobbies and interests and achievements. It also displays a contact me section which provides my contact details. The aerospace webpage serves as an introduction to my feeling about aerospace and why I am interested in it. It also hosts an image and two videos related to aerospace.
The Artificial Intelligence webpage holds the information on my view on artificial intelligence and my liking towards it. It contains two images related to artificial intelligence. 

CSS functionality of the webpage :
The CSS code is used for styling a webpage. The following is a list of selectors and their functionality used in the code:

*Universal Selector (*): Sets the margin and padding for the entire document.

*multiple Selector for body, h1, h2: Sets the font style for the body and headings.

*Selector for h1: Sets the style for the header, including its background color, text color, and padding.

*Selector for nav: Sets the style for the navigation links, including their background color, border, padding, and margins.

*child Selector for nav > a: Sets the style for the links inside the navigation, including their color, margins, padding, border, and background color on hover.

*multiple Selector for #index, #education, #experience, #hobbies, #achieve, #introduction, #image: Sets the style for the content, including the margins, padding, border, background color, and display type.

*Selector for #image: Sets the style for the image, including its display type, margins, and width.

*child Selector for #education > ol, #experience > ol, #hobbies > ol: Sets the margins for the ordered lists inside education, experience, and hobbies.

*child Selector for #education > ol i, #experience > ol i, #hobbies > ol i: Sets the font style for the list items inside the ordered lists.

*Selector for #hobbies a: Sets the style for the links inside the hobbies section, including their color, font weight, and text decoration.

*child Selector for #hobbies > ul: Sets the style for the unordered list inside the hobbies section, including its list style type.

*child Selector for #hobbies > ul li: Sets the margins for the list items inside the unordered list in the hobbies section.

*pseudo element Selector for #hobbies ul > li::first-line: Sets the font weight for the first line of the list items inside the unordered list in the hobbies section.

*child Selector for #hobbies ul > li > ul: Sets the margins for the nested unordered list inside the hobbies section.

*Selector for footer: Sets the style for the footer, including its background color, text color, and alignment.

*Selector for form: Sets the style for the form, including its width and margins.

*Selector for label: Sets the style for the label inside the form, including its display type and margin.

*attribute Selector for input[type="text"], input[type="email"], textarea: Sets the style for the text inputs and text area inside the form, including their width, padding, margins, and border.

*attribute Selector for input[type="submit"]: Sets the style for the submit button inside the form, including its background color, text color, padding, border, border-radius, cursor, and float.

*attribute Selector for input[type="submit"]:hover: Sets the style for the submit button on hover.

*attribute Selector for input[type="submit"]:active: Sets the style for the submit button when active.

*Selector for textarea: Sets the style for the text area inside the form, including its height.

*Selector for table: Sets the style for the table, including its border color, width, maximum width, margins, and font size.

*child Selector for table td > a: Sets the style for the links inside the table, including their color, font weight, and text decoration.

*sibling Selector for #introduction img ~ p: Sets the style for the paragraphs following the image inside the introduction section, including their color.

*adjecent sibling Selector for #hobbies h2 + p: Sets the style for the paragraphs following the heading inside the


References
* aeroicon.jpg: source: https://www.istockphoto.com/illustrations/plane-in-sky 
* aeroplane.jpg: source:  (Hexagon AB 2023) https://hexagon.com/industries/aerospace 
* ammaar.png: source: (myself)
* artificial.jpg: source: (Copyright 2021 | Helsinki Training Center) https://helsinkitrainingcenter.com/course/artificial-intelligence/ 
* audio1.mp3: source: The Chainsmokers and Coldplay- I Want Something Just Like This-Lyric by The Chainsmokers- youtube video(Feb22, 2017): https://www.youtube.com/watch?v=FM7MFYoylVs 
* book1.jpg: source(n.d.) https://www.amazon.com/Percy-Jackson-Greek-Heroes-Jacksons/dp/0141355425 
* book2.jpg: source:(n.d.) https://www.amazon.ca/Dune-Frank-Herbert-ebook/dp/B00B7NPRY8 
* book3.jpg: source(n.d) https://www.amazon.ca/Alignment-Problem-Machine-Learning-Values/dp/0393635821 
* image1.jpg: source:(myself)
* intelligence.jpg: source: AI is veering into proxy discrimination which bodes for insidious and        challenging times. GETTY (Lance Eliot Contributor Dr. Lance B. Eliot is a world-renowned expert on Artificial Intelligence (AI) and Machine Learning (ML), Apr 8, 2022,11:30am EDT). https://www.forbes.com/sites/lanceeliot/2022/04/08/insidious-ai-based-proxy-discrimination-against-humans-is-dauntingly-vexing-for-ai-ethics-which-can-occur-even-in-the-case-of-autonomous-ai-self-driving-cars/?sh=13e855876b7b 
* photo1.jpeg: source(myself)
* photo2.jpeg: source:(myself)
* robot.jpg: source: (The Impacts of AI on UXUI Design by Thomas Cree, Jan 12) https://uxplanet.org/the-impacts-of-ai-on-uxui-design-f243adae152b 
* video/video1.mp4: source: (Why Global Aerospace Companies Choose Canada: Focus on Boeing by Invest in Canada, July 20,2020) https://youtu.be/uR6sXt53DFI 
* Amazon.(n.d.).Amazon https://www.amazon.ca/ 
* LinkdIn.(n.d.)LinkdIn https://www.linkedin.com/ 
*  (How AI can save humanity| Kai-Fu Lee by TED, Aug 27, 2018) https://www.youtube.com/embed/ajGgd9Ld-Wc 
