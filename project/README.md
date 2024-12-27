
# Text-to-Binary Chrome Extension
_________________________________

# Cs50 Week 10: Final Project

* PROJECT TITLE: Student Video Demo: <URL https://www.youtube.com/watch?v=6zJvxZqhjFI >
----------------------------------------------------

#### Overview
_________________________________

* The Text-to-Binary Chrome Extension is a lightweight and user-friendly tool designed to convert plain text into binary code and vice versa. This extension allows users to quickly convert any input text to its binary representation with a single click. Whether you're a developer working on encoding techniques, a student learning about binary systems, or just someone curious about how computers process data, this extension makes it easy to experiment with text-to-binary conversions directly in your browser.

---------------------------------------------------------------

#### Features

- Simple Interface: The extension provides an intuitive and minimalistic interface where users can input any text and immediately see the binary equivalent.

- Quick Conversion: Instantly converts text into binary code and displays the result.

- Copy to Clipboard: Allows users to copy the binary output with one click, making it easy to paste into other applications.

- Binary to Text: Offers the ability to convert binary back to text, enabling a two-way conversion for better versatility.

- Offline Use: The extension operates fully offline, ensuring privacy and speed without needing an internet connection.

- Customizable Options: Users can configure the extension to convert text with or without spaces between binary values for better readability

---------------------------------------------------------------------

# Example of a Text-to-Binary Conversion
___________________________________________________

- Input Text: "Hello"

- Binary Output: 01001000 01100101 01101100 01101100 01101111

* The binary output uses 8 bits (a byte) to represent each character. The binary string for "Hello" in ASCII is:

- H = 01001000
- e = 01100101
- l = 01101100
- l = 01101100
- o = 01101111

* You can easily copy this binary representation and use it in your projects, studies, or just to explore how data is encoded digitally.

------------------------------------------------------

# Screenshot
_____________________________
- first Open text translator

![alt text](Screenshot/1.png)

- write anything do you want
and tap on translate to binary

![alt text](Screenshot/2.png)

- if you wanna to decode binary
tap on Decode Binary

![alt text](Screenshot/3.png)

- you can copy Output and decode
----------------------------------------------

#### How to Use the Extension
____________________________________

* Step 1:

1. Install the Extension: Download and install the Text-to-Binary Chrome Extension from the Chrome Web Store.

2. Open the Extension: Once installed, click the extension icon in your Chrome toolbar to open the text conversion interface.

3. Input Text: In the input box, type or paste any text you want to convert.

4. Convert to Binary: Click the "Convert" button. The text will be transformed into its binary equivalent, and the result will be displayed in the output box below.

5. Copy Binary: If you wish to use the binary code elsewhere, click the "Copy to Clipboard" button to instantly copy the output.

6. Convert Binary Back to Text: If you have a binary string that you want to translate back into readable text, simply paste it into the input box and click "Convert to Text." The extension will reverse the process and display the original text.

* Step 2:Access the Extension

Once installed, the extension icon will appear in your Chrome toolbar. If you don't see it immediately, you can pin it by clicking the puzzle piece icon (extensions menu) and selecting "Pin" next to Text-to-Binary.

* Step 3:Start Using

Once pinned, click the icon to open the extension's interface. From here, you can start converting text to binary right away.

-------------------------------------------------------------------------

# Key Files:
__________________________

- manifest.json: This file contains metadata about the extension, including the permissions it requires, background scripts, and popup page reference.

- translate.html: The HTML file that defines the extension's user interface.
- translate.js: JavaScript file that handles the logic for converting text to binary and back to text.
- translate.css: CSS file for styling the popup interface.

# Why Binary?
____________________________

* Binary is the foundation of computer systems. It’s how computers process and store information using only two states: 0 and 1. Every piece of text, image, or file you interact with on a computer is ultimately represented as binary. This extension helps you visualize this process, converting everyday text into binary form so you can better understand how computers interpret data.

* For example, the letter "A" in ASCII is represented as 65 in decimal, which is 01000001 in binary. By converting text into binary, you're seeing how each character gets stored and manipulated in digital systems.
------------------------------------------------------------------
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
